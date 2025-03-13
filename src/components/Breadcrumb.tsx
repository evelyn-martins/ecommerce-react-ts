import React from "react";

interface BreadcrumbProps {
    children: string;
}

function Breadcrumb({children}: BreadcrumbProps) {
  return (
    <nav>
      <ul className="flex gap-1 h-16 items-center bg-white100 px-40.5">
        <li className="text-sm font-medium text-black500 cursor-pointer">Ecommerce</li>
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
