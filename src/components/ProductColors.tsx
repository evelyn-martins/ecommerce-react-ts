import React, { useState } from "react";

function ProductColors() {
  const [selectedColor, setSelectedColor] = useState<string>("blue");

  return (
    <div className="flex gap-2.5 items-center">
      <div className={`w-8 h-8 border ${selectedColor === "blue" ? "border-black900" : "border-transparent"} rounded-full flex items-center justify-center cursor-pointer`}>
        <div className="h-6 w-6 bg-blue400 rounded-full" onClick={() => {setSelectedColor("blue")}}></div>
      </div>
      <div className={`w-8 h-8 border ${selectedColor === "yellow" ? "border-black900" : "border-transparent"} rounded-full flex items-center justify-center`}>
        <div
          className="h-6 w-6 bg-yellow400 rounded-full cursor-pointer"
          onClick={() => {
            setSelectedColor("yellow");
          }}
        ></div>
      </div>
      <div className={`w-8 h-8 border ${selectedColor === "green" ? "border-black-900" : "border-transparent"} rounded-full flex items-center justify-center cursor-pointer`}>
        <div className="h-6 w-6 bg-green400 rounded-full" onClick={() => {setSelectedColor("green")}}></div>
      </div>
    </div>
  );
}

export default ProductColors;
