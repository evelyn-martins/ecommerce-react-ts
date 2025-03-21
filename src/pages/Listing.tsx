import React, { useEffect, useState } from "react";
import TagName from "../components/TagName";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";
import { IProduct } from "../interfaces/IProduct";

function Listing() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [higherPrice, setHigherPrice] = useState<number>(0);
  const [inputPrice, setInputPrice] = useState<number>(0);
  const [count, setCount] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [startSlice, setStartSlice] = useState<number>(0);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha na requisição");
        }

        return response.json();
      })
      .then((data) => {

        const categoriesMap = new Set(
          data.map((product: IProduct) => product.category)
        ) as Set<string>;

        setCategories([...categoriesMap]);
        setProducts(data);
        setLoading(false);

        const higherPrice = Math.ceil(
          Math.max(...data.map((product: IProduct) => product.price))
        );

        setHigherPrice(higherPrice);
      })
      .catch(console.error);
      setLoading(false);

  }, [count]);

  const handleCategory = (category: string) => {
    setSelectedCategory(category);

    if (category === selectedCategory) {
      return setSelectedCategory("");
    }
  };

  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInputPrice(value);
    e.target.style.setProperty(
      "--range-value",
      `${(value / higherPrice) * 100}%`
    );
  };

  const resetRange = () => {
    setInputPrice(0);
    const rangeInput = document.querySelector('input[type="range"]') as HTMLInputElement;
    if (rangeInput) {
      rangeInput.style.setProperty("--range-value", "0%");
    }
  }

  const handleAddPage = () => {
    if(count < Math.ceil(products.length/9)){
      setCount( count + 1);
      setStartSlice(startSlice + 9);
      window.scroll(0, 0);
    }
  }

  const handleMinusPage = () => {
    if(count > 1){
      setCount(count - 1);
      setStartSlice(startSlice - 9);
      window.scroll(0, 0);
    }
  }

  return (
    <>
      <div className="bg-white100 h-16 flex items-center">
        <Breadcrumb children="Search" title={false} />
      </div>
      <main className="flex mb-32">
        <aside className="border border-black100 rounded-md pl-4 pt-6 pr-3 pb-8 w-60 mt-8 ml-43 h-fit">
          <div>
            <h2 className="text-sm font-medium text-black900 mb-4">
              Categories
            </h2>
            <ul>
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="px-1 py-3 border border-transparent border-b-white200 flex"
                >
                  <input
                    type="checkbox"
                    className="w-4.5 h-4.5 appearance-none border-2 border-black100 rounded-sm cursor-pointer checked:bg-black500"
                    onChange={() => handleCategory(category)}
                    checked={selectedCategory === category}
                  />
                  <label className="text-sm text-black600 ml-2.5">
                    {category}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col mt-10 mb-8">
            <label className="mb-6 text-sm text-black900 font-medium">
              Price
            </label>
            <input
              type="range"
              min={0}
              max={higherPrice}
              value={inputPrice}
              onChange={handleRange}
            />
            {inputPrice > 0 && (
              <div className="relative flex justify-center">
                <p className="bg-black900 text-white mt-3.5 font-medium text-xs px-2 py-1 rounded-sm w-fit">
                  $ {inputPrice.toFixed(2)}
                </p>
                <img src="/arrow black.svg" alt="arrow black" className="absolute top-2.5 left-22" />
              </div>
            )}
          </div>
        </aside>

        <section>
          <div className="flex">
            <div className="flex flex-col mb-6 mt-10 ml-7">
              <p className="text-black900 text-sm font-medium mb-3">
                Applied Filters:
              </p>
              <div className="flex gap-3">
                {selectedCategory &&
                  <TagName
                    children={selectedCategory}
                    onClick={() => setSelectedCategory("")}
                  />
                }
                {inputPrice > 0 && <TagName children={`$ ${inputPrice.toFixed(2)}`} onClick={resetRange} />}
              </div>
            </div>
            <div className="relative h-fit mt-15 ml-75">
              <input
                type="text"
                placeholder="Search products"
                value={search}
                className="h-11 w-66 border border-black100 rounded-md px-11 text-sm font-medium text-black300"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setSearch(e.target.value)
                }
              />
              <img
                src="/Icon.svg"
                alt="Icon"
                className="absolute top-3 left-3.5"
              />
            </div>
          </div>
          <div className="ml-7">
            <p className="text-black500 text-xs font-medium">
              Showing {startSlice + 1}-{startSlice + 9 > products.length ? products.length : startSlice + 9} of {products.length} results.
            </p>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-x-6 gap-y-8 mt-4 ml-5.5">
          {loading && <div className="col-span-3 mx-auto my-15"><img src="/loading.gif" alt="loading" className="h-12 w-12" /></div>}
            {selectedCategory
              ? products
                  .filter((product) => product.category === selectedCategory)
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : search
              ? products
                  .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
                  .map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))
              : inputPrice > 0 
              ? products.filter((product) => product.price <= inputPrice).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
              : (products.slice(startSlice, (startSlice + 9))).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
          </div>
          <div className="flex justify-center mt-16">
            <Pagination minusPage={handleMinusPage} addPage={handleAddPage} count={count} />
          </div>
        </section>
      </main>
    </>
  );
}

export default Listing;
