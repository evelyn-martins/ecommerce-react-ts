import { PayloadAction } from "@reduxjs/toolkit";
import { CartState } from "../types/CartState";

export const decrementItem = (
    state: CartState,
    action: PayloadAction<string>
) => {
    const index = state.items.findIndex((item) => (
        item.id === action.payload
    ));

    if(index !== -1){
        state.items[index].quantity -= 1;
        state.count -= 1;
        state.subTotal -= state.items[index].price;
        state.tax = state.subTotal * 0.2;
        return;
    }
}