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
      heading: "Ideation Phase",
      para: "Our experts collaborate closely with your team to understand your vision, goals, and audience. Then through power-packed brainstorming sessions, we craft a comprehensive blueprint to meet your expectations."
    },
    {
      id: 2,
      heading: "Design & Prototyping",
      para: "Our experienced designers create immersive environments and interactive elements, bringing your concept to life. With rapid prototyping, we ensure your Metaverse project meets your standards."
    },
    {
      id: 3,
      heading: "Development & Implementation",
      para: "Our seasoned developers utilize cutting-edge technologies and build a robust foundation for your Metaverse project. By deploying agile methodologies, we infuse flexibility and adaptability throughout the development process."
    },
    {
      id: 4,
      heading: "Testing & Refinement",
      para: "We execute rigorous testing to ensure a glitch-free Metaverse experience for your audience. We invite your feedback and fine-tune every aspect to refine the experience for high-class performance and impressive user engagement."
    },
    {
      id: 5,
      heading: "Launch & Beyond",
      para: "Lastly, we guide you through a successful launch and we continue to support you in the post-launch phase. Hence, not only do we ensure seamless integration and scalability but also time-bound troubleshooting."
    },
    {
      id: 6,
      heading: "Timely Delivery",
      para: "With our unwavering commitment, we deliver your 3D assets with high regard to timelines. We ensure this by utilizing our reliable development process and high professionalism, the two most essential ingredients for your project's success."
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
          Hey Buddy: Metaverse Development Process
          </h1>
          <p className="text-base lg:w-[90%] font-medium text-white text-center mx-auto   ">
          Our years of commitment to deliver perfection have resulted in a
          streamlined and evolved Metaverse Development Process.          </p>
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
