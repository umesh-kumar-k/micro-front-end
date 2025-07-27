import { Component, inject, OnInit } from '@angular/core';
import { CartStateService } from '../../cart/cart-state-service';
import { ProductService } from '../product-service';
import { Product } from '../../../types/product.type';
import {TuiCarousel} from '@taiga-ui/kit';
import { NgFor } from '@angular/common';

@Component({
  selector: 'product-recommendation',
  imports: [TuiCarousel, NgFor],
  templateUrl: './product-recommendation.html',
  styleUrl: './product-recommendation.css'
})
export class ProductRecommendation implements OnInit{

  cartStateService = inject(CartStateService);
  productService = inject(ProductService);
  recommendations: Product[] = [];

  index = 0;

  
  ngOnInit(): void {
    // Logic to fetch and display product recommendations can be implemented here
    console.log('Product recommendations initialized');
    this.cartStateService.cart$.subscribe(cartItems => {
      console.log('Items in cart:', cartItems);
      this.getRecommendations(cartItems);
    });
  }

  getRecommendations(itemsInCart: Product[]) {
    // Placeholder for recommendation logic
    console.log('Fetching product recommendations...');
    // This could be an API call to fetch recommended products based on the cart or user preferences
    this.recommendations = [...this.productService.getProductRecommendations(itemsInCart)];
    console.log('Recommendations:', this.recommendations);
  }

}
