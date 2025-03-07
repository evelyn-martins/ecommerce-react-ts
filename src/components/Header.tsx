import React from "react";

function Header() {
  return (
    <header>
      <div className="flex items-center justify-between mx-40 px-3 py-5">
        <div className="flex items-center">
          <div className="flex items-center">
            <a href="#">
              <div className="h-10 w-10 bg-black900 flex justify-center items-center rounded-full mr-3">
                <img src="/logo.svg" alt="logo" />
              </div>
            </a>
            <a href="#">
              <div>
                <h1 className="font-extrabold text-xl font-manrope text-black900">Ecommerce</h1>
              </div>
            </a>
          </div>
          <nav className="ml-26">
            <ul className="flex">
              <li className="mr-8">
                <a href="#" className="text-sm font-medium text-black500 hover:text-black900 transition-all">Home</a>
              </li>
              <li className="mr-8">
                <a href="#" className="text-sm font-medium text-black500 hover:text-black900 transition-all">Shop</a>
              </li>
              <li>
                <a href="#" className="text-sm font-medium text-black500 hover:text-black900 transition-all">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
          <img src="/cart.svg" alt="cart" className="mr-8" />
          <img src="/user.svg" alt="user" />
        </div>
      </div>
    </header>
  );
}

export default Header;
