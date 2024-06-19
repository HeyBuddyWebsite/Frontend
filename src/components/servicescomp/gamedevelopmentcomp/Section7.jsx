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
      heading: "Interactive Mobile Game to Promote eCommerce Deals and Offers",
      // imgurl: "",
      para: "Hey Buddy developed an interactive mobile game for a leading eCommerce brand with in-game challenges related to the brand's offerings. The game featured exclusive discounts and rewards for top players, encouraging users to explore the brand's products while having fun.The mobile game phenomenally exceeded mobile game expectations. It doubled user engagement and led to an increase of 20% increase sales. Players enjoyed the interactive experience, and the brand reinforced its connection with its audience making it more profound.",
    },
    {
      id: "2",
      heading: "Collaboration to Realize Metaverse Vision",
      // imgurl: "",
      para: "Hey Buddy extended its expertise as a metaverse game development company to realise the vision of a tech startup. We designed and developed a cutting-edge metaverse game that seamlessly integrated virtual and augmented reality experiences for a unique and completely immersive digital environment.The game received phenomenal reviews for its innovation and attracted an audience from a wide game - tech enthusiasts and mainstream media. As a result, the startup gained industry recognition and attracted potential partnerships and investors. We look forward to more such collaboration.",
    },
    {
      id: "3",
      heading: "Ai-Integration To Revitalize A Flagship Games Title",
      // imgurl: "",
      para: "Hey Buddy's unmatched AI expertise helped an established Games company revitalize its flagship Games title. We integrated sophisticated AI algorithms into the game, to introduce PCG, adaptive gameplay, and AI-enable intelligent opponents that blew away their audience. The outcome, a 30% increase in active players and a 25% boost to in-game purchases. Players applauded the dynamic experience and our client solidified the game's position as a leading title in the competitive Games market.",
    },
  ];

  const Text = [
    {
      heading:
        "Digital Joysticks, Real Rewards: Success Stories with Hey Buddy",
      subtext:
        "Hey Buddy offers its services to clients working in different industries and different scales. Here are the success stories that make us the best Games development company in India. ",
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
              <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                {section.heading}
              </h1>
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
