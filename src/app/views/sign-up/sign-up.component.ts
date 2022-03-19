import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,FormControl,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private authService:AuthService, private router:Router) { }
  signUpForm=this.formBuilder.group(
  {
    name:['',[Validators.required,Validators.minLength(9)]],
    email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[gmail|yahoo]+.[a-z]{2,4}$')]], 
    age:['',[Validators.required]],
    password:['',[Validators.required,Validators.minLength(9)]],
    // userPasswordConfirm:['',[Validators.required,Validators.minLength(9)]]

  }
)
// onSubmit(value:any){
//   console.log(value)
// }

get userValues (){
  return this.signUpForm.controls;
} 
users:any;
token:any;
emailInvalid:boolean=false;
ageInvalid:boolean=false;
signUp(credentials:any){
  console.log(credentials)
  this.authService.signUp(credentials).subscribe({
     next: (res:any)=>{
       console.log(res)
       this.users = res;
       this.token = this.users.token;
      //  console.log(this.token)
       localStorage.setItem('token',this.token);
       this.router.navigate(['/profile']);
       
     },
     error: (httpError:any)=>{
       if (httpError.error.code == 11000) {
        this.emailInvalid = true;
       }
       if (httpError.error.errors.age){
        this.ageInvalid = true;
       }
       console.log(httpError)
     }
  })
}
log(){
  //console.log(this.signUpForm.controls)
  // console.log(this.signUpForm)
}
clrPassordTrue(){
  this.emailInvalid = false;
}
clrAgeTrue(){
  this.ageInvalid = false;
}

  ngOnInit(): void {

  }

}
