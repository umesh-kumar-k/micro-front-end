import { Component, input } from '@angular/core';
import { TuiTitle } from '@taiga-ui/core';
import { TuiProgress } from '@taiga-ui/kit';
import { TuiAppBar } from '@taiga-ui/layout';
import { Product } from '../../../types/product.type';

@Component({
  selector: 'app-header',
  imports: [TuiAppBar, TuiProgress, TuiTitle],
  templateUrl: './app-header.html',
  styleUrl: './app-header.css'
})
export class AppHeader {



}
