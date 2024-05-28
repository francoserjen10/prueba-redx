import { CartState } from "./cart/cart.reducer";
import { ProductState } from "./product/product.reducer";

export interface AppState {
    cart: CartState;
    product: ProductState;
}