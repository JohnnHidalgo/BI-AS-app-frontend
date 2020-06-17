import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User=new User();
  constructor(private router:Router,private service:ServiceService) { }

  ngOnInit() {
    this.Edit();  
  }

  Edit(){
    let id = localStorage.getItem("id");
    this.service.getUserId(+id)
    .subscribe(data=>{
      this.user=data;
    })
  }

  Update(user:User){
    this.service.updateUser(user)
    .subscribe(data=>{
      this.user=data;
      alert("Se Actualizo con Exito...!!!");
      this.router.navigate(["listar"]);
    })
  }
  
}
