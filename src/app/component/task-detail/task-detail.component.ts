import { Component, OnInit } from '@angular/core';
import { TaskServiceService } from '../../service/task-service.service';
import { TODO } from 'src/app/interfaces/Todo.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
})
export class TaskDetailComponent implements OnInit {
  todo: TODO = {
    id: 1,
    title: '',
    description: '',
    completed: false,
  };

  constructor(
    private taskServices: TaskServiceService,
    private activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.activeRoute.snapshot.paramMap.get('id');
    const todoID = Number(id);
    this.taskServices
      .getSingleTodo(todoID)
      .then((res) => {
        this.todo = res.data;
      })
      .catch((err) => console.log(err));
  }
}
