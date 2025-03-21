import React from "react";

function CardProfile() {
  return (
    <div className="flex h-20 w-150">
      <div className="bg-white100 px-3 rounded-sm">
        <img src="/Product.png" className="w-full h-full object-contain" />
      </div>
      <div className="flex flex-col justify-center ml-8">
        <p className="text-black900 font-medium text-sm">
          Raw Black T-Shirt Lineup
        </p>
        <p className="text-black500 font-medium text-xs">
          Ordered on: 27 July 2023
        </p>
        <p className="text-black900 font-medium text-xs">$70.00</p>
      </div>
      <div className="flex items-center ml-auto">
        <button className="text-black900 font-medium text-sm px-6 py-2.5 border border-black900 rounded-sm cursor-pointer hover:bg-white100">
          View item
        </button>
      </div>
    </div>
  );
}

export default CardProfile;
