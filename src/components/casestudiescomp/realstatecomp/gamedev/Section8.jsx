"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Timelinecomp = ({
  heading,
  requirement,
  ideation,
  designing,
  testing,
  optimization,
  development,
  deployment,
}) => {
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
      await controls.start("visible");
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

  const checkScrollPosition = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setShowUpArrow(scrollTop > 0);
      setShowDownArrow(scrollTop < scrollHeight - clientHeight - 10);
    }
  };

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

  const timelineItems = [
    { title: "Requirement Gathering", desc: requirement },
    { title: "Ideation & Planning", desc: ideation },
    { title: "Design Phase", desc: designing },
    { title: "Core Development", desc: development },
    { title: "Testing & QA", desc: testing },
    { title: "Performance Optimization", desc: optimization },
    { title: "Final Deployment", desc: deployment },
  ].filter(item => item.desc);

  return (
    <section className="bg-black/20 backdrop-blur-sm relative py-20 overflow-hidden">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="max-w-7xl mx-auto px-6"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Our Implementation Process: <br />
            <span className="text-blue-500">Precision in Progress</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {heading || "We followed a strategic & step-by-step process to achieve the expected set of results for the client."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Timeline Section */}
          <div className="relative h-[60vh] w-full rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 overflow-hidden group">

            {/* Scroll Arrows */}
            <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-4">
              {showUpArrow && (
                <button
                  onClick={scrollUp}
                  className="p-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600/40 transition-all active:scale-95"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" /></svg>
                </button>
              )}
              {showDownArrow && (
                <button
                  onClick={scrollDown}
                  className="p-3 rounded-full bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600/40 transition-all active:scale-95"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
              )}
            </div>

            <div
              ref={scrollContainerRef}
              onScroll={checkScrollPosition}
              className="h-full overflow-y-auto pr-12 scrollbar-hide space-y-10"
            >
              {timelineItems.map((item, index) => (
                <div key={index} className="relative pl-10 border-l-2 border-white/10 hover:border-blue-500 transition-colors duration-500 group/item">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-black border-2 border-white/30 group-hover/item:border-blue-500 group-hover/item:bg-blue-500 group-hover/item:scale-125 transition-all duration-300 shadow-lg shadow-blue-500/20" />
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover/item:text-blue-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed group-hover/item:text-gray-200 transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* GIF Section */}
          <div className="relative flex justify-center items-center">
            <div className="absolute inset-0 bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
            <div className="relative z-10 w-full aspect-square max-w-[500px]">
              <Image
                src="/Images/wheel-unscreen.gif"
                width={600}
                height={600}
                className="w-full h-full object-contain filter drop-shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                alt="Process Animation"
                unoptimized
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Timelinecomp;
