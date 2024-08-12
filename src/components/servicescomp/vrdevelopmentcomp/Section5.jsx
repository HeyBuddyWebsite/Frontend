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
      heading: "Discovery and Consultation",
      para: "We start with a complete grasp of your business objectives and your vision. Our team collaborates closely with yours to ensure a collaborative approach from day one."
    },
    {
      id: 2,
      heading: "Ideation and Conceptualization",
      para: "We ideat and brainstorm to choose the best solution for your brand and objectives. Here, we ensure that our proposed solutions perfectly align with your vision."
    },
    {
      id: 3,
      heading: "Technical Feasibility Assessment",
      para: "That’s not it, on the chosen idea, our VR technical experts conduct a thorough feasibility assessment. They evaluate compatibility and viability from different aspects."
    },
    {
      id: 4,
      heading: "Development and Coding",
      para: "The approved idea is taken over by our expert VR developers. Who leverage every state-of-the-art VR technology so that the outcome matches your vision."
    },
    {
      id: 5,
      heading: "Iterative Prototyping",
      para: "Our development team comes up with iterative prototypes and solicits your feedback on the same. Based on that, we modify the VR experience to exceed your expectations."
    },
    {
      id: 6,
      heading: "Comprehensive Testing",
      para: "Our rigorous testing protocol ensures that your VR experience possesses the functionality and features that captivate and engage your audience."
    },
    {
      id: 7,
      heading: "Client Approval and Deployment",
      para: "We send the outcome for your approval and make it deployment-ready. Here, our streamlined process ensures that we adhere to the stipulated timeline."
    },
    {
      id: 8,
      heading: "Analytics and Performance Monitoring",
      para: "Deployment is not enough, tracking is crucial. That’s why we integrate analytics tools. With this, we monitor the performance of your VR experience for data-driven insights."
    },
    {
      id: 9,
      heading: "Post-launch support and Optimization",
      para: "On the same line, we keep on offering you post-launch support, updates, and optimization services for the assured success of your VR experiences."
    },
    {
      id: 10,
      heading: "Client Collaboration and Feedback Loop",
      para: "Lastly, we collaborate with you to draw your valuable feedback and sustain an open line of communication for long-term partnerships."
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
          Our Refined VR Development Process
          </h1>
          <p className="text-base lg:w-[90%] font-medium text-white text-center mx-auto   ">
          Our VR development process has evolved with every project in favor of
          client-centricity, and user experience. We not only realize your
          vision but ensure your complete satisfaction with transparency,
          collaboration, and the timely delivery of your VR projects.          </p>
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
