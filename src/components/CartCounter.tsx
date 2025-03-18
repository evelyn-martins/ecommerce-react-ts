import React from "react";
import { useAppSelector } from "../store";

function CartCounter() {
  const count = useAppSelector((state) => state.cart.count);

  return (
    <div className="relative">
      <img src="/cart.svg" alt="cart" className="mr-8" />
      {count > 0 && (
        <p className="bg-redCart text-[10px] text-white font-bold w-[15px] h-[15px] rounded-full flex justify-center absolute right-1/2 top-2/3">
          {count}
        </p>
      )}
    </div>
  );
}

export default CartCounter;
