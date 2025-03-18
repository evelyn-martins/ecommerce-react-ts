import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "./cart/types/CartState";
import { addItemToCart } from "./cart/reducers/addItemToCart";
import { incrementItem } from "./cart/reducers/incrementItem";
import { decrementItem } from "./cart/reducers/decrementItem";
import { removeItemToCart } from "./cart/reducers/removeItemToCart";

const initialState: CartState = {
    items: [],
    count: 0,
    subTotal: 0,
    tax: 0,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart,
        incrementItem,
        decrementItem,
        removeItemToCart
    }
})

export const cartActions = cartSlice.actions;