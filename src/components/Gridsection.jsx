"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import GridSectionSlider from "./GridSectionSlider"

const Gridsection = ({ heading, para, list }) => {
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
  
  const [isMobile,setIsMobile]=useState(false);
  const handleresize=()=>{
 
    if( window.innerWidth<=600) {
      setIsMobile(true);
    } else if( window.innerWidth>600) setIsMobile(false);
  }
  
  useEffect(()=>{
    handleresize();
    window.addEventListener("resize",handleresize);
  
    return ()=>{
      window.removeEventListener("resize",handleresize)
    }
  },[])
  if(!list) return null;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className=" pt-[60px] lg:pt-[100px] text-white mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob.svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208.svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div>
       
          <div className=" mb-[60px] lg:mb-[100px] flex flex-col items-center" >
            <h1 className=" lg:w-[80%] mb-[25px] font-bold text-center text-2xl lg:text-4xl">
              {heading}
            </h1>
            <p className=" lg:w-[95%]  text-[16px] lg:text-[20px] font-medium text-center">{para}</p>
          </div>
       
      </div>
      {isMobile?<GridSectionSlider sliderlist={list}/>:
      <div className="  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {list?.map((section, index) => (
          <figure key={section.id} className="flex flex-col  p-4 lg:p-6   h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40" style={{borderRadius:"24px",background: "#0000001A",border: "1px solid #FFFFFF33"

          }}>
            <blockquote className="  text-gray-400">
              <Image
                loading="lazy"
                src={section.imgurl}
                width={450}
                height={450}
                className="h-[32px] w-[32px] "
              />

              <h3
                style={{ color: "white" }}
                className="py-4 text-xl font-semibold  text-gray-500 "
              >
                {section.heading}
              </h3>

              <p style={{ color: "white" }} className="text-left text-[14px] lg:text-[16px] font-medium">
                {section.para}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>}
      </div>
      
    </motion.div>
  );
};

export default Gridsection;
