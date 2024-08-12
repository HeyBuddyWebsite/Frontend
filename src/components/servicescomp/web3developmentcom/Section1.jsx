"use client";
import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
// import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import "../../../styles/landingpage.scss";

const Herosection = ( { handlecontactusModal } ) => {
  const [scrollPosition, setScrollPosition] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY>(1024))
      setScrollPosition(true);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2 },
  };

  const textAnimation1 = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5.5, ease: "easeOut" },
    },
  };

  const containerStyle = {
  //   // padding: "20px",
    position: "relative",
    
    width:"100%",
    // height:"200vh",
    height:"fit-content",
    // background:"green",
  };

  const textContainerStyle = {
    position: "sticky",
    left: "50%",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "50%",
    marginBottom:"20%"
  };

  const imageContainerStyle = {
    // position: "absolute",
    marginTop: "100vh",
    left: "50%",
    // transform: `translateX(-50%) translateY(-${scrollPosition / 2}px)`,
    width: "100%",
   
    overflow: "hidden",

    // top: "100vh",
  };

  const imageStyle = {
    
   
    transition: "transform 0.3s ease-out",
    opacity: "0.3",
    objectFit:"cover",
    background:"black"
  };

  const buttonHeader = {
    border: isHovered ? "0px" : "1px solid white",
    background: isHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: isHovered ? "white" : "white", // Change the text color as needed
    padding: "10px 20px",
    fontSize: "16px",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  return (
    <div className=" w-[90%] lg:w-[80%] mx-auto mb-8 md:mb-12 lg:mb-[100px] ">
      <div style={containerStyle} className="">
        <div style={textContainerStyle}>
          <h1 className=" lg:w-[80%]    text-center mx-auto text-2xl lg:text-5xl font-bold  lg:font-bold" style={{whiteSpace: 'normal'}}> Hey Buddy - Your trusted Web3 Development Company</h1>
          




          <motion.div
                className="mt-[25px] flex items-center justify-center gap-x-6"
                {...textAnimation}
              >
               
                  <div 
            onClick={handlecontactusModal} className="getintouch flex gap-4 items-center rounded-md px-8 py-3  text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    <span
                      className="text-white text-lg font-md "
                      
                    >
                      Get in Touch
                    </span>
                    <span
                      aria-hidden="true"
                      className="arrow"
                      style={{ marginTop: "-0.3rem" }}
                    >
                      <Image
                        lazy={true}
                        width={500}
                        height={500}
                        src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/arrow.svg"
                        alt="arrow"
                        className="w-auto h-auto lg:w-4 lg:h-4"
                      />
                    </span>
                  </div>
               
              </motion.div>
          
        </div>
        
        <div style={imageContainerStyle}>
        
          <Image
            loading="lazy"
            style={imageStyle}
            width={450}
            height={450}
            className=" w-[100vw] md:w-[100%] h-[100vh] md:h-[100vh] bg-white mx-auto  "
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/8fc30aa5574925140b823a52039d28df.jpeg"
            alt="Background"
          />
        </div>
      </div>
      <div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="pt-[50px] text-base lg:text-xl text-white font-semibold "
      >
        <p>
        Hey Buddy is a renowned Web3 development company, known for its
          blockchain development expertise and for delivering secure,
          innovative, and interactive web 3.0 solutions within specified
          timelines.

        </p>
      </div>
      
    </div>
  );
};

export default Herosection;

