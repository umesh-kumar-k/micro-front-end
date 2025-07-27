import { Injectable } from '@angular/core';
import { Product } from '../../types/product.type';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartStateService {
  
  private cartItems: Product[] = [];  

  private cartSubject$ = new BehaviorSubject<Product[]>(this.cartItems);

  cart$ = this.cartSubject$.asObservable();

  addToCart(product: Product): void {
    this.cartItems = [...this.cartItems, product];
    this.cartSubject$.next(this.cartItems);
  }

}
