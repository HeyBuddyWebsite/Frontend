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

  const techStack = {
    task1: [
      "Solidity", "Rust", "Vyper", "Hardhat", "Truffle", "Foundry"
    ],
    task2: [
      "Ethereum", "Polygon", "Solana", "Binance Smart Chain", "Avalanche", "Hyperledger"
    ],
    task3: [
      "IPFS", "Filecoin", "Arweave", "Storj", "Sia", "OrbitDB"
    ],
    task4: [
      "Web3.js", "Ethers.js", "Moralis", "The Graph", "Infura", "Alchemy"
    ],
    task5: [
      "Proof of Stake (PoS)", "Proof of Work (PoW)", "LPoS", "PBFT", "DPoS"
    ]
  };

  const TechList = ({ items }) => (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-center justify-center text-center hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
        >
          <span className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors">{item}</span>
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
      <div className="py-6 mb-8">
        <h2 className="lg:w-[90%] text-2xl lg:text-5xl font-bold mb-6">
          Web3 Development Stack <br />
          <span className="text-blue-500">Engines and Tools</span>
        </h2>
        <p className="text-lg lg:text-xl text-gray-400 max-w-4xl leading-relaxed">
          We utilize the most secure and scalable Web3 technologies to build decentralized ecosystems, from smart contracts to cross-chain protocols.
        </p>
      </div>

      <nav className="flex flex-nowrap overflow-x-auto scrollbar-hide border-b border-white/5 mb-8">
        {[
          { id: "task1", label: "Smart Contracts" },
          { id: "task2", label: "Blockchain Platforms" },
          { id: "task3", label: "Decentralized Storage" },
          { id: "task4", label: "Web3 Frameworks" },
          { id: "task5", label: "Consensus Mechanisms" }
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
          <TabPanel key={key} hidden={selectedTab !== key} className="w-full focus:outline-none">
            <TechList items={items} />
          </TabPanel>
        ))}
      </div>
    </motion.div>
  );
};

export default Pagenation;
