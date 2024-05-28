import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";

export const addToCart = createAction('[Cart Component] AddToCart', props<{ product: IProduct }>());
export const incrementProduct = createAction('[Cart Component] IncrementProduct', props<{ productId: number }>());
export const decrementProduct = createAction('[Cart Component] DecrementProduct', props<{ productId: number }>());
export const removeProduct = createAction('[Cart Component] RemoveProduct', props<{ productId: number }>());