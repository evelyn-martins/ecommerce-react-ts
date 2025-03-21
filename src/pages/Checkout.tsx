import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";
import { useAppSelector } from "../store";
import { useNavigate } from "react-router-dom";

interface zipCodeInfo {
  state: string;
  city: string;
  street: string;
}

function Checkout() {
  const [zipCode, setZipCode] = useState<string>("");
  const [zipCodeInfo, setZipCodeInfo] = useState<zipCodeInfo | null>(null);

  const subTotal = useAppSelector((state) => state.cart.subTotal);
  const tax = useAppSelector((state) => state.cart.tax);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://brasilapi.com.br/api/cep/v1/${zipCode}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Falha na requisição");
        }
        return response.json();
      })
      .then((data) => {
        setZipCodeInfo(data);
      });
  }, [zipCode]);

  console.log("cep", zipCodeInfo);

  return (
    <div>
      <div className="h-40 flex items-center bg-white100">
        <Breadcrumb children="Checkout" title={true} />
      </div>

      <div className="flex">
        <form className="flex-1/2 mr-30 ml-43 mb-50 mt-18">
          <p className="text-black900 font-semibold mb-16">Shipping Address</p>
          <div className="flex gap-4 mb-3.5">
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">
                Zip Code
              </label>
              <input
                type="text"
                className="border border-black100 rounded-md py-2.5 px-2"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">
                Country
              </label>
              <input
                type="text"
                className="border border-black100 rounded-md py-2.5 px-2"
              />
            </div>
          </div>
          <div className="flex gap-4 mb-3.5">
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">City</label>
              <input
                type="text"
                className="border border-black100 rounded-md py-2.5 px-2"
                value={zipCodeInfo?.city}
              />
            </div>
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">State</label>
              <input
                type="text"
                className="border border-black100 rounded-md py-2.5 px-2"
                value={zipCodeInfo?.state}
              />
            </div>
          </div>
          <div className="flex flex-col w-134">
            <label className="text-black600 font-medium text-sm">
              Street Address
            </label>
            <input
              type="text"
              className="border border-black100 rounded-md py-2.5 px-2"
              value={zipCodeInfo?.street}
            />
          </div>
          <div className="flex gap-4 mt-12.5">
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">Email</label>
              <input
                type="text"
                className="border border-black100 rounded-md py-2.5 px-2"
              />
            </div>
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">
                Full name
              </label>
              <input
                type="text"
                className="border border-black100 rounded-md py-2.5 px-2"
              />
            </div>
          </div>
        </form>
        <div className="h-126 border border-black100 w-[1px] mt-14"></div>
        <div className="flex-1/2 flex flex-col mt-14 mr-43 ml-16">
          <p className="text-black900 font-semibold mt-4">Your Order</p>
          <div className="ml-auto mb-16">
            <button className="border border-black200 text-black500 font-medium text-sm rounded-sm px-6 py-2 cursor-pointer hover:bg-white100 transition-all" onClick={() => navigate("/cart")}>
              Edit cart
            </button>
          </div>
          <div className="flex flex-col gap-3 mb-6 border-b border-black100">
            <div className="flex justify-between">
              <p className="text-black500 font-medium text-sm">Subtotal:</p>
              <p className="text-black900 font-medium text-sm">$ {subTotal.toFixed(2)}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-black500 font-medium text-sm">Shipping:</p>
              <p className="text-black900 font-medium text-sm">Free</p>
            </div>
            <div className="flex justify-between pb-6">
              <p className="text-black500 font-medium text-sm">Tax:</p>
              <p className="text-black900 font-medium text-sm">$ {tax.toFixed(2)}</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between mb-6">
              <p className="text-black900 font-medium text-sm">Total:</p>
              <p className="text-black900 font-medium">$ {(subTotal+tax).toFixed(2)}</p>
            </div>
            <div>
              <Button children="Place Order" arrow={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
