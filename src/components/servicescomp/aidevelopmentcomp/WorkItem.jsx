import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const WorkItem = ({ title, description, subItems, isActive }) => {
  return (
    <div className={`p-8 rounded-2xl border border-white/5 transition-all duration-500 ${isActive ? 'bg-[#111] border-blue-500/30' : 'bg-transparent border-transparent'} `}>
      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 text-white`}>
        {title}
      </h3>
      <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-100' : 'text-gray-300'}`}>
        {description}
      </p>
      <div className={`flex flex-wrap gap-3 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {subItems && subItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 bg-white/5 text-gray-300 px-3 py-1 rounded-full text-sm border border-white/5">
            <AiFillCheckCircle className="text-white" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkItem;