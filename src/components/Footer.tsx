import React from "react";
import Button from "./Button";

function Footer() {
  return (
    <footer>
      <div className="flex justify-between bg-white100">
        <div className="my-16 ml-43">
          <h2 className="font-bold text-2xl text-black900 mb-6">
            Join Our Newsletter
          </h2>
          <p className="text-sm text-black500 leading-1">
            We love to surprise our subscribers with occasional gifts.
          </p>
        </div>
        <div className="mr-43 my-16 flex items-center gap-4">
          <input
            type="text"
            placeholder="Your email address"
            className="px-4 py-2.5 border border-black100 rounded-md placeholder:text-black300 placeholder:text-sm placeholder:font-medium w-80"
          />
          <Button children={"Subscribe"} arrow={false} />
        </div>
      </div>
      <div className="flex justify-between mb-26">
        <div className="mt-22 ml-43 mr-24">
          <div className="flex items-center gap-4 mb-3">
            <div className="border border-black100 rounded-md h-11 w-11 flex justify-center items-center">
              <img src="/logo black.svg" alt="logo" />
            </div>
            <h2 className="font-extrabold text-xl font-manrope">Ecommerce</h2>
          </div>
          <p className="text-sm text-black500">
            DevCut is a YouTube channel for practical project-based learning.
          </p>
          <div className="flex gap-6 mt-8 items-center">
            <a href="https://github.com/" target="_blank">
              <img src="/github.svg" alt="GitHub" className="hover:scale-125"/>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <img src="/instagram.svg" alt="Instagram" className="hover:scale-125"/>
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <img src="/youtube.svg" alt="YouTube" className="hover:scale-125"/>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-18 mt-18.5">
          <div className="flex flex-col gap-4">
            <h2 className="text-black300 text-sm font-medium mb-10">SUPPORT</h2>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">FAQ</a>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">Terms of use</a>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">Privacy Policy</a>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-black300 text-sm font-medium mb-10">COMPANY</h2>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">About us</a>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">Contact</a>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">Careers</a>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-black300 text-sm font-medium mb-10">SHOP</h2>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">My Account</a>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">Checkout</a>
            <a href="#" className="text-black500 text-sm font-medium hover:text-black900">Cart</a>
          </div>
        </div>
        <div className="mt-19 mr-42 ml-39">
          <h2 className="text-black300 text-sm font-medium mb-10">ACCEPTED PAYMENTS</h2>
          <div className="flex gap-8">
            <img src="/mastercard.svg" alt="MasterCard" className="grayscale-100"/>
            <img src="/amex.svg" alt="Amex" className="grayscale-100"/>
            <img src="/visa.svg" alt="Visa" className="grayscale-100"/>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-6 border border-t-white100 border-transparent">
        <p className="text-sm text-black500">© 2025 DevCut. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
