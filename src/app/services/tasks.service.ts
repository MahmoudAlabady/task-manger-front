import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tasks } from '../interfaces/taskInterface';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  addTask(task:Tasks){
    return this.http.post(this.url+'tasks',task)
    }
    getTasks(){
      return this.http.get<Tasks>(this.url+'tasks')
    }
    deleteTask(id:any){
      return this.http.delete(this.url+'tasks/'+id)

    }
    updateTask(id:any,data:Tasks){
      return this.http.patch(this.url+'tasks/'+id,data)
    }
    getSingleTask(id:any){
      return this.http.get<Tasks>(this.url+'tasks/'+ id)
      
    }
}
