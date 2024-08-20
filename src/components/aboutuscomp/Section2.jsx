"use client";
import Image from "next/image";
import React from "react";
// import { motion } from "framer-motion";

const Section2 = () => {
  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div className="w-[100%] pt-[60px] lg:pt-[100px]   mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(3).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(8).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]">
      <div className="w-[90%] lg:w-[80%] flex flex-col lg:flex-row   gap-24 lg:gap-0   justify-between items-center  mx-auto">
        <div className="w-full  lg:pb-0 lg:w-[50%]  h-full   ">
          <h1 className="text-2xl lg:text-4xl font-bold text-center lg:text-left text-white">
            Our Goal
          </h1>
          <p className=" text-white  mt-[25px] text-[16px] lg:text-[20px] font-light text-center lg:text-left">
            They had only one goal -- to ensure timely delivery in the most
            friendly, cooperative and convenient manner.
          </p>
          <p className=" text-white mt-[25px] text-[16px] lg:text-[20px] font-light   text-center lg:text-left">
            So that everyone involved gets peace of mind and experience the joy
            of doing business with the right people they have been looking for
            “since forever”.
          </p>
          <p className=" text-white  mt-[25px] text-[16px] lg:text-[20px] font-light   text-center lg:text-left">
            This is how started the saga of 100s of successful projects
            delivered to hundreds of happy clients around the world. So, if you
            are still wondering why you should choose Hey Buddy?
          </p>
          <p className=" text-white  mt-[25px] text-[16px] lg:text-[20px] font-light   text-center lg:text-left">
            The answer is pretty darn simple. WE LISTEN TO YOU!
          </p>
        </div>
        <div className=" mx-auto w-[100%] lg:w-[50%] px-auto  flex items-start justify-end" style={{padding:"0"}}>
         
          <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Image%20(1).png"
            alt="bg_img"
            width={200}
            height={200}
            className="  w-auto h-auto     "
          />
          
        </div>
      </div>
    </div>
  );
};

export default Section2;