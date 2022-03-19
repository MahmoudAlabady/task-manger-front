import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/taskInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url='https://task-manager-api-alabady.herokuapp.com/'
  constructor(private http:HttpClient) { }
 signUp(credentials:any){
  // console.log(this.http.post(this.url+'users',credentials))
   return this.http.post(this.url+'users',credentials);
   
 }
 login(credentials:any){
  return this.http.post(this.url+'users/login',credentials);

 }
 getToken(){
  return localStorage.getItem('token');
 }
 logout(){
   return this.http.delete(this.url+'logout')
 }

}
