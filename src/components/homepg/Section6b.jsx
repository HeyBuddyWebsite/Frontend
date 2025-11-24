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
      description: "We are the innovation-facilitator, tech evangelist for enterprise, helping them overcome the challenges of complex legacy systems.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/banners/1762295439120_ob8xl8.png?x-id=PutObject"
    }
  ];

  return (
    <div className="bg-black pt-16 lg:pt-24 relative z-10">
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="relative bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse7.png')] bg-no-repeat bg-contain bg-center w-full overflow-hidden min-h-[500px] lg:min-h-[700px]"
      style={{ backgroundSize: 'contain', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat' }}
    >

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        {/* Centered Heading */}
        <div className="text-center mb-12 lg:mb-16" style={{ paddingTop: 'clamp(30px, 4vw, 60px)' }}>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 lg:mb-4">
            Our Intelligent Digital Solutions For Every Business Scale
          </h2>
          <p className="text-gray-300 text-sm lg:text-base max-w-4xl mx-auto leading-relaxed">
            Hey Buddy is proud to have partnered with businesses across scale - startup to enterprises. Our AI-native solutions have helped start-ups grow faster, and enabled enterprises to redefine their capability for market leadership.
          </p>
        </div>

        {/* 2x2 Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-7xl mx-auto">
          {businessScales.map((business) => (
            <div
              key={business.id}
              className="group bg-gray-800/20 backdrop-filter backdrop-blur-md border border-gray-600/50 rounded-xl hover:bg-gray-800/30 hover:border-gray-500 hover:shadow-xl hover:scale-105 transition-all duration-300 shadow-lg cursor-pointer flex flex-col"
              style={{ maxWidth: '95%', margin: '0 auto', height: '100%', minHeight: '280px' }}
            >
              {/* Image */}
              <div className="relative w-full h-40 lg:h-48 overflow-hidden" style={{ padding: 'clamp(12px, 1.5vw, 20px)', paddingBottom: 'clamp(8px, 1vw, 12px)' }}>
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={business.image}
                    alt={business.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="p-4 lg:p-6 flex-1 flex flex-col">
                <h3 className="text-base lg:text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                  {business.title}
                </h3>
                <p className="text-gray-300 text-xs leading-relaxed flex-1" style={{ fontSize: 'clamp(11px, 1.1vw, 13px)' }}>
                  {business.description}
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

export default BusinessScale;

