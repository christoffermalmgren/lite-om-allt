import { Todo } from "./../todo";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TodoService {
  public todos: Todo[];
  public nextId: number;

  constructor() {
    const todos = this.getTodos();
    if (todos.length === 0) {
      this.nextId = 0;
    } else {
      const maxId = todos[todos.length - 1].id;
      this.nextId = maxId + 1;
    }
  }

  public addTodo(text: string): void {
    const todo = new Todo(this.nextId, text);
    const todos = this.getTodos();
    todos.push(todo);

    this.setLocalStorageTodos(todos);
    this.nextId++;
  }
  public getTodos(): Todo[] {
    const localStorageItem = JSON.parse(localStorage.getItem("todos"));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }
  public removeTodo(id: number): void {
    let todos = this.getTodos();
    todos = todos.filter(todo => todo.id !== id);
    this.setLocalStorageTodos(todos);
  }
  private setLocalStorageTodos(todos: Todo[]): void {
    localStorage.setItem("todos", JSON.stringify({ todos: todos }));
  }
}
