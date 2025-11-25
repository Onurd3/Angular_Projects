import { Component, Output, EventEmitter, input } from '@angular/core';
import { UserType } from './user.model';

// import { DUMMY_USERS } from '../dummy.users';

// const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

/*
type UserType = {
  id: string;
  name: string;
  avatar: string;
}
*/


/*
  interface UserType {
    id: string;
    name: string;
    avatar: string;
  }
*/ 


@Component({
  standalone: false,
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})

export class User {


  /*
    avatar = input.required<string>();
    name = input.required<string>();
    id = input.required<string>();
    select = output<string>();

    imagePath = computed(() => {
      return 'users/' + this.avatar()  
    });
  

    selectedUser = signal(DUMMY_USERS[randomUserIndex]);
    imagePath = computed(() => 'users/' + this.selectedUser().avatar);

    get imagePath(){
      return 'users/' + this.selectedUser.avatar;
    }
  */


/*
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;
*/


  readonly user = input.required<UserType>();
  readonly selected = input.required<boolean>();
  @Output() select = new EventEmitter();
  
  get imagePath(){
    return 'users/' + this.user().avatar;
  }

  onSelectUser(){

    /*
      const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length); 
      this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
    */
  

    this.select.emit(this.user().id);
  }
}
