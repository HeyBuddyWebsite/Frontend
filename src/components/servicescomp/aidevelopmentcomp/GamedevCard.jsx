import React from "react";
import Image from "next/image";

function GamedevCard({ imageUrl, title, description, subItems }) {
  return (
    <div className="bg-[#080808] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
      <div className="h-[250px] md:h-[500px] flex justify-center overflow-hidden relative">
        <Image
          loading="lazy"
          width={450}
          height={450}
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] to-transparent opacity-60"></div>
      </div>
      <div className="bg-[#080808] p-6 -mt-6 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          {title}
        </h2>
        <p className="text-gray-300 text-base md:text-[20px] text-justify mb-6 leading-relaxed">
          {description}
        </p>
        {subItems && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {subItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <span className="text-cyan-400 mt-1">✔</span>
                <span className="text-gray-300 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default GamedevCard;
