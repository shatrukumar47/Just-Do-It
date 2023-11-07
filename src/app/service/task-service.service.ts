import { Injectable } from '@angular/core';
import axios from 'axios';
import { TODO } from '../interfaces/Todo.interface';

@Injectable({
  providedIn: 'root',
})
export class TaskServiceService {
  constructor() {}

  async getTodos() {
    return axios.get('https://just-do-it-b256.onrender.com/todos');
  }

  async addTodo(todo: TODO){
    return axios.post(`https://just-do-it-b256.onrender.com/todos`, todo)
  }

  async deleteTodo(id: number) {
    return axios.delete(`https://just-do-it-b256.onrender.com/todos/${id}`);
  }

  async getSingleTodo(id: number) {
    return axios.get(`https://just-do-it-b256.onrender.com/todos/${id}`);
  }

  async updateTodoStatus(todo: TODO) {
    return axios.patch(`https://just-do-it-b256.onrender.com/todos/${todo.id}`, todo);
  }
}
