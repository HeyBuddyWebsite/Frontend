"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stats = [
  {
    value: "350%",
    label: "increase in student engagement when using robotics lab equipment compared to textbook learning.",
  },
  {
    value: "85%",
    label: "higher retention of STEM concepts through a stem robotics lab compared to traditional classrooms.",
  },
  {
    value: "2.5x",
    label: "faster problem-solving skill development in a robotics and automation lab.",
  },
  {
    value: "45%",
    label: "improvement in collaborative team-working abilities within a maker lab robotics environment.",
  },
  {
    value: "60%",
    label: "more cost-effective long-term value than traditional science labs when scaling a robotics lab for school.",
  },
  {
    value: "3.5x",
    label: "stronger interest in pursuing engineering careers after exposure to a robotics lab in India.",
  },
];

const StatsSection = () => {
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
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, staggerChildren: 0.1 },
        },
      }}
      className="py-12 lg:py-20 px-6 text-white"
    >
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-10 lg:mb-14 max-w-4xl mx-auto">
        The Shift to Tangible Intelligence: Why a Robotics Lab is the New Standard
      </h2>
      <p className="text-center text-lg text-white/90 max-w-3xl mx-auto mb-12">
        For decades, education was about consumption. Today, it&apos;s about creation. Deploying a robotics lab in school isn&apos;t just about adding another room to the building; it&apos;s about hitting performance benchmarks that traditional rote learning cannot reach. Whether it&apos;s an ATL robotics lab or a high school robotics lab, the data is clear: hands-on building is the fastest way to master logic.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
          >
            <p className="text-2xl lg:text-3xl font-bold text-white mb-2">{stat.value}</p>
            <p className="text-white/90 text-sm lg:text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default StatsSection;
