import React, { useRef, useState } from "react";
import { Button } from "@material-tailwind/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const BANNER_IMAGE = "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/banner.jpeg.png";

const Herosection = ({ handlecontactusModal }) => {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative w-full h-[150vh] lg:h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Background Layer - ParallaxEffect */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full z-0"
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${BANNER_IMAGE}')` }}
          />
        </motion.div>

        {/* Solid Background behind parallax */}
        <div className="absolute inset-0 bg-black -z-10" />

        {/* Content Layer */}
        <div className="relative z-20 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-[-10vh] lg:mt-0">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            The Leading Metaverse <br /> Development Company
          </h1>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-8 leading-relaxed max-w-4xl">
            Hey Buddy is a leading name in the domain of the metaverse. We have a large team of experienced developers ready to collaborate and deliver innovative metaverse solutions to mesmerize your audience.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              "Immersive Virtual Worlds",
              "Scalable & Custom Metaverse Solutions",
              "Seamless Integration with Existing Systems"
            ].map((text, i) => (
              <div key={i} className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
                <AiFillCheckCircle className="w-5 h-5 text-white" />
                <span className="text-white text-xs md:text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>

          <button
            onClick={handlecontactusModal}
            className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-3">
              Start Your Project
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
