import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AddTaskComponent } from './views/add-task/add-task.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { UpdateProfileComponent } from './views/update-profile/update-profile.component';
import { UpdateTaskComponent } from './views/update-task/update-task.component';

const routes: Routes = [
  
  {path: 'signUp', component:SignUpComponent},
  {path: '', component:LoginComponent},
  {path: 'profile', component:ProfileComponent,canActivate:[AuthGuardService]},
  {path: 'tasks',component:TasksComponent,canActivate:[AuthGuardService]},
  {path: 'addTask',component:AddTaskComponent,canActivate:[AuthGuardService]},
  {path:'updateTask/:id',component:UpdateTaskComponent,canActivate:[AuthGuardService]},
  {path:'updateProfile',component:UpdateProfileComponent,canActivate:[AuthGuardService]}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
