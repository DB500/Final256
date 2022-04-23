import { Injectable } from '@angular/core';
import {Cart} from "./cart";
import {CartModule} from "./cart/cart.module";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cart: Cart[] | undefined;
  m = -1;

  constructor() { }
  addItem(cart:Cart) {
    if (this.cart == undefined) {
      this.cart = new Array(cart);
      cart.final = cart.price*cart.quantity;


    }
    else {
      this.m++;
      cart.final = cart.price*cart.quantity+this.cart[this.m].final;
      this.cart.push(cart);
      }

  }

}
