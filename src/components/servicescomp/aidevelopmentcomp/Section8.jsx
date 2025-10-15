"use client";
import Link from "next/link";
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
    "task5",
  ]);

  const textContainerStyle = {
    marginBottom: "30px",
    // position: "sticky",
    left: "50%",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "30%",
  };

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
          Technology Stack of the Most Advanced AI solutions company
        </h1>
        {/* <p className="text-xl lg:text-2xl">
          Hey Buddy claim to the leading spot of a game development company in
          India emanates from its expert team. Our developers bring in advanced
          and profound expertise to deliver the best Games solution for you.
        </p> */}
      </div>

      <nav className="flex border-b justify-between w-[100%] border-gray-300 scrollbar-hide overflow-auto">
        <TabSelector
          isActive={selectedTab === "task1"}
          onClick={() => setSelectedTab("task1")}
        >
          Frontend
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task2"}
          onClick={() => setSelectedTab("task2")}
        >
          Backend
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task3"}
          onClick={() => setSelectedTab("task3")}
        >
          Database
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task4"}
          onClick={() => setSelectedTab("task4")}
        >
          Infrastructure
        </TabSelector>
        {/* <TabSelector
          isActive={selectedTab === "task5"}
          onClick={() => setSelectedTab("task5")}
        >
          Virtual Reality (VR) and Augmented Reality (AR)
        </TabSelector> */}
      </nav>

      <div className="py-6 px-2">
        <TabPanel
          hidden={selectedTab !== "task1"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-7 gap-y-4 gap-x-2  ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Kotlin.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Xamarin.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Swift.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/React%20Native.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Cordova.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Flutter.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Objective%20C.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] rounded-lg"
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task2"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-7 gap-y-4 gap-x-2  ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Node.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Golang.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Kibana.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Java%20Spring.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Django.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/PHP%20Laravel.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/ASP.%20Net.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] rounded-lg"
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task3"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-6 gap-y-4 gap-x-2  ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Redis.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/MongoDB.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Elastic%20Search.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/GraphQL.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/MS%20SQL.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/MySQL.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] rounded-lg"
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task4"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid  md:mb-12 grid-cols-7 gap-y-4 gap-x-2  ">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Docker.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/AWS.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Nginx.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Azure.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Apache.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Kubernetes.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] bg-white rounded-lg"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/GCP.svg"
                width={450}
                height={450}
                // className="h-[80%] w-[80%] rounded-lg"
                alt="9"
              />
            </div>
          </div>
        </TabPanel>

        {/* <TabPanel
          hidden={selectedTab !== "task5"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
         <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center"> 
            <Image loading="lazy" 
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Marmoset%20Toolbag.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image loading="lazy" 
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/KeyShot.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image loading="lazy" 
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/SolidWorks.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image loading="lazy" 
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Modo.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            <div className=" mx-auto text-center" >
            <Image loading="lazy" 
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Daz%203D.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"

                
                />
                
            </div>

            

          </div>
        </TabPanel> */}

        {/* <div style={textContainerStyle}>
          <h1 className="py-4 text-2xl lg:text-3xl">
            Creative, Customised, and Cost-effective VR development software
            services with Hey Budy.
          </h1>
          <Button
            style={buttonHeader}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="text-2xl"
            onClick={handlecontactusModal}
          >
            Discuss Your Project
          </Button>
          </Link>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Pagenation;
