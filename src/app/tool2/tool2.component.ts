import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool2',
  templateUrl: './tool2.component.html',
  styleUrls: ['./tool2.component.css']
})
export class Tool2Component implements OnInit {

  quantity = 1;
  price = 15.99;
  option1 = "";
  option2 = "";
  message = "";
  final = this.quantity*this.price;

  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }

  addToCart() {
    if (this.option1 == "Serrated Edge") {
      let cart = {item: "Lock-wire Pliers", price: this.price, quantity: this.quantity, use: this.option1,  final: this.final};
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option2 == "Straight Edge"){
      let cart = {item: "Lock-wire Pliers", price: this.price, quantity: this.quantity, use: this.option2,  final: this.final};
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option1 == "" && this.option2 == ""){
      this.message = "You Must Select One of the Options"
    }
  }
  updateShop() {
    let p = 15.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
