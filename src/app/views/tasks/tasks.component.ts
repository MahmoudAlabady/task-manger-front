import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/interfaces/taskInterface';
import { AuthService } from 'src/app/services/auth.service';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private tasksService:TasksService) { }

 
tasks:Tasks[] = [];
getTasks(){
  this.tasksService.getTasks().subscribe({
    next:(res:any)=>{
      this.tasks =res;
      console.log(res)
    },
    error:(httpError:any)=>{
      console.log(httpError);

    }
  })
}

deleteTask(task:Tasks){
  this.tasksService.deleteTask(task._id).subscribe({
    next: ()=>{
     let index = this.tasks.indexOf(task);
     
    this.tasks.splice(index,1);
    }
  })
  }
ngOnInit(): void {
  this.getTasks()
}
}
