import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import { IProduct } from "../interfaces/IProduct";

function Home() {

  const [product, setProduct] = useState<IProduct[]>([])
  const [productsOffer, setProductOffer] = useState<IProduct[]>([])

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
        const products = data.filter((product: IProduct) => product.highlight);
        const productsOffer = data.filter((product: IProduct) => product.offer);
        setProduct(products.slice(0, 4));
        setProductOffer(productsOffer.slice(0, 4));
      })
      .catch(console.error);
  }, []);

  return (
    <main>
      <section className="bg-white100 h-110 flex justify-between relative">
        <div className="flex flex-col justify-center my-34 ml-46">
          <h2 className="text-32px font-semibold text-black800 mb-3">
            Fresh Arrivals Online
          </h2>
          <p className="text-sm text-black600 mb-12">
            Discover Our Newest Collection Today.
          </p>
          <div className="w-46">
            <Button children={"View Collection"} arrow={true} />
          </div>
        </div>
        <div>
          <img
            src="/Burst-pucker.svg"
            alt="burst pucker"
            className="absolute top-23 right-140"
          />
          <div className="w-85 h-85 bg-white200 rounded-full absolute bottom-3 right-1/6"></div>
          <img
            src="/Hero Image.svg"
            alt="hero image"
            className="absolute bottom-0 right-1/6"
          />
        </div>
      </section>

      <section className="grid grid-cols-3 gap-14 mx-43 my-22 h-54">
        <div>
          <div className="h-12 w-12 bg-white100 rounded-full flex justify-center items-center mb-6 mt-4">
            <img src="/shipping.svg" alt="shipping" />
          </div>
          <h2 className="text-black800 font-semibold mb-3">Free Shipping</h2>
          <p className="text-black500 text-sm w-70">
            Upgrade Your Style Today And Get FREE Shipping on all orders! Don't
            Miss Out.
          </p>
        </div>
        <div>
          <div className="h-12 w-12 bg-white100 rounded-full flex justify-center items-center mb-6 mt-4">
            <img src="/guarantee.svg" alt="guarantee" />
          </div>
          <h2 className="text-black800 font-semibold mb-3">
            Satisfaction Guarantee
          </h2>
          <p className="text-black500 text-sm w-70">
            Shop confidently with our Satisfaction Guarantee: Love it or get a
            refund.
          </p>
        </div>
        <div>
          <div className="h-12 w-12 bg-white100 rounded-full flex justify-center items-center mb-6 mt-4">
            <img src="/secure.svg" alt="secure" />
          </div>
          <h2 className="text-black800 font-semibold mb-3">Secure Payment</h2>
          <p className="text-black500 text-sm w-70">
            Your security is our priority. Your payments are secure with us.
          </p>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center">
          <p className="text-black300 font-medium text-xs mb-2">SHOP NOW</p>
          <h2 className="text-black900 font-bold text-2xl">Best Selling</h2>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-20 mb-42 mx-43 h-108">
          {product.map((product) => (
            <ProductCard product={product}/>
          ))}
        </div>
      </section>

      <section className="flex justify-between mb-38 border border-t-white100 border-b-white100 border-r-transparent border-l-transparent bg-gradient-to-r from-white100 to-white">
        <div className="mt-13 ml-43">
          <h2 className="text-black900 text-2xl font-bold mb-6">
            Browse Our Fashion Paradise!
          </h2>
          <p className="text-sm text-black500 mb-8">
            Step into a world of style and explore our diverse collection of
            clothing categories.
          </p>
          <div className="w-44">
            <Button children={"Start Browsing"} arrow={true} />
          </div>
        </div>
        <div className="mr-53">
          <img src="/Category Image.svg" alt="Category Image" />
        </div>
      </section>

      <section>
        <div className="flex justify-center">
          <h2 className="text-sm font-medium text-black800 px-4 py-1 border border-white200 rounded-full">
            On Offer
          </h2>
        </div>
        <div className="grid grid-cols-4 gap-5 mt-12 mb-48 mx-43 h-108">
          {productsOffer.map((product) => (
            <ProductCard product={product}/>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
