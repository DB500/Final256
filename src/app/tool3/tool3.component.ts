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
  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }
  addToCart() {
    alert("working");
    alert(this.price);
    let cart = {item: "Box Tool", price: this.price, quantity: this.quantity};
    this.shoppingcartservice.addItem(cart);

  }
  updateShop() {
    let p = 250.55;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
