import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool3',
  templateUrl: './tool3.component.html',
  styleUrls: ['./tool3.component.css']
})
export class Tool3Component implements OnInit {

  quantity = 1;
  price = 250.55;
  option1 = "";
  option2 = "";
  message = "";
  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart() {
    if (this.option1 == "Time Travel") {
      let cart = {item: "Flux Capacitor", price: this.price, quantity: this.quantity, use: this.option1};
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option2 == "Not Time Travel"){
      let cart = {item: "Flux Capacitor", price: this.price, quantity: this.quantity, use: this.option2};
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option1 == "" && this.option2 == ""){
      this.message = "You Must Select One of the Options"
    }

  }
  updateShop() {
    let p = 250.55;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
