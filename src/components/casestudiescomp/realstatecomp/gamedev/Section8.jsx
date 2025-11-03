"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import './Timelinecomp.css'
import "../../../../styles/Timelinecomp.css";
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
    <div className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/csgame9.png')] bg-no-repeat bg-auto lg:bg-cover bg-[center_top_0rem]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
      >
        <div className="py-8  text-white lg:w-[80%] mx-auto flex-flex-column items-center ">
          <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl text-center mx-auto">
            How Did We Do it?
          </h1>
          <p className="text-xl lg:text-2xl text-center mx-auto px-2 text-gray-300 ">
            {heading}
          </p>
        </div>

        <div className="pb-24 mx-auto">
          <div className="flex  justify-center items-center flex-col md:mb-12 md:flex-row  gap-y-4 gap-x-4 mx-auto">
            <div className="overflow-y-scroll scrollbar-hide md:scrollbar-default h-[60vh]   ">
              <div className="">
                <div className="main ">
                  {/* <h3 class="head">Responsive Timeline</h3> */}
                  <div class="container text-white">
                    <ul>
                      {requirement && (
                        <li>
                          <h3 className="font-bold text-2xl  ">
                            Requirement Gathering
                          </h3>
                          <p className="text-lg">{requirement}</p>
                        </li>
                      )}
                      {ideation && (
                        <li>
                          <h3 className="font-bold text-2xl ">Ideation</h3>
                          <p className="text-lg">{ideation}</p>
                        </li>
                      )}
                      {designing && (
                        <li>
                          <h3 className="font-bold text-2xl ">Designing</h3>
                          <p className="text-lg">{designing}</p>
                        </li>
                      )}
                      {development && (
                        <li>
                          <h3 className="font-bold text-2xl ">Development </h3>
                          <p className="text-lg">{development}</p>
                        </li>
                      )}
                      {testing && (
                        <li>
                          <h3 className="font-bold text-2xl ">
                            Inspection & Testing{" "}
                          </h3>
                          <p className="text-lg">{testing}</p>
                        </li>
                      )}
                      {optimization && (
                        <li>
                          <h3 className="font-bold text-2xl ">Optimization</h3>
                          <p className="text-lg">{optimization}</p>
                        </li>
                      )}

                      {deployment && (
                        <li>
                          <h3 className="font-bold text-2xl ">Deployment</h3>
                          <p className="text-lg">{deployment}</p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[50vh]  px-16">
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
                  className="lg:mr-6 h-[50vh] w-[62rem] lg:h-auto lg:w-auto "
                  alt="Hey B"
                />
                {/* <Image loading="lazy"
  src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/wheel-unscreen.gif"
  width={400} // Original width
  height={400} // Original height
  // layout="intrinsic"
  className="lg:mr-6"
  alt="Hey B"
/> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timelinecomp;
