import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userID = "";
  password = "";
  message = "";
  message1 = "";
  message2 = "";
  message3 = "";
  email1 = "";
  passwordcreate = "";
  lname = "";
  fname = "";

  constructor(private router: Router) {}
  signIn() {
    if(this.userID == 'admin' && this.password == 'admin') {
      this.router.navigateByUrl('/welcome').then(r => {});
    } else {
      this.message = 'Invalid login id or password';
    }
  }
  signUp() {
    if(this.email1.includes("@") == true) {
      if(this.passwordcreate.length < 8) {
        this.message2 = "Password must be longer than 7 characters";
      }
      if(this.passwordcreate.length >= 8){
        if (this.containsSpecialChars({str: this.passwordcreate})) {
          this.router.navigateByUrl('/welcome').then(r => {});
        }
        else {
          this.message3 = "Password must contain at least 1 special character";
        }
      }
    }
    else{
      this.message1 = "Email address not valid";
    }


  }
  containsSpecialChars({str}: { str: any }) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialChars.test(str);
  }

  ngOnInit(): void {
  }

}
