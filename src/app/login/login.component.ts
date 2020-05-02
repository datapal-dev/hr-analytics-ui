import { Component, OnInit } from "@angular/core";
import { LoginService } from "./login.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AppComponent } from "./../app.component";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  loginObj: any = {
    email: "",
    password: ""
  };
  registerObj: any = {
    email: "",
    password: "",
    first_name: "",
    last_name: ""
  };
  constructor(
    private loginService: LoginService,
    private router: Router,
    private app: AppComponent
  ) {}

  ngOnInit() {
    sessionStorage.clear();
  }
  register() {
    this.app.loading(true);
    this.loginService.registerUser(this.registerObj).subscribe(
      data => {
        if (data.status === "true") {
          this.app.showSuccess(data.msg);
          this.router.navigate(["home/new"]);
          sessionStorage.setItem('user',data.user)
        } else {
          this.app.showError(data.msg);
        }
        this.app.loading(false);
      },
      error => {
        this.app.loading(false);
        this.app.showError(error)
      }
    );
  }
  login() {
    this.app.loading(true);
    this.loginService.auth(this.loginObj).subscribe(
      data => {
        this.app.loading(false);
        if (data.status === "true") {
          sessionStorage.setItem('user',data.user)
          this.router.navigate(["home/new"]);
          this.app.showSuccess(data.msg);
        } else {
          this.app.showError(data.msg);
        }
      },
      error => {
        this.app.showError(error)
        this.app.loading(false);
      }
    );
  }
}
