import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletedTodoComponent } from './deleted-todo/deleted-todo.component';
import { FavoriteTodoComponent } from './favorite-todo/favorite-todo.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TodosComponent } from './todos/todos.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {
    path: 'Todo', component: TodosComponent
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: 'Todo/Favorite', component: FavoriteTodoComponent
  },
  {
    path: 'Todo/deleted', component: DeletedTodoComponent
  },
  {
    path: 'user', component: UserDetailsComponent
  },
  {
    path: '**', component: NotFoundComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
