"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./styles.css"




const Sliderclient = () => {

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
  


  const List = [
    {
      id: "1",
      heading: "Technology and Electronics",
      imgurl: "",
      para: "AI transforms the tech and electronics industry by enabling smarter devices, predictive maintenance, and enhanced user experiences with functions like voice-activated assistants,",
    },
    {
      id: "2",
      heading: "Finance and Banking",
      imgurl: "",
      para: "AI revolutionizes operations through fraud detection, risk management, and personalized customer experiences and empowers the financial sector to make data-driven decisions.",
    },
    {
      id: "3",
      heading: "Healthcare",
      imgurl: "",
      para: "AI brings advancements in diagnostics, treatment personalization, and patient care, AI applications improve accuracy, speed up processes, and contribute to more effective healthcare delivery.",
    },
    {
      id: "4",
      heading: "Automotive",
      imgurl: "",
      para: "AI-driven self-driving cars, enhanced safety features, and optimized manufacturing processes are reshaping the future of transportation, making it safer, more efficient, and more intelligent.",
    },
    {
      id: "5",
      heading: "Energy",
      imgurl: "",
      para: "AI-powered smart grids, predictive maintenance, and data analytics contribute to sustainable practices and operational excellence in the energy industry.",
    },
    {
      id: "6",
      heading: "Retail",
      imgurl: "",
      para: "Retail experiences a paradigm shift with AI-driven personalized recommendations, inventory management, and customer engagement, bringing seamless shopping experiences both online and in-store.",
    },
    {
      id: "7",
      heading: "Manufacturing",
      imgurl: "",
      para: "Retail experiences a paradigm shift with AI-driven personalized recommendations, inventory management, and customer engagement, bringing seamless shopping experiences both online and in-store.",
    },
    {
      id: "8",
      heading: "Telecommunications",
      imgurl: "",
      para: "From predictive maintenance of network infrastructure to personalized customer interactions through virtual assistants, AI optimizes communication services.",
    },
  ];

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

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    className="w-[100%] mx-auto"
    >
         <div className="w-[90%] mx-auto">


          
        
         <Slider ref={slider} {...settings}>
       
        {List.map((section, index) => (
            <div className="px-2" key={index}>

          <figure style={{background: "#FFFFFF1A",borderRadius:"24px",height:"300px", overflow:"auto"}} class="flex scrollbar-hide flex-col p-4 lg:p-6    h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-bold   "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white",paddingBottom:"7px"   }} className="text-left text-base font-medium ">
                {section.para}
              </p>
            </blockquote>
          </figure>
                  </div>
        ))}
        
         
        </Slider>
        

      

      </div>

      <div
        style={{left: "0rem" }}
        onClick={() => slider?.current?.slickPrev()}
        className="slider-circle"
      >
        <IoArrowBackSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      <div
        style={{right: "0rem" }}
        onClick={() => slider?.current?.slickNext()}
        className="slider-circle"
      >
        <IoArrowForwardSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
    </motion.div>
  )
}

export default Sliderclient