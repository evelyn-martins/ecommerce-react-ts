import React from "react";
import { useNavigate } from "react-router-dom";

function Breadcrumb({children}: {children: string}) {

  const navigate = useNavigate();

  return (
    <nav>
      <ul className="flex gap-1 h-16 items-center px-40.5">
        <li className="text-sm font-medium text-black500 cursor-pointer" onClick={() => {navigate("/")}}>Ecommerce</li>
        <li>
          <img
            src="/chevron right.svg"
            alt="Chevron"
            className="px-1.5 py-1.5"
          />
        </li>
        <li className="text-sm text-black900 font-medium">{children}</li>
      </ul>
    </nav>
  );
}

export default Breadcrumb;
