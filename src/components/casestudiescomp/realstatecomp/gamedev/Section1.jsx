"use client";
import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
// import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";

const Section1 = ({ heading,img1 }) => {
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
    objectFit:"cover"
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
    <>
      <div style={containerStyle} className="">
        <div style={textContainerStyle}>
          <h1 className="w-[80%] md:w-[60%]   text-center mx-auto text-2xl lg:text-5xl font-bold  lg:font-bold" style={{whiteSpace: 'normal'}}>{heading}</h1>
        
          
        </div>
        <div style={imageContainerStyle}>
        
          <Image
            loading="lazy"
            style={imageStyle}
            width={450}
            height={450}
            className=" w-[100%] lg:w-[80%] h-[100vh] md:h-[100vh] bg-white mx-auto "
            src={img1}
            alt="Background"
          />
        </div>
      </div>

      {/* 
      <div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className="py-8 text-xl "
          >
            <p>
              Get an AI-powered smart Games solution that captivates with its
              hyper-realistic graphics and enthrals with its deeply engaging
              gameplay. Hey Buddy is India's leading game development company,
              maintaining a large team of gamer-first developers who know what
              works.
            </p>
          </div> */}
    </>
  );
};

export default Section1;
