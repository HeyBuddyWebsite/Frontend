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
        "Hey Buddy surpassed our expectations with their phenomenal metaverse development services company. Working with them felt like a true partnership. They not only understood our vision but brilliantly translated it into an immersive metaverse experience. We earnestly recommend Hey Buddy for their understanding of the requirement and timely delivery of the exact solution.",
      // position: "Head of VP at Disney Hotstar",
      name: "Mark T.",
    },
    {
      id: 2,
      name: "Susan A",
      content:
        "Choosing Hey Buddy as our metaverse development services company proved to be the right decision for our business. Their team’s expertise in metaverse and dedication to deliver great solutions were apparent from the start. They showcase a high collaborative spirit that matches our working culture. This made the entire process greatly efficient but enjoyable. We really appreciate and recommend Hey Buddy for their innovative and creative solutions and client-centric and reliable approach for metaverse development.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: " Michael R",
      content:
        "Hey Buddy is the metaverse development agency we partnered for our recently concluded metaverse project. And all thanks to our partners, as it is because of their expertise and commitment that secured the timely completion of our project while ensuring great quality. Their agility and responsiveness are what we were looking for in our partner and with Hey Budd’s dynamic nature, we got exactly that.",
      // position: "Head of VP at Disney Hotstar",
    },
    // {
    //   id: 4,
    //   name: "Emily C",
    //   content:
    //     "Hey Buddy is the metaverse development agency that understands the pulse of American Metaverse businesses. Their commitment to delivering advanced solutions while fostering a collaborative environment truly sets them apart from other Metaverse agencies. Working with Hey Buddy was a great experience blended with professionalism and creativity..",
    //   // position: "Head of VP at Disney Hotstar",
    // },
   
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
      How Clients See Us as Metaverse Development Company
      </h1>
      <p className="pb-[44px] lg:pb-[100px] text-base font-medium lg:w-[90%] text-center mx-auto" style={{color:"white"}}>
        
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
