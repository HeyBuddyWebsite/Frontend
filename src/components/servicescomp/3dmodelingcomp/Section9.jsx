"use client";

import React, { useState,useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Section9mob from "./Section9mob"

const Bottomclient = ({heading, para, list}) => {
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
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="pt-[60px] lg:pt-[100px] mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob.svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(7).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <h1 className="pb-[25px] lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl" style={{color:"white"}}>
        {heading}
      </h1>
      <p className="pb-[60px] lg:pb-[100px] text-[16px] lg:text-[20px] font-medium lg:w-[90%] text-center mx-auto" style={{color:"white"}}>
        {para}
      </p>
      {isMobile?<Section9mob sliderlist={list}/>:
      <div className="    grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {list?.map((section, index) => (
          <figure key={section.id} style={{borderRadius:"24px",background: "#0000001A"
            ,border: "2px solid #FFFFFF33"}} className="flex flex-col justify-between  p-4 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30">
            <blockquote className=" text-gray-400 flex flex-col justify-between h-full">
              <p  className="text-left text-[14px] lg:text-[16px] font-medium text-white">
                {section.content}
              </p>
              <div>
              <h3 className="pt-4 text-right font-bold text-white text-xl self-end">
                {section.name}
              </h3>
              {/* <h3
                style={{ color: "white" }}
                className="pt-2 text-right text-xl   text-gray-500 "
              >
                {section.position}
              </h3> */}
              </div>
              {/* <h3 className="text-right text-white text-xl">{section.name}</h3> */}
            </blockquote>
          </figure>
        ))}
      </div>}
      </div>
    </motion.div>
  );
};

export default Bottomclient;
