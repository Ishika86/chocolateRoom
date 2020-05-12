import {Component, OnInit} from '@angular/core';
import { products } from '../products';
import {Table} from '../Table';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  products = products;



  ngOnInit(): void {
    localStorage.setItem('tables',JSON.stringify(products));
  }


}

