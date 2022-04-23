import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool9',
  templateUrl: './tool9.component.html',
  styleUrls: ['./tool9.component.css']
})
export class Tool9Component implements OnInit {

  quantity = 1;
  price = 15.99;
  option1 = "N/A"
  final = this.quantity*this.price;

  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }


  addToCart() {
    let cart = {item: "Multi Angle Measuring Tool", price: this.price, quantity: this.quantity, use: this.option1, final: this.final};
    this.shoppingcartservice.addItem(cart);

  }
  updateShop() {
    let p = 15.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
