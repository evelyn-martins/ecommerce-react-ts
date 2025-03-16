import React, { useState } from "react";
import { IProduct } from "../interfaces/IProduct";

interface IProductSizesProps {
  product: IProduct;
}

function ProductSizes({ product }: IProductSizesProps) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0]);

  return (
    /*<div className="flex gap-2">
      <div className={`text-black900 text-xs font-medium h-10 w-10 border border-black100 ${selectedSize === "S" ? "border-black900" : "border-black100"} flex items-center justify-center rounded-sm cursor-pointer`} onClick={() => {setSelectedSize("S")}}>
        S
      </div>
      <div className={`text-black900 text-xs font-medium h-10 w-10 border border-black100 ${selectedSize === "M" ? "border-black900" : "border-black100"} flex items-center justify-center rounded-sm cursor-pointer`} onClick={() => {setSelectedSize("M")}}>
        M
      </div>
      <div className={`text-black900 text-xs font-medium h-10 w-10 border border-black100 ${selectedSize === "X" ? "border-black900" : "border-black100"} flex items-center justify-center rounded-sm cursor-pointer`} onClick={() => {setSelectedSize("X")}}>
        X
      </div>
      <div className={`text-black900 text-xs font-medium h-10 w-10 border border-black100 ${selectedSize === "XL" ? "border-black900" : "border-black100"} flex items-center justify-center rounded-sm cursor-pointer`} onClick={() => {setSelectedSize("XL")}}>
        XL
      </div>
      <div className={`text-black900 text-xs font-medium h-10 w-10 border border-black100 ${selectedSize === "XXL" ? "border-black900" : "border-black100"} flex items-center justify-center rounded-sm cursor-pointer`} onClick={() => {setSelectedSize("XXL")}}>
        XXL
      </div>
    </div>*/

    <div className="flex gap-2">
      {product.sizes.map((size) => (
        <div
          className={`text-black900 text-xs font-medium h-10 w-10 border border-black100 ${
            size === selectedSize ? "border-black900" : "border-black100"
          } flex items-center justify-center rounded-sm cursor-pointer text-center`}
          onClick={() => {
            setSelectedSize(size);
          }}
        >
          {size}
        </div>
      ))}
    </div>
  );
}

export default ProductSizes;
