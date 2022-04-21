import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool5',
  templateUrl: './tool5.component.html',
  styleUrls: ['./tool5.component.css']
})
export class Tool5Component implements OnInit {

  quantity = 1;
  price = 10.99;
  option1 = "";
  option2 = "";
  message = "";

  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }


  addToCart() {
    if (this.option1 == "Electrically Safe Rubber Handle") {
      let cart = {item: "Lock/Bolt Cutters", price: this.price, quantity: this.quantity, use: this.option1};
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option2 == "Fiber Glass Handle"){
      let cart = {item: "Lock/Bolt Cutters", price: this.price, quantity: this.quantity, use: this.option2};
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option1 == "" && this.option2 == ""){
      this.message = "You Must Select One of the Options"
    }

  }
  updateShop() {
    let p = 10.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}

