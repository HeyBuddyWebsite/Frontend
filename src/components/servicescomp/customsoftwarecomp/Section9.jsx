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
        "The best thing about Hey Buddy is that they really listen to you. They move ahead only when they have thoroughly understood your requirements and know exactly what you want and what would suit your business the best",
      // position: "Head of VP at Disney Hotstar",
      name: "George T.",
    },
    {
      id: 2,
      name: "Robbie J.",
      content:
        "We are really satisfied with the quality of their custom solution and the way Hey Buddy approaches the project. They ensured clear communication to develop a specialized solution for our very requirement for our unique niche",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: " Thomas J.",
      content:
        "Hey Buddy team worked with admirable dedication and high regard to the timeline. They delivered an innovative solution specifically for our business within the time. We highly recommend their expertise.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 4,
      name: "Ashley C.",
      content:
        "Choosing Hey Buddy was certainly a game-changer for our e-commerce platform. Their custom software solutions optimized our operations and resulted in a 40% increase in sales.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 5,
      name: "Candice K.",
      content:
        "Our complex project required a unique approach. Hey Buddy delivered a well-suited software solution and offered unwavering support throughout the process. Their professionalism is unmatched.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 6,
      name: "Bhaskar",
      content:
        "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
      // position: "Head of VP at Disney Hotstar",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="pt-[44px] lg:pt-[100px] mb-8 md:mb-12 lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(7).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <h1 className="pb-[25px] lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl" style={{color:"white"}}>
      What Client Say About Hey Buddy
      </h1>
      <p className="pb-[44px] lg:pb-[100px] text-base font-medium lg:w-[90%] text-center mx-auto" style={{color:"white"}}>
      Discover why our clients prefer Hey Buddy. Client satisfaction is our
        utmost priority and this is what makes us the most reliable custom
        software development services company.
      </p>
      <div className="    grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {clientcardData.map((section, index) => (
          <figure key={section.id} style={{borderRadius:"24px",background: "#0000001A"
            ,border: "2px solid #FFFFFF33"}} class="flex flex-col justify-between  p-4 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30">
            <blockquote class=" text-gray-400 flex flex-col justify-between h-full">
              <p  className="text-left text-base font-medium text-white">
                {section.content}
              </p>
              <div>
              <h3 className="pt-4 text-right font-bold text-white text-xl self-end">
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
      </div>
    </motion.div>
  );
};

export default Bottomclient;
