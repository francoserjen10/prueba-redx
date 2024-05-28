import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { Observable } from 'rxjs';
import { IProduct } from './shared/models/product.interface';
import { Store } from '@ngrx/store';
import { AppState } from './states/app.state';
import { selectCartProducts } from './states/cart/cart.selector';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, ProductsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shop';
  products$: Observable<IProduct[]>;

  constructor(private store: Store<AppState>) {
    this.products$ = this.store.select(selectCartProducts);
  }
}
