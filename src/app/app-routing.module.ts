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
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {path:'',redirectTo:'/login',pathMatch: 'full'},
  {path:'home',component:HomeComponent, canActivate:[LoginGuard]},
  {path:'dashboard',component:DashboardComponent, canActivate:[LoginGuard]},
  {path:'addUser',component:AddUserComponent, canActivate:[LoginGuard]},
  {path:'listUser',component:ListUserComponent, canActivate:[LoginGuard]},
  {path:'editUser',component:EditUserComponent, canActivate:[LoginGuard]},
  {path: 'login', component:LoginComponent},
  {path: 'view', component:ViewComponent, canActivate:[LoginGuard]},
  {path: 'dataset', component:DatasetComponent, canActivate:[LoginGuard]}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
