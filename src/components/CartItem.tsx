import React, { useState } from "react";
import ProductQuantity from "./ProductQuantity";
import type { CartItem } from "../store/cart/types/CartItem";
import { useAppDispatch } from "../store";
import { cartActions } from "../store/cartSlice";

interface CartItemProps {
  product: CartItem;
}

function CartItem({product}: CartItemProps) {

  const [selectedQuantity, setSelectedQuantity] = useState<number>(product.quantity);
  const dispatch = useAppDispatch();

  const handleAddQuantity = () => {
    dispatch(
      cartActions.incrementItem(product.id)
    )
  }

  const handleMinusQuantity = () => {
    dispatch(
      cartActions.decrementItem(product.id)
    )
  }

  const handleRemoveItem = () => {
    dispatch(
      cartActions.removeItemToCart(product.id)
    )
  }

  return (
    <div className="flex h-20 justify-between mb-10">
      <div className="flex">
        <div className="w-20 h-full bg-white100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="ml-6 mt-2">
          <p className="text-black900 font-medium text-sm">
            {product.name}
          </p>
          <div className="flex gap-2 items-center mt-1.5">
            <p className="text-black500 font-medium text-xs">Color:</p>
            <div className={`bg-${product.color}400 rounded-full w-3 h-3`}></div>
            <p className="text-black500 font-medium text-xs">—</p>
            <p className="text-black500 font-medium text-xs">Size: {product.size}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <p className="mr-8">${product.price}</p>
        <ProductQuantity selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} addQuantity={handleAddQuantity} minusQuantity={handleMinusQuantity} />
        <div className="bg-white100 w-10 h-10 flex items-center justify-center ml-4 rounded-sm cursor-pointer hover:bg-white200 transition-all" onClick={handleRemoveItem}>
          <img src="/close.svg" alt="close" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
