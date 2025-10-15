"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sliderclient = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Product-Centric Demo Videos",
      description: "Engaging demo videos that highlight your product's key features and benefits, designed to capture interest and drive conversions.",
      image: "https://heybuddystorage.blob.core.windows.net/images/sahm_futuristic_human_robot_with_a_black_faceshield_featureless_bb4f31d9-7706-4024-ad8d-f6360d0d075f.png",
    },
    {
      title: "UGC-Style AI Ads",
      description: "Authentic ads styled like user-generated content to build trust and connect with your audience on a personal level.",
      image: "https://heybuddystorage.blob.core.windows.net/images/roachbot_cinematic_portrait_of_a_male_cyborg_hacker_with_hologr_8c72874a-dc54-49cc-a528-f6419514d781.png",
    },
    {
      title: "Short-Form Video Ads",
      description: "Bite-sized videos optimized for social media platforms, crafted to maximize viewer engagement and shareability.",
      image: "https://heybuddystorage.blob.core.windows.net/images/_thevisualizer_a_cartoon_phoenix_bird_is_holing_a_big_beer_in_o_2d9c1ac7-924d-4236-b72c-94b7e4ad7c84.png",
    },
    {
      title: "Multi-Format Video Delivery",
      description: "Versatile video ads delivered in multiple formats to ensure seamless performance across all digital channels and devices.",
      image: "https://heybuddystorage.blob.core.windows.net/images/u6355339189_Realistic_matcha_pistachio_levain_cookies_two_halve_600e6274-feab-4145-a003-2007c78f6b0d.png",
    },
    {
      title: "Hook & Caption Variations",
      description: "AI-generated variations of attention-grabbing hooks and captions to improve ad relevance and boost click-through rates.",
      image: "https://heybuddystorage.blob.core.windows.net/images/borisa82_a_photo_of_a_cute_young_cat_Dancing_dressed_in_Traditi_b2141317-9cab-42b9-a4ce-28ecce585526.png",
    },
    {
      title: "AI Voiceovers & Subtitles",
      description: "Clear, professional AI-generated voiceovers paired with subtitles to enhance accessibility and reach a wider audience.",
      image: "https://heybuddystorage.blob.core.windows.net/images/sahm_futuristic_human_robot_with_a_black_faceshield_featureless_bb4f31d9-7706-4024-ad8d-f6360d0d075f.png",
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


