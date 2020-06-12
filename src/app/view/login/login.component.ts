import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(){
  }
  constructor(private service: ServiceService, private router: Router) { }

  nickname: string;
  password: string;


  login() {
    console.log(this.nickname);
    console.log(this.password);

    var logUser = new User();
    logUser.nicknameUser= this.nickname;
    logUser.password= this.password;

    console.log(logUser);
    this.service.loginUser(logUser);
   
  }


}
