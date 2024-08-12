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
      id: 1,
      heading: "Conceptualization",
      para: "Our team coordinates with yours and the 3d led screen billboard providers to, brainstorm innovative ideas and align outcomes with your brand message."
    },
    {
      id: 2,
      heading: "Design Expertise",
      para: "We utilize advanced design tools, bringing your concepts to life and carefully curating visuals to create mesmerizing anamorphic effects."
    },
    {
      id: 3,
      heading: "Precision Rendering",
      para: "We employ advanced rendering techniques to capture every detail of your anamorphic 3D design that is crafted with precision by our team."
    },
    {
      id: 4,
      heading: "Real-world Simulation",
      para: "We assess the impact of your upcoming billboard through simulated environments and ensure it brings out the best viewer experience."
    },
    {
      id: 5,
      heading: "Transparency and Collaboration",
      para: "We share drafts and collaborate with you throughout the process, ensuring that the final anamorphic content perfectly aligns with your marketing objectives."
    },
    {
      id: 6,
      heading: "Meticulous Execution",
      para: "We implement the approved outcome with ultimate precision and deliver a flawless anamorphic 3D billboard that is hard to ignore."
    }
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
          3D Billboard Development Process For Creative Vision Realization
          </h1>
          <p className="text-base lg:w-[90%] font-medium text-white text-center mx-auto   ">
          Our 3D billboard development process is streamlined to realize your
          vision with all its creative glory intact.          </p>
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
