import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool6',
  templateUrl: './tool6.component.html',
  styleUrls: ['./tool6.component.css']
})
export class Tool6Component implements OnInit {

  quantity = 1;
  price = 7.99;
  option1 = "";
  option2 = "";
  message = "";
  final = this.quantity*this.price;

  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }


  addToCart() {
    if (this.option1 == "Rubber Handle") {
      let cart = {item: "Grabber", price: this.price, quantity: this.quantity, use: this.option1,  final: this.final};
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option2 == "Fiber Glass Handle"){
      let cart = {item: "Grabber", price: this.price, quantity: this.quantity, use: this.option2,  final: this.final};
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option1 == "" && this.option2 == ""){
      this.message = "You Must Select One of the Options"
    }

  }
  updateShop() {
    let p = 7.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
