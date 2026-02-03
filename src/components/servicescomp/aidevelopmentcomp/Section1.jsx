import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
// import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const Herosection = ({ handlecontactusModal }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isGetStartedHovered, setIsGetStartedHovered] = useState(false);

  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
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
    padding: "20px",
    position: "sticky",
  };

  const textContainerStyle = {
    marginBottom: "30%",
    position: "sticky",
    left: "50%",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "30%",
  };

  const imageContainerStyle = {
    position: "sticky",
    top: "30%",
    left: "50%",
    // transform: `translateX(-50%) translateY(-${scrollPosition / 2}px)`,
    width: "100%",
    height: "100%",
    overflow: "hidden",

    top: "8rem",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease-out",
    opacity: "0.5",
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

  const getStartedButtonStyle = {
    border: isGetStartedHovered ? "0px" : "1px solid white",
    background: isGetStartedHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: isGetStartedHovered ? "white" : "white",
    padding: "10px 20px",
    fontSize: "16px",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isGetStartedHovered ? "scale(1.1)" : "scale(1)",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 className="text-white text-3xl md:text-5xl">
            AI Development Company
          </h1>
          <p className="text-white text-base md:text-lg lg:text-xl mt-4 max-w-3xl mx-auto">
            While others are still experimenting with AI, we deliver production-ready AI solutions designed for real business impact. Our AI development services cover everything from enterprise chatbots to advanced AI agents, built to scale and deliver measurable ROI.
          </p>
          <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6 flex-wrap">
            <div className="flex items-center text-white space-x-2">
              <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
              <span className="text-sm md:text-base">Full-cycle AI development</span>
            </div>
            <div className="flex items-center text-white space-x-2">
              <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
              <span className="text-sm md:text-base">Seamless Integration with Current Stack</span>
            </div>
            <div className="flex items-center text-white space-x-2">
              <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
              <span className="text-sm md:text-base">ISO 27001, SOC 2 Type II, GDPR-compliant</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <Link href="https://calendly.com/heybuddy_/30min?month=2024-03">
              <Button
                style={buttonHeader}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="text-lg md:text-xl lg:text-2xl mt-4 md:mt-0 flex items-center gap-2"
                onClick={handlecontactusModal}
              >
                Get free consultation
                <FaArrowRight className="text-sm md:text-base lg:text-lg" />
              </Button>
            </Link>

          </div>
        </div>
        <div style={imageContainerStyle}>
          {/* Replace 'your-image.jpg' with the actual image source */}
          <Image
            loading="lazy"
            style={imageStyle}
            width={450}
            height={450}
            className="h-[24px] w-[24px] bg-white mx-auto mt-4"
            src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/9.AI+development.png"
            alt="Background"
          />
        </div>
      </div>

    </>
  );
};

export default Herosection;
