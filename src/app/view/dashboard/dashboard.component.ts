import { AfterViewInit, Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicHighDensityScatterSeriesComponent } from 'igniteui-angular-maps';
//import WorldUtils from './WorldUtils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    throw new Error("Method not implemented.");
  }
  constructor() {}
  @ViewChild ('map')
  public map: IgxGeographicMapComponent;
  @ViewChild('template')
  public tooltip: TemplateRef<object>;
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

  ngOnInit() {
  }



}
