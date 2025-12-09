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
    <div className="mx-auto pt-8 lg:pt-20 pb-24 lg:pb-0">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5 xl:gap-20 w-[90%]  xl:w-[80%] mx-auto lg:pt-20 lg:pb-20">
        <div className="w-full pb-14 lg:pb-0 lg:w-[80%] mx-auto">
          <h1 className="text-xl lg:text-4xl text-center lg:text-left text-white my-8">
            Our Goal
          </h1>
          <p className=" text-white  mt-2 text-center lg:text-left">
            They had only one goal -- to ensure timely delivery in the most
            friendly, cooperative and convenient manner.
          </p>
          <p className=" text-white mt-2  lg:mt-10 text-center lg:text-left">
            So that everyone involved gets peace of mind and experience the joy
            of doing business with the right people they have been looking for
            “since forever”.
          </p>
          <p className=" text-white  mt-2  lg:mt-10 text-center lg:text-left">
            This is how started the saga of 100s of successful projects
            delivered to hundreds of happy clients around the world. So, if you
            are still wondering why you should choose Hey Buddy?
          </p>
          <p className=" text-white  mt-2  lg:mt-10 text-center lg:text-left">
            The answer is pretty darn simple. WE LISTEN TO YOU!
          </p>
        </div>
        <div className="mx-auto relative w-full lg:w-auto lg:-mt-8 xl:-mt-12">
          <div className="relative w-full max-w-[400px] lg:max-w-[450px] xl:max-w-[500px] mx-auto overflow-hidden">
            <Image
              loading="lazy"
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/girl_bg.png"
              alt="bg_img"
              width={500}
              height={500}
              className="w-full h-auto object-contain"
              style={{ minHeight: 'clamp(280px, 38vw, 500px)', maxHeight: 'clamp(380px, 42vw, 550px)' }}
            />
            <div className="absolute inset-0 flex flex-col justify-end items-center overflow-hidden" style={{ paddingBottom: 'clamp(8px, 3%, 40px)', paddingLeft: 'clamp(10px, 3%, 18px)', paddingRight: 'clamp(10px, 3%, 18px)', paddingTop: 'clamp(4px, 1%, 12px)' }}>
              <div className="w-full max-w-[80%] sm:max-w-[75%] lg:max-w-[65%] mx-auto" style={{ maxHeight: 'clamp(100px, 35%, 180px)' }}>
                <div className="space-y-0 sm:space-y-0.5 lg:space-y-1" style={{ marginBottom: 'clamp(2px, 1%, 8px)' }}>
                  <div className=" flex gap-0.5 sm:gap-1 lg:gap-1.5  items-center">
                <div className="mr-1 sm:mr-1.5 lg:mr-2 flex-shrink-0">
                  <div className="relative">
                    <div className=" absolute -top-0.5 sm:-top-1 lg:-top-1.5  bg-[#979797] opacity-20 rounded-md" style={{ width: 'clamp(16px, 4vw, 36px)', height: 'clamp(16px, 4vw, 36px)' }}></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/onevec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className="relative z-10"
                      style={{ width: 'clamp(8px, 2vw, 18px)', height: 'clamp(8px, 2vw, 18px)' }}
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 min-w-0">
                  <p className=" font-semibold text-white leading-none" style={{ fontSize: 'clamp(9px, 1.8vw, 18px)', lineHeight: '1.1' }}>
                    10+
                  </p>
                  <p className="text-white leading-none" style={{ fontSize: 'clamp(6px, 1vw, 9px)', lineHeight: '1.1', marginTop: '1px' }}>Years of experience</p>
                </div>
                  </div>
                  <div className=" flex gap-0.5 sm:gap-1 lg:gap-1.5   items-center">
                <div className="mr-1 sm:mr-1.5 lg:mr-2 flex-shrink-0">
                  <div className="relative">
                    <div className=" absolute -top-0.5 sm:-top-1 lg:-top-1.5  bg-[#979797] opacity-20 rounded-md" style={{ width: 'clamp(16px, 4vw, 36px)', height: 'clamp(16px, 4vw, 36px)' }}></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/twovec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className="relative z-10"
                      style={{ width: 'clamp(8px, 2vw, 18px)', height: 'clamp(8px, 2vw, 18px)' }}
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 min-w-0">
                  <p className=" font-semibold text-white leading-none" style={{ fontSize: 'clamp(9px, 1.8vw, 18px)', lineHeight: '1.1' }}>
                    100+
                  </p>
                  <p className="text-white leading-none" style={{ fontSize: 'clamp(6px, 1vw, 9px)', lineHeight: '1.1', marginTop: '1px' }}>Repeated clients</p>
                </div>
                  </div>
                  <div className=" flex gap-0.5 sm:gap-1 lg:gap-1.5  items-center">
                <div className="mr-1 sm:mr-1.5 lg:mr-2 flex-shrink-0">
                  <div className="relative">
                    <div className=" absolute -top-0.5 sm:-top-1 lg:-top-1.5  bg-[#979797] opacity-20 rounded-md" style={{ width: 'clamp(16px, 4vw, 36px)', height: 'clamp(16px, 4vw, 36px)' }}></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/threevec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className="relative z-10"
                      style={{ width: 'clamp(8px, 2vw, 18px)', height: 'clamp(8px, 2vw, 18px)' }}
                    />
                  </div>
                </div>
                <div className="flex-shrink-0 min-w-0">
                  <p className=" font-semibold text-white leading-none" style={{ fontSize: 'clamp(9px, 1.8vw, 18px)', lineHeight: '1.1' }}>
                    400+
                  </p>
                  <p className="text-white leading-none" style={{ fontSize: 'clamp(6px, 1vw, 9px)', lineHeight: '1.1', marginTop: '1px' }}>Projects completed</p>
                </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
