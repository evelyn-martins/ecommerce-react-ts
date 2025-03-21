import React from "react";
import { useNavigate } from "react-router-dom";
import CartCounter from "./CartCounter";

function Header() {

  const navigate = useNavigate();

  return (
    <header className="border border-transparent border-b-white100">
      <div className="flex items-center justify-between mx-40 px-3 py-5">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-black900 flex justify-center items-center rounded-full mr-3 cursor-pointer" onClick={() => {navigate("/")}}>
              <img src="/logo.svg" alt="logo" />
            </div>
            <div>
              <h1 className="font-extrabold text-xl font-manrope text-black900 cursor-pointer" onClick={() => {navigate("/")}}>
                UrbanVibe
              </h1>
            </div>
          </div>
          <nav className="ml-26">
            <ul className="flex items-center">
              <li className="mr-8 text-sm font-medium text-black500 hover:text-black900 transition-all cursor-pointer" onClick={() => {navigate("/")}}>
                  Home
              </li>
              <li className="mr-8 text-sm font-medium text-black500 hover:text-black900 transition-all cursor-pointer" onClick={() => {navigate("/listing")}}>
                  Shop
              </li>
              <li className="text-sm font-medium text-black500 hover:text-black900 transition-all cursor-pointer" onClick={() => navigate("*")}>
                  About
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex">
          <CartCounter />
          <img src="/user.svg" alt="user" className="cursor-pointer hover:scale-105" onClick={() => navigate("/profile")} />
        </div>
      </div>
    </header>
  );
}

export default Header;
