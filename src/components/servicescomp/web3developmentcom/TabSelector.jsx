import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}) => (
  <button
    className={` px-8  mr-6 group inline-flex py-4 border-b-2 font-medium text-sm leading-5 cursor-pointer whitespace-nowrap ${
      isActive
        ? "border-blue-500 bg-gradient-to-t from-[#3F8AE2]  font-bold focus:font-bold   text-[#72B1FA] focus:outline-none focus:text-[#3F8AE2] focus:border-indigo-700"
        : "border-transparent text-gray-100 hover:text-white hover:border-blue-300 focus:text-gray-600 focus:border-blue-300"
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);