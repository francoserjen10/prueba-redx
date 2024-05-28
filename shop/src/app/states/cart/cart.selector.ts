import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartState } from "./cart.reducer";

export const selectCartSelector = (state: AppState) => state.cart;

export const selectCartProducts = createSelector(
    selectCartSelector,
    (state: CartState) => state.products
);

export const selectTotal = createSelector(
    selectCartSelector,
    (state: CartState) => state.totalPrice
);