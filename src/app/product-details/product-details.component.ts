import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder} from '@angular/forms';
import {items} from '../items';
import {products} from '../products';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {Hero} from '../Hero';
import {Table} from '../Table';
import {ToasterService} from '../toaster-service.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  items = items;
  product;
  id:number;
  quantity: number;
  instructions: string;
  selectedItem: any = {
    itemId: '',
    name: '',
    price: '',
    image: '',
    quantity: 1,
    total: 0,
    instructions: '',
    addOn: [],
  };
  selectedProduct: any = {
    productId: '',
    name: '',
  };

  cheese:boolean;
  red: boolean;
  white: boolean;
  items_array = [];
  constructor(private route: ActivatedRoute,
              private toasterService: ToasterService,
              private router: Router) {


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

  onSelectItem(item: Hero): void {
    if(this.instructions ==undefined)
      item.instructions='NA';
    else
      item.instructions=this.instructions;
    console.log(item);


    this.items_array.push(item);
    console.log(this.items_array);
    localStorage.setItem('items_array', JSON.stringify(this.items_array));

    this.instructions='NA';

  }

  Success() {
    this.toasterService.Success('Item is added in the cart');
  }

  onSelectTable(product: Table): void {
    this.selectedProduct = product;
    localStorage.setItem('table_details',JSON.stringify(product));
    this.quantity=1;
  }
  add() {
    this.selectedItem.quantity += 1;
    console.log(this.selectedItem.quantity);
  }
  subtract() {
    if(this.selectedItem.quantity -1 < 1) {
      this.selectedItem.quantity = 1;
      console.log(this.selectedItem.quantity);
    }
    else
      {
        this.selectedItem.quantity -= 1;
        console.log(this.selectedItem.quantity);
      }
  }
   uncheckAll(){
    $('input[type="checkbox"]:checked').prop('checked',false);
  }

}

