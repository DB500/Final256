import { Injectable } from '@angular/core';
import {Cart} from "./cart";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cart: Cart[] | undefined;
  constructor() { }
  addItem(cart:Cart) {
    if (this.cart == undefined) {
      this.cart = new Array(cart);
    }
    else {
      this.cart.push(cart);
    }
  }

}
