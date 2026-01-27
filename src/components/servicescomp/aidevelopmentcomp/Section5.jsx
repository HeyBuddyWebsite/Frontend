"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import './Timelinecomp.css'
import "../../../styles/Timelinecomp.css";
import { motion, useAnimation } from "framer-motion";

const Timelinecomp = () => {
  const controls = useAnimation();
  const ref = useRef();
  const scrollContainerRef = useRef(null);
  const [showUpArrow, setShowUpArrow] = useState(false);
  const [showDownArrow, setShowDownArrow] = useState(true);

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
  const events = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div className="py-8 text-white">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Our AI Development Process: Precision in Progress
        </h1>
        {/* <p className=" text-base md:text-lg lg:text-2xl">
          
        </p> */}
      </div>

      <div className="pb-24">
        <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
          <div className="relative h-[60vh] w-full">
            {/* Scroll Arrows - Positioned on the right side */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center gap-3 pointer-events-none pr-2">
              {/* Up Arrow */}
              {showUpArrow && (
                <button
                  onClick={scrollUp}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 transition-all duration-300 pointer-events-auto shadow-lg"
                  aria-label="Scroll up"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 15l7-7 7 7"
                    />
                  </svg>
                </button>
              )}
              
              {/* Down Arrow */}
              {showDownArrow && (
                <button
                  onClick={scrollDown}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 transition-all duration-300 pointer-events-auto shadow-lg"
                  aria-label="Scroll down"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>

            <div 
              ref={scrollContainerRef}
              className="overflow-y-scroll scrollbar-hide h-full w-full pr-12"
              onScroll={checkScrollPosition}
            >
              <div className="">
                <div className="main ">
                  {/* <h3 class="head">Responsive Timeline</h3> */}
                  <div class="container text-white">
                  <ul>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        Discovery and Planning
                      </h3>

                      <p>
                        We begin by delving into your objectives, challenges,
                        and opportunities to meticulously plan a clear roadmap
                        to success.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Data Exploration and Preparation
                      </h3>

                      <p>
                        Our experts use AI to sift through vast datasets and
                        ensure that every bit of information is meticulously
                        processed and prepared for analysis.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Algorithm Design and Development
                      </h3>
                      <p>
                        Our expert team designs and develops custom algorithms,
                        tailored to extract relevant insights and drive powerful
                        performance.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Model Training and Optimization
                      </h3>
                      <p>
                        Through rigorous training, we fine-tune the AI model to
                        bring precision and efficiency and align it impeccably
                        with your goals.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        Testing and Quality Assurance
                      </h3>

                      <p>
                        We subject your AI solutions to meticulous quality
                        assurance, securing flawless functionality and
                        reliability in diverse real-world scenarios.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        Deployment and Integration
                      </h3>

                      <p>
                        We integrate AI into your systems faultlessly, ensuring
                        a smooth transition that significantly adds value to
                        your operations.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Monitoring and Continuous Improvement
                      </h3>

                      <p>
                        With continuous monitoring and improvement, your AI
                        solutions evolve, adapt, and maintain peak performance
                        every time
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Feedback Loops and Iteration
                      </h3>

                      <p>
                        We establish feedback loops and iterative processes,
                        allowing your AI solutions to continuously learn,
                        evolve, and perform better than before every time.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="h-[50vh] w-full  px-16">
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "100%",
                position: "relative",
              }}
            >
              <Image
                loading="lazy"
                width={700}
                height={700}
                src="/Images/wheel-unscreen.gif"
                className="lg:mr-6 h-[40vh] w-[52rem] lg:h-[60vh] lg:w-[92rem] "
                alt="AI Development Process Wheel"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
