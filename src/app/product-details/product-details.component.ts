import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormBuilder, FormsModule} from '@angular/forms';
import { items } from '../items';
import { products } from '../products';
import { CartService } from '../cart.service';
import {Hero} from '../Hero';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  items = items;
  product;
  quantity: number;
  selectedItem: Hero;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private cartService: CartService,
              private formBuilder: FormBuilder) {}
  addToCart(product) {
    while (this.quantity > 0) {
      this.cartService.addToCart(product);
      this.quantity = this.quantity - 1 ;
    }
    window.alert('Your product has been added to the cart!');
  }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
  onSelect(item: Hero): void {
    this.selectedItem = item;
    console.log(item);
  }
}

