import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from 'src/app/interfaces/userInerface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {
user:Users={}
file:any;
  constructor(private userService:UserService , private router:Router) { }
  getProfile(){
    this.userService.getProfile().subscribe({
      next: (res:any) =>{
        console.log(res);
        this.user= res;

      }
    })
  }
 
  //image
  handleUpload(event:any){
    console.log(event.target.files)
    this.file = event.target.files;
  }
  
uploadFile(){
  const data = new FormData();
  for(let i=0; i<this.file.length;i++)
  {
    data.append('avatar', this.file[i])
  }
  this.userService.updateImage(data).subscribe(()=>{})
}
updateProfile(user:Users){
  this.userService.updateProfile(user).subscribe({
    next: () =>{
      this.uploadFile()
      
     this.router.navigate(['/profile']);
    }
  })
}
  ngOnInit(): void {
    this.getProfile()
  }

}
