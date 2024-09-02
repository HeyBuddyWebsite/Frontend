"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./styles.css"




const Section9mob = ({sliderlist}) => {

  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
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
  


   

      const slider = React.useRef(null);
      
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style,right: "0rem" }}
        onClick={onClick}
        className="circle"
      >
        <IoArrowForwardSharp size="1.2rem" className="arrow" />
      </div>
    );
  }
  
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div
        style={{left: "0rem" }}
        onClick={onClick}
        className="circle"
      >
        <IoArrowBackSharp size="1.2rem" className="arrow" />
      </div>
    );
  }
 
        const settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        arrows:false,


        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    className="w-[100%] mx-auto  sm:mb-0 "
    >
         <div className="sm:w-[90%] mx-auto">


          
        
         <Slider ref={slider} {...settings}>
         {sliderlist?.map((section, index) => (
            <div key={section.id}>
          <figure  style={{borderRadius:"24px",background: "#0000001A"
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
          </div>
        ))}
        </Slider>
        

      

      </div>

      <div className ="w-[100%] flex items-center justify-center gap-[2rem] mt-[40px]">

      <div
        
        onClick={() => slider?.current?.slickPrev()}
        className="slider-circle-prev2"
      >
        <IoArrowBackSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      <div
        
        onClick={() => slider?.current?.slickNext()}
        className="slider-circle-next2"
      >
        <IoArrowForwardSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      </div>
    </motion.div>
  )
}

export default Section9mob;