import React from "react";

interface IProductSizesProps {
  sizes: string[];
  selectedSize: string;
  setSelectedSize: (size: string) => void;
}

function ProductSizes({ sizes, selectedSize, setSelectedSize }: IProductSizesProps) {

  return (
    <div className="flex gap-2">
      {sizes.map((size) => (
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
