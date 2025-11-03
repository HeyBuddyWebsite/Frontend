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
      title: "Quality by Experts",
      description: "Our dedicated team of AI marketing strategists, video creators, and automation specialists blends creativity with technology. With experience across multiple industries, we craft high-performing video ads tailored to your brand and audience.",
    },
    {
      title: "Timely Deliveries",
      description: "In the fast-paced digital world, timing is everything. At Hey Buddy, we follow a streamlined AI ad creation process to ensure on-time delivery of your video ads without compromising creativity or quality.",
    },
    {
      title: "Communication Clarity",
      description: "We value transparent communication and keep you informed throughout the campaign. Using advanced project management and data-driven tools, we ensure clarity and agile decision-making.",
    },
    {
      title: "Flexible and Cost-Effective Models",
      description: "Every business is unique. That's why we offer multiple engagement models—whether you need a few AI ad creatives for testing or large-scale campaigns, we provide solutions to match your budget and goals.",
    },
    {
      title: "Adherence to Specifications",
      description: "Your brand identity and campaign goals are at the heart of everything we do. We integrate your specifications into each video ad to ensure customized, conversion-focused creatives that align perfectly with your vision.",
    },
    {
      title: "Portfolio",
      description: "Our portfolio includes successful AI video ad campaigns for real estate, e-commerce, social media, and more. We have helped brands increase visibility, engagement, and revenue through data-driven AI ad strategies.",
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
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Why Choose Hey Buddy
        </h1>
        <p className=" text-base md:text-lg lg:text-2xl">
          Partner with Hey Buddy if you want impactful AI-generated video ads created by specialists. We deliver top-quality ad creatives while adhering to strict timelines and ensuring you get the best ROI on every campaign.
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


