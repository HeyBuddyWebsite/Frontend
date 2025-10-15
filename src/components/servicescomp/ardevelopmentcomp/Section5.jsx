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
          Our Proven AR Development Process at Hey Buddy
        </h1>
        <p className=" text-base md:text-l lg:text-xl">
          At Hey Buddy, we improved our AR development process with every
          project. Now, it has evolved into a meticulous, client-centric AR
          development process designed to realize your vision. We offer
          transparency, collaboration, and the timely delivery of your AR
          projects. Here's an overview of our step-by-step process:
        </p>
      </div>

      <div className="pb-24">
        <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
          <div
            style={{ marginLeft: "2rem" }}
            className="overflow-y-scroll scrollbar-hide md:scrollbar-default h-[60vh] w-full  "
          >
            <div className="">
              <div className="main ">
                {/* <h3 class="head">Responsive Timeline</h3> */}
                <div class="container text-white">
                  <ul>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        {" "}
                        Discovery and Consultation:
                      </h3>
                      <p>
                        We begin by attaining a complete understanding of your
                        business objectives and vision for the AR project. Here,
                        our team collaborates closely with yours.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        {" "}
                        Ideation and Conceptualization:
                      </h3>
                      <p>
                        Then, we brainstorm ideas to align the development with
                        your brand and objectives. This phase ensures that our
                        proposed solutions resonate with your vision.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        Technical Feasibility Assessment:
                      </h3>
                      <p>
                        On the final idea, our technical experts conduct a
                        thorough feasibility assessment. They evaluate the
                        compatibility of proposed AR functionalities with your
                        existing systems.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        Development and Coding
                      </h3>
                      <p>
                        Once the idea passes feasibility assessment, our
                        seasoned developers leverage AR technologies such as
                        ARKit and ARCore to bring your vision to life.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        Iterative Prototyping
                      </h3>
                      <p>
                        We provide you with iterative prototypes to solicit your
                        invaluable feedback. This helps us refine the AR
                        application and ensure it meets and exceeds your
                        expectations.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        {" "}
                        Comprehensive Testing
                      </h3>
                      <p>
                        With rigorous testing, we achieve the desired
                        functionality with security and performance. This also
                        ensures that your AR application is a seamless and
                        robust final product.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        {" "}
                        Client Approval and Deployment
                      </h3>
                      <p>
                        Once the prototype meets your satisfaction, we seek your
                        approval before deploying. Our streamlined process
                        ensures your AR solution is launched within specified
                        timelines.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        {" "}
                        Analytics and Performance Monitoring
                      </h3>
                      <p>
                        We integrate analytics tools to monitor the performance
                        of your AR application. Insights gained lead to
                        data-driven decisions that make an industry-wide impact.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        {" "}
                        Post-launch support and Optimization
                      </h3>
                      <p>
                        Our support doesn't end with deployment. Hey Buddy
                        offers post-launch support, updates, and optimization
                        services for your unhindered success.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl  ">
                        Client Collaboration and Feedback Loop
                      </h3>
                      <p>
                        And our collaboration doesn’t end with project
                        completion. We value your feedback and maintain an open
                        line of communication, fostering long-term partnerships.
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
