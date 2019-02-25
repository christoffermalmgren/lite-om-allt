import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { SortComponent } from "./sort/sort.component";
import { ToggleButtonComponent } from "./toggle-button/toggle-button.component";
import { HeaderComponent } from "./ToDo/header/header.component";
import { SubmitTodoComponent } from "./ToDo/submit-todo/submit-todo.component";
import { TodoService } from "./services/todo.service";
import { TodoItemComponent } from "./ToDo/todo-item/todo-item.component";
@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    SortComponent,
    ToggleButtonComponent,
    HeaderComponent,
    SubmitTodoComponent,
    TodoItemComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule {}
