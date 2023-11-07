import { Component, OnInit } from '@angular/core';
import { TODO } from 'src/app/interfaces/Todo.interface';
import { TaskServiceService } from 'src/app/service/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  todos: TODO[] = [];

  constructor(private taskServices: TaskServiceService) {}
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.taskServices
      .getTodos()
      .then((res) => {
        this.todos = res.data;
      })
      .catch((err) => console.log(err));
  }

  handleAddTodo = (todo: TODO)=> {
    this.taskServices.addTodo(todo).then((res)=>{
      this.fetchData();
    }).catch(err => console.log(err));
  }

  handleStatusChange(event: any, item: TODO) {
    const todoStatus = event.target.checked;
    const updatedItem = {
      ...item,
      completed: todoStatus,
    };
    this.taskServices
      .updateTodoStatus(updatedItem)
      .then((res) => {
        this.fetchData();
      })
      .catch((err) => console.log(err));
  }

  handleDeleteTodo(id: number) {
    this.taskServices
      .deleteTodo(id)
      .then((res) => {
        this.fetchData();
      })
      .catch((err) => console.log(err));
  }
}
