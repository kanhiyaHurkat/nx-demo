import { Component, OnInit } from '@angular/core';
import { TodoViewModel } from '@nx-demo/data';
import { take } from 'rxjs';
import { TodoHttpService } from './services/todo-http.service';

@Component({
  selector: 'nx-demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  todos: TodoViewModel[];

  constructor(
    private todoService: TodoHttpService
  ) {}

  ngOnInit(): void {
      this.fetchTodo()
  }

  fetchTodo() {
    this.todoService.fetchTodo().pipe(
      take(1),
    ).subscribe(( todo: TodoViewModel[] ) => {
      this.todos = todo
    })
  }

  addTodo() {
    this.todoService.addTodo({
      id: '4',
      title: 'Todo 4',
      desc: 'Todo 4 Desc',
      createdOn: new Date().toUTCString(),
      updatedOn: new Date().toUTCString(),
      deletedOn: new Date().toUTCString(),
      status: 'todo',
    }).pipe(
      take(1),
    ).subscribe((todo: TodoViewModel) => {
      this.todos.push(todo)
    })
  }
}
