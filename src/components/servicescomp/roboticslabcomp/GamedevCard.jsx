import React from "react";
import Image from "next/image";

function GamedevCard({ imageUrl, title, description, subItems }) {
  return (
    <div>
      <div className="h-[500px] flex justify-center rounded-lg overflow-hidden">
        <Image
          loading="lazy"
          width={450}
          height={450}
          src={imageUrl}
          alt={title}
          className="h-[100%] w-[100%] md:w-[50%] object-cover"
        />
      </div>
      <div className="bg-black">
        <h2 className="text-center text-xl md:text-3xl font-semibold text-white py-5">
          {title}
        </h2>
        <p className="text-base md:text-[20px] text-justify text-white px-2 mb-4">
          {description}
        </p>
        {subItems && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 px-4 pb-4">
            {subItems.map((item, index) => (
              <div key={index} className="flex items-start text-white space-x-2">
                <span className="text-[#6FCF97] mt-1">✔</span>
                <span className="text-[14px] md:text-[16px]">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GamedevCard;
