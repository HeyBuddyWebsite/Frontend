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
    "task1",
    "task2",
    "task3",
    "task4",
    "task5",
  ]);

  const techStack = {
    task1: ["Blender", "Autodesk Maya", "3ds Max", "ZBrush", "Cinema 4D"],
    task2: ["Unreal Engine", "Unity 3D", "CryEngine", "Chaos V-Ray", "Arnold Renderer"],
    task3: ["C++", "Python", "Lua", "HLSL/GLSL", "C#"],
    task4: ["Interactive Prototyping", "Motion Graphics", "Dynamic Lighting", "Physics Simulation", "Real-time Dynamics"],
    task5: ["HLSL", "GLSL", "Metal", "Vulkan", "DirectX"]
  };

  const TechList = ({ items }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
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
      <div className="py-6 mb-8 text-center">
        <h2 className="text-2xl lg:text-5xl font-bold mb-6">
          3D Billboard <br />
          <span className="text-blue-500">Tech Stack</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          It takes skills and experience to develop traffic-pausing 3D visuals. Here is our advanced tech stack for bringing your vision to life.
        </p>
      </div>

      <nav className="flex flex-nowrap overflow-x-auto scrollbar-hide border-b border-white/5 mb-8 justify-center">
        {[
          { id: "task1", label: "3D Modeling & Animation" },
          { id: "task2", label: "Graphics Rendering Engines" },
          { id: "task3", label: "Programming Languages" },
          { id: "task4", label: "Interactive Development" },
          { id: "task5", label: "Shader Programming" }
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
