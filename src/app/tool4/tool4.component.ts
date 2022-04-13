import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool4',
  templateUrl: './tool4.component.html',
  styleUrls: ['./tool4.component.css']
})
export class Tool4Component implements OnInit {

  quantity = 1;
  price = 55.00;
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
    let p = 55.00;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
