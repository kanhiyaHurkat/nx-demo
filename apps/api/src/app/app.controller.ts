import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Todo } from '@nx-demo/data';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getTodos(): Todo[] {
    return this.appService.getTodos();
  }

  @Get('todo/:id')
  getTodo(@Param('id') id: string): Todo {
    return this.appService.getTodoById(id);
  }

  @Post('todo')
  addTodo(@Body() todoData: Todo): Todo {
    return this.appService.addTodo(todoData);
  }
}
