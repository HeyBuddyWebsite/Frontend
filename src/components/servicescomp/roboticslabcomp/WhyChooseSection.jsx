"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const reasons = [
  {
    title: "Comprehensive Lab Ecosystem",
    description:
      "We provide a total school solution that integrates robotics and ai lab technology with broader STEM tools. Our setups feature DIY Kits for Robotics, AI, and IoT, alongside 3D printers and specialized software platforms for coding and physical simulation. This creates a holistic school robotics lab environment specifically designed for experiential learning.",
  },
  {
    title: "Certified Graded Curriculum",
    description:
      "Our methodology includes a graded progressive curriculum deployment to ensure students master complex mechanics and logic over time. We provide a 24x7 LMS subscription for students and teachers, featuring multi-lingual content, automated assessments, and detailed progress reports with certification making it the most comprehensive robotics lab for schools in India.",
  },
  {
    title: "Education-First Hardware",
    description:
      "We avoid consumer-grade pitfalls by providing robotics lab equipment engineered for a \"seamless classroom experience.\" Our kits and controllers feature efficient offline usage, built-in mobile device management (MDM) for teacher control, and high-performance internals to handle intensive robotics and automation lab models without technical lag.",
  },
];

const WhyChooseSection = () => {
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
        Why Choose Hey Buddy for Your Robotics Lab?
      </h2>
      <p className="text-center text-lg text-white/90 max-w-3xl mx-auto mb-12">
        We don&apos;t just supply equipment; we build future-ready ecosystems. Our &quot;World Class STEM Curriculum & Unique Methodology&quot; ensures that every robotics lab setup we deliver is a sustainable center for innovation and high-level student achievement.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.article
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
          >
            <h3 className="text-xl font-semibold text-white mb-3">{reason.title}</h3>
            <p className="text-white/90 leading-relaxed">{reason.description}</p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default WhyChooseSection;
