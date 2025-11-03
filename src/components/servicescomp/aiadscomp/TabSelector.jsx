import React from "react";

const TabSelector = ({ isActive, children, onClick }) => (
  <button
    className={`mr-1 group inline-flex items-center px-2 py-2 text-sm font-medium leading-5 text-white hover:text-white focus:outline-none focus:text-white focus:border-b-2 focus:border-white border-b-2 border-transparent ${
      isActive ? "border-white text-white" : ""
    }`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default TabSelector;


