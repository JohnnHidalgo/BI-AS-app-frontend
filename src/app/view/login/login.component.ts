import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {

  }

  /*
  myFunction() {
    document.getElementById("frm1").submit();
  }
  */

  Login(){

    //var nameValue = document.getElementById("uniqueID").value;
    //this.service.loginUser(user);
    //console.log(nickname);
  }

}
