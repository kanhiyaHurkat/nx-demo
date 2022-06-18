import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo, TodoViewModel } from '@nx-demo/data';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoHttpService {

  constructor(
    private http: HttpClient
  ) { }

  fetchTodo(): Observable<TodoViewModel[]> {
    return this.http.get<Todo[]>('/api/todos').pipe(
      map((response: Todo[]) => response.map(res => TodoViewModel.mapFromViewModel(res)))
    )
  }

  addTodo(payload: Todo): Observable<TodoViewModel> {
    return this.http.post<Todo>('/api/todo', payload).pipe(
      map((response: Todo) => TodoViewModel.mapFromViewModel(response))
    )
  }
}
