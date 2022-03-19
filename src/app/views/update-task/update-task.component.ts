import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/interfaces/taskInterface';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})
export class UpdateTaskComponent implements OnInit {
task:Tasks={}
  constructor(private tasksService:TasksService,private route:ActivatedRoute,private router:Router) { }
  id:string=this.route.snapshot.params['id'];
  getSingleTask(){
    this.tasksService.getSingleTask(this.id).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.task=res;
      }
    })
  }
  updateTask(task:Tasks){
    this.tasksService.updateTask(this.id,task).subscribe({
      next:(res:any)=>{
        this.router.navigate(['/tasks'])
      }
    })
  }
  ngOnInit(): void {
    this.getSingleTask()
  }

}
