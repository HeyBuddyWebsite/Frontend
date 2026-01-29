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
          Our Refined Custom Software Development Process
        </h1>
        <p className="text-xl lg:text-2xl">
          Project after project, we've developed a sophisticated and meticulous
          process for our custom software development. We infuse innovation and
          precision into your projects while recognizing the significance of
          transparency and collaboration. our process reflects a commitment to
          clarity and excellence.
        </p>
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
                  <div className="container text-white">
                  <ul>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        Understanding Requirements
                      </h3>
                      <p>
                        We start with deep diving into project goals and your
                        expectations. The practice of clear communication starts
                        right here as align our strategies with your vision
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        Planning and Strategy
                      </h3>
                      <p>
                        We transform concepts into a detailed plan, delineating
                        project scope, timelines, and milestones. It sets the
                        project’s future roadmap and ensures transparency.
                      </p>
                    </li>
                    <li>
                      <h3 className=" font-bold text-2xl ">
                        Development and Implementation
                      </h3>
                      <p>
                        We use the latest tools and technologies to deliver
                        high-quality custom software solutions that meet your
                        functional requirements and exceed visual expectations.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        Client Collaboration and Iterations
                      </h3>
                      <p>
                        We actively and continually seek your insights and
                        feedback to bring about the project's evolution and
                        ensure your satisfaction with the result.
                      </p>
                    </li>
                    <li>
                      <h3 className=" font-bold text-2xl  ">
                        Quality Assurance
                      </h3>
                      <p>
                        Our custom software undergoes meticulous quality checks
                        to ensure that the software meets the highest standards
                        and is a polished and error-free solution.
                      </p>
                    </li>
                    <li>
                      <h3 className=" font-bold text-2xl  ">Timely Delivery</h3>
                      <p>
                        Committed to punctuality, we adhere to strict timelines
                        with our reliable development process and
                        professionalism as the cornerstones of your project's
                        success.
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
