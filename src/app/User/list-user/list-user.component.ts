import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service'
import { User } from 'src/app/Modelo/User';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  user: User[];
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.service.getUser()
      .subscribe(data => {
        this.user = data;
      });
  }


  EditUser(user:User):void{
    localStorage.setItem("id",user.idUser.toString());
    this.router.navigate(["editUser"])

  }

  Delete(user:User){
    this.service.deleteUser(user)
    .subscribe(data=>{
      this.user=this.user.filter(p=>p!==user);
      alert("Usuario eliminado...");
    })
  }


}
