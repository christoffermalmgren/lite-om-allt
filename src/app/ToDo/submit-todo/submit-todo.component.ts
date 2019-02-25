import { Component, OnInit } from "@angular/core";
import { TodoService } from "src/app/services/todo.service";

@Component({
  selector: "app-submit-todo",
  templateUrl: "./submit-todo.component.html",
  styleUrls: ["./submit-todo.component.css"]
})
export class SubmitTodoComponent implements OnInit {
  public todoText: string;
  constructor(private td: TodoService) {
    this.todoText = "";
  }

  ngOnInit() {}

  public addTodo(): void {
    this.td.addTodo(this.todoText);
    this.todoText = "";
  }
}
