"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import Sliderclient from "./Sliderclient";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";

const Mixsection = ({heading, para, checklist, sliderlist}) => {
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


  

  const [currentCard, setCurrentCard] = useState(0);

  const handleChangeIndex = (index) => {
    setCurrentCard(index);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
     
      className="pt-[60px] lg:pt-[100px] mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(3).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(4).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div className=" text-white">
        <h1  className="mb-[25px] lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl">
        {heading}
        </h1>
        <p className="mb-[60px] lg:mb-[100px] text-[16px] lg:text-[20px] font-medium lg:w-[90%] mx-auto text-center">
          {para}
        </p>
      </div>
      {/* --------------------box section ------------------------------------------ */}

      {/* pink box */}

      {checklist &&<div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" py-4 lg:py-6 px-2 lg:px-0 w-[100%]   mx-auto mb-[80px] lg:mb-[150px]"
            style={{borderRadius:"24px",background: "linear-gradient(180deg, #3F8AE2 0%, #2362AB 100%)",border: "1px solid #FFFFFF",boxShadow: "0px 8px 10px -6px #0000001A",
              
            }}
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className={`  grid ${checklist?.length<4?"grid-cols-1":"grid-cols-2"}  md:grid-cols-3 mx-auto lg:w-[80%] gap-x-2  lg:gap-x-4 gap-y-4 lg:gap-y-8 `}>
              {checklist?.map((section, index) => (
                  <div key={index} className="  flex items-center justify-start gap-2 text-[#FFFFFF]  " >
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                      {/* &#10004; */}
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="text-[14px] lg:text-[16px] font-bold">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>}
      {/* ------------------slider-------------------------------- */}

      <Sliderclient sliderlist={sliderlist} />
      </div>
    </motion.div>
  );
};

export default Mixsection;
