import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/User';
import { Dashboard } from '../model/Dashboard';

@Injectable()
export class ServiceService {
  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ejemplo01/user';
  dashboardUrl='http://localhost:8080/ejemplo01/dashboard';


  getUser(){  
    return this.http.get<User[]>(this.Url);
  }
  createUser(user:User){
    return this.http.post<User>(this.Url,user);
  }
  getUserId(id:number){
    return this.http.get<User>(this.Url+"/"+id);
  }
  updateUser(user:User){
    return this.http.put<User>(this.Url+"/"+user.idUser,user);
  }
  deleteUser(user:User){
    //borrado logico
    return this.http.put<User>(this.Url+"/"+user.idUser,user);
    //borrado fisico
    //return this.http.delete<User>(this.Url+"/"+user.id);
  }



  getDashboard(){  
    return this.http.get<Dashboard[]>(this.dashboardUrl);
  }
  createDashboard(dashboard:Dashboard){
    return this.http.post<Dashboard>(this.dashboardUrl,dashboard);
  }
  getDashboardId(id:number){
    return this.http.get<Dashboard>(this.dashboardUrl+"/"+id);
  }
  updateDashboard(dashboard:Dashboard){
    return this.http.put<Dashboard>(this.dashboardUrl+"/"+dashboard.idDashboard,dashboard);
  }
  deleteDashboard(dashboard:Dashboard){
    //borrado logico
    return this.http.put<Dashboard>(this.dashboardUrl+"/"+dashboard.idDashboard,dashboard);
    //borrado fisico
    //return this.http.delete<User>(this.Url+"/"+user.id);
  }



}