import { Component, OnInit } from '@angular/core';
import { View } from 'src/app/model/View';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  view: View= new View();


  constructor(private service:ServiceService) { }

  ngOnInit() {
    this.getView();
  }


  getView(){
    let id = localStorage.getItem("id");
    this.service.getViewId(+id)
    .subscribe(data=>{
      this.view=data;
    })
  }

}
