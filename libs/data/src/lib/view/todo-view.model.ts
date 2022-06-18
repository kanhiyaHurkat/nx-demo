import { Todo } from "../api/todo-api.model";


export class TodoViewModel {
  todoId: string;
  todoTitle: string;
  todoDesc: string;
  todoCreatedOn: string;
  todoUpdatedOn: string;
  todoStatus: string;

  static mapFromViewModel(todo: Todo): TodoViewModel {
    const viewModel = new TodoViewModel();
    viewModel.todoId = todo.id;
    viewModel.todoTitle = todo.title;
    viewModel.todoDesc = todo.desc;
    viewModel.todoCreatedOn = todo.createdOn;
    viewModel.todoUpdatedOn = todo.updatedOn;
    viewModel.todoStatus = todo.status;
    return viewModel;
  }
}
