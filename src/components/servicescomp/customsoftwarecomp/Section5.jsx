"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../../../styles/Timelinecomp.css";
import { motion, useAnimation } from "framer-motion";

const Timelinecomp = () => {
  const controls = useAnimation();
  const ref = useRef();
  const scrollContainerRef = useRef(null);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

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

  // Check scroll position and update arrow visibility
  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(scrollTop < scrollHeight - clientHeight - 10);
    }
  };

  // Scroll functions
  const scrollUp = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: -200,
        behavior: 'smooth'
      });
    }
  };

  const scrollDown = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        top: 200,
        behavior: 'smooth'
      });
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      return () => {
        container.removeEventListener('scroll', checkScrollPosition);
      };
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="py-8 lg:py-12 px-6 lg:px-12 text-white"
    >
      <div className="py-4 mb-10 text-white">
        <h2 className="lg:w-[90%] text-2xl lg:text-4xl font-bold mb-6">
          Our Custom Software Development Process: <br />
          <span className="text-white">
            Precision in Progress
          </span>
        </h2>
      </div>

      <div className="pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12">
          {/* Timeline Scroll Area */}
          <div className="relative h-[60vh] w-full rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-6 overflow-hidden">

            {/* Scroll Arrows */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 flex flex-col items-center gap-3 pointer-events-none">
              {showUpArrow && (
                <button
                  onClick={scrollUp}
                  className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 backdrop-blur-md rounded-full p-2 transition-all duration-300 pointer-events-auto border border-blue-500/30"
                  aria-label="Scroll up"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                  </svg>
                </button>
              )}

              {showDownArrow && (
                <button
                  onClick={scrollDown}
                  className="bg-blue-600/20 hover:bg-blue-600/40 text-blue-400 backdrop-blur-md rounded-full p-2 transition-all duration-300 pointer-events-auto border border-blue-500/30"
                  aria-label="Scroll down"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              )}
            </div>

            <div
              ref={scrollContainerRef}
              className="overflow-y-scroll scrollbar-hide h-full w-full pr-12 relative z-10"
              onScroll={checkScrollPosition}
            >
              <div className="space-y-12 py-4">
                {[
  {
    "title": "Understanding Requirements",
    "desc": "We start with deep diving into project goals and your expectations. The practice of clear communication starts right here as align our strategies with your vision"
  },
  {
    "title": "Planning and Strategy",
    "desc": "We transform concepts into a detailed plan, delineating project scope, timelines, and milestones. It sets the project’s future roadmap and ensures transparency."
  },
  {
    "title": "Development and Implementation",
    "desc": "We use the latest tools and technologies to deliver high-quality custom software solutions that meet your functional requirements and exceed visual expectations."
  },
  {
    "title": "Client Collaboration and Iterations",
    "desc": "We actively and continually seek your insights and feedback to bring about the project's evolution and ensure your satisfaction with the result."
  },
  {
    "title": "Quality Assurance",
    "desc": "Our custom software undergoes meticulous quality checks to ensure that the software meets the highest standards and is a polished and error-free solution."
  },
  {
    "title": "Timely Delivery",
    "desc": "Committed to punctuality, we adhere to strict timelines with our reliable development process and professionalism as the cornerstones of your project's success."
  }
].map((item, i) => (
                  <div key={i} className="relative pl-8 border-l-2 border-white/10 hover:border-blue-500 transition-colors duration-300 group">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-2 border-white/20 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-300" />
                    <h3 className="font-bold text-2xl text-white mb-3 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="h-[50vh] w-full flex items-center justify-center">
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full" />
              <Image
                loading="lazy"
                width={700}
                height={700}
                src="/Images/wheel-unscreen.gif"
                className="relative z-10 w-full h-full object-contain drop-shadow-[0_0_50px_rgba(59,130,246,0.3)]"
                alt="Custom Software Development Process Wheel"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
