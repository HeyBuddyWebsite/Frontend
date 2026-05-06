"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Section7 = () => {
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

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
      if (isVisible) {
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const whyChooseUs = [
    {
      title: "Expertise That Delivers",
      description: "Our team of certified SEO specialists, PPC experts, social media strategists, and content creators bring years of experience to every project, ensuring campaigns that are creative, conversion-focused, and industry-leading.",
    },
    {
      title: "Timely Campaign Execution",
      description: "We respect your timelines. With our agile workflows and robust project management, we launch and optimize campaigns quickly, keeping your business ahead of the competition.",
    },
    {
      title: "Clear Communication & Transparency",
      description: "From detailed strategy presentations to real-time reporting dashboards, we keep you informed at every stage. Our collaborative approach ensures your input shapes the outcome.",
    },
    {
      title: "Flexible and Scalable Solutions",
      description: "Whether you need a full-service marketing partner or campaign-specific solutions, our flexible models adapt to your needs and budget – without compromising quality.",
    },
    {
      title: "Aligned to Your Goals",
      description: "Every campaign is tailored to your unique objectives. We integrate KPIs and trackable metrics to ensure your goals translate into tangible growth and ROI.",
    },
    {
      title: "Proven Track Record",
      description: "Our portfolio spans metaverse marketing, Web3 campaigns, AR/VR promotions, and enterprise-level digital strategies, showcasing success stories across industries.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div className="py-8 text-white">
        <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Why Choose Hey Buddy for Digital Marketing
        </h2>
        <p className=" text-base md:text-lg lg:text-2xl">
          Partner with Hey Buddy, a leading creative digital marketing company in Gurugram, to elevate your brand's online presence. We combine innovation, data-driven strategies, and cutting-edge technology to deliver maximum ROI and measurable results every time.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {whyChooseUs.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 transform hover:scale-105"
          >
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-gray-300 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Section7;



