import * as React from "react";

export const TabSelector = ({ isActive, children, onClick, className }) => {
  return (
    <button
      className={`mr-8 group inline-flex items-center text-sm font-medium border-b-2 font-medium cursor-pointer leading-5 transition duration-150 ease-in-out focus:outline-none focus:text-gray-100 focus:border-gray-100 hover:text-gray-100 ${isActive
          ? "border-indigo-500 text-indigo-100 focus:border-indigo-700"
          : "border-transparent text-gray-400 hover:border-gray-500"
        } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};