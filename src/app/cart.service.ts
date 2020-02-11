import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {products} from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  total: number=0;
  constructor(
    private http: HttpClient
  ) {}
  addToCart(product) {
      this.items.push(product);
      this.total=this.total+product.price * product.quantity ;
      console.log(this.total);
  }
  getItems() {
    return this.items;
  }
  getTotal(){
    return this.total;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }


}
