"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const steps = [
  {
    title: "Discovery & Strategic Planning",
    description:
      "We begin by aligning technology with your educational vision through a deep assessment of your robotics lab setup requirements. Our team evaluates student capacity, defines learning objectives, and audits your space to create a robust strategy that ensures long-term institutional growth and NEP compliance.",
  },
  {
    title: "Lab Design & Infrastructure Setup",
    description:
      "We transform physical spaces into high-performance engineering hubs through expert robotic lab design. By integrating safety-first layout designs, custom laboratory furniture, and high-speed network infrastructure, we build a foundation capable of supporting heavy data loads and multi-user interaction within the school robotics lab.",
  },
  {
    title: "Hardware Procurement & Calibration",
    description:
      "We equip your facility with enterprise-grade kits and specialized STEM tools from our comprehensive robotics lab equipment list. Our process includes full provisioning of microcontrollers and sensors, followed by rigorous stress testing to ensure every component in your robotics and ai lab is perfectly calibrated for immediate classroom use.",
  },
  {
    title: "Content Deployment & LMS Integration",
    description:
      "We synchronize your lab with a world-class, grade-wise certified curriculum. By bridging our 550+ STEM simulations and robotics and automation lab modules with your existing LMS via Single Sign-On (SSO), we provide a personalized and frictionless learning experience for every student and faculty member.",
  },
  {
    title: "Training, Launch & Excellence",
    description:
      "We guarantee successful adoption through on-site faculty workshops and student onboarding. Our commitment extends beyond the launch with pilot program feedback loops, intellectual property (IP) mentorship for student projects, and continuous maintenance to keep your robotics lab in school fully operational.",
  },
];

const ProcessSection = () => {
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
        visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
      }}
      className="py-12 lg:py-20 px-6 text-white"
    >
      <h2 className="text-2xl lg:text-4xl font-bold text-center mb-4">
        Our Robotics Lab Implementation Process
      </h2>
      <p className="text-center text-lg text-white/90 max-w-3xl mx-auto mb-12">
        The right execution strategy ensures a seamless transition from traditional classrooms to a world-class innovation hub. We follow a rigorous, enterprise-grade methodology built around institutional goals, safety, and long-term scalability to ensure your robotics lab remains at the cutting edge.
      </p>
      <div className="max-w-4xl mx-auto space-y-6">
        {steps.map((step, index) => (
          <motion.article
            key={index}
            variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }
            className="flex gap-4 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20"
          >
            <span className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white">
              {index + 1}
            </span>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-white/90 leading-relaxed">{step.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
};

export default ProcessSection;
