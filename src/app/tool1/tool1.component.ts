import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";


@Component({
  selector: 'app-tool1',
  templateUrl: './tool1.component.html',
  styleUrls: ['./tool1.component.css']
})
export class Tool1Component implements OnInit {

  quantity = 1;
  price = 10.99;
  option1 = '';
  option2 = '';
  message = "";
  final = this.quantity*this.price;
  constructor(private shoppingcartservice: ShoppingCartService) { }

  ngOnInit(): void {
  }


  addToCart() {
    if(this.option1 == "Wooden Handle"){
      let cart = {item: "Box Tool", price: 10.99, quantity: this.quantity, use: this.option1, final: this.final}
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option2 == "Fiber Glass Handle"){
      let cart = {item: "Box Tool", price: 10.99, quantity: this.quantity, use: this.option2, final: this.final}
      this.shoppingcartservice.addItem(cart);
    }
    else if (this.option1 == "" && this.option2 == ""){
      this.message = "You Must Select One of the Options"
    }


  }
  updateShop() {
    let p = 10.99;
    let q = this.quantity;
    let price = p*q;
    this.price = price;
  }
}

