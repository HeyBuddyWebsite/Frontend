"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  FaFileAlt,
  FaCogs,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaPlug,
  FaHeadset,
  FaUsers,
  FaLightbulb,
} from "react-icons/fa";

const reasons = [
  {
    icon: FaFileAlt,
    title: "Proven Track Record",
    description:
      "Benefit from our established history of success. Our track record speaks volumes, showcasing consistent excellence in delivering results.",
  },
  {
    icon: FaCogs,
    title: "Technical Expertise",
    description:
      "Capitalize on our team's unparalleled technical prowess. Our dedicated group of AI experts is ready to tackle the most intricate challenges.",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Customized Solutions",
    description:
      "Experience tailored excellence. Our solutions are crafted with precision to meet your unique needs, ensuring optimal performance and efficiency.",
  },
  {
    icon: FaShieldAlt,
    title: "Data Security and Privacy",
    description:
      "Your data's sanctuary is our priority. Rest assured, our robust security measures guarantee the utmost confidentiality and privacy.",
  },
  {
    icon: FaExpandArrowsAlt,
    title: "Scalability and Flexibility",
    description:
      "Prepare for growth without limitations. Our solutions are designed to scale seamlessly, adapting to your evolving business needs.",
  },
  {
    icon: FaPlug,
    title: "Integration Capabilities",
    description:
      "Achieve harmony in your tech ecosystem. Our integration capabilities ensure smooth collaboration with your existing systems.",
  },
  {
    icon: FaHeadset,
    title: "Continuous Support and Maintenance",
    description:
      "Beyond implementation, we stand by your side. Count on our unwavering support and proactive maintenance to keep your operations running seamlessly.",
  },
  {
    icon: FaUsers,
    title: "Collaborative Approach",
    description:
      "Your goals are our mission. We embrace a collaborative approach, working hand-in-hand to achieve milestones and exceed expectations.",
  },
  {
    icon: FaLightbulb,
    title: "Innovation and Future Readiness",
    description:
      "Stay ahead in the digital landscape. Our commitment to innovation ensures that your solutions are not just current but future-ready.",
  },
];

const AIReasonsSection = () => {
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
      className="py-8 lg:py-10 text-white"
    >
      <div className="py-4 mb-10 text-white">
        <h2 className="lg:w-[90%] text-3xl lg:text-5xl font-bold mb-6">
          Leading AI Development Company <br />
          For More than One Reason
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
          Hey Buddy has a proven track record of delivering high-quality AI-based software solutions. With our skilled and experienced team, we are known to help our clients disrupt markets and help them achieve goals that earlier appeared distant or even impossible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-[#0a0a0a] border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_25px_rgba(6,182,212,0.15)]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 p-3 w-fit rounded-xl bg-cyan-900/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300">
                  <IconComponent className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AIReasonsSection;
