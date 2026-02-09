"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaChartBar,
  FaUser,
  FaBullhorn,
  FaLightbulb,
  FaLaptop,
  FaBullseye,
} from "react-icons/fa";

const stats = [
  {
    icon: FaChartBar,
    text: "99% of Fortune 500 companies use AI for hiring without human oversight",
  },
  {
    icon: FaUser,
    text: "92.1% of businesses witnessed measurable results from AI",
  },
  {
    icon: FaBullhorn,
    text: "75% of top executives believe AI for business growth",
  },
  {
    icon: FaLightbulb,
    text: "63% of organizations will adopt AI globally within the next 3 years",
  },
  {
    icon: FaLaptop,
    text: "44% of business leaders achieved increased productivity through AI",
  },
  {
    icon: FaBullseye,
    text: "21% net increase to the U.S. GDP by 2030 with AI",
  },
];

const AIOpportunitySection = () => {
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="lg:py-4 text-white"
    >
      <div className="py-4 text-white">
        <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          AI Software Development: Decade Rare Opportunity - Seize it Now Or Regret Forever
        </h2>
        <p className="text-base md:text-m lg:text-xl">
          From rapid automation to deep data-driven insights, AI is propelling companies into the future and you can be one of them. Tap into the unmatched potential of this intelligent technology. Boost efficiency like never before, and stay way ahead of the competition. Your journey to business transformation starts here! Are you ready to lead?
        </p>
      </div>

      <div className="lg:py-4 grid mx-auto justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {stats.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <figure
              key={index}
              className="flex flex-col p-4 lg:p-6 rounded-lg h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40"
            >
              <blockquote className="text-gray-400">
                <IconComponent className="h-8 w-8 text-white" />
                <p style={{ color: "white" }} className="py-4 text-left text-base">
                  {item.text}
                </p>
              </blockquote>
            </figure>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AIOpportunitySection;
