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
          Hey Buddy 3D Billboard Development Tech Stack
        </h1>
        <p className="text-xl lg:text-2xl">
          It takes skills and experience to develop traffic-pausing 3D visuals.
          Here is our tech stack for the same.
        </p>
      </div>

      <nav className="flex border-b border-gray-300 scrollbar-hide overflow-auto">
        <TabSelector
          isActive={selectedTab === "task1"}
          onClick={() => setSelectedTab("task1")}
        >
          3D Modeling and Animation
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task2"}
          onClick={() => setSelectedTab("task2")}
        >
          Graphics Rendering Engines
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task3"}
          onClick={() => setSelectedTab("task3")}
        >
          Programming Languages
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task4"}
          onClick={() => setSelectedTab("task4")}
        >
          Interactive Development
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task5"}
          onClick={() => setSelectedTab("task5")}
        >
          Shader Programming
        </TabSelector>
      </nav>

      <div className="py-6 px-2">
        <TabPanel
          hidden={selectedTab !== "task1"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2  ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582300218_dwm9i3.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582299514_dprok3.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582299062_apwgea.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582309767_714zrh.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582300948_7j24cv.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task2"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582302339_iaxd6t.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582308410_76tr0h.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582305999_i2dlb2.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582307456_t4lu8w.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582307000_nipcsk.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task3"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582308864_aiy208.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582309312_cvay3e.png"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582306546_spypfa.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582304755_drj10q.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582298534_hcvpf6.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task4"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582304262_m3xgty.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582302823_vxwe3s.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582307951_bhmejf.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582305511_e2akay.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582301493_vnslqh.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task5"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582304262_m3xgty.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582302823_vxwe3s.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582307951_bhmejf.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582305511_e2akay.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769582301493_vnslqh.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>
          </div>
        </TabPanel>
      </div>
    </motion.div>
  );
};

export default Pagenation;
