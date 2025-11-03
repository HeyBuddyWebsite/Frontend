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
        "We partnered with Hey Buddy for RPA solutions and it was certainly a turning point in our endeavor. The automation streamlined our operations, minimized errors, and enhanced our overall efficiency. The seamless integration they executed saved us time and resources. Exceptional service!",
      // position: "Head of VP at Disney Hotstar",
      name: "Sandra M",
    },
    {
      id: 2,
      name: "David K",
      content:
        "We sought Hey Buddy's assistance to enhance our customer engagement. They delivered an NLP-powered chatbot that responded intelligently to our customers’ queries and facilitated interactions tailored to the individuals. We really recommended Hey Buddy’s artificial intelligence development services! ",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: "Alex P",
      content:
        "Hey Buddy's machine learning capabilities helped us gain immensely invaluable insights that really made the difference. The empowered strategic decision-making backed by deep market trends analysis gave us a competitive edge. Our well-founded decisions positively impacted our bottom line. Availing of Hey Buddy AI software development capability was a strategic move that paid off!",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 4,
      name: "Emily L",
      content:
        "Hey Buddy's deep learning solutions proved revolutionary for our tech-driven projects. Their expertly implemented complex neural networks considerably enhance the capability of our applications. Their impressive collaboration efforts and prowess in AI makes them a trustworthy partner for any company aiming to capitalize on AI technological excellence.",
      // position: "Head of VP at Disney Hotstar",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
        What Clients Say About Our AI Development Services
      </h1>
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
