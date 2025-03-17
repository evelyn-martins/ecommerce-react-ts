import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductQuantity from "../components/ProductQuantity";
import Button from "../components/Button";

function Cart() {
  return (
    <div>
      <div className="h-40 bg-white100 flex items-center">
        <Breadcrumb children="Cart" title="Cart" />
      </div>

      <div className="flex mb-32">
        <div className="flex-2/3 flex flex-col ml-43.5 mr-30.5 mt-18">
          <p className="text-black900 font-semibold">Your cart</p>
          <div className="w-full h-[1px] border border-white200 mt-4.5 mb-12"></div>
          <div className="flex h-20 justify-between mb-10">
            <div className="flex">
              <div className="w-20 h-full bg-white100">
                <img
                  src="/Product.png"
                  alt="product"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-6 mt-2">
                <p className="text-black900 font-medium text-sm">
                  Raw Black T-Shirt Lineup
                </p>
                <div className="flex gap-2 items-center mt-1.5">
                  <p className="text-black500 font-medium text-xs">Color:</p>
                  <div className="bg-green400 rounded-full w-3 h-3"></div>
                  <p className="text-black500 font-medium text-xs">—</p>
                  <p className="text-black500 font-medium text-xs">Size: M</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="mr-8">$ 75.00</p>
              <ProductQuantity />
              <div className="bg-white100 w-10 h-10 flex items-center justify-center ml-4 rounded-sm cursor-pointer hover:bg-white200 transition-all">
                <img src="/close.svg" alt="close" />
              </div>
            </div>
          </div>
          <div className="flex h-20 justify-between mb-10">
            <div className="flex">
              <div className="w-20 h-full bg-white100">
                <img
                  src="/Product.png"
                  alt="product"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="ml-6 mt-2">
                <p className="text-black900 font-medium text-sm">
                  Raw Black T-Shirt Lineup
                </p>
                <div className="flex gap-2 items-center mt-1.5">
                  <p className="text-black500 font-medium text-xs">Color:</p>
                  <div className="bg-green400 rounded-full w-3 h-3"></div>
                  <p className="text-black500 font-medium text-xs">—</p>
                  <p className="text-black500 font-medium text-xs">Size: M</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <p className="mr-8">$ 75.00</p>
              <ProductQuantity />
              <div className="bg-white100 w-10 h-10 flex items-center justify-center ml-4 rounded-sm cursor-pointer hover:bg-white200 transition-all">
                <img src="/close.svg" alt="close" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1/3 flex flex-col mt-14 mr-43.5 border border-black100 px-6 rounded-sm h-fit">
          <p className="text-black900 font-semibold mt-8 mb-10">
            Order Summary
          </p>
          <div className="flex flex-col gap-3 mb-6 border-b border-black100">
            <div className="flex justify-between">
              <p className="text-black500 font-medium text-sm">Subtotal:</p>
              <p className="text-black900 font-medium text-sm">$ 75.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-black500 font-medium text-sm">Shipping:</p>
              <p className="text-black900 font-medium text-sm">Free</p>
            </div>
            <div className="flex justify-between pb-6">
              <p className="text-black500 font-medium text-sm">Tax:</p>
              <p className="text-black900 font-medium text-sm">$ 3.00</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-6">
              <p className="text-black900 font-medium text-sm">Total:</p>
              <p className="text-black900 font-medium">$ 78.00</p>
            </div>
            <div>
              <Button children="Checkout" arrow={false} />
            </div>
            <div className="flex justify-center mt-8 mb-10">
              <p className="text-black900 font-medium text-xs underline hover:text-black500 cursor-pointer transition-all">
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
