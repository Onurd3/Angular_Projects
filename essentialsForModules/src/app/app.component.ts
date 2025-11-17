import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { User } from "./user/user.component";
import { DUMMY_USERS } from './dummy.users';
import { Tasks } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, User, Tasks],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId?: string;

  get selectedUser(){
    if(!this.selectedUserId){
      return null;
    }
    return this.users.find((users) => users.id === this.selectedUserId)!;
  } 

  onSelectUser(id: string){
    this.selectedUserId = id;
  }
}