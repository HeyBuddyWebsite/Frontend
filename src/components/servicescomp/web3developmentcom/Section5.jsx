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
      heading: "Strategic Consultation",
      para: "Our experts dive deep into your vision and carve out a roadmap, aligning Web 3.0 power to your business’s long and short-term goals and objectives."
    },
    {
      id: 2,
      heading: "Decentralized Architecture Design",
      para: "We architect a decentralized framework as per your project's needs. Our designs lay the foundation for scalable, secure, and cutting-edge Web3 development solutions."
    },
    {
      id: 3,
      heading: "Smart Contract Development",
      para: "Our team develops code for smart contracts, automating processes and ensuring a trustless ecosystem for your transactions and operations on the blockchain."
    },
    {
      id: 4,
      heading: "Interoperability Integration",
      para: "Further, our interoperability solutions connect your project with diverse blockchain networks seamlessly, for higher connectivity and collaboration."
    },
    {
      id: 5,
      heading: "Security Audits and Testing",
      para: "Our rigorous security audits and testing ensure resiliency in your project, protecting your platform and user data from threats of every form."
    },
    {
      id: 6,
      heading: "User-Centric DApp Development",
      para: "Consequently, your DApp starts to take its final shape with seamless and intuitive user interaction with blockchain, engaging them in a great digital experience."
    },
    {
      id: 7,
      heading: "Launch and Optimization",
      para: "Lastly, your project gets launched after continuous optimization and refinement ingrained in our process for a dynamic and competitive Web3 solution."
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
          Web3 development Roadmap For Revolutionary Outcome
          </h1>
          <p className="text-base lg:w-[90%] font-medium text-white text-center mx-auto   ">
          We follow a strategic and time-tested Web3 development process to
          catapult your project into the decentralized era.          </p>
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
