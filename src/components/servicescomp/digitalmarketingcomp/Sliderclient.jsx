"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sliderclient = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Social Media Marketing & Management",
      description: "Build strong communities and boost engagement across all channels with our comprehensive social media strategies.",
      image: "https://heybuddystorage.blob.core.windows.net/images/social%20media%20marketing.png",
    },
    {
      title: "Analytics & Conversion Optimization",
      description: "Track, measure, and improve results using advanced analytics and AI-driven insights for maximum ROI.",
      image: "https://heybuddystorage.blob.core.windows.net/images/Performance%20Marketing%20&%20Analytics.png",
    },
    {
      title: "Content Marketing & Storytelling",
      description: "Engage your audience with blogs, videos, and creative campaigns that resonate and drive conversions.",
      image: "https://heybuddystorage.blob.core.windows.net/images/Content%20Marketing.png",
    },
    {
      title: "Search Engine Marketing (SEM) & Paid Ads",
      description: "Maximize ROI through targeted ad campaigns on Google, Meta, and other platforms with precision targeting.",
      image: "https://heybuddystorage.blob.core.windows.net/images/SEO%20&%20SEM.png",
    },
    {
      title: "Search Engine Optimization (SEO)",
      description: "Enhance visibility and rankings with proven strategies and high-performing keywords for organic growth.",
      image: "https://heybuddystorage.blob.core.windows.net/images/SEO%20&%20SEM.png",
    },
    {
      title: "Email & Marketing Automation",
      description: "Convert leads into customers with personalized, automated campaigns that nurture prospects through the funnel.",
      image: "https://heybuddystorage.blob.core.windows.net/images/email%20marketing%20(1).png",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-8 max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {slides[currentSlide].title}
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-white" : "bg-gray-500"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Sliderclient;



