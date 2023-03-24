import { Injectable } from '@angular/core';
import { User } from './todos/todos';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  user: User[] = [];
  constructor() { }
  setUser(quote: string, userName: string,) {
    console.log(this.user.push({ quote: quote, username: userName }));
  }
  getUser() {
    return this.user;
  }
}
