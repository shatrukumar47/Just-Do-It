import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent {
  @Input() handleAddTodo: Function = ():void=>{}

  title: string = "";
  description: string = "";

  handleAdd(){
    if(this.title && this.description){
      let todo = {
        id: Math.floor(Math.random() * 1000),
        title: this.title,
        description: this.description,
        completed: false
      }
      this.handleAddTodo(todo);
    }else{
      alert("⚠ All fields are required !!")
    }
  }
}
