import { FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-name-editor",
  templateUrl: "./name-editor.component.html",
  styleUrls: ["./name-editor.component.css"]
})
export class NameEditorComponent implements OnInit {
  name = new FormControl("");

  constructor() {}

  ngOnInit() {}
  updateName() {
    this.name.setValue("Nancy");
  }
}
