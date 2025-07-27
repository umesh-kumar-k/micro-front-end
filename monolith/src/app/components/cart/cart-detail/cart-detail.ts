import { Component, inject, input, OnInit } from '@angular/core';

import { TuiTable } from '@taiga-ui/addon-table';
import { Product } from '../../../types/product.type';
import { TuiFormatNumberPipe } from '@taiga-ui/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { CartStateService } from '../cart-state-service';


@Component({
  selector: 'cart-detail',
  imports: [ TuiTable, TuiFormatNumberPipe, NgFor, AsyncPipe, NgIf, ],
  templateUrl: './cart-detail.html',
  styleUrl: './cart-detail.css'
})

export class CartDetail {
  
  cartStateService = inject(CartStateService);

  itemsInCart$ = this.cartStateService.cart$;

  columns = input<string[]>(['title', 'price']);

  

}
