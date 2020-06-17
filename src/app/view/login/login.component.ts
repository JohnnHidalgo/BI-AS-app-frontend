import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  ngOnInit(){
  }
  constructor(private service: ServiceService, private router: Router, private snackBar: MatSnackBar) { }

  nickname: string;
  password: string;

  newUser: User = new User();

  login() {

    var logUser = new User();
    logUser.nicknameUser= this.nickname;
    logUser.password = this.password;

    console.log(logUser);
    this.service.loginUser(logUser)
    .subscribe(data=>{
      if (data!=null) {
        localStorage.setItem('username', this.nickname);
        this.snackBar.open('Bienvenido', '', {duration: 2000,});
        this.router.navigate(["home"]); 
      }else{
        this.snackBar.open('Acceso denegado', '', {duration: 2000,})
      }
      
    });
    this.service.logingetUser(this.nickname)
    .subscribe(user=>{
      this.newUser=user;      
      console.log(this.newUser);
      localStorage.setItem('loginIdUser',this.newUser.idUser.toString());
      localStorage.setItem('loginNameUser', this.newUser.nicknameUser.toString());
    });

    

  }
}
