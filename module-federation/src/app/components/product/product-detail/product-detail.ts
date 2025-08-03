import { Component, EventEmitter, inject, input, Output } from '@angular/core';
import { Product } from '../../../types/product.type';

import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import {TuiCarousel, TuiPagination} from '@taiga-ui/kit';
import { CartStateService } from '../../cart/cart-state-service';
import { ProductService } from '../product-service';


@Component({
  selector: 'product-detail',
  imports: [
        TuiAppearance,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiLink,
        TuiPlatform,
        TuiTitle,
        TuiCarousel, 
        TuiPagination
  ],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css'
})
export class ProductDetail {

  product = input.required<Product>();

  carStateService = inject(CartStateService);
  productService = inject(ProductService);

  addProductToCartBtnHandler() {
    console.log('Product added to cart:', this.product());
    this.carStateService.addToCart(this.product());
  }

  showReviewsBtnHandler() {
    console.log('Show reviews for product:', this.product());
    // Logic to show reviews can be implemented here
    this.productService.setSelectedProduct(this.product());

  }


}
