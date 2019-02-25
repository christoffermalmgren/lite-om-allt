import { Component, OnInit, Input } from "@angular/core";
import { Todo } from "src/app/todo";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.css"]
})
export class TodoItemComponent implements OnInit {
  @Input() public todo: Todo;

  constructor(private td: TodoService) {}

  ngOnInit() {}

  private removeTodo(): void {
    this.td.removeTodo(this.todo.id);
  }
}
