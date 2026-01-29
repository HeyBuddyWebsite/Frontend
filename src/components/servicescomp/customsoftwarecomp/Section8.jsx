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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649627332_9f1rzn.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649639145_susaa0.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649639465_5j0b5n.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649639776_u8pssa.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649640044_ge3e9j.svg"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649655079_44bnis.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649655708_asw8es.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649656360_ud3wkl.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649657635_vkmnkv.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649658238_77i4gb.svg"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649658815_fex6k3.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649659619_wmyn62.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649660225_mprcvl.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649660800_mm7021.svg"
                width={450}
                height={450}
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649661448_r55o31.svg"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649662213_hktt8w.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649662803_pbc4aq.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649663379_h6h2b5.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649663943_1q4vup.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649664630_kihuuc.svg"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649665284_dun5hs.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649665922_1okhzz.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649666489_ed9z83.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649667127_it4xgq.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649667706_cfcr8a.svg"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649668306_8klzmx.svg"
                width={450}
                height={450}
                alt="9"

                // className="h-[90%] w-[90%]"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649668938_j0fxmx.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649669586_flrlyw.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649670158_pzh0jq.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649670954_ddqxnx.svg"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649671548_ys8ar2.svg"
                width={450}
                height={450}
                alt="9"

                // className="h-[90%] w-[90%]"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649672116_33x634.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649673536_82jx3n.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649674138_jkttn8.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649674777_s2u2tu.svg"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649675385_vt8rvc.svg"
                width={450}
                height={450}
                alt="9"

                // className="h-[90%] w-[90%]"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649676056_acbnu1.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649677155_o2yg4u.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"

                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649677738_ftd35f.svg"
                width={450}
                height={450}
                // className="h-[90%] w-[90%]"
                alt="9"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769649678666_jt7u4z.svg"
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
