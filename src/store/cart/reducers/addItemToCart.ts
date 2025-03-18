import { PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../types/CartState";
import { CartItem } from "../types/CartItem";

export const addItemToCart = (
    state: CartState,
    action: PayloadAction<CartItem>
) => {
    const index = state.items.findIndex((item) => (
        item.productId === action.payload.productId && item.color === action.payload.color && item.size === action.payload.size
    ));

    state.count += action.payload.quantity;
    state.subTotal += action.payload.price * action.payload.quantity;
    state.tax = state.subTotal * 0.2;

    if(index !== -1){
        state.items[index].quantity += action.payload.quantity;
        return;
    }

    state.items.push(action.payload);
    console.log("add item to cart",state.items);
}