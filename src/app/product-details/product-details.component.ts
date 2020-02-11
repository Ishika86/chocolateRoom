import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {FormBuilder, FormsModule} from '@angular/forms';
import { items } from '../items';
import { products } from '../products';
import { CartService } from '../cart.service';
import {Hero} from '../Hero';
import {ToasterService} from '../toaster-service.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  items = items;
  product;
  quantity: number;
  selectedItem: any =  {
    itemId: '',
    name: '',
    price: '',
    image: '',
    quantity: 1,
    total: 0,
  };
  constoptions= {positionClass: 'toast-bottom-right', timeOut: 3000};
  constructor(private route: ActivatedRoute,
              private toasterService:ToasterService,
              private router: Router,
              private cartService: CartService,
              private formBuilder: FormBuilder) {}

  addToCart(product) {
    this.selectedItem.quantity = product.quantity;
      this.cartService.addToCart(product);

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
  Success(){
    this.toasterService.Success("Item is added in the cart");
  }
}

