"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const IndustrySolutions = () => {
  const controls = useAnimation();
  const ref = useRef();

  const variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
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

  const industries = [
    {
      id: 1,
      title: "Real Estate",
      description: "We present sales pitch for real estate business by giving customers hyper-realistic property tours and AR property visualization.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762294479373_cvawkn.png?x-id=PutObject"
    },
    {
      id: 2,
      title: "BFSI",
      description: "For BFSI businesses, we introduce automation for faster delivery, minimal human error and intelligent fraud detection.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762294563757_9bu16k.png?x-id=PutObject"
    },
    {
      id: 3,
      title: "Education",
      description: "We make immersive and experiential learning a reality for significant improvement in learning outcome.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762294607790_g4z2pk.png?x-id=PutObject"
    },
    {
      id: 4,
      title: "Manufacturing",
      description: "Our team expedites product development through AI-powered 3D modeling from designing to prototypes, saving cost and time.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762294639261_ytzrcp.png?x-id=PutObject"
    }
  ];

  return (
    <div className="bg-black pt-16 lg:pt-24 relative z-10">
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/bg%20(1).png')] bg-no-repeat bg-contain bg-center overflow-hidden min-h-[500px] lg:min-h-[700px] py-10 lg:py-14"
      style={{ backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}
    >
      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-8 lg:mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Intelligent Technical Solutions with Our Industry-specific Expertise
          </h2>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group bg-gray-800/20 backdrop-filter backdrop-blur-md border border-gray-600/50 rounded-xl overflow-hidden hover:bg-gray-800/30 hover:border-gray-500 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-32 lg:h-40 overflow-hidden">
                <Image
                  src={industry.image}
                  alt={industry.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 lg:p-5">
                <h3 className="text-lg lg:text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-xs lg:text-sm leading-relaxed">
                  {industry.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
    </div>
  );
};

export default IndustrySolutions;

