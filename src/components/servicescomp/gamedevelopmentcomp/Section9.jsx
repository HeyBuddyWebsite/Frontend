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
        "Hey Buddy turned our vision into an interactive VR masterpiece! Their expertise in Unreal Engine brought our game to life with graphics that we ourselves couldn’t believe. The team's commitment to excellence is reflected in every detail. We highly recommend Hey Buddy’s VR game development services.",
      // position: "Head of VP at Disney Hotstar",
      name: "Jonathan M",
    },
    {
      id: 2,
      name: "Sarah L.",
      content:
        "We assure you that no one can beat Hey Buddy in AI Games. Their AI Games solutions took our game to a whole new level. Our game became more dynamic and engaging throwing perfect challenges to the players. The team's dedication to offering the best solution sets them apart in the AI Games space.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: "Michael H",
      content:
        "Cross-platform development was like a breeze with Hey Buddy. They seamlessly optimized our game for iOS, Android, and PC, ensuring a consistent experience for players across different platforms. They are certainly the best game development company in India commitment to quality made them an invaluable partner in our game development journey.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 4,
      name: "Emily C",
      content:
        "Our metaverse game wouldn't have been possible without Hey Buddy's expertise in the immersive Games domain. They skillfully integrated VR and AR elements into our project. We highly recommend them as a trusted metaverse game development company.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 5,
      name: "Alex R",
      content:
        "Choosing Hey Buddy for our mobile game development was the right decision. Their team's proficiency in iOS and Android development ensured a smooth launch and unwavering post-release support. Moreover, the game's success surpassed our expectations. They are the best mobile game development company.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 6,
      name: "Jeremy",
      content:
        "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
      position: "Head of VP at Disney Hotstar",
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
      How Clients Rate Our Game Development Services      </h1>
      <p className="pb-[44px] lg:pb-[100px] text-base font-medium lg:w-[90%] text-center mx-auto" style={{color:"white"}}>
      Hey Buddy boasts of a long list of satisfied customers. Here is what they have to say about us
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
