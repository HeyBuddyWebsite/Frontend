"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import './Timelinecomp.css'
import "../../../styles/Timelinecomp.css";
import { motion, useAnimation } from "framer-motion";

const Timelinecomp = () => {
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

  const text = [
    {
      id: "1",
      head: "1. Requirement Gathering",
      para: "The process starts with the pre-production phase. Here, we settle the dust around the basics of the games such as the game narrative, gameplay rules, game level, and basic structure. All this is documented securely in the Game Development Document (GDD).    ",
    },
    {
      id: "2",
      head: "2. Concept Art",
      para: "Then, based on GDD, the story, the intended theme, and the characters, we work on the concept art of the game. Here, we give shape to the characters, environments, and other in-game objects to set the ball running for 3D visualization and upcoming processes.",
    },
    {
      id: "3",
      head: "3. Assets Creation",
      para: "Once the concept art takes the final shape that you approve of, we start with the 3D & 2D modeling of the game assets. Using the latest software applications, we give your game the look and feel that attracts gamers in huge numbers     ",
    },
    {
      id: "4",
      head: "4. Animation",
      para: "Now comes the most important yet challenging part. We animated your game assets with different techniques as per requirement such as human body animation for game characters and inorganic animation for game objects to make it not just convincing, but captivating.",
    },
    {
      id: "5",
      head: "5. Game Level Designing",
      para: "Now that the characters and assets are ready, it's time to put them on the battlefield. Hence, we design game levels, player abilities, obstacles, and all other elements required for a perfect game. Our main focus - is a great Games experience by all means.     ",
    },
    {
      id: "6",
      head: "6. Building Mechanics ",
      para: "Now, onto some serious tasks, we program the game mechanics that govern how players progress, interact, and experience the game. We ensure intuitive, balanced, and adaptive game mechanics for a meaningful Games experience.",
    },
    {
      id: "7",
      head: "7. AI Infusion",
      para: "Yet another critical factor is the AI integration into the game. This infuses intelligent behaviors into the non-player characters (NPCs), the game environment, and the game assets for hyper-realistic in-game interaction and dynamics.",
    },
    {
      id: "8",
      head: "8. Graphic Optimization",
      para: "We understand that visuals are the first thing that gamers notice and it is the key to attracting an audience. Hence, we optimize the graphics to maintain consistency and the highest visual experience through the devices and platform. ",
    },
    {
      id: "9",
      head: "9. Rigorous Testing",
      para: "We rigorously test your game on every aspect of the process to identify bugs and issues in the game actively. We make your game market-ready and ensure that you gamers get a smooth and enjoyable Games experience without hiccups.",
    },
    {
      id: "10",
      head: "10. Launch",
      para: "This whole process results in a game in which you aspire for your endeavor. Now, we help launch the game on the targeted platform(s). Post that we stay on our toes to troubleshoot issues post-launch, nipping them in the bud.",
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
          Our Perfected Game Development Process - Level by level
        </h1>
        <p className="text-base md:text-lg">
          Over years of experience as a game app development company, we have
          refined, streamlined and aligned our game development process to serve
          you better.
        </p>
      </div>

      <div className="pb-24">
        <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
          <div className="overflow-y-scroll scrollbar-hide md:scrollbar-default h-[60vh] w-full  ">
            <div className="">
              <div className="main ">
                {/* <h3 class="head">Responsive Timeline</h3> */}
                <div class="container text-white">
                  <ul>
                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        1. Requirement Gathering
                      </h3>
                      <p>
                        We start with a complete grasp of your business
                        objectives and your vision. Our team collaborates
                        closely with yours to ensure a collaborative approach
                        from day one.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        2. Concept Art
                      </h3>
                      <p>
                        We ideat and brainstorm to choose the best solution for
                        your brand and objectives. Here, we ensure that our
                        proposed solutions perfectly align with your vision.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        3. Assets Creation
                      </h3>
                      <p>
                        That’s not it, on the chosen idea, our VR technical
                        experts conduct a thorough feasibility assessment. They
                        evaluate compatibility and viability from different
                        aspects.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        4. Animation
                      </h3>
                      <p>
                        The approved idea is taken over by our expert VR
                        developers. Who leverage every state-of-the-art VR
                        technology so that the outcome matches your vision.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        5. Game Level Designing
                      </h3>
                      <p>
                        Our development team comes up with iterative prototypes
                        and solicits your feedback on the same. Based on that,
                        we modify the VR experience to exceed your expectations.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        6. Building Mechanics
                      </h3>
                      <p>
                        Our rigorous testing protocol ensures that your VR
                        experience possesses the functionality and features that
                        captivate and engage your audience.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        7. AI Infusion
                      </h3>
                      <p>
                        We send the outcome for your approval and make it
                        deployment-ready. Here, our streamlined process ensures
                        that we adhere to the stipulated timeline.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        8. Graphic Optimization
                      </h3>
                      <p>
                        Deployment is not enough, tracking is crucial. That’s
                        why we integrate analytics tools. With this, we monitor
                        the performance of your VR experience for data-driven
                        insights.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        9. Rigorous Testing
                      </h3>
                      <p>
                        On the same line, we keep on offering you post-launch
                        support, updates, and optimization services for the
                        assured success of your VR experiences.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl text-[27px] text-start">
                        10. Launch
                      </h3>

                      <p>
                        Lastly, we collaborate with you to draw your valuable
                        feedback and sustain an open line of communication for
                        long-term partnerships.{" "}
                      </p>
                    </li>
                  </ul>
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
                marginTop: "2rem",
              }}
            >
              <Image
                loading="lazy"
                width={700}
                height={700}
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/wheel-unscreen.gif"
                className="lg:mr-6 h-[40vh] w-[52rem] lg:h-[60vh] lg:w-[92rem] "
                alt="Hey B"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
