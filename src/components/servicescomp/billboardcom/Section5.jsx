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
        <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          3D Billboard Development Process For Creative Vision Realization
        </h2>
        <p className="text-xl lg:text-2xl">
          Our 3D billboard development process is streamlined to realize your
          vision with all its creative glory intact.
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
                      <h3 className="font-bold text-2xl g g">
                        Conceptualization
                      </h3>

                      <p>
                        Our team coordinates with yours and the 3d led screen
                        billboard providers to, brainstorm innovative ideas and
                        align outcomes with your brand message.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl g">Design Expertise</h3>

                      <p>
                        We utilize advanced design tools, bringing your concepts
                        to life and carefully curating visuals to create
                        mesmerizing anamorphic effects.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl g">
                        Precision Rendering
                      </h3>
                      <p>
                        We employ advanced rendering techniques to capture every
                        detail of your anamorphic 3D design that is crafted with
                        precision by our team.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl g">
                        Real-world Simulation
                      </h3>
                      <p>
                        We assess the impact of your upcoming billboard through
                        simulated environments and ensure it brings out the best
                        viewer experience.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl g">
                        Transparency and Collaboration
                      </h3>

                      <p>
                        We share drafts and collaborate with you throughout the
                        process, ensuring that the final anamorphic content
                        perfectly aligns with your marketing objectives.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl g">
                        Meticulous Execution
                      </h3>

                      <p>
                        We implement the approved outcome with ultimate
                        precision and deliver a flawless anamorphic 3D billboard
                        that is hard to ignore.
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
                alt="3D Billboard Development Process Wheel"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
