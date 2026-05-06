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
        "The CGI advertising campaign transformed our brand presentation completely. The visual impact was incredible and our engagement rates doubled within the first month.",
      name: "Damilano",
    },
    {
      id: 2,
      name: "Colorbar",
      content:
        "Amazing results with their CGI and AI advertising approach! Our product campaigns now look stunning and reach exactly the right customers. Sales conversion improved by 60%.",
    },
    {
      id: 3,
      name: "Shivnaresh",
      content:
        "Their AI advertising and social media strategy took our digital presence to the next level. Follower engagement increased 3x and we're getting quality leads daily.",
    },
    {
      id: 4,
      name: "Undoworld",
      content:
        "Our new website is not just beautiful but highly functional. Customer inquiries increased by 75% and the user experience is seamless across all devices.",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
        How Clients Rate Our Digital Marketing Services
      </h2>
      {/* <p className=" text-base md:text-lg lg:text-2xl">
       
      </p> */}
      <div class=" pt-5 lg:py-12  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {clientcardData.map((section, index) => (
          <figure class="flex flex-col justify-between  p-4 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30">
            <blockquote class=" text-gray-400 flex flex-col justify-between h-full">
              <p className="text-left text-white">{section.content}</p>
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



