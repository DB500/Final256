import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userID = "Enter User ID";
  password = "";
  message = "";
  constructor(private router: Router) {}
  signIn() {
    if(this.userID == 'admin' && this.password == 'admin') {
      this.router.navigateByUrl('/welcome').then(r => {});
    } else {
      this.message = 'Invalid login id or password';
    }
  }

  ngOnInit(): void {
  }

}
