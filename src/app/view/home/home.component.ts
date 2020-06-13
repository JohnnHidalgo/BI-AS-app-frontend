import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { ResizeEvent } from 'angular-resizable-element';
import { ServiceService } from 'src/app/Service/service.service';
import { Dashboard } from 'src/app/model/Dashboard';
import {MatDialog} from '@angular/material'
import { DialogComponent } from 'src/app/dialog/dialog.component';

export interface DialogData {
  name: String;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dashboard:Dashboard = new Dashboard();
  dashboardlist: Dashboard[];
  name: string;
  
  constructor(private router:Router, private service:ServiceService, public dialog:MatDialog) { }
  
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

//verificar que hace este codigo

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

 // End code for verification 


  openDialog(){
    
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {name: this.name}
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.name = result;
      console.log(this.name);
      this.createDashboard();
    });
    
  }

  createDashboard(){
    var str = this.name;
    if (str != null) {
      console.log('Success');
    }else{
      console.log('Fail');
    }
    
  }

}
