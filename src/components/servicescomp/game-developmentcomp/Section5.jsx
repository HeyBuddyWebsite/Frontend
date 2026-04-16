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
          Our Perfected Game Development Process - Level by level
        </h2>
        <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
          Over years of experience as a game app development company, we have refined, streamlined and aligned our game development process to serve you better.
        </p>
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
                    "title": "1. Requirement Gathering",
                    "desc": "The process starts with the pre-production phase. Here, we settle the dust around the basics of the games such as the game narrative, gameplay rules, game level, and basic structure. All this is documented securely in the Game Development Document (GDD)."
                  },
                  {
                    "title": "2. Concept Art",
                    "desc": "Then, based on GDD, the story, the intended theme and the characters, we work on the concept art of the game. Here, we give shape to the characters, environments, and other in-game objects to set the ball running for 3D visualisation and upcoming processes."
                  },
                  {
                    "title": "3. Assets Creation",
                    "desc": "Once the concept art takes the final shape that you approve of, we start with the 3D & 2D modelling of the game assets. Using the latest software applications, we give your game the look and feel that attracts gamers in huge numbers."
                  },
                  {
                    "title": "4. Animation",
                    "desc": "Now comes the most important yet challenging part. We animated your game assets with different techniques as per requirement such as human body animation for game characters and inorganic animation for game objects to make it not just convincing, but captivating."
                  },
                  {
                    "title": "5. Game Level Designing",
                    "desc": "Now that the characters and assets are ready, it's time to put them on the battlefield. Hence, we design game levels, player abilities, obstacles, and all other elements required for a perfect game. Our main focus - is a great gaming experience by all means."
                  },
                  {
                    "title": "6. Building Mechanics",
                    "desc": "Now, onto some serious tasks, we programme the game mechanics that govern how players progress, interact, and experience the game. We ensure intuitive, balanced and adaptive game mechanics for a meaningful gaming experience."
                  },
                  {
                    "title": "7. AI Infusion",
                    "desc": "Yet another critical factor is the AI integration into the game. This infuses intelligent behaviours into the non-player characters (NPCs), the game environment, and the game assets for hyper-realistic in-game interaction and dynamics."
                  },
                  {
                    "title": "8. Graphic Optimization",
                    "desc": "We understand that visuals are the first thing that gamers notice and it is the key to attracting an audience. Hence, we optimise the graphic to maintain consistency and the highest visual experience through the devices and platform."
                  },
                  {
                    "title": "9. Rigorous Testing",
                    "desc": "We rigorously test your game on each and every aspect of the process to identify bugs and issues in the game actively. We make your game market-ready and ensure that you gamers get a smooth and enjoyable gaming experience without hiccups."
                  },
                  {
                    "title": "10. Launch",
                    "desc": "This whole process results in a game in which you aspired for your endeavour. Now, we help launch the game on the targeted platform(s). Post that we stay on our toes in order to troubleshoot issues post-launch, nipping them in the bud."
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
                alt="Game Development Process Wheel"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
