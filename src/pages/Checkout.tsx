import React from "react";
import Breadcrumb from "../components/Breadcrumb";

function Checkout() {
  return (
    <div>
      <div className="h-40 flex items-center bg-white100 mb-40">
        <Breadcrumb children="Checkout" title="Checkout" />
      </div>

      <div className="flex">
        <form className="flex-1/2 mr-30 ml-43 mb-50">
          <div className="flex gap-4 mb-3.5">
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">
                Zip Code
              </label>
              <input
                type="text"
                className="border border-black100 rounded-md py-2.5 px-2"
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
              />
            </div>
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">State</label>
              <input
                type="text"
                className="border border-black100 rounded-md py-2.5 px-2"
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
            />
          </div>
          <div className="flex gap-4 mt-12.5">
            <div className="flex flex-col w-65">
              <label className="text-black600 font-medium text-sm">
                Email
              </label>
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
        <div className="flex-1/2">oi</div>
      </div>
    </div>
  );
}

export default Checkout;
