import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../models/product.interface';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToCart } from '../../../states/cart/cart.action';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: IProduct;
  //Emito un evento (creado por con EventEmitter)
  @Output() handleAdd = new EventEmitter();

  constructor() { }

  addToCart(product: IProduct) {
    this.handleAdd.emit(product);
    // this.store.dispatch(addToCart(product))
  }
}
