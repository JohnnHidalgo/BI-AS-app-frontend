import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import { ServiceService } from 'src/app/Service/service.service';
import { Dashboard } from 'src/app/model/Dashboard';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboardlist: Dashboard[];
  
  constructor(private router:Router, private service:ServiceService) { }
  ngOnInit() {
    this.service.getDashboard()
    .subscribe(dashboard=>{
      this.dashboardlist = dashboard;
    });
  }
  
  dashboardRoute(){
    this.router.navigate(["dashboard"]);
  }

  public style: object = {};












//verificra que hace este codigo

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX: number = 50;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'fixed',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
  }
}
