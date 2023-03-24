import { Component, Input, OnInit } from '@angular/core';
import { ToDOService } from '../to-do.service';
import { Todo } from '../todos/todos';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todo: Todo = {
    id: 0,
    todo: "",
    completed: false,
    userId: 0,
    favorite: false
  };

  title = 'ToDO';

  // todo: Todo = { id: 0, name: '', status: false };
  list: Todo[] = [];

  constructor(private _todo: ToDOService) {

  }


  DeleteItem() {
    this._todo.DeleteItem(this.todo.id)

  }

  Done() {
    this._todo.Done(this.todo);
  }
  AddToFavorite() {
    this._todo.AddToFAvorite(this.todo.todo);

  }

}
