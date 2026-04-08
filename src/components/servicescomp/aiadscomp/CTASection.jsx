"use client";

import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const CTASection = ({ handlecontactusModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonHeader = {
    border: isHovered ? "0px" : "1px solid white",
    background: isHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: "white",
    padding: "12px 32px",
    fontSize: "18px",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    fontWeight: "500",
  };

  const textAnimation = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <div className="bg-[url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Common+Background.jpg')] py-16 lg:py-20 bg-no-repeat bg-cover bg-[center_top_0rem]">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={textAnimation}
        className="text-center px-6 lg:px-8"
      >
        <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 max-w-4xl mx-auto">
          Ready to Elevate Your Brand with AI-Powered Ads?
        </h2>
        <p className="text-white text-lg md:text-xl lg:text-2xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
          Let's discuss how our AI ads creative services can boost your engagement, conversions, and ROI with cutting-edge video ads and personalized creatives.
        </p>
        <div className="flex justify-center">
          <Button
            onClick={handlecontactusModal}
            style={buttonHeader}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-lg md:text-xl"
          >
            Get Started Today
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default CTASection;
