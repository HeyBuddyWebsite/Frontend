"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const solutions = [
  {
    title: "ATL & STEM Lab Infrastructure & School Setup",
    description:
      "We provide a full-cycle atal robotics lab setup that transforms traditional spaces into innovation hubs. Our focus is on supplying enterprise-grade robotics lab equipment for schools like 3D printers, drones, and IoT kits.",
    components: "Robotics lab equipment list, DIY kits, mechanical tools, and soldering stations.",
  },
  {
    title: "Graded Progressive Curriculum Deployment",
    description:
      "We deliver a structured learning path tailored to master complex concepts. By integrating stem lab robotics modules, we provide students with 24/7 access to world-class resources through a centralized platform.",
    components: "24x7 LMS subscription, multi-lingual content, and automated progress reports.",
  },
  {
    title: "Training & Technical Execution Support",
    description:
      "Our role as a robotics lab setup company extends beyond installation. We provide \"End-Mile Delivery\" through hybrid-mode training for both teachers and students, ensuring the school robotics lab is fully utilized.",
    components: "On-site workshops, live webinars, and continuous technical execution support.",
  },
];

const SolutionsSection = () => {
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
        Our End-To-End Robotics Lab Solutions
      </h2>
      <p className="text-center text-lg text-white/90 max-w-3xl mx-auto mb-12">
        We build robotics and AI lab solutions that solve the challenge of &quot;tech-obsolescence.&quot; Every solution is designed around a &quot;World Class STEM Curriculum&quot; and unique methodology.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {solutions.map((sol, index) => (
          <motion.article
            key={index}
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-white mb-3">{index + 1}. {sol.title}</h3>
            <p className="text-white/90 mb-4 flex-1">{sol.description}</p>
            <p className="text-sm text-white/80">
              <span className="font-semibold text-white">Key Components:</span> {sol.components}
            </p>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default SolutionsSection;
