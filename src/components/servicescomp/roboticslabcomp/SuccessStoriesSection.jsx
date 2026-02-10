"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
  {
    title: "Turning Students into Inventors at Green Valley International",
    description:
      "We established a comprehensive robotics lab for Green Valley International School. Within 6 months, students who had never written a line of code were building autonomous line-following robots. The school saw a 40% increase in participation in national STEM olympiads.",
  },
  {
    title: "Advanced AI-Robotics Lab for Engineering College",
    description:
      "For a leading technical institute, we deployed an advanced automation lab featuring industrial arms and ROS-enabled mobile robots. This facility enabled final-year students to work on industry-grade projects, resulting in stronger campus placements in automation firms.",
  },
  {
    title: "Community Maker Space for Skill Development",
    description:
      "We partnered with a local NGO to set up a community robotics center. The initiative provided underprivileged youth with access to 3D printers and robotics kits, fostering critical skills and opening new career pathways in technical fields.",
  },
];

const SuccessStoriesSection = () => {
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
          Success Stories from our Robotics Labs
        </h2>
        <p className="text-base md:text-m lg:text-xl text-white/80">
          Our robotics solutions have ignited a passion for engineering in thousands of students. Here are just a few examples of the impact we've created.
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

export default SuccessStoriesSection;
