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

@Component({
  
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  views: View[];
  user : User[];
  constructor(private service: ServiceService) {}

  /*recive view data */

  ngOnInit() {
    this.service.getView()
    .subscribe(view=>{
      this.views = view;
    });
  }
  getgraphics(view:View):void{
    localStorage.setItem("id",view.idView.toString());
    console.log("Click");
    console.log(view);
  }
  getUser(){
    this.service.getUserId(1)
    .subscribe(user=>{
      console.log(user);
    })
  }
  getViews(){
    this.service.getView()
    .subscribe(view=>{
        console.log(view);
    });
  }
  getView(){
    this.service.getViewId(1)
    .subscribe(view=>{
      console.log(view);
    });
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

    this.map.series.add(symbolSeries);
  }



}
