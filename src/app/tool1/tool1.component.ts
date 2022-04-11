import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";

@Component({
  selector: 'app-tool1',
  templateUrl: './tool1.component.html',
  styleUrls: ['./tool1.component.css']
})
export class Tool1Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }


  PriceChange() {
    alert("working");
    let x = document.getElementById("quantity");

    let update = document.getElementById("price");
    alert(x);
  }
}

