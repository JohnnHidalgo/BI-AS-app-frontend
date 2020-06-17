import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './UIelement/User/add-user/add-user.component';
import { ListUserComponent } from './UIelement/User/list-user/list-user.component';
import { EditUserComponent } from './UIelement/User/edit-user/edit-user.component';
import { HomeComponent } from './view/home/home.component';
import { DashboardComponent } from './view/dashboard/dashboard.component';
import { LoginComponent } from './view/login/login.component';
import { ViewComponent } from './view/view/view.component';
import { DatasetComponent } from './view/dataset/dataset.component';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'addUser',component:AddUserComponent},
  {path:'listUser',component:ListUserComponent},
  {path:'editUser',component:EditUserComponent},
  {path: 'login', component:LoginComponent},
  {path: 'view', component:ViewComponent},
  {path: 'dataset', component:DatasetComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
