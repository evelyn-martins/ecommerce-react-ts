import React from "react";
import { useNavigate } from "react-router-dom";
import { IProduct } from "../interfaces/IProduct";

interface IProductCardProps {
  product: IProduct
}

function ProductCard({product}: IProductCardProps) {
  const navigate = useNavigate();
  
  if (!product) {
    return <div className="flex justify-center"><img src="/loading.gif" alt="loading" className="h-8 w-8"/></div>
  }

  const handleClick = () => {
    navigate(`/product/${product.id}`, {state: {product}})
  }

  return (
    <div className="px-2 py-4 cursor-pointer hover:scale-108 hover:transition-all" onClick={handleClick}>
      <div className="flex justify-center bg-white100">
        <img src={product.image[0]} alt="image product" className="w-59.5 h-78 object-contain"/>
      </div>
      <div className="mt-6">
        <p className="text-sm font-medium text-black900">
          {product.name}
        </p>
        <div className="flex gap-2 mt-4 items-center">
          <p className="text-black900 border border-black100 px-3 py-1 rounded-full text-xs font-medium w-fit">
            {product.inStock ? "IN STOCK" : "NO STOCK"}
          </p>
          <p className="text-sm text-black600">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
