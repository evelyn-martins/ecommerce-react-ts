import React from "react";

function ProductCard() {
  return (
    <div className="border border-black px-2 py-4">
      <div className="flex justify-center bg-white100">
        <img src="/camiseta.svg" alt="camiseta" />
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium text-black900">
          Classic Monochrome Tees
        </p>
        <div className="flex gap-2 mt-4 items-center">
          <p className="text-black900 border border-black100 px-3 py-1 rounded-full text-xs font-medium w-fit">
            IN STOCK
          </p>
          <p className="text-sm text-black600">$35.00</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
