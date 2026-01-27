"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sliderclient = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Product-Centric Demo Videos",
      description: "Engaging demo videos that highlight your product's key features and benefits, designed to capture interest and drive conversions.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410190_6usckc.png",
    },
    {
      title: "UGC-Style AI Ads",
      description: "Authentic ads styled like user-generated content to build trust and connect with your audience on a personal level.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487409946_hfmifi.png",
    },
    {
      title: "Short-Form Video Ads",
      description: "Bite-sized videos optimized for social media platforms, crafted to maximize viewer engagement and shareability.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487409798_mqj8of.png",
    },
    {
      title: "Multi-Format Video Delivery",
      description: "Versatile video ads delivered in multiple formats to ensure seamless performance across all digital channels and devices.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410074_wdmqs9.png",
    },
    {
      title: "Hook & Caption Variations",
      description: "AI-generated variations of attention-grabbing hooks and captions to improve ad relevance and boost click-through rates.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487192253_rfniow.png",
    },
    {
      title: "AI Voiceovers & Subtitles",
      description: "Clear, professional AI-generated voiceovers paired with subtitles to enhance accessibility and reach a wider audience.",
      image: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410294_u83r3p.png",
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


