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
          Our Streamlined AI Ads Development Process
        </h1>
        <p className=" text-base md:text-lg lg:text-2xl">
          Project after project, we have refined our AI ads development process to
          deliver creativity and innovation to your project. We understand the
          importance of a transparent and collaborative workflow, which is
          reflected in our process.
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
                      <h3 className="font-bold text-2xl  ">Consultation</h3>

                      <p>
                        We initiate with a thorough consultation, grasping the
                        intricacies of your project, goals, and expectations.
                        This clear communication ensures that our plans and
                        processes align with your vision, and lays a strong
                        foundation for a successful collaboration.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Conceptualization and Planning
                      </h3>

                      <p>
                        Our skilled team transforms ideas into a consolidated
                        plan, outlining your project scope, timelines, and key
                        milestones. This sets the roadmap for the project while
                        ensuring transparency and clarity in the development
                        process.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Design and Development
                      </h3>
                      <p>
                        We utilize advanced tools and technologies in our design
                        and development process. Here, we aim to get you
                        high-quality assets that not only meet your project's
                        visual and functional requirements but also exceed your
                        expectations.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Client Feedback and Revisions
                      </h3>
                      <p>
                        Staying true to our collaborative approach toward AI ads
                        development, we welcome your feedback and suggestions in
                        this step. Accordingly, we make necessary revisions so
                        that your input shapes the final product, guaranteeing
                        satisfaction.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">Quality Assurance</h3>

                      <p>
                        Before we finally deliver, the resulting AI ads
                        undergo rigorous quality checks to ensure that our AI ads
                        meet your project standards. We deliver polished,
                        error-free AI ads that meet your project's visual and
                        functional needs.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">Timely Delivery</h3>

                      <p>
                        With our unwavering commitment, we deliver your AI ads
                        with high regard to timelines. We ensure this by
                        utilizing our reliable development process and high
                        professionalism, the two most essential ingredients for
                        your project's success.
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
                alt="AI Ads Development Process Wheel"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;