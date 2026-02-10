"use client";

import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { motion } from "framer-motion";

const CTASection = ({ handlecontactusModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
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

  return (
    <div className="bg-black w-full">
      <div
        className="bg-no-repeat bg-center w-full"
        style={{
          backgroundImage:
            "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457149053_17i5il.png?x-id=PutObject')",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "clamp(400px, 45vw, 650px)",
          paddingTop: "clamp(60px, 6vw, 100px)",
          paddingBottom: "clamp(60px, 6vw, 100px)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center px-6 lg:px-8"
        >
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 max-w-4xl mx-auto">
            Ready to Build the Future of Your Institution?
          </h2>
          <p className="text-white text-lg md:text-xl lg:text-2xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how a robotics lab setup can drive innovation and turn your students into creators.
          </p>
          <div className="flex justify-center">
            <Button
              onClick={handlecontactusModal}
              style={buttonStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="text-lg md:text-xl"
            >
              Check Setup Costs
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CTASection;
