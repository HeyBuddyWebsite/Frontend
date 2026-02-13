"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Bottomclient = () => {
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0.1 }
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
      className="py-6 lg:py-8 px-6 lg:px-12 text-white"
    >
      <h2 className="py-2 lg:w-[80%] text-2xl lg:text-3xl font-bold">
        What Clients Say About Our <br />
        AI Development Services
      </h2>
      <div className="pt-8 lg:py-12 grid mx-auto justify-center rounded-xl shadow-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">
        {clientcardData.map((section, index) => (
          <figure
            key={index}
            className="flex flex-col justify-between p-5 border border-white/10 rounded-2xl h-full w-full bg-[#111] bg-clip-padding backdrop-filter backdrop-blur-md hover:bg-[#1a1a1a] transition-all duration-300 hover:border-red-500/30 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)] group"
          >
            <blockquote className="text-gray-400 flex flex-col justify-between h-full">
              <div className="mb-6 relative">
                <span className="text-6xl text-white/5 absolute -top-4 -left-2 font-serif">"</span>
                <p className="text-left text-gray-300 relative z-10 leading-relaxed font-light">{section.content}</p>
              </div>
              <div className="border-t border-white/5 pt-4">
                <h3 className="text-right font-bold text-white text-lg group-hover:text-red-400 transition-colors">
                  {section.name}
                </h3>
              </div>
            </blockquote>
          </figure>
        ))}
      </div>
    </motion.div>
  );
};

export default Bottomclient;
