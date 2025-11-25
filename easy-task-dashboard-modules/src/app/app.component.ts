import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy.users';
import { UserType } from './user/user.model';

@Component({
  standalone: false,
  selector: 'app-root',
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