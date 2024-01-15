"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import './Timelinecomp.css'
import '../../../styles/Timelinecomp.css';
import { motion, useAnimation } from "framer-motion";


const Timelinecomp = () => {

  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
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
    { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
    { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
    { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
    { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
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
        Our Technological Expertise is Reflected in Our Trendsetting Tech Stack

        </h1>
        {/* <p className="text-xl lg:text-2xl">
          Over years of experience as a game app development company, we have
          refined, streamlined and aligned our game development process to serve
          you better.
        </p> */}
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
                        <h3 className="heading">Technologies</h3>
                        <p>
                          {/* <ul>
                            <li>Cloud Computing</li>
                            <li>Internet of Things (IoT)</li>
                            <li>Artificial Intelligence (AI)</li>
                            <li>Blockchain</li>
                          </ul> */}

                              Cloud Computing,
                              Internet of Things (IoT),
                              Artificial Intelligence (AI),
                              Augmented Reality (AR) / Virtual Reality (VR),
                              Blockchain

                        </p>
                      
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Tools</h3>
                        <p>Git,
                            Jira,
                            Docker,
                            Jenkins,
                            Selenium,
                         </p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Platforms</h3>
                        <p>AWS (Amazon Web Services),
                            Microsoft Azure,
                            Google Cloud Platform,
                            Heroku,
                            IBM Cloud,
                            </p>
                     
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Programming Languages</h3>
                        <p>
                        Java,
                        Python,
                        JavaScript,
                        C#,
                        Ruby,

                        </p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Frameworks</h3>
                        <p>
                        Django,
                        Ruby on Rails,
                        Angular,
                        React,
                        Laravel,


                        </p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Databases</h3>
                        <p>
                        MySQL,
                        PostgreSQL,
                        MongoDB,
                        Oracle,
                        Microsoft SQL Server,


                        </p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Development Methodologies</h3>
                        <p>
                        Agile,
                        Scrum,
                        DevOps,
                        Waterfall,
                        Kanban,


                        </p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Mobile Development</h3>
                        <p>
                        Flutter,
                        React Native,
                        Swift,
                        Kotlin,
                        Xamarin,


                        </p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>
                </ul>
            </div>
        </div>

       
    </div>
          </div>




          <div className="h-[50vh] w-full  px-16">
          <Image 
                // src={}
                w={700}
                h={700}
                className="h-full w-full rounded-lg  bg-gray-800"
                />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
