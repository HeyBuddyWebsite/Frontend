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
      description: "We power sales pitch for real estate business by giving customer hyper-realistic property tours and AR property visualization.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762294479373_cvawkn.png?x-id=PutObject"
    },
    {
      id: 2,
      title: "BFSI",
      description: "For BFSI businesses, we introduce automation for faster delivery, minimal human-error and intelligent fraud detection.",
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
      description: "Our team expedited product development through AI-powered 3D modeling from designing to prototypes, saving cost and time.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762294639261_ytzrcp.png?x-id=PutObject"
    }
  ];

  return (
    <div className="bg-black pt-0 relative z-10 mt-0 sm:-mt-4 md:-mt-8 lg:-mt-16">
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/bg%20(1).png')] bg-no-repeat bg-contain bg-center overflow-hidden min-h-[500px] lg:min-h-[700px] py-2 lg:py-4"
      style={{ backgroundSize: 'contain', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat' }}
    >
      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-12 lg:mb-16" style={{ paddingTop: '0' }}>
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            Intelligent Technical Solutions with Our Industry-specific Expertise
          </h2>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-7xl mx-auto">
          {industries.map((industry) => (
            <div
              key={industry.id}
              className="group bg-gray-800/20 backdrop-filter backdrop-blur-md border border-gray-600/50 rounded-xl hover:bg-gray-800/30 hover:border-gray-500 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer"
              style={{ maxWidth: '95%', margin: '0 auto' }}
            >
              {/* Image */}
              <div className="relative w-full h-40 lg:h-48 overflow-hidden" style={{ padding: 'clamp(12px, 1.5vw, 20px)', paddingBottom: 'clamp(8px, 1vw, 12px)' }}>
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 lg:p-6">
                <h3 className="text-base lg:text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {industry.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed" style={{ fontSize: 'clamp(11px, 1.1vw, 13px)' }}>
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

