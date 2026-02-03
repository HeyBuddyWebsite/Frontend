import React from 'react'
import "../../../styles/slide.css";

const WorkItem = ({ title, description, subItems }) => {
  return (
    <div className="work__info">
      <div className="work__left-b1">
        <h2 className="text-center text-3xl font-semibold text-white py-5">
          {title}
        </h2>
        <p className='text-[18px] text-justify text-white mb-4'>{description}</p>
        {subItems && (
          <div className="grid grid-cols-2 gap-2">
            {subItems.map((item, index) => (
              <div key={index} className="flex items-start text-white space-x-2">
                <span className="text-[#6FCF97] mt-1">✔</span>
                <span className="text-[16px]">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

  export default WorkItem;