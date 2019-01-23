import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NameEditorComponent } from "./name-editor/name-editor.component";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileEditorComponent } from "./profile-editor/profile-editor.component";
import { SortComponent } from "./sort/sort.component";

@NgModule({
  declarations: [
    AppComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    SortComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
