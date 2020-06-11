import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // implements OnInit 
  // constructor(private service: ServiceService, private router: Router) { }

  email: string;
  password: string;

  constructor() {}

  login() {
    console.log(this.email);
    console.log(this.password);
  }

  // Login(user:User){
  //   this.service.loginUser(user);
  //   console.log(user.name);
  // }

}
