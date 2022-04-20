import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool7',
  templateUrl: './tool7.component.html',
  styleUrls: ['./tool7.component.css']
})
export class Tool7Component implements OnInit {

  quantity = 1;
  price = 2.99;

  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }


  addToCart() {
    let cart = {item: "Hand To Squirrel Transformer", price: this.price, quantity: this.quantity};
    this.shoppingcartservice.addItem(cart);

  }
  updateShop() {
    let p = 2.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}
