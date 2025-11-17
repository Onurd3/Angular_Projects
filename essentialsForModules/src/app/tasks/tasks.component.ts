import { Component, Input } from '@angular/core';
import { Task } from "./task/task.component";
import { NewTask } from "./new-task/new-task.component";
import { type NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';


@Component({
  standalone: true,
  selector: 'app-tasks',
  imports: [Task, NewTask],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})

export class Tasks {
  @Input({ required: true }) userId!: string; 
  @Input({ required: true }) name!: string;
  // @Input() name: string | undefined;   // alternative way to write the above line

  isAddigTask = false;
  
  constructor(private tasksService: TasksService){}


    get selectedUserTasks(){
      return this.tasksService.getUserTasks(this.userId);
    }

    onCompleteTask(id: string){

    }

    onStartAddTask(){
      this.isAddigTask = true;
    }

    onCloseAddTask(){
      this.isAddigTask = false;
    }
}