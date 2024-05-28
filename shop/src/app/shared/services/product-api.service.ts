import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { IProduct } from '../models/product.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  http = inject(HttpClient);
  constructor() { }

  getProducts(): Observable<IProduct[]> {

    return this.http.get<IProduct[]>('https://fakestoreapi.com/products').pipe(
      map((products: IProduct[]) => {
        return products.map(product => {
          return { ...product, quantity: 1 }
        })
      })
    )
  }
}
