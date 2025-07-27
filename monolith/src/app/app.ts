import { TuiRoot } from "@taiga-ui/core";
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppHeader } from './components/header/app-header/app-header';
import { AppFooter } from './components/footer/app-footer/app-footer';
import { ProductHome } from "./components/product/product-home/product-home";
import { Product } from "./types/product.type";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, AppHeader, AppFooter, ProductHome],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('state-mgmt');

  itemsInCart: Product[] = [];

}
