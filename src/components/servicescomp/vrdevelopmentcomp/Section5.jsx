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
      head: "1.  Discovery and Consultation",
      para: "We start with a complete grasp of your business objectives and your vision. Our team collaborates closely with yours to ensure a collaborative approach from day one. ",
    },
    {
      id: "2",
      head: "2. Ideation and Conceptualization",
      para: "We ideat and brainstorm to choose the best solution for your brand and objectives. Here, we ensure that our proposed solutions perfectly align with your vision.",
    },
    {
      id: "3",
      head: "3. Technical Feasibility Assessment",
      para: "That’s not it, on the chosen idea, our VR technical experts conduct a thorough feasibility assessment. They evaluate compatibility and viability from different aspects.",
    },
    {
      id: "4",
      head: "4.  Development and Coding",
      para: "The approved idea is taken over by our expert VR developers. Who leverage every state-of-the-art VR technology so that the outcome matches your vision.",
    },
    {
      id: "5",
      head: "5.  Iterative Prototyping",
      para: "Our development team comes up with iterative prototypes and solicits your feedback on the same. Based on that, we modify the VR experience to exceed your expectations.",
    },
    {
      id: "6",
      head: "6. Comprehensive Testing ",
      para: "Our rigorous testing protocol ensures that your VR experience possesses the functionality and features that captivate and engage your audience.",
    },
    {
      id: "7",
      head: "7. Client Approval and Deployment",
      para: "We send the outcome for your approval and make it deployment-ready. Here, our streamlined process ensures that we adhere to the stipulated timeline.",
    },
    {
      id: "8",
      head: "8. Analytics and Performance Monitoring",
      para: "Deployment is not enough, tracking is crucial. That’s why we integrate analytics tools. With this, we monitor the performance of your VR experience for data-driven insights.",
    },
    {
      id: "9",
      head: "9.  Post-launch support and Optimization",
      para: "On the same line, we keep on offering you post-launch support, updates, and optimization services for the assured success of your VR experiences.",
    },
    {
      id: "10",
      head: "10. Client Collaboration and Feedback Loop",
      para: "Lastly, we collaborate with you to draw your valuable feedback and sustain an open line of communication for long-term partnerships.",
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
          Our Refined VR Development Process
        </h1>
        <p className="text-base lg:text-lg">
          Our VR development process has evolved with every project in favor of
          client-centricity, and user experience. We not only realize your
          vision but ensure your complete satisfaction with transparency,
          collaboration, and the timely delivery of your VR projects.
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
                      <h3 className="font-bold text-2xl ">
                        1. Discovery and Consultation
                      </h3>
                      <p>
                        We start with a complete grasp of your business
                        objectives and your vision. Our team collaborates
                        closely with yours to ensure a collaborative approach
                        from day one.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        2. Ideation and Conceptualization
                      </h3>
                      <p>
                        We ideat and brainstorm to choose the best solution for
                        your brand and objectives. Here, we ensure that our
                        proposed solutions perfectly align with your vision.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        3. Technical Feasibility Assessment
                      </h3>
                      <p>
                        That’s not it, on the chosen idea, our VR technical
                        experts conduct a thorough feasibility assessment. They
                        evaluate compatibility and viability from different
                        aspects.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        4. Development and Coding
                      </h3>
                      <p>
                        The approved idea is taken over by our expert VR
                        developers. Who leverage every state-of-the-art VR
                        technology so that the outcome matches your vision.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        5. Iterative Prototyping
                      </h3>
                      <p>
                        Our development team comes up with iterative prototypes
                        and solicits your feedback on the same. Based on that,
                        we modify the VR experience to exceed your expectations.{" "}
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">
                        6. Comprehensive Testing
                      </h3>
                      <p>
                        Our rigorous testing protocol ensures that your VR
                        experience possesses the functionality and features that
                        captivate and engage your audience.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        7. Client Approval and Deployment
                      </h3>
                      <p>
                        We send the outcome for your approval and make it
                        deployment-ready. Here, our streamlined process ensures
                        that we adhere to the stipulated timeline.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        8. Analytics and Performance Monitoring
                      </h3>
                      <p>
                        Deployment is not enough, tracking is crucial. That’s
                        why we integrate analytics tools. With this, we monitor
                        the performance of your VR experience for data-driven
                        insights.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        9.Post-launch support and Optimization
                      </h3>
                      <p>
                        On the same line, we keep on offering you post-launch
                        support, updates, and optimization services for the
                        assured success of your VR experiences.{" "}
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        10. Client Collaboration and Feedback Loop
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
