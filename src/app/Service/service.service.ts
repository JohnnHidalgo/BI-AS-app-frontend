import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../Modelo/Persona';
import { User } from '../Modelo/User';

@Injectable()
export class ServiceService {
  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/ejemplo01/user';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }
  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url,persona);
  }
  getPersonaId(id:number){
    return this.http.get<Persona>(this.Url+"/"+id);
  }
  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/"+persona.id,persona);
  }
  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Url+"/"+persona.id);
  }

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

}