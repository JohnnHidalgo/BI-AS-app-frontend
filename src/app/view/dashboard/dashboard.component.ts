import { AfterViewInit, Component, ViewChild, OnInit, TemplateRef } from '@angular/core';
import { IgxGeographicMapComponent } from 'igniteui-angular-maps';
import { IgxShapeDataSource } from 'igniteui-angular-core';
import { IgxGeographicHighDensityScatterSeriesComponent } from 'igniteui-angular-maps';
import WorldUtils from './WorldUtils';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
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

  public ngAfterViewInit(): void {
    // fetching geographic locations from public JSON folder
    fetch('assets/Data/AusPlaces.json')
      .then((response) => response.json())
      .then((data) => this.onDataLoaded(data, ''));
  }

  public onDataLoaded(sds: IgxShapeDataSource, e: any) {
    this.geoLocations = sds;
    // creating HD series with loaded data
    const geoSeries = new IgxGeographicHighDensityScatterSeriesComponent();
    geoSeries.dataSource = sds;
    geoSeries.longitudeMemberPath = 'x';
    geoSeries.latitudeMemberPath = 'y';
    geoSeries.heatMaximumColor = 'Red';
    geoSeries.heatMinimumColor = 'Black';
    geoSeries.heatMinimum = 0;
    geoSeries.heatMaximum = 5;
    geoSeries.pointExtent = 1;
    geoSeries.tooltipTemplate = this.tooltip;
    geoSeries.mouseOverEnabled = true;

    // adding HD series to the geographic amp
    this.map.series.add(geoSeries);

    // zooming to bound of all geographic locations
    const geoBounds = WorldUtils.getBounds(this.geoLocations);
    geoBounds.top = 0;
    geoBounds.height = -50;
    this.map.zoomToGeographic(geoBounds);
  }



}
