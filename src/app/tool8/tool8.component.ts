import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool8',
  templateUrl: './tool8.component.html',
  styleUrls: ['./tool8.component.css']
})
export class Tool8Component implements OnInit {

  quantity = 1;
  price = 19.99;

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
    let p = 19.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
