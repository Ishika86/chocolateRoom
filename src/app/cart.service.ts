import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  total: number=0;
  constructor(
    private http: HttpClient
  ) {}
  addToCart(item) {
      this.items.push(item);
      this.total=this.total+item.price * item.quantity ;
      console.log(this.total);
  }
  getItems() {
    return this.items;

  }
  getTotal(){
    return this.total;
  }



 /* clearCart() {
    this.items = [];
    return this.items;
  }*/



}
