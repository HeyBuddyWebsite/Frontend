"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Section7 = () => {
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

  const List = [
    {
      id: "1",
      heading: "Action & Role-Playing Games (RPGs)",
      para: "We build sprawling worlds with deep progression systems. Our focus is on responsive combat mechanics, complex character skill trees, and rich narratives that keep players engaged for the long term.",
    },
    {
      id: "2",
      heading: "Strategy & Simulation Games",
      para: "Replicating real-world experiences requires precision. We design intuitive UI/UX for deep systems, balancing complex economy loops and realistic scenarios ranging from city-building to business management.",
    },
    {
      id: "3",
      heading: "Sports & Racing Games",
      para: "We deliver high-adrenaline experiences focused on physics-based realism. Whether it’s field sports or high-speed racing, we ensure precision handling and competitive multiplayer environments.",
    },
    {
      id: "4",
      heading: "Puzzle & Board Games",
      para: "We transform traditional social interactions into modern digital staples. From classic chess and ludo to innovative physics-puzzles, we focus on social connectivity and addictive, short-session gameplay.",
    },
    {
      id: "5",
      heading: "Casino & Real Money Gaming (RMG)",
      para: "We develop secure, feature-rich platforms for slots, poker, and rummy. We prioritize mathematical precision, certified RNG integration, and robust anti-fraud layers for regulated gaming markets.",
    },
    {
      id: "6",
      heading: "Single & Multiplayer Games",
      para: "We offer scalable single and multiplayer game development solutions for real-time and turn-based gameplay. Our expertise includes multiplayer networking, matchmaking systems, and cloud integration.",
    },
    {
      id: "7",
      heading: "Play-to-Earn (P2E) Games",
      para: "We offer Play-to-Earn game solutions that integrate blockchain technology to enable real-world value generation. By combining NFTs, token economies, and secure marketplaces, we empower players to earn.",
    },
    {
      id: "8",
      heading: "Move-to-Earn Games",
      para: "Our Move-to-Earn solutions merge gaming with real-world activity. By converting physical movements like walking or running into in-game rewards, we create experiences that encourage healthy lifestyles.",
    },
    {
      id: "9",
      heading: "Adventure Game Solutions",
      para: "Our adventure game solutions focus on narrative-driven gameplay combined with exploration and puzzles. We design intuitive user experiences and interactive storylines that guide players through exciting journeys.",
    },
  ];

  const Text = [
    {
      heading: "Game app Development Solutions",
      subtext: "As a leading game development company, we move beyond basic genre definitions to engineer high-retention, market-ready digital experiences across every major platform.",
    },
  ];
  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="lg:py-4 text-white"
      >
        <div>
          {Text.map((section, index) => (
            <div className="py-12" key={index}>
              <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                {section.heading}
              </h2>
              <p className="text-sm lg:text-lg">{section.subtext}</p>
            </div>
          ))}
        </div>
        <div class=" lg:py-4  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
          {List.map((section, index) => (
            <figure class="flex flex-col  p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-red-600 hover:bg-opacity-40">
              <blockquote class="  text-gray-400">
                {/* <Image loading="lazy" 
                src={section.imgurl}
                width={450}
                height={450}
                className="h-[32px] w-[32px] "
                /> */}

                <h3
                  style={{ color: "white" }}
                  class="py-4 text-xl font-semibold  text-gray-500 "
                >
                  {section.heading}
                </h3>

                <p style={{ color: "white" }} className="text-left">
                  {section.para}
                </p>
              </blockquote>
            </figure>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Section7;
