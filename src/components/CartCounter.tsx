import React from "react";
import { useAppSelector } from "../store";
import { useNavigate } from "react-router-dom";

function CartCounter() {
  const count = useAppSelector((state) => state.cart.count);
  const navigate = useNavigate();

  return (
    <div className="relative cursor-pointer hover:scale-105" onClick={() => navigate("/cart")}>
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
