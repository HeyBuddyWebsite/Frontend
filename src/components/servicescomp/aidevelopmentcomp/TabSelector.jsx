import * as React from "react";

export const TabSelector = ({ isActive, children, onClick, className }) => {
  return (
    <button
      className={`mr-8 group inline-flex items-center text-sm font-medium border-b-2 font-medium cursor-pointer leading-5 transition duration-150 ease-in-out focus:outline-none focus:text-gray-100 focus:border-gray-100 hover:text-gray-100 ${isActive
        ? "border-blue-500 text-white focus:border-blue-700"
        : "border-transparent text-gray-400 hover:border-blue-500/50 hover:text-gray-200"
        } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};