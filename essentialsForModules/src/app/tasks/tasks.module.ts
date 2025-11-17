import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { Tasks } from "./tasks.component";
import { NewTask } from "./new-task/new-task.component";
import { Task } from "./task/task.component";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [Tasks, Task, NewTask],
    exports: [Tasks],
    imports: [SharedModule, CommonModule, FormsModule],
})

export class TasksModule {} 