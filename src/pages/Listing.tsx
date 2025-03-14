import React from "react";
import TagName from "../components/TagName";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Breadcrumb from "../components/Breadcrumb";

function Listing() {
  return (
    <>
      <div className="bg-white100">
        <Breadcrumb children="Search" />
      </div>
      <main className="flex mb-32">
        <aside className="border border-black100 rounded-md pl-4 pt-6 pr-3 pb-8 w-60 mt-8 ml-43 h-fit">
          <div>
            <h2 className="text-sm font-medium text-black900 mb-4">
              Categories
            </h2>
            <ul>
              <li className="px-1 py-3 border border-transparent border-b-white200 flex">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5 appearance-none border-2 border-black100 rounded-sm cursor-pointer checked:bg-black500"
                />
                <label className="text-sm text-black600 ml-2.5">Perfume</label>
              </li>
              <li className="text-sm text-black600 px-1 py-3 border border-transparent border-b-white200 flex">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5 appearance-none border-2 border-black100 rounded-sm cursor-pointer checked:bg-black500"
                />
                <label className="text-sm text-black600 ml-2.5">Trousers</label>
              </li>
              <li className="text-sm text-black600 px-1 py-3 border border-transparent border-b-white200 flex">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5 appearance-none border-2 border-black100 rounded-sm cursor-pointer checked:bg-black500"
                />
                <label className="text-sm text-black600 ml-2.5">Shoe</label>
              </li>
              <li className="text-sm text-black600 px-1 py-3 border border-transparent border-b-white200 flex">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5 appearance-none border-2 border-black100 rounded-sm cursor-pointer checked:bg-black500"
                />
                <label className="text-sm text-black600 ml-2.5">Handbag</label>
              </li>
              <li className="text-sm text-black600 px-1 py-3 border border-transparent border-b-white200 flex">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5 appearance-none border-2 border-black100 rounded-sm cursor-pointer checked:bg-black500"
                />
                <label className="text-sm text-black600 ml-2.5">Hat</label>
              </li>
              <li className="text-sm text-black600 px-1 py-3 border border-transparent border-b-white200 flex">
                <input
                  type="checkbox"
                  className="w-4.5 h-4.5 appearance-none border-2 border-black100 rounded-sm cursor-pointer checked:bg-black500"
                />
                <label className="text-sm text-black600 ml-2.5">Thermos</label>
              </li>
            </ul>
          </div>
          <div className="flex flex-col mt-10 mb-8">
            <label className="mb-6 text-sm text-black900 font-medium">
              Price
            </label>
            <input type="range" />
          </div>
        </aside>

        <section>
          <div className="flex">
            <div className="flex flex-col mb-6 mt-10 ml-7">
              <p className="text-black900 text-sm font-medium mb-3">
                Applied Filters:
              </p>
              <div className="flex gap-3">
                <TagName children={"Perfume"} />
                <TagName children={"$ 890,00"} />
              </div>
            </div>
            <div className="relative h-fit mt-15 ml-75">
              <input
                type="search"
                placeholder="Search products"
                className="h-11 w-66 border border-black100 rounded-md px-11 text-sm font-medium text-black300"
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
              Showing 1-9 of 36 results.
            </p>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-x-6 gap-y-8 mt-4 ml-5.5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>

          <div className="flex justify-center mt-16">
            <Pagination />
          </div>
        </section>
      </main>
    </>
  );
}

export default Listing;
