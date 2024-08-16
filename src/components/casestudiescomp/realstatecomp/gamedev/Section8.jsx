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
    <div className="w-[100%] lg:w-[100%] mb-[80px] lg:mb-[150px] mx-auto bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(3).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse%208%20(2).svg')] bg-no-repeat bg-contain md:bg-contain bg-[center_top_0rem]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="w-[90%] lg:w-[80%] mx-auto"
      >
        <div className=" py-[60px] lg:py-[100px]  text-white  mx-auto flex-flex-column items-center ">
          <h1 className=" pb-[25px] lg:w-[85%] text-2xl lg:text-4xl font-bold text-center mx-auto">
            How Did We Do it?
          </h1>
          <p className=" lg:w-[80%] text-[16px] lg:text-[20px] font-medium  text-white text-center mx-auto   ">
            {heading}
          </p>
        </div>

        <div className=" mx-auto w-[100%] lg:w-[90%] ">
          <div className=" w-[100%] flex flex-col  md:flex-row  justify-between items-center     gap-y-4  mx-auto">
            <div className="overflow-y-scroll scrollbar-hide md:scrollbar-default h-[80vh]   ">
              <div className="">
                <div className=" ">
                  {/* <h3 class="head">Responsive Timeline</h3> */}
                  <div class="container text-white">
                    <ul >
                      {requirement && (
                        <li className="mb-[50px]"> 
                          <h3 className="font-bold text-xl lg:text-2xl  ">
                            Requirement Gathering
                          </h3>
                          <p className=" text-[14px] lg:text-[16px] font-medium ">{requirement}</p>
                        </li>
                      )}
                      {ideation && (
                        <li className="mb-[50px]">
                          <h3 className="font-bold text-xl lg:text-2xl ">Ideation</h3>
                          <p className=" text-[14px] lg:text-[16px] font-medium ">{ideation}</p>
                        </li>
                      )}
                      {designing && (
                        <li className="mb-[50px]">
                          <h3 className="font-bold text-xl lg:text-2xl ">Designing</h3>
                          <p className=" text-[14px] lg:text-[16px] font-medium ">{designing}</p>
                        </li>
                      )}
                      {development && (
                        <li className="mb-[50px]">
                          <h3 className="font-bold text-xl lg:text-2xl ">Development </h3>
                          <p className=" text-[14px] lg:text-[16px] font-medium ">{development}</p>
                        </li>
                      )}
                      {testing && (
                        <li className="mb-[50px]">
                          <h3 className="font-bold text-xl lg:text-2xl ">
                            Inspection & Testing{" "}
                          </h3>
                          <p className=" text-[14px] lg:text-[16px] font-medium ">{testing}</p>
                        </li>
                      )}
                      {optimization && (
                        <li className="mb-[50px]">
                          <h3 className="font-bold text-xl lg:text-2xl  ">Optimization</h3>
                          <p className=" text-[14px] lg:text-[16px] font-medium ">{optimization}</p>
                        </li>
                      )}

                      {deployment && (
                        <li className="">
                          <h3 className="font-bold text-xl lg:text-2xl ">Deployment</h3>
                          <p className=" text-[14px] lg:text-[16px] font-medium ">{deployment}</p>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="   ">
             
            <Image
                  loading="lazy"
                  width={700}
                  height={700}
                  src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/wheel-unscreen.gif"
                  className=" h-[50vh] w-[62rem] sm:h-auto sm:w-auto md:h-[50vh] md:w-[62rem] lg:h-[80vh] lg:w-auto object-cover "
                  alt="Hey B"
                />
              
              
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timelinecomp;
