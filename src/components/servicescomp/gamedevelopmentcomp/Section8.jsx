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
          and profound expertise to deliver the best Games solution for you.
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
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-6 gap-y-4 gap-x-2  ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651384179_5d61j4.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651385278_icu6e2.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651404150_g3vsvy.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651406618_vib596.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651416160_itgz1w.svg"
                width={450}
                height={450}
                alt="Hey B"
                style={{ backgroundColor: "white", borderRadius: "18px" }}
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651401842_m2jgww.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "ARVRPlatforms"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-6 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651384179_5d61j4.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651403004_6rj2iz.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651393730_v4xbk7.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651391417_z5j6w5.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651398136_z823d8.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651399584_vvj079.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "MetaversePlatforms"}
          className="p-6 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-6 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651390091_yrtfjy.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651409880_4pekez.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651386757_qvdcgu.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651411718_j4q5k4.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651394835_jqgjdy.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651412852_x38evm.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "GameEngines"}
          className="p-2 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-6 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651415008_jk66cf.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651413912_6w0u9e.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Languages"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-6 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651387847_6z8cbs.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651388936_dh6zup.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651395962_vlsoid.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651408818_zbiybl.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "ArtificalIntelligence(AI)"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-6 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651405390_nblvly.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651400742_zclpf1.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651397030_z89lta.svg"
                width={450}
                height={450}
                alt="Hey B"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769651382970_vssa08.svg"
                width={450}
                height={450}
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
