"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Sliderclient from "./Sliderclient";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";

const Mixsection = () => {
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

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0.1 }
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
      title: "FinTech & Banking",
      items: ["Fraud Detection", "Algorithmic Trading", "Credit Risk Modeling", "Personalized Banking"]
    },
    {
      title: "Healthcare & Pharma",
      items: ["Diagnostic Imaging", "Drug Discovery", "Patient Data Analysis", "Virtual Health Assistants"]
    },
    {
      title: "Retail & E-commerce",
      items: ["Recommendation Engines", "Demand Forecasting", "Visual Search", "Customer Sentiment Analysis"]
    },
    {
      title: "Manufacturing",
      items: ["Predictive Maintenance", "Quality Control", "Supply Chain Optimization", "Digital Twins"]
    },
    {
      title: "Logistics & Supply Chain",
      items: ["Route Optimization", "Inventory Management", "Fleet Tracking", "Demand Prediction"]
    },
    {
      title: "Real Estate",
      items: ["Property Valuation", "Market Trend Analysis", "Virtual Tours", "Lead Scoring"]
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="py-12 lg:py-16 px-6 lg:px-12 text-white"
    >
      <div className="py-4 mb-10 text-white">
        <h2 className="text-3xl lg:text-5xl font-bold mb-6">
          Custom AI Software Development <br />
          <span className="text-white">
            Solutions by Industry
          </span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
          Our AI development services are designed to work across industries, adapting to different data types, workflows, and business challenges. We combine domain understanding with strong AI engineering to deliver solutions that create real impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {industries.map((industry, index) => (
          <div
            key={index}
            className="group p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 transition-all duration-300 hover:border-blue-500/50 hover:bg-[#111] hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
          >
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
              {industry.title}
            </h3>
            <ul className="space-y-3">
              {industry.items.map((item, i) => (
                <li key={i} className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span className="text-blue-500 mr-3 text-lg flex-shrink-0">
                    <AiFillCheckCircle />
                  </span>
                  <span className="text-sm md:text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Mixsection;
