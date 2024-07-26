import React from "react";
import Image from "next/image";
import "../../../styles/slide.css";

function GamedevCard({ imageUrl, title, description }) {
  return (
    <div className="work__right-b1">
      <div className="work__photo_mob   flex justify-center rounded-lg overflow-hidden">
        <Image
          loading="lazy"
          width={450}
          height={450}
          src={imageUrl}
          alt="image"
          className="h-[100%] w-[100%] md:w-[50%] object-cover"
        />
      </div>
      <div className=" bg-black">
        <h2 className="text-center text-xl md:text-3xl font-semibold text-white py-5">
          {title}
        </h2>
        <p className=" text-base md:text-[20px] text-center text-white">
          {description}
        </p>
      </div>
    </div>
  );
}

export default GamedevCard;
