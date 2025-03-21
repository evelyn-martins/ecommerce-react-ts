import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import CardProfile from "../components/CardProfile";

function Profile() {
  const [click, setClick] = useState<string>("orders");

  return (
    <div className="mb-40">
      <div className="h-40 bg-white100 flex items-center">
        <Breadcrumb children="My Account" title={true} />
      </div>
      <div className="flex">
        <div className="flex-1/4 gap-4 flex flex-col ml-43.5 mt-30">
          <div
            className={`flex gap-2.5 px-6 w-50 py-2 cursor-pointer ${
              click === "orders" ? "bg-white100 rounded-lg" : ""
            }`}
            onClick={() => setClick("orders")}
          >
            <img src="/cart.svg" alt="Cart" />
            <p
              className={`text-black500 font-medium text-sm ${
                click === "orders" ? "text-black900" : ""
              }`}
            >
              Orders
            </p>
          </div>
          <div
            className={`flex gap-2.5 px-6 w-50 py-2 cursor-pointer ${
              click === "account" ? "bg-white100 rounded-lg" : ""
            }`}
            onClick={() => setClick("account")}
          >
            <img src="/user2.svg" alt="User" />
            <p
              className={`text-black500 font-medium text-sm ${
                click === "account" ? "text-black900" : ""
              }`}
            >
              Account Detail
            </p>
          </div>
          <div
            className={`flex gap-2.5 px-6 w-50 py-2 cursor-pointer ${
              click === "logout" ? "bg-white100 rounded-lg" : ""
            }`}
            onClick={() => setClick("logout")}
          >
            <img src="/logout.svg" alt="Logout" />
            <p
              className={`text-black500 font-medium text-sm ${
                click === "logout" ? "text-black900" : ""
              }`}
            >
              Logout
            </p>
          </div>
        </div>
        <div className="w-[1px] h-125 border border-white200 mt-15"></div>
        <div className="flex-3/4 ml-12">
          {click === "orders" && (
            <div>
              <p className="text-black900 font-semibold mb-14 mt-16">Orders</p>
              <div className="flex flex-col gap-16">
                <CardProfile />
                <CardProfile />
              </div>
            </div>
          )}
          {click === "account" && (
            <div>
              <p className="text-black900 font-semibold mt-16">
                Account Details
              </p>
              <div className="text-blue-500 text-sm bg-blue-50 rounded-full px-1.5 py-0.5 w-12 h-12 flex items-center justify-center mt-10 mb-8">
                AN
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col w-80">
                  <label className="text-black600 font-medium text-sm">Full name</label>
                  <input
                    type="text"
                    className="border border-black100 rounded-md px-4 py-2.5"
                  />
                </div>
                <div className="flex flex-col w-80">
                  <label className="text-black600 font-medium text-sm">Email</label>
                  <input type="text" className="border border-black100 rounded-md px-4 py-2.5" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
