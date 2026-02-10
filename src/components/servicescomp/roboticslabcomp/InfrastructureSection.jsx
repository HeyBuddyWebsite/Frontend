"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";

const requirements = [
  "Laptops & Desktops with Internet Connection",
  "Internet Speed > 20 Mbps",
  "LED TV / Projector & White Board",
  "Robot Parts & Kits",
  "Space Required - 500 sq.ft",
];

const InfrastructureSection = () => {
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
      }}
      className="py-12 lg:py-20 px-6 text-white"
    >
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10">
        Infrastructure Requirements for Robotics Lab Setup
      </h2>
      <div className="max-w-2xl mx-auto space-y-3">
        {requirements.map((item, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}
            className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20"
          >
            <AiFillCheckCircle className="w-6 h-6 text-[#6FCF97] flex-shrink-0" />
            <span className="text-white">{item}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default InfrastructureSection;
