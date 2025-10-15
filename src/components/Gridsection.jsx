"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Gridsection = ({ listData, textData }) => {
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

  //   const List = [
  //     {
  //       id: "1",
  //       heading: "Enhanced Brand Engagement",
  //       imgurl: "",
  //       para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
  //     },
  //     {
  //       id: "2",
  //       heading: "Enhanced Brand Engagement",
  //       imgurl: "",
  //       para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
  //     },
  //     {
  //       id: "3",
  //       heading: "Enhanced Brand Engagement",
  //       imgurl: "",
  //       para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
  //     },
  //     {
  //       id: "4",
  //       heading: "Enhanced Brand Engagement",
  //       imgurl: "",
  //       para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
  //     },
  //     {
  //       id: "5",
  //       heading: "Enhanced Brand Engagement",
  //       imgurl: "",
  //       para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
  //     },
  //     {
  //       id: "6",
  //       heading: "Enhanced Brand Engagement",
  //       imgurl: "",
  //       para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
  //     },
  //   ];

  //   const Text = [
  //     {
  //         heading: "Power up Your Brand and Press Start for Profit with Game Development -  Your Gamified Success Awaits!",
  //         subtext:"Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.",
  //     }
  //   ]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="lg:py-4 text-white"
    >
      <div>
        {textData.map((section, index) => (
          <div className="py-12" key={index}>
            <h1 className="py-4 lg:w-[80%] text-2xl lg:text-3xl">
              {section.heading}
            </h1>
            <p className="text-m lg:text-l">{section.subtext}</p>
          </div>
        ))}
      </div>
      <div class=" lg:py-4  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {listData.map((section, index) => (
          <figure class="flex flex-col  p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40">
            <blockquote class="  text-gray-400">
              <Image
                loading="lazy"
                src={section.imgurl}
                width={450}
                height={450}
                className="h-[32px] w-[32px] "
              />

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
  );
};

export default Gridsection;
