import React from "react";

interface IProductColorsProps {
  colors: string[];
  selectedColor: string;
  setSelectedColor: (color: string) => void;
}

function ProductColors({ colors, selectedColor, setSelectedColor }: IProductColorsProps) {

  return (
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
