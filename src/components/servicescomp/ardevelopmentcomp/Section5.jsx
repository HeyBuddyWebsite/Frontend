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
      heading: "Discovery and Consultation:",
      para: "We begin by attaining a complete understanding of your business objectives and vision for the AR project. Here, our team collaborates closely with yours."
    },
    {
      id: 2,
      heading: "Ideation and Conceptualization:",
      para: "Then, we brainstorm ideas to align the development with your brand and objectives. This phase ensures that our proposed solutions resonate with your vision."
    },
    {
      id: 3,
      heading: "Technical Feasibility Assessment:",
      para: "On the final idea, our technical experts conduct a thorough feasibility assessment. They evaluate the compatibility of proposed AR functionalities with your existing systems."
    },
    {
      id: 4,
      heading: "Development and Coding",
      para: "Once the idea passes feasibility assessment, our seasoned developers leverage AR technologies such as ARKit and ARCore to bring your vision to life."
    },
    {
      id: 5,
      heading: "Iterative Prototyping",
      para: "We provide you with iterative prototypes to solicit your invaluable feedback. This helps us refine the AR application and ensure it meets and exceeds your expectations."
    },
    {
      id: 6,
      heading: "Comprehensive Testing",
      para: "With rigorous testing, we achieve the desired functionality with security and performance. This also ensures that your AR application is a seamless and robust final product."
    },
    {
      id: 7,
      heading: "Client Approval and Deployment",
      para: "Once the prototype meets your satisfaction, we seek your approval before deploying. Our streamlined process ensures your AR solution is launched within specified timelines."
    },
    {
      id: 8,
      heading: "Analytics and Performance Monitoring",
      para: "We integrate analytics tools to monitor the performance of your AR application. Insights gained lead to data-driven decisions that make an industry-wide impact."
    },
    {
      id: 9,
      heading: "Post-launch support and Optimization",
      para: "Our support doesn't end with deployment. Hey Buddy offers post-launch support, updates, and optimization services for your unhindered success."
    },
    {
      id: 10,
      heading: "Client Collaboration and Feedback Loop",
      para: "And our collaboration doesn’t end with project completion. We value your feedback and maintain an open line of communication, fostering long-term partnerships."
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
          Our Proven AR Development Process at Hey Buddy
          </h1>
          <p className="text-base lg:w-[90%] font-medium text-white text-center mx-auto   ">
          At Hey Buddy, we improved our AR development process with every
          project. Now, it has evolved into a meticulous, client-centric AR
          development process designed to realize your vision. We offer
          transparency, collaboration, and the timely delivery of your AR
          projects. Here's an overview of our step-by-step process:
          </p>
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
