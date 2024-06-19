"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Bottomclient = () => {
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
  const clientcardData = [
    {
      id: 1,
      content:
        "We needed a team to develop a high performing decentralized application. Hey Buddy’s seamless collaboration methods and capability to deliver innovative solutions in time delivery made them our go-to team for anything Web3. No wonder they are among the top web3 development companies, offering exceptional services in the industry",
      // position: "Head of VP at Disney Hotstar",
      name: "John T. (California)",
    },
    {
      id: 2,
      name: "Emily J. (New York)",
      content:
        "Hey, Emily here from New York. We partnered Hey Buddy for their expertise in blockchain and decentralized finance and our decision proved right. Their commitment to security and attention to detail made our project a success. We highly recommended Hey Buddy for anyone venturing into Web3 space! Hey Buddy is the right web3 development services company for you.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: "Michael H. (Texas)",
      content:
        "Hey Buddy's Web3 development services truly stood out. Their commitment to project management and efficiency ensured our blockchain project's success. They posses in-depth knowledge of different blockchain platforms and deliver custom solution specialized for your business. ",
      // position: "Head of VP at Disney Hotstar",
    },
    // {
    //   id: 4,
    //   name: "Riyahi",
    //   content:
    //     "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
    //   // position: "Head of VP at Disney Hotstar",
    // },
    // {
    //   id: 5,
    //   name: "Jeremy",
    //   content:
    //     "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
    //   // position: "Head of VP at Disney Hotstar",
    // },
    // {
    //   id: 6,
    //   name: "Bhaskar",
    //   content:
    //     "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
    //   // position: "Head of VP at Disney Hotstar",
    // },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
      Testimonials of Us Being the Top Web3 Development Agency
      </h1>
      <p className=" text-base md:text-lg lg:text-2xl">
      Our Web 3.0 development services have catered to busines across industries and scale.
      </p>
      <div class=" pt-5 lg:py-12  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {clientcardData.map((section, index) => (
          <figure class="flex flex-col justify-between  p-4 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30">
            <blockquote class=" text-gray-400 flex flex-col justify-between h-full">
              <p  className="text-left text-white">
                {section.content}
              </p>
              <div>
              <h3 className="pt-4 text-right font-semibold text-white text-xl self-end">
                {section.name}
              </h3>
              {/* <h3
                style={{ color: "white" }}
                class="pt-2 text-right text-xl   text-gray-500 "
              >
                {section.position}
              </h3> */}
              </div>
              {/* <h3 className="text-right text-white text-xl">{section.name}</h3> */}
            </blockquote>
          </figure>
        ))}
      </div>
    </motion.div>
  );
};

export default Bottomclient;
