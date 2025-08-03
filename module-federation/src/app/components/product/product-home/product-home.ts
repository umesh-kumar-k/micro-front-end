import { Component, EventEmitter, inject, input, OnInit, Output } from '@angular/core';
import { ProductService } from '../product-service';
import { Product } from '../../../types/product.type';
import { ProductList } from '../product-list/product-list';
import { CartDetail } from '../../cart/cart-detail/cart-detail';

import { TuiScrollbar } from '@taiga-ui/core';
import { CartStateService } from '../../cart/cart-state-service';
import { ProductReview } from "../product-review/product-review";
import { ProductRecommendation } from '../product-recommendation/product-recommendation';


@Component({
  selector: 'product-home',
  imports: [ProductList, CartDetail, TuiScrollbar, ProductReview, ProductRecommendation],
  templateUrl: './product-home.html',
  styleUrl: './product-home.css'
})
export class ProductHome implements OnInit {

  productService = inject(ProductService);

  carStateService = inject(CartStateService);

  products: Product[] = [];

  itemsInCart = input<Product[]>([]);

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
      this.productService.setLoadedProducts(this.products);
      console.log('Products fetched:', this.products);
    });
  }

}
