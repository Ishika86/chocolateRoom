import { Component, OnInit , ViewEncapsulation, Input, Output, EventEmitter} from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items;
  products;
  checkoutForm;
  constructor(private cartService: CartService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.items = this.cartService.getItems();
    this.route.paramMap.subscribe(params => {
      this.products = products[+params.get('name')];
    });
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }
  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();

  }


}
