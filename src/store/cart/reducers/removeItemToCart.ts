import { PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../types/CartState";

export const removeItemToCart = (
    state: CartState,
    action: PayloadAction<string>
) => {
    const item = state.items.find((item) => (
        item.id === action.payload
    ));
    state.items = state.items.filter((item) => (item.id !== action.payload));
    
    if(item){
        state.count -= item.quantity;
        state.subTotal -= item.price * item.quantity;
        state.tax = state.subTotal * 0.2;
        return;
    }
}