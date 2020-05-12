import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cart_data=[];
  total : number=0;
  index :number;

  constructor(private cartService: CartService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.cart_data=JSON.parse(localStorage.getItem('cart_data'));
  }
  getTotal(item : any){
    this.total=0;
    for(let i=0;i<item.length;i++){
      this.total=this.total + item[i].price * item[i].quantity;
    }
    return this.total;
  }

  clearCart(item: any){
    this.index=this.cart_data.indexOf(item);
    this.cart_data.splice(this.index,1);
    localStorage.setItem('cart_data',JSON.stringify(this.cart_data));
  }




}


