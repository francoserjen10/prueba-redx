import { AsyncPipe, CommonModule, NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductCardComponent } from '../shared/components/product-card/product-card.component';
import { IProduct } from '../shared/models/product.interface';
import { ProductApiService } from '../shared/services/product-api.service';
import { Store } from '@ngrx/store';
import { addToCart } from '../states/cart/cart.action';
import * as ProductActions from '../states/product/product.action';
import * as ProductSelectors from '../states/product/product.select';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, NgFor, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  http = inject(HttpClient);
  productApi = inject(ProductApiService);
  products$!: Observable<IProduct[]>;
  error!: Observable<string | null>;

  constructor(private store: Store<{ cart: { products: IProduct[] } }>) {
    this.store.dispatch(ProductActions.loadProduct());
    this.products$ = this.store.select(ProductSelectors.selectAllProducts);
    this.error = this.store.select(ProductSelectors.selectProductsError);
  }

  ngOnInit(): void {
    // this.http.get('https://fakestoreapi.com/products').subscribe(res => {
    //   console.log(res)
    // })

    // this.productApi.getProducts().subscribe(response => {
    //   console.log(response);
    // })
  }

  addItemToCart(product: IProduct) {
    const addProduct = this.store.dispatch(addToCart({ product }));
    console.log("addProduct", addProduct);
    return addProduct;
  }
}
