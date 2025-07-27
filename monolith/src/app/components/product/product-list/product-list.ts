import { Component, EventEmitter, input, Output } from '@angular/core';
import { Product } from '../../../types/product.type';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'product-list',
  imports: [ ProductDetail],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList {

  products = input.required<Product[]>();

}
