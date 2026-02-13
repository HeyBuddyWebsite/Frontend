"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaChartBar,
  FaUser,
  FaBullhorn,
  FaChartPie,
  FaLaptop,
  FaBullseye,
} from "react-icons/fa";

const stats = [
  {
    icon: FaChartBar,
    value: "99%",
    label: "of Fortune 500 companies use AI for hiring without human oversight",
  },
  {
    icon: FaUser,
    value: "92.1%",
    label: "of businesses witnessed measurable results from AI",
  },
  {
    icon: FaBullhorn,
    value: "75%",
    label: "of top executives believe AI for business growth",
  },
  {
    icon: FaChartPie,
    value: "63%",
    label: "of organizations will adopt AI globally within the next 3 years",
  },
  {
    icon: FaLaptop,
    value: "44%",
    label: "of business leaders achieved increased productivity through AI",
  },
  {
    icon: FaBullseye,
    value: "21%",
    label: "net increase to the U.S. GDP by 2030 with AI",
  },
];

const AIOpportunitySection = () => {
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
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
      className="py-4 text-white"
    >
      <div className="py-2 mb-2 text-white">
        <h2 className="lg:w-[90%] text-2xl lg:text-4xl font-bold mb-3 text-white">
          AI Software Development: Decade rare Opportunity - Seize it Now Or Regret Forever
        </h2>
        <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl">
          From rapid automation to deep data-driven insights, AI is propelling companies into the future and you can be one of them. Tap into the unmatched potential of this intelligent technology. Boost efficiency like never before, and stay way ahead of the competition. Your journey to business transformation starts here! Are you ready to lead?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stats.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <motion.figure
              key={index}
              whileHover={{ y: -5 }}
              className="relative group flex flex-col p-4 rounded-xl h-full w-full bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <blockquote className="relative z-10">
                <div className="mb-4 p-2.5 w-fit rounded-lg bg-white/10 text-white transition-colors duration-300">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div className="text-2xl font-bold text-white mb-1.5 transition-colors duration-300">
                  {item.value}
                </div>
                <p className="text-base text-gray-400 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </p>
              </blockquote>
            </motion.figure>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AIOpportunitySection;
