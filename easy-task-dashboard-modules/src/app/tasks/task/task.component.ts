import { Component, inject, Input } from '@angular/core';
import { TaskType } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  standalone: false,
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})

export class Task {
  @Input({required: true}) task!: TaskType;

  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}
