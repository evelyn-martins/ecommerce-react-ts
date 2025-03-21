import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import CartItem from "../components/CartItem";
import { useAppSelector } from "../store";
import { useNavigate } from "react-router-dom";

function Cart() {

  const navigate = useNavigate();

  const products = useAppSelector((state) => state.cart.items);
  const subTotal = useAppSelector((state) => state.cart.subTotal);
  const tax = useAppSelector((state) => state.cart.tax);


  return (
    <div>
      <div className="h-40 bg-white100 flex items-center">
        <Breadcrumb children="Cart" title={true} />
      </div>

      <div className="flex mb-32">
        <div className="flex-2/3 flex flex-col ml-43.5 mr-30.5 mt-18">
          <p className="text-black900 font-semibold">Your cart</p>
          <div className="w-full h-[1px] border border-white200 mt-4.5 mb-12"></div>
          <div>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
        </div>
        <div className="flex-1/3 flex flex-col mt-14 mr-43.5 border border-black100 px-6 rounded-sm h-fit">
          <p className="text-black900 font-semibold mt-8 mb-10">
            Order Summary
          </p>
          <div className="flex flex-col gap-3 mb-6 border-b border-black100">
            <div className="flex justify-between">
              <p className="text-black500 font-medium text-sm">Subtotal:</p>
              <p className="text-black900 font-medium text-sm">$ {subTotal <= 0 ? "0.00" : subTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-black500 font-medium text-sm">Shipping:</p>
              <p className="text-black900 font-medium text-sm">Free</p>
            </div>
            <div className="flex justify-between pb-6">
              <p className="text-black500 font-medium text-sm">Tax:</p>
              <p className="text-black900 font-medium text-sm">$ {tax <= 0 ? "0.00" : tax.toFixed(2)}</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-6">
              <p className="text-black900 font-medium text-sm">Total:</p>
              <p className="text-black900 font-medium">$ {subTotal <= 0 ? "0.00" : (subTotal + tax).toFixed(2)}</p>
            </div>
            <div>
              <Button children="Checkout" arrow={false} onClick={() => navigate("/checkout")} />
            </div>
            <div className="flex justify-center mt-8 mb-10">
              <p className="text-black900 font-medium text-xs underline hover:text-black500 cursor-pointer transition-all" onClick={() => {
                window.scroll(0, 0);
                navigate("/listing")}}>
                Continue Shopping
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
