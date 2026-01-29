"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@material-tailwind/react";

const Pagenation = () => {
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
          Our Web3 development Stack For a Powerful Solution Development
        </h1>
        <p className="text-xl lg:text-2xl">
          Here is the list of of top Web3 development tools, technologies and
          technique we use. These are some of the best web3 development
          platforms we use the meet you specific requirements.
        </p>
      </div>

      <nav className="flex border-b border-gray-300 scrollbar-hide overflow-auto">
        <TabSelector
          isActive={selectedTab === "task1"}
          onClick={() => setSelectedTab("task1")}
        >
          Smart Contract Development
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task2"}
          onClick={() => setSelectedTab("task2")}
        >
          Blockchain Platforms
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task3"}
          onClick={() => setSelectedTab("task3")}
        >
          Decentralized Storage
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task4"}
          onClick={() => setSelectedTab("task4")}
        >
          Web3 Frameworks
        </TabSelector>
        <TabSelector
          isActive={selectedTab === "task5"}
          onClick={() => setSelectedTab("task5")}
        >
          Consensus Mechanisms
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653697744_rz7f4j.svg"
                width={450}
                height={450}
                alt="Truffle"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653698505_7eol4t.svg"
                width={450}
                height={450}
                alt="Embark"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653699151_h1pics.svg"
                width={450}
                height={450}
                alt="Drizzle"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653699894_ds725o.svg"
                width={450}
                height={450}
                alt="Brownie"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653700570_k61esl.svg"
                width={450}
                height={450}
                alt="Ethereum"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653701250_1cg91n.svg"
                width={450}
                height={450}
                alt="Binance Smart Chain"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653701990_qrxpov.svg"
                width={450}
                height={450}
                alt="Solana"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653702822_1mxgm5.svg"
                width={450}
                height={450}
                alt="Cardano"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653703531_t4w0ce.svg"
                width={450}
                height={450}
                alt="Polkadot"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653704363_3crg77.svg"
                width={450}
                height={450}
                alt="Avalanche"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653705015_topdue.svg"
                width={450}
                height={450}
                alt="Algorand"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653706165_nghygn.svg"
                width={450}
                height={450}
                alt="Tezos"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653706881_cbrhie.svg"
                width={450}
                height={450}
                alt="NEAR Protocol"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653707524_z3nqal.svg"
                width={450}
                height={450}
                alt="InterPlanetary File System"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653708405_jnd6t2.svg"
                width={450}
                height={450}
                alt="Filecoin"
              />
            </div>

            <div className="  mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653709164_5nybdr.svg"
                width={450}
                height={450}
                alt="Storj"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653709810_o1noh4.svg"
                width={450}
                height={450}
                alt="Arweave"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653710999_fjcj4p.svg"
                width={450}
                height={450}
                alt="Sia"
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
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653711683_n6jcr4.svg"
                width={450}
                height={450}
                alt="Truffle"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653712390_81q6eo.svg"
                width={450}
                height={450}
                alt="Embark"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653713042_tkbr8q.svg"
                width={450}
                height={450}
                alt="Drizzle"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653713820_btg7x1.svg"
                width={450}
                height={450}
                alt="Brownie"
              />
            </div>
          </div>
        </TabPanel>

        <TabPanel
          hidden={selectedTab !== "task5"}
          className="p-4 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 rounded-lg h-[20vh] w-full"
        >
          <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-5 gap-y-4 gap-x-2">
            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653714695_owriav.svg"
                width={450}
                height={450}
                alt="Proof-of-Stake"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653715369_kb9seo.svg"
                width={450}
                height={450}
                alt="Pure Proof-of-Stake"
              />
            </div>

            <div className=" mx-auto text-center">
              <Image
                loading="lazy"
                src="https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769653716131_m1qcjp.svg"
                width={450}
                height={450}
                alt="Nominated Proof-of-Stake"
              />
            </div>
          </div>
        </TabPanel>
      </div>
    </motion.div>
  );
};

export default Pagenation;
