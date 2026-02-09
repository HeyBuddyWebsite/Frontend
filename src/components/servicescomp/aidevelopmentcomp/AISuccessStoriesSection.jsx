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
    >
      <div className="py-4 text-white">
        <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Success Stories Showcasing With Our Artificial Intelligence Development Services
        </h2>
        <p className="text-base md:text-m lg:text-xl text-white/80">
          Our AI software development expertise has powered clients&apos; endeavors across industries and contributed to their success stories, capitalizing on the brilliance of AI.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 px-2">
        {stories.map((story, index) => (
          <div
            key={index}
            className="p-6 rounded-lg bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-30 border border-gray-700 transition-all"
          >
            <h3 className="text-xl font-bold text-white mb-4">{story.title}</h3>
            <p className="text-gray-200 text-sm md:text-base leading-relaxed">
              {story.description}
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default AISuccessStoriesSection;
