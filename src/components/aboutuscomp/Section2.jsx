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
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse2.png')] bg-no-repeat bg-auto bg-[center_top_1rem] mx-auto pt-8 lg:pt-20 pb-24 lg:pb-0">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-5 xl:gap-20 w-[90%]  xl:w-[80%] mx-auto lg:pt-36 lg:pb-20">
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
        <div className=" mx-auto -mt-14 px-auto">
          {/* <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse%20girl.png"
            alt="bg_img"
            width={200}
            height={200}
            className="z-20 absolute lg:-top-32 -top-4  left-2 lg:left-12 w-[100%] md:w-[60%] lg:w-[100%] xl:w-[75%] "
          />
          <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/girl.png"
            alt="bg_img"
            width={200}
            height={200}
            className="z-10 absolute lg:-top-[6.8rem] md:left-36 md:-top-24 top-2 left-2 lg:left-[2.9rem] w-[95%] md:w-[67%] xl:w-[70%] "
          /> */}
          {/* <div className="w-[81%] md:w-[56%] lg:w-[81%] xl:w-[60%] h-[53vh] lg:h-[100%] bg-[#ffffff] opacity-20  lg:ml-20 mt-32  lg:mt-10 rounded-b-full rounded-t-xl px-auto mx-auto  "></div> */}
          <Image
            loading="lazy"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/girl_bg.png"
            alt="bg_img"
            width={200}
            height={200}
            className=" -mt-20 left-2 lg:left-12 w-[100%]   "
          />
          <div className=" py-4 w-[60%]     -mt-[80%] ml-[25%]  sm:ml-[30%]   ">
            <div>
              <div className=" flex gap-4  items-center mt-2">
                <div className="mr-6 lg:mr-6">
                  <div className="relative">
                    <div className=" absolute -top-4  bg-[#979797] opacity-20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl "></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/onevec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className=" ml-[100%] sm:ml-4 h-4 w-4 sm:w-6 sm:h-6  "
                    />
                  </div>
                </div>
                <div className="">
                  <p className=" font-semibold text-white md:text-2xl lg:text-normal xl:text-4xl ">
                    10+
                  </p>
                  <p className="text-white text-xs">Years of experience</p>
                </div>
              </div>
              <div className=" flex gap-4   items-center mt-6 sm:mt-12 lg:mt-8 xl:mt-10">
                <div className="mr-6 lg:mr-6">
                  <div className="relative">
                    <div className=" absolute -top-4  bg-[#979797] opacity-20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl "></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/twovec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className=" ml-[100%] sm:ml-4 h-4 w-4 sm:w-6 sm:h-6  "
                    />
                  </div>
                </div>
                <div className="">
                  <p className=" font-semibold text-white md:text-2xl lg:text-normal xl:text-4xl  ">
                    100+
                  </p>
                  <p className="text-white text-xs">Repeated clients</p>
                </div>
              </div>
              <div className=" flex gap-4  items-center mt-6 sm:mt-12 lg:mt-8 xl:mt-10">
                <div className="mr-6 lg:mr-6">
                  <div className="relative">
                    <div className=" absolute -top-4  bg-[#979797] opacity-20 w-12 h-12 sm:w-14 sm:h-14 rounded-xl "></div>
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/threevec.png"
                      alt="bg_img"
                      width={200}
                      height={200}
                      className=" ml-[100%] sm:ml-4 h-4 w-4 sm:w-6 sm:h-6  "
                    />
                  </div>
                </div>
                <div className="">
                  <p className=" font-semibold text-white text-fit md:text-2xl lg:text-normal xl:text-4xl ">
                    400+
                  </p>
                  <p className="text-white text-xs">Projects completed</p>
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
