import { AfterViewInit, Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { BarChart } from 'src/app/model/charts/BarChart';
import {AttibuteGraphic} from 'src/app/model/AttributeGraphic';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';  
import { IgxShapeDataSource } from 'igniteui-angular-core';
import {IgxSizeScaleComponent, IgxValueBrushScaleComponent} from 'igniteui-angular-charts';
import { IgxGeographicProportionalSymbolSeriesComponent } from 'igniteui-angular-maps';
import { MarkerType } from 'igniteui-angular-charts';
import WorldLocations from './WorldLocations';
import { CSVtotal } from 'src/app/model/csv/CSVtotal';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit, AfterViewInit {
  @ViewChild ('map')
  public map: IgxGeographicMapComponent;
  @ViewChild('template')
  public tooltipTemplate: TemplateRef<object>;
  public geoLocations;

  public records: any[] = [];  
  @ViewChild('csvReader') csvReader: any;  

  atributeDataList: AttibuteGraphic [];
  barChart: BarChart= new BarChart();

  public userArray: any;
  constructor(private service:ServiceService) { 

  }

  ngOnInit() {   

  }

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

  view: any[] = [600, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Number';
  showYAxisLabel = true;
  yAxisLabel = 'Color Value';
  timeline = true;

  //pie
  showLabels = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  
  multi: any[] = [
    {
      name: 'Cyan',
      series: [
        {
          name: 5,
          value: 2650
        },
        {
          name: 10,
          value: 2800      
        },
        {
          name: 15,
          value: 2000
        }
      ]
    },
    {
      name: 'Yellow',
      series: [
        {
          name: 5,
          value: 2500
        },
        {
          name: 10,
          value: 3100
        },
        {
          name: 15,
          value: 2350
        }
      ]
    }
  ];
  
  public single = [
    {
      "name": "La Paz",
      "value": 1298
    },
    {
      "name": "Cochabamba",
      "value": 2041
    },
    {
      "name": "Santa Cruz",
      "value": 12725
    },
    {
      "name": "Oruro",
      "value": 420
    },
    {
      "name": "Potosí",
      "value": 378
    },
    {
      "name": "Tarija",
      "value": 175
    },
    {
      "name": "Chuquisaca",
      "value": 134
    },
    {
      "name": "Beni",
      "value": 3128
    },
    {
      "name": "Pando",
      "value": 386
    }
  ];

  public multiTwo = [
    {
      "name": "China",
      "series": [
        {
          "name": "2018",
          "value": 2243772
        },
        {
          "name": "2017",
          "value": 1227770
        }
      ]
    },
    {
      "name": "USA",
      "series": [
        {
          "name": "2018",
          "value": 1126000
        },
        {
          "name": "2017",
          "value": 764666
        }
      ]
    },
    {
      "name": "Norway",
      "series": [
        {
          "name": "2018",
          "value": 296215
        },
        {
          "name": "2017",
          "value": 209122
        }
      ]
    },
    {
      "name": "Japan",
      "series": [
        {
          "name": "2018",
          "value": 257363
        },
        {
          "name": "2017",
          "value": 205350
        }
      ]
    },
    {
      "name": "Germany",
      "series": [
        {
          "name": "2018",
          "value": 196750
        },
        {
          "name": "2017",
          "value": 129246
        }
      ]
    },
    {
      "name": "France",
      "series": [
        {
          "name": "2018",
          "value": 204617
        },
        {
          "name": "2017",
          "value": 149797
        }
      ]
    }
  ];

}