import { createReducer, on } from '@ngrx/store';
import { IProduct } from '../../shared/models/product.interface';
import * as ProductActions from './product.action';

export interface ProductState {
  products: IProduct[];
  error: string | null;
}

export const initialProductState: ProductState = {
  products: [],
  error: null,
};

export const productReducer = createReducer(
  initialProductState,
  on(ProductActions.loadProductSuccess, (state, { products }) => {
    return {
      ...state,
      products,
      error: null,
    };
  }),

  on(ProductActions.loadProductFailure, (state, { errorMessage }) => {
    return {
      ...state,
      error: errorMessage,
    };
  })
);
