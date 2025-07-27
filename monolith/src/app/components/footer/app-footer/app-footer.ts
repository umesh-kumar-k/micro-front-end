import { Component, input } from '@angular/core';
import { Product } from '../../../types/product.type';
import { CartSummary } from '../../cart/cart-summary/cart-summary';

@Component({
  selector: 'app-footer',
  imports: [ CartSummary],
  templateUrl: './app-footer.html',
  styleUrl: './app-footer.css'
})
export class AppFooter {

  
}
