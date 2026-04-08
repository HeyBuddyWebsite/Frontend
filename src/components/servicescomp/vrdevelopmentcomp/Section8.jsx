"use client";

import React, { useEffect, useRef, useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@material-tailwind/react";

const Pagenation = ({ handlecontactusModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  const controls = useAnimation();
  const ref = useRef();
  const textContainerStyle = {
    marginBottom: "10%",
    // position: "sticky",
    left: "50%",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "30%",
  };

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const buttonHeader = {
    border: isHovered ? "0px" : "1px solid white",
    background: isHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: isHovered ? "white" : "white", // Change the text color as needed
    padding: "10px 20px",
    fontSize: "16px",
    marginTop: "1rem",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
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
  ]);

  const techStack = {
    task1: ["Blender", "Autodesk Maya", "3ds Max", "ZBrush", "Cinema 4D"],
    task2: ["Houdini", "Substance Painter", "Mudbox", "SketchUp", "Rhinoceros 3D"],
    task3: ["Unity3D", "Unreal Engine", "Photoshop", "Marvelous Designer", "3D Coat"],
    task4: ["Marmoset Toolbag", "KeyShot", "SolidWorks", "Modo", "Daz 3D"]
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
          VR Development <br />
          <span className="text-blue-500">Tech Stack</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
          We leverage industry-leading virtual reality engines and modeling tools to create immersive, high-fidelity experiences across all major hardware platforms.
        </p>
      </div>

      <nav className="flex flex-nowrap overflow-x-auto scrollbar-hide border-b border-white/5 mb-8 justify-center">
        {[
          { id: "task1", label: "Modeling & Animation" },
          { id: "task2", label: "Visualization & CAD" },
          { id: "task3", label: "Engines & Texture" },
          { id: "task4", label: "Rendering & Support" }
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

      <div className="mt-16 text-center">
        <h3 className="text-2xl lg:text-3xl font-bold mb-6">
          Creative, Customised, and Cost-effective VR development software <br />
          services with Hey Buddy.
        </h3>
        <Button
          onClick={handlecontactusModal}
          style={buttonHeader}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="px-10 py-4 text-lg"
        >
          Discuss Your Project
        </Button>
      </div>
    </motion.div>
  );
};

export default Pagenation;
