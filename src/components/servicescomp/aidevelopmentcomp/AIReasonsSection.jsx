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
      className="lg:py-4 text-white"
    >
      <div className="py-4 text-white">
        <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Leading AI Development Company For More than One Reason
        </h2>
        <p className="text-base md:text-m lg:text-xl">
          Hey buddy has a proven track record of delivering high-quality AI-based software solutions. With our skilled and experienced team, we are known to help our clients disrupt markets and help them achieve goals that earlier appeared distant or even impossible. What can we say, that&apos;s the power of AI.
        </p>
      </div>

      <div className="lg:py-4 grid mx-auto justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {reasons.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <figure
              key={index}
              className="flex flex-col p-4 lg:p-6 rounded-lg h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40"
            >
              <blockquote className="text-gray-400">
                <IconComponent className="h-8 w-8 text-white" />
                <h3
                  style={{ color: "white" }}
                  className="py-4 text-xl font-semibold text-white"
                >
                  {item.title}
                </h3>
                <p style={{ color: "white" }} className="text-left text-sm md:text-base">
                  {item.description}
                </p>
              </blockquote>
            </figure>
          );
        })}
      </div>
    </motion.div>
  );
};

export default AIReasonsSection;
