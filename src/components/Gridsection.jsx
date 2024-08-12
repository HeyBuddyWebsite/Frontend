"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Gridsection = ({ listData, textData }) => {
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
      if (isVisible) {
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className=" pt-[44px] lg:pt-[100px] text-white mb-8 md:mb-12 lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208.svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div>
        {textData?.map((section, index) => (
          <div className=" mb-[44px] lg:mb-[100px] flex flex-col items-center" key={index}>
            <h1 className=" lg:w-[80%] mb-[25px] font-bold text-center text-2xl lg:text-4xl">
              {section.heading}
            </h1>
            <p className="text-base lg:w-[95%]  font-medium text-center">{section.subtext}</p>
          </div>
        ))}
      </div>
      <div class="  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {listData.map((section, index) => (
          <figure key={index} class="flex flex-col  p-4 lg:p-6   h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40" style={{borderRadius:"24px",background: "#0000001A",border: "1px solid #FFFFFF33"

          }}>
            <blockquote class="  text-gray-400">
              <Image
                loading="lazy"
                src={section.imgurl}
                width={450}
                height={450}
                className="h-[32px] w-[32px] "
              />

              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
              >
                {section.heading}
              </h3>

              <p style={{ color: "white" }} className="text-left text-base font-medium">
                {section.para}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>
      </div>
    </motion.div>
  );
};

export default Gridsection;
