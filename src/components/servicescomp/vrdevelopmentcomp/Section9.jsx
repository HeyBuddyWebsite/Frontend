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
        "Hey Buddy wonderfully turned our vision into reality! Their expertise in delivering immersive experiences is unbelievable and they surpassed our expectations. The attention to detail, clear communication, and commitment to quality truly set them apart as the top VR development agency. We're content with the results and look forward to future collaborations with them.",
      // position: "Head of VP at Disney Hotstar",
      name: "Owen Foster",
    },
    {
      id: 2,
      name: "Riley Jordan",
      content:
        "Working with Hey Buddy was a great experience. They delivered high-quality VR solutions, with a strong commitment to timely delivery. They maintained a clear line of communication and kept us aware and informed at every stage of the development. This helped us infuse necessary changes to align the development process with our project goals. ",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: "Alex Taylor",
      content:
        "Choosing Hey Buddy for our VR project was the right decision. Their collaborative approach made the entire development journey transparent and easy. We felt involved and valued, and the end result reflected a true partnership. Highly recommend their VR expertise.",
      // position: "Head of VP at Disney Hotstar",
    },
    // {
    //   id: 4,
    //   name: "Riyahi",
    //   content:
    //     "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
    //   position: "Head of VP at Disney Hotstar",
    // },
    // {
    //   id: 5,
    //   name: "Jeremy",
    //   content:
    //     "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
    //   position: "Head of VP at Disney Hotstar",
    // },
    // {
    //   id: 6,
    //   name: "Bhaskar",
    //   content:
    //     "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
    //   position: "Head of VP at Disney Hotstar",
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
        What Clients Say about our Virtual Reality Development Software Services
      </h1>
      {/* <p className="text-xl lg:text-2xl">
              Feature testimonials from satisfied clients who have utilised your
              game development services. Include their feedback on your
              professionalism, creativity, and the quality of your work.
            </p> */}
      <div class=" lg:py-12  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {clientcardData.map((section, index) => (
          <figure class="  p-4 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30">
            <blockquote class=" text-gray-400 flex flex-col justify-between h-full">
              <p className="text-left text-white">{section.content} </p>
              <div>
                <h3 className="pt-4 text-right font-semibold text-white text-xl">
                  {section.name}
                </h3>

                <h3 class="pt-2 text-right text-xl   text-gray-500 ">
                  {section.position}
                </h3>
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
