import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool10',
  templateUrl: './tool10.component.html',
  styleUrls: ['./tool10.component.css']
})
export class Tool10Component implements OnInit {

  quantity = 1;
  price = 13.99;

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
    let p = 13.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
