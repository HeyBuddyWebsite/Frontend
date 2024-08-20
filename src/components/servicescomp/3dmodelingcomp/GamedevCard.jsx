import React from "react";
import Image from "next/image";
import "../../../styles/slide.css";

function GamedevCard({ imageUrl, title, description }) {
  return (
    <div className="work__right-b1 " style={{padding:"0",background:"transparent",width:"100%"}}>
      <div className="work__photo_mob   " style={{borderRadius:"24px",height:"100vh",width:"100%"}}>
        <Image
          loading="lazy"
          width={450}
          height={450}
          src={imageUrl}
          alt="image"
          className="h-[60%] w-[100%] md:w-[50%] object-cover "
          style={{borderRadius:"24px"}}
        />
        <div className="bg-black  pb-[5rem]">
        <h2 className="text-center text-xl md:text-3xl font-semibold text-white py-5">
          {title}
        </h2>
        <p className=" text-[14px] lg:text-[16px] font-medium  text-center text-white">
          {description}
        </p>
      </div>
      </div>
      
    </div>
  );
}

export default GamedevCard;
