import React from "react";

interface IProductColorsProps {
  colors: string[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

function ProductColors({ colors, selectedColor, setSelectedColor }: IProductColorsProps) {

  return (
    /*<div className="flex gap-2.5 items-center">
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
    </div>*/

    <div className="flex gap-2.5 items-center">
      {colors.map((color) => (
        <div
          className={`w-8 h-8 border ${
            color === selectedColor ? "border-black900" : "border-transparent"
          } rounded-full flex items-center justify-center cursor-pointer`}
        >
          <div
            className={`h-6 w-6 rounded-full ${
              color === "blue"
                ? "bg-blue400"
                : color === "yellow"
                ? "bg-yellow400"
                : color === "green"
                ? "bg-green400"
                : ""
            }`}
            onClick={() => {
              setSelectedColor(color);
            }}
          ></div>
        </div>
      ))}
    </div>
  );
}

export default ProductColors;
