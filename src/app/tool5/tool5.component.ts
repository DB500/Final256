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

  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }


  addToCart() {
    let cart = {item: "Lock/Bolt Cutter", price: this.price, quantity: this.quantity};
    this.shoppingcartservice.addItem(cart);

  }
  updateShop() {
    let p = 10.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}

