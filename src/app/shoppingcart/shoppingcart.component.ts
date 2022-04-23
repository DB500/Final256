import { Component, OnInit } from '@angular/core';
import {ShoppingCartService} from "../shopping-cart.service";
import {CartModule} from "../cart/cart.module";


@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  cart = this.shoppingCartService.cart
  price = 10.99;
  shipping = 7.99;
  taxes = .07;
  total = this.shipping+this.price+this.taxes;



  constructor(private shoppingCartService: ShoppingCartService) { }


  ngOnInit(): void {
  }

}
