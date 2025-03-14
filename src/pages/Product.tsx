import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductColors from "../components/ProductColors";
import ProductSizes from "../components/ProductSizes";
import ProductQuantity from "../components/ProductQuantity";
import ButtonPrimary from "../components/ButtonPrimary";
import ProductCard from "../components/ProductCard";

function Product({ inStock }: { inStock: boolean }) {
  const products = ["/Product.png", "/Product2.webp"];
  const [currentImg, setCurrentImg] = useState<number>(0);

  const handlePreviousImg = () => {
    setCurrentImg((prevImg) => {
      if (prevImg === 0) {
        return products.length - 1;
      } else {
        return prevImg - 1;
      }
    });
  };

  const handleNextImg = () => {
    setCurrentImg((prevImg) => {
      if (prevImg === products.length - 1) {
        return 0;
      } else {
        return prevImg + 1;
      }
    });
  };

  return (
    <>
      <Breadcrumb children="Black man t-shirt" />
      <main>
        <section className="flex mx-43 h-143.5">
          <div className="flex flex-1/2 pt-7.5 bg-white100 flex-col justify-between">
            <div className="flex justify-between">
              <img
                src="/chevron left2.svg"
                className="w-10 h-10 cursor-pointer my-auto px-1 py-1 opacity-15 hover:scale-115"
                onClick={handlePreviousImg}
              />
              <div>
                <img
                  src={products[currentImg]}
                  alt="chevron left"
                  className="w-72 h-101 object-cover"
                />
              </div>
              <img
                src="/chevron right2.svg"
                alt="chevron right"
                className="w-10 h-10 cursor-pointer my-auto px-1 py-1 opacity-15 hover:scale-115"
                onClick={handleNextImg}
              />
            </div>
            <div className="flex items-end gap-2 justify-center mb-8">
              {products.map((product, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 bg-black200 rounded-full ${
                    index === currentImg ? "bg-black900" : "bg-black200"
                  }`}
                ></div>
              ))}
            </div>
          </div>
          <div className="flex-1/2 pl-30">
            <div className="flex justify-between items-center mt-3">
              <h2 className="text-2xl font-bold text-black900">
                Raw Black T-Shirt Lineup
              </h2>
              <img src="/share.svg" alt="Share" className="cursor-pointer" />
            </div>
            <div className="mt-3">
              <div className="flex gap-2">
                <div className="flex gap-2 items-center bg-white100 rounded-full w-fit px-4 py-0.5">
                  <img src="/star.svg" alt="star" />
                  <p className="text-xs text-black500 font-medium">
                    4.2 — 54 Reviews
                  </p>
                </div>
                <p className="text-black900 border border-black100 px-3 py-1 rounded-full text-xs font-medium w-fit">
                  {inStock ? "IN STOCK" : "NO STOCK"}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-black900 font-semibold text-lg">$75.00</p>
              </div>
            </div>
            {inStock && (
              <div>
                <div className="mt-8 mb-6.5">
                  <p className="text-xs font-medium text-black500 mb-2.5">
                    AVAILABLE COLORS
                  </p>
                  <ProductColors />
                </div>
                <div>
                  <p className="text-xs font-medium text-black500 mb-2.5">
                    SELECT SIZE
                  </p>
                  <ProductSizes />
                </div>
                <div className="mt-8">
                  <p className="text-xs font-medium text-black500 mb-2.5">
                    QUANTITY
                  </p>
                  <ProductQuantity />
                </div>
                <div className="mt-10">
                  <ButtonPrimary children="Add to cart" />
                </div>
                <p className="text-black500 font-medium text-xs mt-3">
                  — Free shipping on orders $100+
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="flex gap-8 items-center mx-auto my-44">
          <div className="flex gap-2.5 bg-white100 w-60 rounded-lg px-6 py-2 ml-43">
            <img src="/more.svg" alt="more" />
            <p className="text-black900 text-sm font-medium">Details</p>
          </div>
          <div className="w-175">
            <p className="text-black900 font-semibold">Detail</p>
            <p className="text-black500 text-sm">
              Elevate your everyday style with our Men's Black T-Shirts, the
              ultimate wardrobe essential for modern men. Crafted with
              meticulous attention to detail and designed for comfort, these
              versatile black tees are a must-have addition to your collection.
              <br />
              The classic black color never goes out of style. Whether you're
              dressing up for a special occasion or keeping it casual, these
              black t-shirts are the perfect choice, effortlessly complementing
              any outfit.
            </p>
          </div>
        </section>

        <section className="mx-43.5 mb-36">
          <div className="mb-14">
            <h2 className="font-bold text-2xl text-black900 mb-2 ml-3">
              You might also like
            </h2>
            <p className="text-black300 text-xs font-medium ml-3.5">
              SIMILAR PRODUCTS
            </p>
          </div>
          <div className="grid grid-cols-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;
