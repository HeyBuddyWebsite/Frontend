"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./styles.css"




const Section9mob = ({sliderlist,category}) => {

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
            breakpoint: 640,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              
            }
          },
         
        ]
        };


        
  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    className="w-[100%] mx-auto mb-[0px] sm:mb-0 "
    >
         <div className="sm:w-[90%] mx-auto">


          
         <div
          style={{borderRadius:"24px",background: "#FFFFFF1A",height:"fit-content"}}
          className="p-6  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  w-full"
        >
         <Slider ref={slider} {...settings}>
         {sliderlist?.filter((item,index)=>{
            return category===item.name;
          }).map((item,index)=>{
            return item.images.map((image,index)=>{
              return <div key={index} className="px-2"> <Image
              loading="lazy"
              src={image}
              width={450}
              height={450}
              className="w-[100%] h-[100%] "
              alt="9"
            />
          </div>
            })
          })            
           }
        </Slider>
        </div>
        

      

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