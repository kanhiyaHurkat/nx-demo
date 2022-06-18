import { Component, Input, OnInit } from '@angular/core';
import { TodoViewModel } from '@nx-demo/data'

@Component({
  selector: 'nx-demo-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input()
  todos: TodoViewModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
