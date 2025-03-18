import React from "react";
import { useNavigate } from "react-router-dom";

function Breadcrumb({ children, title }: { children: string; title: boolean }) {
  const navigate = useNavigate();

  return (
    <nav className="flex flex-col gap-2">
      {title && (
        <h2 className="text-black900 font-bold text-2xl px-40.5">{children}</h2>
      )}
      <ul className="flex gap-1 items-center px-40.5">
        <li
          className="text-sm font-medium text-black500 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Ecommerce
        </li>
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
