import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInerface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
user:Users={}
  constructor(private userService:UserService) { }
  // img:any='data:image/jpeg;base64,' +this.user.avatar
profile(){
  this.userService.getProfile().subscribe({
    next:(res:any)=>{
      this.user =res
      console.log(res);
    } 
  })
}
  ngOnInit(): void {
    this.profile()
  }

}
