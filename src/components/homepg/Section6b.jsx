"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const BusinessScale = () => {
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

  const businessScales = [
    {
      id: 1,
      title: "Start Ups",
      description: "Intelligent solutions within their budget constrained and an always available technical consultant.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762295234560_dqih80.png?x-id=PutObject"
    },
    {
      id: 2,
      title: "Agencies",
      description: "Matching their speed and quality for high client satisfaction and growth possibilities.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762295259201_15vf4o.png?x-id=PutObject"
    },
    {
      id: 3,
      title: "SMEs",
      description: "For SMEs, we are the tech solution providers that end their struggle with scalability and efficiency gaps.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762295398446_plfb1q.png?x-id=PutObject"
    },
    {
      id: 4,
      title: "Enterprises",
      description: "We are the innovation-focused partner helping them overcome the challenges of complex legacy systems.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762295439120_ob8xl8.png?x-id=PutObject"
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse7.png')] bg-no-repeat bg-auto bg-[center_top_3rem] w-full overflow-hidden"
    >
      {/* Red radial gradient overlay - centered behind content */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div 
          className="absolute w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(127, 29, 29, 0.4) 0%, rgba(153, 27, 27, 0.25) 40%, rgba(127, 29, 29, 0.1) 60%, transparent 80%)',
            filter: 'blur(60px)'
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Centered Heading */}
        <div className="text-center mb-6 lg:mb-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 lg:mb-6">
            Our Intelligent Digital Solutions For Every Business Scale
          </h2>
          <p className="text-gray-300 text-base lg:text-lg max-w-4xl mx-auto leading-relaxed">
            Hey Buddy is proud to have partnered with businesses across scale - startup to enterprises. Our AI-native solutions have helped start-ups grow faster, and enabled enterprises to redefine their capability for market leadership.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mt-12">
          {businessScales.map((business) => (
            <div
              key={business.id}
              className="group bg-gray-800/20 backdrop-filter backdrop-blur-md border border-gray-600/50 rounded-xl overflow-hidden hover:bg-gray-800/30 hover:border-gray-500 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
            >
              {/* Image */}
              <div className="relative w-full h-48 lg:h-64 overflow-hidden">
                <Image
                  src={business.image}
                  alt={business.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8">
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {business.title}
                </h3>
                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                  {business.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default BusinessScale;

