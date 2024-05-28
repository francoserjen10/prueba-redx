import { createReducer, on } from "@ngrx/store";
import { IProduct } from "../../shared/models/product.interface";
import * as CartActions from './cart.action';

export interface CartState {
    products: IProduct[];
    totalPrice: number,
}

export const initialCounterState: CartState = {
    products: [],
    totalPrice: 0
};

/*
*Aca voy a hacer una funcion donde calcule el precio total de cada producto
*Voy a usar reduce (es de typescript) = ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.
*/
export function calculateTotalPrice(product: IProduct[]) {
    return product.reduce((total, product) => total + (product.price * product.quantity), 0);
}

export const cartReducer = createReducer(
    initialCounterState,
    on(CartActions.addToCart, (state, { product }) => {
        const updatedProduct = [...state.products, product];
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct),
        };
    }),

    on(CartActions.incrementProduct, (state, { productId }) => {
        console.log(state);
        console.log(productId);
        const updatedProduct = state.products.map((product) => product.id === productId ? { ...product, quantity: product.quantity + 1 } : product);
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct),
        };
    }),

    on(CartActions.decrementProduct, (state, { productId }) => {
        console.log(state);
        console.log(productId);
        const updatedProduct = state.products.map((product) => product.id === productId ? { ...product, quantity: product.quantity - 1 } : product);
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct),
        };
    }),

    on(CartActions.removeProduct, (state, { productId }) => {
        console.log(state);
        console.log(productId);
        //este filter devuelve true si el id del producto actual es diferente al productId (Lo cual, como el filter devuelve un arreglo con todos elementos que cumplan la condicion, va a retornar los productos que tengai id distintos al que le llega por parametro (props))
        const updatedProduct = state.products.filter((product) => product.id !== productId);
        return {
            ...state,
            products: updatedProduct,
            totalPrice: calculateTotalPrice(updatedProduct),
        };
    }),
)