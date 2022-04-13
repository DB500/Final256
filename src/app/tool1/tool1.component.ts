import { Component, OnInit } from '@angular/core';
import { Router} from "@angular/router";
import {ShoppingCartService} from "../shopping-cart.service";

@Component({
  selector: 'app-tool1',
  templateUrl: './tool1.component.html',
  styleUrls: ['./tool1.component.css']
})
export class Tool1Component implements OnInit {

  quantity = 1;
  price = 10.99;

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
    let p = 10.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}

