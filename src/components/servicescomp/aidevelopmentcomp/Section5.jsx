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
 

  const process = [
    {
      id:1,
      heading:"Discovery and Planning",
      para:" We begin by delving into your objectives, challenges, and opportunities to meticulously plan a clear roadmap to success."
    },
    {
      id:2,
      heading:"Data Exploration and Preparation",
     para:"Our experts use AI to sift through vast datasets and ensure that every bit of information is meticulously processed and prepared for analysis."
    },
    {
      id:3,
      heading:"Algorithm Design and Development",
      para:"Our expert team designs and develops custom algorithms, tailored to extract relevant insights and drive powerful performance."
    },
    {
      id:4,
      heading:"Model Training and Optimization",
      para:"Through rigorous training, we fine-tune the AI model to bring precision and efficiency and align it impeccably with your goals."
    },
    {
      id:5,
      heading:"Testing and Quality Assurance",
      para:"We subject your AI solutions to meticulous quality assurance, securing flawless functionality and reliability in diverse real-world scenarios."
    },
    {
      id:6,
      heading:"Deployment and Integration",
      para:" We integrate AI into your systems faultlessly, ensuring a smooth transition that significantly adds value to your operations."
    },
    {
      id:7,
      heading:"Monitoring and Continuous Improvement",
      para:"With continuous monitoring and improvement, your AI solutions evolve, adapt, and maintain peak performance every time"
    },
    {
      id:8,
      heading:"Feedback Loops and Iteration",
      para:" We establish feedback loops and iterative processes, allowing your AI solutions to continuously learn, evolve, and perform better than before every time."
    },
  ]

  return (
    <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="w-[100%] lg:w-[100%] mx-auto mb-8 md:mb-12 lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%209%20(4).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className=" pt-[44px] pb-[44px] lg:pt-[100px] lg:pb-[100px]  text-white  mx-auto flex-flex-column items-center ">
          <h1 className=" pb-[25px] lg:w-[80%] text-2xl lg:text-4xl font-bold text-center mx-auto">
          Our AI Development Process: Precision in Progress
          </h1>
          {/* <p className="text-base lg:w-[90%] font-medium text-white text-center mx-auto   ">
          </p> */}
        </div>

        <div className=" mx-auto w-[100%] lg:w-[90%] ">
          <div className=" w-[100%] flex flex-col  md:flex-row  justify-between items-center     gap-y-4   mx-auto">
            <div className="w-[100%]   overflow-y-scroll scrollbar-hide md:scrollbar-default h-[80vh]   ">
              <div className="">
                <div className=" ">
                  {/* <h3 class="head">Responsive Timeline</h3> */}
                  <div class="container text-white">
                    <ul>
                      {process.map((event,index)=>{
                        return  <li key={event.id}>
                        <h3 className="font-bold text-xl lg:text-2xl  ">
                        {event.heading}
                        </h3>
                        <p className="text-sm  font-medium">{event.para}</p>
                      </li>
                      })}
                     
                       
                      
                      
                        
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
                  className=" h-auto w-auto  object-cover "
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
