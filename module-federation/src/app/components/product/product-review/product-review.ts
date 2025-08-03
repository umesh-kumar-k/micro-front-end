import { Component, inject } from '@angular/core';
import { ProductService } from '../product-service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Observable } from 'rxjs';
import { Product } from '../../../types/product.type';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import {TuiAppearance, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';


@Component({
  selector: 'product-review',
  imports: [
        AsyncPipe, 
        NgIf,
        NgFor,
        TuiAppearance,
        TuiAvatar,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiIcon,
        TuiSurface,
        TuiTitle
      ],
  templateUrl: './product-review.html',
  styleUrl: './product-review.css'
})
export class ProductReview {

  productService = inject(ProductService);
  selectedProduct$: Observable<Product | null> = this.productService.selectedProduct$;

}
