import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  cart_data = [];
  items_array;
  table_details;
  constructor() { }

  ngOnInit() {
  }
  checkOut() {
    this.table_details=JSON.parse(localStorage.getItem('table_details'));
    this.items_array=JSON.parse(localStorage.getItem('items_array'));
    console.log(JSON.parse(localStorage.getItem('cart_data')));
    this.cart_data = JSON.parse(localStorage.getItem('cart_data')) != null ? JSON.parse(localStorage.getItem('cart_data')) : [];
    this.cart_data.push({
      'table_id': this.table_details.productId,
      'table_Number': this.table_details.name,
      'table_items': this.items_array
    });
    localStorage.setItem('cart_data', JSON.stringify(this.cart_data));
  }


}
