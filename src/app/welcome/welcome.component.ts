import { Component, OnInit } from '@angular/core';
import {ContactinfoService} from "../contactinfo.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  info = this.contactinfoservice.info;

  constructor(private contactinfoservice: ContactinfoService) {}

  Update(){

  }

  ngOnInit(): void {
  }

}
