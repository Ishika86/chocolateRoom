import {Component, OnInit, ViewEncapsulation, Input, Output, EventEmitter, SimpleChanges, SimpleChange} from
    '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {Hero} from '../Hero';
import { products } from '../products';
import {items} from '../items';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  items;
  products;
  total: number;
  constructor(private cartService: CartService,
              private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    console.log(this.items);
    this.total = this.cartService.getTotal();
    this.route.paramMap.subscribe(params => {
      this.products = products[+params.get('name')];
      console.log(this.products);
    });

  }
  removeToCart(index: number) {
    this.items.splice(index , 1);

  }

}




