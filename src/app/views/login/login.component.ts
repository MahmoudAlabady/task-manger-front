import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder , private authService:AuthService,private router:Router) { }
  loginForm=this.formBuilder.group(
  {
    email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[gmail|yahoo]+.[a-z]{2,4}$')]], 
    password:['',[Validators.required,Validators.minLength(9)]],

  }
)
errorFlag:boolean=false;
users:any;
token:any;
get userValues (){
  return this.loginForm.controls;
} 
login(credentials:any){
  this.authService.login(credentials).subscribe({
     next: (res:any)=>{
      // this.router.navigate(['/profile']);
       this.users=res;
       this.token=this.users.token;
       localStorage.setItem('token',this.token);
       this.router.navigate(['/profile']);
      //  console.log( this.router.navigate(['/profile']));
     },
     error:(err:any)=>{
       this.errorFlag=true;
     }
  })
}
log(){
  // console.log(this.loginForm.controls)
  // console.log(this.loginForm)
}
onSubmit(value:any){
  console.log(value)
}

  ngOnInit(): void {
  }

}
