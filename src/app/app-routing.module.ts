import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './User/add-user/add-user.component';
import { ListUserComponent } from './User/list-user/list-user.component';
import { EditUserComponent } from './User/edit-user/edit-user.component';
import { HomeComponent } from './view/home/home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';

const routes: Routes = [


  /*Aqui empieza el proyecto */
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'listUser',component:ListUserComponent},
  {path:'editUser',component:EditUserComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
