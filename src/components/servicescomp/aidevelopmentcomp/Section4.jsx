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
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
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
      title: "Technology & SaaS",
      items: [
        "Embed intelligent capabilities into software.",
        "Automate repetitive workflows and DevOps tasks.",
        "Forecast usage, churn, and performance trends."
      ]
    },
    {
      title: "eCommerce & Retail",
      items: [
        "Tailor shopping experiences for each customer.",
        "Chatbots and voice assistants for instant help.",
        "Predict inventory needs and sales trends."
      ]
    },
    {
      title: "Healthcare & Life Sciences",
      items: [
        "Extract insights from patient records and research.",
        "Streamline reporting and compliance tasks.",
        "Identify risks and trends from historical data."
      ]
    },
    {
      title: "Finance & FinTech",
      items: [
        "Monitor transactions and detect anomalies in real time.",
        "Predict financial risks and trends.",
        "Chatbots for banking queries and loan assistance."
      ]
    },
    {
      title: "Manufacturing & Industrial",
      items: [
        "Identify equipment issues before failure.",
        "AI-driven visual inspection of products.",
        "Automate workflows and optimize production lines."
      ]
    },
    {
      title: "Logistics & Supply Chain",
      items: [
        "AI-driven planning for faster delivery.",
        "Predict stock requirements accurately.",
        "Automate tracking, documentation, and reporting."
      ]
    },
    {
      title: "Marketing & Digital Agencies",
      items: [
        "AI for blogs, ads, and social media posts.",
        "Predict which campaigns will perform best.",
        "Group audiences for targeted outreach."
      ]
    },
    {
      title: "Education & EdTech",
      items: [
        "AI recommends content based on student progress.",
        "Quickly assess assignments and exams.",
        "AI-powered assistance for learning and Q&A."
      ]
    },
    {
      title: "Enterprise & Professional Services",
      items: [
        "AI-powered search across internal documents.",
        "Workflow Automation.",
        "AI insights to guide strategy and operations."
      ]
    }
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div className="py-4 text-white">
        <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Custom AI Software Development Solutions by Industry
        </h2>
        <p className=" text-base md:text-m lg:text-xl">
          Our AI development services are designed to work across industries, adapting to different data types, workflows, and business challenges. We combine domain understanding with strong AI engineering to deliver solutions that create real impact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 px-2">
        {industries.map((industry, index) => (
          <div key={index} className="p-6 rounded-lg bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-30 border border-gray-700 transition-all">
            <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
            <ul className="space-y-2">
              {industry.items.map((item, i) => (
                <li key={i} className="flex items-start text-gray-200">
                  <span className="text-[#6FCF97] mr-2 mt-1">✔</span>
                  <span className="text-sm">{item}</span>
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
