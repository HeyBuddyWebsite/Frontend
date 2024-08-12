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
      heading: "Requirement Gathering",
      para: "We start by thoroughly understanding your project requirements and your vision. Our team collaborates with yours to start on the right foot."
    },
    {
      id: 2,
      heading: "Ideation and Conceptualization",
      para: "We brainstorm to identify the possible solutions for your project objectives and do a deep dive to check for their viability to zero in on the best one."
    },
    {
      id: 3,
      heading: "Feasibility Assessment",
      para: "On the chosen idea, our CGI technical experts further conduct thorough feasibility assessments to evaluate it from different aspects."
    },
    {
      id: 4,
      heading: "Development and Coding",
      para: "Then the best idea that gets the nod from every stakeholder is sent to expert CGI developers that utilize state-of-the-art technology to materialize it."
    },
    {
      id: 5,
      heading: "Iterative Prototyping",
      para: "Our CGI development team comes up with iterative prototypes. We assess it to see if it matches the requirements shared by you."
    },
    {
      id: 6,
      heading: "Comprehensive Testing",
      para: "Then the outcome undergoes rigorous testing protocols to ensure that your CGI experience possesses the required functionality and features."
    },
    {
      id: 7,
      heading: "Client Approval and Deployment",
      para: "Then, we send the outcome for your approval and make it deployment-ready. Our streamlined process ensures timely delivery."
    },
    {
      id: 8,
      heading: "Performance Analysis",
      para: "We ran analyses whenever possible to assess the performance of the CGI and find ways to improve our process."
    },
    {
      id: 9,
      heading: "Post-launch Support and Optimization",
      para: "We keep on offering you post-launch support, updates, and optimization services for the assured success of your CGI experiences."
    },
    {
      id: 10,
      heading: "Client Feedback Loop",
      para: "We time and again draw on your valuable feedback and maintain an open line of communication for long-term partnerships."
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
          Our Refined 3D CGI Development Process
          </h1>
          <p className="text-base lg:w-[90%] font-medium text-white text-center mx-auto   ">
          At Hey Buddy, we have streamlined our CGI development process to
          deliver high-quality results that match your expectations and project
          needs. We operate with full transparency and ensure seamless
          collaboration and communication with your team.          </p>
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
