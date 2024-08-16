import React from 'react'
import "../../../styles/slide.css";

const WorkItem = ({ title, description }) => {
    return (
      <div className="work__info">
        <div className="work__left-b1">
          <h2 className="text-left text-3xl font-semibold text-white py-5">
            {title}
          </h2>
          <p className='text-[14px] lg:text-[16px] font-medium text-left text-white'>{description}</p>
        </div>
      </div>
    );
  };

  export default WorkItem;