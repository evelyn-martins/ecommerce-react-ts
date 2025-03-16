import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import ProductColors from "../components/ProductColors";
import ProductSizes from "../components/ProductSizes";
import ProductQuantity from "../components/ProductQuantity";
import ProductCard from "../components/ProductCard";
import { useLocation } from "react-router-dom";
import { IProduct } from "../interfaces/IProduct";
import Button from "../components/Button";

function Product() {
  const location = useLocation();
  const {product} = location.state as { product: IProduct };
  const [currentImg, setCurrentImg] = useState<number>(0);
  const {image, name, price, inStock} = product;
  const [similarProducts, setSimilarProducts] = useState<IProduct[]>([])

  const handlePreviousImg = () => {
    setCurrentImg((prevImg) => {
      if (prevImg === 0) {
        return product.image.length - 1;
      } else {
        return prevImg - 1;
      }
    });
  };

  const handleNextImg = () => {
    setCurrentImg((prevImg) => {
      if (prevImg === product.image.length - 1) {
        return 0;
      } else {
        return prevImg + 1;
      }
    });
  };

  useEffect(() => {
      fetch("http://localhost:3000/products")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Falha na requisição");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const productsFilter = data.filter((products: IProduct) => products.category === product.category)
          setSimilarProducts(productsFilter.slice(0, 4));
        })
        .catch(console.error);
    }, []);

  return (
    <>
      <Breadcrumb children={product.name} title="" />
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
                  src={image[currentImg]}
                  alt="chevron left"
                  className="w-72 h-101 object-contain"
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
              {product.image.map((product, index) => (
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
                {name}
              </h2>
              <img src="/share.svg" alt="Share" className="cursor-pointer" />
            </div>
            <div className="mt-3">
              <div className="flex gap-2">
                <div className="flex gap-2 items-center bg-white100 rounded-full w-fit px-4 py-0.5">
                  <img src="/star.svg" alt="star" />
                  <p className="text-xs text-black500 font-medium">
                    {product.stars} — {product.reviews} Reviews
                  </p>
                </div>
                <p className="text-black900 border border-black100 px-3 py-1 rounded-full text-xs font-medium w-fit">
                  {inStock ? "IN STOCK" : "NO STOCK"}
                </p>
              </div>
              <div className="mt-6">
                <p className="text-black900 font-semibold text-lg">${price}</p>
              </div>
            </div>
            {product.inStock && (
              <div>
                <div className="mt-8 mb-6.5">
                  <p className="text-xs font-medium text-black500 mb-2.5">
                    AVAILABLE COLORS
                  </p>
                  <ProductColors product={product}/>
                </div>
                <div>
                  <p className="text-xs font-medium text-black500 mb-2.5">
                    SELECT SIZE
                  </p>
                  <ProductSizes product={product}/>
                </div>
                <div className="mt-8">
                  <p className="text-xs font-medium text-black500 mb-2.5">
                    QUANTITY
                  </p>
                  <ProductQuantity product={product}/>
                </div>
                <div className="mt-10 w-71">
                  <Button children="Add to cart" arrow={false}/>
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
            {similarProducts.map((product) => (
              <ProductCard product={product}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Product;
