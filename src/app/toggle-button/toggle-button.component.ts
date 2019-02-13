import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-toggle-button",
  templateUrl: "./toggle-button.component.html",
  styleUrls: ["./toggle-button.component.css"]
})
export class ToggleButtonComponent implements OnInit {
  constructor() {}

  // Onsubmit togglar knappen från intial state true till false med showLogin
  // getButtonText  visar knappens text,
  // om den är true visar den hide login annars show login
  // i templaten hämtar man funktionen med interpolation{{}}
  // och för att toggla input fälten
  //  kör man en ngif om showLogin är true visas fälet

  showLogin: Boolean = true;

  onSubmit(): void {
    this.showLogin = !this.showLogin;
    console.log(this.showLogin);
  }

  getButtonText(): String {
    return this.showLogin ? "Hide login" : "Show login";
  }

  ngOnInit() {}
}
