import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskInterface';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private tasksService:TasksService,private router:Router) { }
  addTaskForm=this.formBuilder.group(
    {
      description:['',[Validators.required]], 
      completed:['false',[]],
  
    }
  )
  get userValues (){
    return this.addTaskForm.controls;
  } 
  addTask(data:Tasks){
     this.tasksService.addTask(data).subscribe({
      
     next:(res:any)=>{
        
       console.log(res)
      this.router.navigate(['/tasks'])
    } 
     })
  }

  ngOnInit(): void {
  }

}
