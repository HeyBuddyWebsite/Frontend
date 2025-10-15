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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div className="py-8 text-white">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Our Refined 3D CGI Development Process
        </h1>
        <p className=" text-base md:text-m lg:text-xl">
          At Hey Buddy, we have streamlined our CGI development process to
          deliver high-quality results that match your expectations and project
          needs. We operate with full transparency and ensure seamless
          collaboration and communication with your team.
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
                      <h3 className="font-bold text-2xl  ">
                        Requirement Gathering
                      </h3>

                      <p>
                        We start by thoroughly understanding your project
                        requirements and your vision. Our team collaborates with
                        yours to start on the right foot.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Ideation and Conceptualization
                      </h3>

                      <p>
                        We brainstorm to identify the possible solutions for
                        your project objectives and do a deep dive to check for
                        their viability to zero in on the best one. .
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Feasibility Assessment
                      </h3>
                      <p>
                        On the chosen idea, our CGI technical experts further
                        conduct thorough feasibility assessments to evaluate it
                        from different aspects.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Development and Coding
                      </h3>
                      <p>
                        Then the best idea that gets the nod from every
                        stakeholder is sent to expert CGI developers that
                        utilize state-of-the-art technology to materialize it.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        Iterative Prototyping
                      </h3>

                      <p>
                        Our CGI development team comes up with iterative
                        prototypes. We assess it to see if it matches the
                        requirements shared by you.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        Comprehensive Testing
                      </h3>

                      <p>
                        Then the outcome undergoes rigorous testing protocols to
                        ensure that your CGI experience possesses the required
                        functionality and features.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        Client Approval and Deployment
                      </h3>

                      <p>
                        Then, we send the outcome for your approval and make it
                        deployment-ready. Our streamlined process ensures timely
                        delivery.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        Performance Analysis
                      </h3>

                      <p>
                        We ran analyses whenever possible to assess the
                        performance of the CGI and find ways to improve our
                        process.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        Post-launch Support and Optimization
                      </h3>

                      <p>
                        We keep on offering you post-launch support, updates,
                        and optimization services for the assured success of
                        your CGI experiences.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        Client Feedback Loop
                      </h3>

                      <p>
                        We time and again draw on your valuable feedback and
                        maintain an open line of communication for long-term
                        partnerships.
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
              }}
            >
              <Image
                loading="lazy"
                width={700}
                height={700}
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/wheel-unscreen.gif"
                className="lg:mr-6 h-[40vh] w-[52rem] lg:h-[60vh] lg:w-[92rem] "
                alt="Hey B"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
