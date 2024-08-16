"use client";

import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./styles.css"




const Sliderclient = ({sliderlist}) => {
  if(!sliderlist || sliderlist?.length===0) return null;

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
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };


        const [isMobile,setIsMobile]=useState(false);
        const handleresize=()=>{
       
          if( window.innerWidth<=500) {
            setIsMobile(true);
          } else if( window.innerWidth>500) setIsMobile(false);
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
    className="w-[100%] mx-auto mb-[80px] sm:mb-0"
    >
         <div className="sm:w-[90%] mx-auto">


          
        
         <Slider ref={slider} {...settings}>
       
        {sliderlist?.map((section, index) => (
            <div className="sm:px-2" key={index}>

          <figure style={{background: "#FFFFFF1A",borderRadius:"24px",height:"300px", overflow:"auto"}} class="flex scrollbar-hide flex-col p-4 lg:p-6    h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-bold   "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white",paddingBottom:"7px"   }} className="text-left text-[14px] lg:text-[16px] font-medium">
                {section.para}
              </p>
            </blockquote>
          </figure>
                  </div>
        ))}
        
         
        </Slider>
        

      

      </div>
      {isMobile?<div className ="w-[100%] flex items-center justify-center gap-[2rem] mt-[40px]">

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
</div>:<div>
      <div
        
        onClick={() => slider?.current?.slickPrev()}
        className="slider-circle-prev"
      >
        <IoArrowBackSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      <div
        
        onClick={() => slider?.current?.slickNext()}
        className="slider-circle-next"
      >
        <IoArrowForwardSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      </div> }
     
    </motion.div>
  )
}

export default Sliderclient