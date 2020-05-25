import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/Modelo/User';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  user:User = new User();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
  }

  CreateUser(user:User){
    this.service.createUser(this.user)
    .subscribe(data=>{
      alert("Creación Exitosa");
      this.router.navigate(["listUser"]);
    })
  }

}
