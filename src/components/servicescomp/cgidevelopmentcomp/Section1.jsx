"use client";

import React, { useRef } from "react";
import { Button } from "@material-tailwind/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";

const BANNER_IMAGE =
  "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769647626951_ysfp1q.png";

const Herosection = ({ handlecontactusModal }) => {
  const containerRef = useRef(null);

  // Track scroll progress within this component
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform background Y position based on scroll
  const backgroundY = useTransform(scrollYProgress, [0, 0.5], ["100%", "0%"]);

  return (
    <div ref={containerRef} className="relative w-full h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">

        {/* Background Layer - Starts below and slides up */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0 w-full h-full z-0"
        >
          {/* Dark Gradient Overlay for the image */}
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${BANNER_IMAGE}')` }}
          />
        </motion.div>

        {/* Initial Background (Solid Black) behind text initially */}
        <div className="absolute inset-0 bg-black -z-10" />

        {/* Content Layer - Centered */}
        <div className="relative z-20 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Hyper-realistic CGI & Visual Effects <br className="hidden md:block" /> by Hey Buddy
          </h1>

          <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-8 leading-relaxed max-w-4xl">
            Partner with Hey Buddy for high-quality CGI delivered on time. Our strong CGI team has deployed top-class technical proficiency for creative and innovative CGI effects that captivate audiences and bring your most ambitious visions to life.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <AiFillCheckCircle className="w-5 h-5 text-white" />
              <span className="text-white text-xs md:text-sm font-medium">Photorealistic 3D Modeling</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <AiFillCheckCircle className="w-5 h-5 text-white" />
              <span className="text-white text-xs md:text-sm font-medium">Cinematic VFX & Compositing</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <AiFillCheckCircle className="w-5 h-5 text-white" />
              <span className="text-white text-xs md:text-sm font-medium">Interactive Digital Twins</span>
            </div>
          </div>

          <button
            onClick={handlecontactusModal}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-base font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative flex items-center gap-3">
              Start Your CGI Project
              <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default Herosection;
