import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const BANNER_IMAGE =
  "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/banner.jpeg.png";

const Herosection = ({ handlecontactusModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Hero Banner Area */}
      <div
        className="w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
        style={{
          backgroundImage: `url('${BANNER_IMAGE}')`,
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-black/60 z-0" />

        <div className="relative z-10 px-6 lg:px-12 w-full max-w-7xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight tracking-tight">
            AI Development Company
          </h1>

          <div className="flex items-center justify-center">
            <Link href="https://calendly.com/heybuddy_/30min?month=2024-03">
              <button
                onClick={handlecontactusModal}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-lg font-bold rounded-full overflow-hidden shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 hover:shadow-[0_0_35px_rgba(6,182,212,0.8)] hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative flex items-center gap-3">
                  Get free consultation
                  <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Content Below Hero */}
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-12">
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed">
          While others are still experimenting with AI, we deliver production-ready AI solutions designed for real business impact. Our AI development services cover everything from enterprise chatbots to advanced AI agents, built to scale and deliver measurable ROI.
        </p>

        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <AiFillCheckCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-white text-sm font-medium">Full-cycle AI development</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <AiFillCheckCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-white text-sm font-medium">Seamless Integration with Current Stack</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <AiFillCheckCircle className="w-5 h-5 text-cyan-400" />
            <span className="text-white text-sm font-medium">ISO 27001, SOC 2 Type II, GDPR-compliant</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
