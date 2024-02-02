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
    "Platforms",
    "ARVRPlatforms",
    "MetaversePlatforms",
    "GameEngines",
    "Languages",
    "ArtificalIntelligence(AI)",
  ]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="lg:py-8 text-white"
    >
      <div className="py-6">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Hey Buddy Tech Arsenal for best Game Solutions
          <br /> Expertise on all fronts
        </h1>
        <p className="text-sm lg:text-lg">
          Hey Buddy claim to the leading spot of a game development company in
          India emanates from its expert team. Our developers bring in advanced
          and profound expertise to deliver the best gaming solution for you.
        </p>
      </div>

      <nav className="flex border-b border-gray-300 scrollbar-hide overflow-auto">
        <TabSelector
          isActive={selectedTab === "Platforms"}
          onClick={() => setSelectedTab("Platforms")}
        >
          Platforms
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "ARVRPlatforms"}
          onClick={() => setSelectedTab("ARVRPlatforms")}
        >
          AR/VR Platforms
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "MetaversePlatforms"}
          onClick={() => setSelectedTab("MetaversePlatforms")}
        >
          Metaverse Platformss
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "GameEngines"}
          onClick={() => setSelectedTab("GameEngines")}
        >
          Game Engines
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "Languages"}
          onClick={() => setSelectedTab("Languages")}
        >
          Languages
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "ArtificalIntelligence(AI)"}
          onClick={() => setSelectedTab("ArtificalIntelligence(AI)")}
        >
          Artifical Intelligence(AI)
        </TabSelector>
      </nav>
      <div className="py-6 px-2">
        <TabPanel
          hidden={selectedTab !== "Platforms"}
          className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[22vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-2  ">
            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Apple+vision.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Appstore.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/PC.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Playstation.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Xbox.svg"
                width={450}
                height={450}
                alt="Hey B"
                style={{ backgroundColor: "white", borderRadius: "18px" }}
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Nintendo.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "ARVRPlatforms"}
          className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[22vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Apple+vision.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Oculus.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/HTC+vive.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Google+daydream.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Meta+quest.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Game+Development+Service/Microsoft+Hololens.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "MetaversePlatforms"}
          className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[22vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-3 lg:grid-cols-6 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Decentraland.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Roblox.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Axie+Infinity.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Sandbox.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Horizon+Worlds.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Sanskar.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "GameEngines"}
          className="p-2 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[22vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-2 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Unreal+engine.svg"
                width={450}
                height={450}
                className="lg:h-[60%]"
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Unity.svg"
                width={450}
                height={450}
                className="lg:h-[60%]"
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Languages"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[22vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/C%23.svg"
                width={450}
                height={450}
                className="h-[90%]"
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/C%2B%2B.svg"
                width={450}
                height={450}
                className="h-[90%]"
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Java+script.svg"
                width={450}
                height={450}
                className="h-[90%]"
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Python.svg"
                width={450}
                height={450}
                className="h-[90%]"
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "ArtificalIntelligence(AI)"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[22vh] w-full"
        >
          <div className="grid md:mb-12 grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/PCG.svg"
                width={450}
                height={450}
                alt="Hey B"
                className="lg:h-[90%] "
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Natural+language+processing.svg"
                width={450}
                height={450}
                className="h-[90%] "
                alt="Hey B"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/Machine+learning.svg"
                width={450}
                height={450}
                className="h-[90%] "
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/AGA.svg"
                width={450}
                height={450}
                className="h-[90%] "
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>
      </div>
    </motion.div>
  );
};

export default Pagenation;
