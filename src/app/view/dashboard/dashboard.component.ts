import { AfterViewInit, Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicHighDensityScatterSeriesComponent } from 'igniteui-angular-maps';
import {IgxSizeScaleComponent, IgxValueBrushScaleComponent} from 'igniteui-angular-charts';
import { IgxDataContext } from 'igniteui-angular-core';
import { IgxGeographicProportionalSymbolSeriesComponent } from 'igniteui-angular-maps';
import { MarkerType } from 'igniteui-angular-charts';
import WorldLocations from './WorldLocations';
import { View } from 'src/app/model/View';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/model/User';
import {MatDialog} from '@angular/material';
import { ViewdialogComponent } from 'src/app/UIelement/dialogs/viewdialog/viewdialog.component';
import { Dashboard } from 'src/app/model/Dashboard';


export interface DialogData {
  name: String;
}
@Component({
  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  views: View[];
  user : User[];
  newViewName: string;
  newview: View = new View();
  newDash: Dashboard = new Dashboard();

  constructor(private service: ServiceService, public dialog:MatDialog) {}

  /*recive view data */
  ngOnInit() {
    this.getViews();
  }

  getViews(){
    var idDash:number = +localStorage.getItem("id");
    console.log("El id del dash");
    console.log(idDash);
    this.newview.name = 'TheView';
    this.newview.idDashboard=idDash;
    this.newview.active = 1;
    this.newview.txDate = Date.now().toString();
    this.newview.txHost = 'localhost';
    this.newview.txUser = 'TheUser';
    console.log(this.newview);

    this.service.getViewbyDashboard(idDash)
    .subscribe(view=>{
      this.views=view;
      console.log(this.views);
    })

  }

  getgraphics(view:View):void{
    localStorage.setItem("id",view.idView.toString());
    console.log(view);

  }

  @ViewChild ('map')
  public map: IgxGeographicMapComponent;
  @ViewChild('template')
  public tooltipTemplate: TemplateRef<object>;
  public geoLocations;

  initOpts = {
    renderer: 'svg',
    width: 400,
    height: 250
  };

  options = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisTick: {
          alignWithLabel: true
        }
      }
    ],
    yAxis: [{
      type: 'value'
    }],
    series: [{
      name: 'Counters',
      type: 'bar',
      barWidth: '60%',
      data: [15, 52, 200, 334, 390, 330, 220]
    }]
  };

  public ngAfterViewInit(): void {
    const sds = new IgxShapeDataSource();
    sds.shapefileSource = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.shp";
    sds.databaseSource = "https://static.infragistics.com/xplatform/shapes/WorldTemperatures.dbf";
    sds.dataBind();
    sds.importCompleted.subscribe(() => this.onDataLoaded(sds, ""));
  }

  public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    const shapeRecords = sds.getPointData();
    console.log("loaded contour shapes: " + shapeRecords.length + " from /Shapes/WorldTemperatures.shp");

    const contourPoints: any[] = [];
    for (const record of shapeRecords) {
      const temp = record.fieldValues.Contour;
      // using only major contours (every 10th degrees Celsius)
      if (temp % 10 === 0 && temp >= 0) {
        for (const shapes of record.points) {
          for (let i = 0; i < shapes.length; i++) {
            if (i % 5 === 0) {
              const p = shapes[i];
              const item = { lon: p.x, lat: p.y, value: temp};
              contourPoints.push(item);
            }
          }
        }
      }
    }

    console.log("loaded contour points: " + contourPoints.length);
    this.addSeriesWith(WorldLocations.getAll());
  }

  public addSeriesWith(locations: any[]) {
    const sizeScale = new IgxSizeScaleComponent();
    sizeScale.minimumValue = 4;
    sizeScale.maximumValue = 60;

    const brushes = [
      "rgba(14, 194, 14, 0.4)",  // semi-transparent green
      "rgba(252, 170, 32, 0.4)", // semi-transparent orange
      "rgba(252, 32, 32, 0.4)"  // semi-transparent red
    ];

    const brushScale = new IgxValueBrushScaleComponent();
    brushScale.brushes = brushes;
    brushScale.minimumValue = 0;
    brushScale.maximumValue = 30;

    const symbolSeries = new IgxGeographicProportionalSymbolSeriesComponent();
    symbolSeries.dataSource = locations;
    symbolSeries.markerType = MarkerType.Circle;
    symbolSeries.radiusScale = sizeScale;
    symbolSeries.fillScale = brushScale;
    symbolSeries.fillMemberPath = "pop";
    symbolSeries.radiusMemberPath = "pop";
    symbolSeries.latitudeMemberPath = "lat";
    symbolSeries.longitudeMemberPath = "lon";
    symbolSeries.markerOutline = "rgba(0,0,0,0.3)";
    symbolSeries.tooltipTemplate = this.tooltipTemplate;

    //this.map.series.add(symbolSeries);
  }

  openDialog(){
    const dialogRef = this.dialog.open(ViewdialogComponent, {
      data: {name: this.newViewName}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.newViewName = result;
      console.log(this.newViewName);
      this.createView();
    });    
  }


  createView(){
    this.newview.name = this.newViewName;
    this.newview.txUser = 'El Johnn'
    this.newview.txHost = 'localhost';
    this.newview.txDate = Date.now().toString();
    this.newview.active = 1;
    this.newview.idDashboard = 1;

    console.log(this.newview);
    if (this.newViewName != null) {
      this.service.createView(this.newview)
      .subscribe(data => {
        console.log('Success');
      })
    }else{
      console.log('Fail');
    }


  }

}
