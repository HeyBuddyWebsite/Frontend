"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
  {
    title: "NLP-infused Chatbot to transform Customer Engagement",
    description:
      "We helped our client revolutionize their customer engagement with advanced Natural Language Processing (NLP) algorithms. We created a chatbot that could promptly answer customer queries with personalized interactions matching their preferences. Customer satisfaction soared high with reduced response time and a boost in overall engagement.",
  },
  {
    title: "Optimizing Operations with RPA For Higher Productivity",
    description:
      "We deployed Robotic Process Automation (RPA) for a logistics partner. This capability automated repetitive tasks and data entry processes, streamlining their workflow, while significantly reducing errors and processing time. The outcome was a leaner and more productive operation.",
  },
  {
    title: "Customer ML-Model for Accurate Market Trend Predictions",
    description:
      "A finance firm partnered with Hey Buddy to leverage Machine Learning in data analysis. Our team developed a custom machine learning model that analyzed market trends and provided real-time insights. This facilitated data-driven informed decision-making and our client experienced a notable improvement in their investment strategies. Thus, the profitability soared higher than ever.",
  },
];

const AISuccessStoriesSection = () => {
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
      className="py-6 lg:py-8 px-6 lg:px-12"
    >
      <div className="py-4 mb-10 text-white px-6 lg:px-0">
        <h2 className="text-2xl lg:text-4xl font-bold mb-6">
          Success Stories Showcasing With Our <br />
          Artificial Intelligence Development Services
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
          Our AI software development expertise has powered clients&apos; endeavors across industries and contributed to their success stories, capitalizing on the brilliance of AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div
            key={index}
            className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
              <div className="w-20 h-20 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
            </div>

            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
              {story.title}
            </h3>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
              {story.description}
            </p>

            <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </div>
        ))}
      </div>
    </motion.div>
  );
};


export default AISuccessStoriesSection;
