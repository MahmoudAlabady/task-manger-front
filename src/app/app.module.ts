import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from './services/auth.service';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ProfileComponent } from './views/profile/profile.component'
import { UserService } from './services/user.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TasksComponent } from './views/tasks/tasks.component';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { TasksService } from './services/tasks.service';
import { UpdateTaskComponent } from './views/update-task/update-task.component';
import { UpdateProfileComponent } from './views/update-profile/update-profile.component';
import { AuthGuardService } from './services/auth-guard.service';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignUpComponent,
    LoginComponent,
    ProfileComponent,
    TasksComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    UpdateProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,FormsModule
  ],
  providers: [AuthService,UserService,
    TasksService,
    AuthGuardService,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
