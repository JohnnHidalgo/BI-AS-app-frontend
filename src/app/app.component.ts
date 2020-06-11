import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BI-AS';

  constructor(private router:Router){}

  AddUser(){
    this.router.navigate(["addUser"]);
  }
  ListUser(){
    this.router.navigate(["listUser"]);
  }
  
}
