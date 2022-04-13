import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool1',
  templateUrl: './tool1.component.html',
  styleUrls: ['./tool1.component.css']
})
export class Tool1Component implements OnInit {

  quantity = 1;
  price = 0;
  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }


  PriceChange() {
    alert("working");
    alert(this.price);
    let cart = {item: "tool1", price: this.price, quantity: this.quantity};
    this.shoppingcartservice.addItem(cart);

  }
}

