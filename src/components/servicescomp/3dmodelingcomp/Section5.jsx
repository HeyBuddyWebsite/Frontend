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
          Our Streamlined 3D Development Process
        </h1>
        <p className=" text-base md:text-lg lg:text-2xl">
          Project after project, we have refined our 3D development process to
          deliver creativity and innovation to your project. We understand the
          importance of a transparent and collaborative workflow, which is
          reflected in our process.
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
                        Staying true to our collaborative approach toward 3D
                        development, we welcome your feedback and suggestions in
                        this step. Accordingly, we make necessary revisions so
                        that your input shapes the final product, guaranteeing
                        satisfaction.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">Quality Assurance</h3>

                      <p>
                        Before we finally deliver, the resulting 3D models
                        undergo rigorous quality checks to ensure that our 3D
                        models meet your project standards. We deliver polished,
                        error-free 3D assets that meet your project's visual and
                        functional needs.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">Timely Delivery</h3>

                      <p>
                        With our unwavering commitment, we deliver your 3D
                        assets with high regard to timelines. We ensure this by
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
