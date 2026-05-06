"use client";

import React, { useEffect, useRef } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Pagenation = () => {
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

  const [selectedTab, setSelectedTab] = useTabs([
    "GameEngines",
    "Backend",
    "Database",
    "Cloud",
    "DevOps",
    "CRMLiveOps",
  ]);

  const techStack = {
    GameEngines: ["Unity 6", "Unreal Engine 5.5", "CryEngine", "PlayCanvas"],
    Backend: ["Node.js", "Go", "C++", "Photon", "Mirror"],
    Database: ["MongoDB", "PostgreSQL", "Redis", "DynamoDB"],
    Cloud: ["AWS (GameLift)", "Azure (PlayFab)", "Google Cloud"],
    DevOps: ["Docker", "Kubernetes", "Jenkins", "GitHub Actions"],
    CRMLiveOps: ["Braze", "Firebase", "Mixpanel", "PlayFab"]
  };

  const TechList = ({ items }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-center justify-center text-center hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        >
          <span className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors uppercase tracking-wider">{item}</span>
        </div>
      ))}
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="py-10 lg:py-16 px-6 lg:px-12 text-white bg-black/40 backdrop-blur-sm rounded-3xl border border-white/5"
    >
      <div className="py-6 mb-8 text-center text-white">
        <h2 className="text-2xl lg:text-5xl font-bold mb-6">
          Hey Buddy Tech Arsenal for best Game Solutions: <br />
          <span className="text-blue-500">Expertise on all fronts</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed text-center">
          Hey Buddy claim to the leading spot of a game development company in India emanates from its expert team. Our developers bring in advanced and profound expertise to deliver the best gaming solution for you.
        </p>
      </div>

      <nav className="flex flex-nowrap overflow-x-auto scrollbar-hide border-b border-white/5 mb-8 justify-center">
        {[
          { id: "GameEngines", label: "Engines" },
          { id: "Backend", label: "Backend" },
          { id: "Database", label: "Database" },
          { id: "Cloud", label: "Cloud" },
          { id: "DevOps", label: "DevOps" },
          { id: "CRMLiveOps", label: "CRM & LiveOps" }
        ].map(tab => (
          <TabSelector
            key={tab.id}
            isActive={selectedTab === tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`whitespace-nowrap pb-4 px-4 text-base md:text-lg transition-all duration-300 border-b-2 font-semibold ${selectedTab === tab.id
              ? 'border-blue-500 text-white'
              : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-blue-500/30'
              }`}
          >
            {tab.label}
          </TabSelector>
        ))}
      </nav>

      <div className="py-6 min-h-[300px]">
        {Object.entries(techStack).map(([key, items]) => (
          <TabPanel key={key} hidden={selectedTab !== key} className="w-full focus:outline-none outline-none border-none">
            <TechList items={items} />
          </TabPanel>
        ))}
      </div>
    </motion.div>
  );
};

export default Pagenation;
