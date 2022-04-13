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
    let p = 15.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
