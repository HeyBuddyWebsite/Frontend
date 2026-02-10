"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
  {
    title: "Advanced Robotics and AI Lab for Industrial Automation Training",
    body: "We deployed a high-fidelity robotics and AI lab for a leading technical university to streamline their precision engineering and automation training. This specialized robotics and automation lab setup allowed engineering students to program industrial-grade robotic arms and AI-driven sensors in a zero-risk digital twin environment. The outcome was a significant reduction in equipment mishandling and a leaner, more job-ready engineering cohort.",
  },
  {
    title: "NEP-Aligned Robotics Lab in School for Future-Ready STEM Excellence",
    body: "We deployed a high-fidelity robotics lab in school setup for a leading K-12 institution to streamline their experiential STEM curriculum. This specialized school robotics lab allowed students to build, code, and test autonomous drones and rovers using our curated robotics lab equipment list. The outcome was a 45% surge in conceptual clarity and a notable boost in student enrollment for their advanced STEM track.",
  },
  {
    title: "Collaborative Robotics Research Lab for Global Innovation",
    body: "A top-tier research university partnered with Hey Buddy to establish a robotics virtual lab and physical research facility focused on humanoid interaction. This specialized robotics and ai lab allowed researchers to collaborate on real-time hardware-in-the-loop simulations and 3D prototyping. This facilitated data-driven decision-making, and the client experienced a 50% reduction in prototyping timelines, helping their R&D output soar higher than ever.",
  },
];

const SuccessStoriesSection = () => {
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
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
      }}
      className="py-12 lg:py-20 px-6 text-white"
    >
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4">
        Success Stories Showcasing Our Robotics Lab Setup Services
      </h2>
      <p className="text-center text-lg text-white/90 max-w-3xl mx-auto mb-12">
        Our robotics lab expertise has powered academic and industrial excellence across regions, capitalizing on the brilliance of tangible logic and automated intelligence. These success stories reflect our commitment as a leading robotics lab setup company to delivering measurable impact through physical innovation.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {stories.map((story, index) => (
          <motion.article
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-lg font-semibold text-white mb-3">{story.title}</h3>
            <p className="text-white/90 text-sm leading-relaxed">{story.body}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default SuccessStoriesSection;
