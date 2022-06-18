import { Injectable } from '@nestjs/common';
import { Todo } from '@nx-demo/data';

@Injectable()
export class AppService {
  todos: Todo[] = [
    {
      id: '1',
      title: 'Todo 1',
      desc: 'Todo 1 Desc',
      createdOn: new Date().toUTCString(),
      updatedOn: new Date().toUTCString(),
      deletedOn: new Date().toUTCString(),
      status: 'todo',
    },
    {
      id: '2',
      title: 'Todo 2',
      desc: 'Todo 2 Desc',
      createdOn: new Date().toUTCString(),
      updatedOn: new Date().toUTCString(),
      deletedOn: new Date().toUTCString(),
      status: 'in-progress',
    },
    {
      id: '3',
      title: 'Todo 3',
      desc: 'Todo 3 Desc',
      createdOn: new Date().toUTCString(),
      updatedOn: new Date().toUTCString(),
      deletedOn: new Date().toUTCString(),
      status: 'completed',
    }
  ];

  getTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(todoId: string): Todo {
    return this.todos.find(todo => todo.id === todoId);
  }

  addTodo(todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }

  updteTodo(todo: Todo): Todo {
    const todoIndex = this.todos.findIndex(todoData => todoData.id === todo.id);
    this.todos[todoIndex] = todo;
    return todo;
  }

  deleteTodo(todoId: string) {
    const todoIndex = this.todos.findIndex(todoData => todoData.id === todoId);
    this.todos.splice(todoIndex, 1);
  }
}
