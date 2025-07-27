import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Product, ProductResponse } from '../../types/product.type';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  PRODUCT_LISTING_URL = 'https://dummyjson.com/products';

  http = inject(HttpClient);

  /** For Product reviews */
  selectedProductSubject$ = new BehaviorSubject<Product | null>(null);
  selectedProduct$ = this.selectedProductSubject$.asObservable();

  private products: Product[] = [];


  getProducts(): Observable<Product[]> {
    return this.http.get<ProductResponse>(this.PRODUCT_LISTING_URL).pipe(
      map((response: ProductResponse) => response.products)
    );
  }

  setSelectedProduct(product: Product): void {
    this.selectedProductSubject$.next(product);
  }

  setLoadedProducts(products: Product[]): void {
    this.products = products;
  }

  getProductRecommendations(itemsInCart: Product[]): Product[] {
    const categories = new Set(itemsInCart.map(item => item.category));
    return this.products.filter(product => categories.has(product.category));
  }


}
