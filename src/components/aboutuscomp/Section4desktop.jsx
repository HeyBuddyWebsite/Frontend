"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Section4desktop = () => {
  const list = [
    {
      id: "1",
      heading: "We Listen to You",
      para: "Our major emphasis is on understanding your specific needs.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Vector.png",
    },
    {
      id: "2",
      heading: "We Deliver Quality",
      para: "Once we have the understanding, we know what needs to be delivered.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Time%20Circle.png",
    },
    {
      id: "3",
      heading: "We Deliver on Time",
      para: "Our refined and streamlined process delivers on time.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Time%20Circle%20(1).png",
    },
    {
      id: "4",
      heading: "We Communicate Clearly",
      para: "We Maintain clear communication throughout the process.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Vector%20(1).png",
    },
    {
      id: "5",
      heading: "We Adapt Quick",
      para: "Our team is quick to adapt to changing needs.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Time%20Circle%20(2).png",
    },
    {
      id: "6",
      heading: "We Value Your Money",
      para: "We get you the best result in the market at the right price.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Time%20Circle%20(3).png",
    },
  ];
  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div
      className="pt-[100px] w-[100%] mb-[80px] lg:mb-[150px]  mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(6).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]"
      id="testimonials"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div className="mb-[100px] mx-auto text-center justify-center  text-xl lg:text-4xl font-bold text-white ">
        <h3>The Distinguishing Values of Hey Buddy</h3>
       
      </div>
      <motion.div
        className="    grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4"
        {...textAnimation1}
      >
        {list.map((section, index) => (
          <figure key={section.id} className="flex flex-col gap-4  p-2 lg:p-4 border-gray-500 rounded-lg  h-full w-full bg-[#979797] opacity-90    bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20" style={{borderRadius:"24px",background: "#FFFFFF1A"
          }}>
            <div className="mb-10">
            <div className="relative">
              <div className="absolute p-4 bg-[#979797] opacity-30 w-14 h-14 rounded-xl " ></div>
              <Image
                loading="lazy"
                src={section.img}
                alt="img"
                width={200}
                height={200}
                className="absolute top-4 left-4 w-6 h-6 "
              />
            </div></div>

            <h3
              style={{ color: "white" }}
              className="pt-4 text-left text-xl font-semibold  text-white "
            >
              {section.heading}
            </h3>
            <p style={{ color: "white" }} className="text-left text-[14px] lg:text-[16px] font-medium">
              {section.para}
            </p>
          </figure>
        ))}
      </motion.div>
      </div>
    </div>
  );
};

export default Section4desktop;
