import { Component } from '@angular/core';
import { User } from '../todos/todos';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UserName: string = '';
  quote: string = '';
  constructor(private _user: UserDataService) {
  }

  setUser() {
    this._user.setUser(this.UserName, this.quote)
  }
}
