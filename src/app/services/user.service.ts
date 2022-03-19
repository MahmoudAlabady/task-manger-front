import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from '../interfaces/userInerface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url='https://task-manager-api-alabady.herokuapp.com/'
  constructor(private http:HttpClient) { }
  getProfile(){
    return this.http.get<Users>(this.url+'profile');
  }
  updateProfile(data:Users){
    return this.http.patch(this.url+'profile',data);
  }
  updateImage(image:any){
    return this.http.post(this.url+'profile/avatar',image)
  }
}
