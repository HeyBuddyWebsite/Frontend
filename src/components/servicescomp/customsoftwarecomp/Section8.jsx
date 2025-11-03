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
    "Technologies",
    "Tools",
    "Platforms",
    "ProgrammingLanguages",
    "Frameworks",
    "Databases",
    "DevelopmentMethodologies",
    "MobileDevelopment",
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
          Our Technological Expertise is Reflected in Our Trendsetting Tech
          Stack
        </h1>

        <p className=" text-base md:text-lg lg:text-2xl">
          Hey Buddy claim to the leading spot of a game development company in
          India emanates from its expert team. Our developers bring in advanced
          and profound expertise to deliver the best Games solution for you.
        </p>
      </div>

      <nav className="flex border-b border-gray-300 scrollbar-hide overflow-auto">
        <TabSelector
          isActive={selectedTab === "Technologies"}
          onClick={() => setSelectedTab("Technologies")}
        >
          Technologies
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Tools"}
          onClick={() => setSelectedTab("Tools")}
        >
          Tools
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Platforms"}
          onClick={() => setSelectedTab("Platforms")}
        >
          Platforms
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "ProgrammingLanguages"}
          onClick={() => setSelectedTab("ProgrammingLanguages")}
        >
          Programming Languages
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Frameworks"}
          onClick={() => setSelectedTab("Frameworks")}
        >
          Frameworks
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "Databases"}
          onClick={() => setSelectedTab("Databases")}
        >
          Databases
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "DevelopmentMethodologies"}
          onClick={() => setSelectedTab("DevelopmentMethodologies")}
        >
          Development Methodologies
        </TabSelector>

        <TabSelector
          isActive={selectedTab === "MobileDevelopment"}
          onClick={() => setSelectedTab("MobileDevelopment")}
        >
          Mobile Development
        </TabSelector>
      </nav>

      <div className="py-6 px-2">
        <TabPanel
          hidden={selectedTab !== "Technologies"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-fit w-full"
        >
          <div className=" grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2  ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/cloud%20computing.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Internet%20of%20Things%20(IoT).svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Artificial%20Intelligence%20(AI).svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Blockchain.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/AR%20VR.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            {/* <div className=" mx-auto text-center"> 
            <Image loading="lazy" 
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Decentraland.svg"
                width={450}
                height={450}
                alt="9"
               
                />
                
            </div> */}
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Tools"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-fit w-full"
        >
          <div className=" grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2 ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Git.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Jira-.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Docker.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Jenkins.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Selenium.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Platforms"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-fit w-full"
        >
          <div className=" grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/AWS%20(Amazon%20Web%20Services).svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Microsoft%20Azure.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Google%20Cloud%20Platform.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Heroku.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/IBM%20Cloud.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "ProgrammingLanguages"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-fit w-full"
        >
          <div className=" grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2 ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Java.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Python.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Java%20script.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/C%23.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/ruby.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Frameworks"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-fit w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2 ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Django.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Ruby%20on%20Rails.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Angular.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/React.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Laravel.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "Databases"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-fit w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2 ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/MySQL.svg"
                width={450}
                height={450}
                alt="9"

                // className="h-[90%] w-[90%]"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/PostgreSQL.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/MongoDB.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Oracle.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Microsoft%20SQL%20Server.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "DevelopmentMethodologies"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-fit w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2 ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Agile.svg"
                width={450}
                height={450}
                alt="9"

                // className="h-[90%] w-[90%]"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Scrum.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/DevOps.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/waterfall.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/kanban.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "MobileDevelopment"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-fit w-full"
        >
          <div className="grid  md:mb-12 grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Flutter.svg"
                width={450}
                height={450}
                alt="9"

                // className="h-[90%] w-[90%]"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/React%20Native-01.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Swift.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Xamarin.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Kotlin.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
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
