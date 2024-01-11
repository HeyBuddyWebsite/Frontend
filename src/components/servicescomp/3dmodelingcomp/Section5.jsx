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
        Customised 3D Model Development for Every Project and 
        Every Business
        </h1>
        <p className="text-xl lg:text-2xl">
        Hey Buddy, offering tailored solutions for your projects. Our versatile 3D development team perfectly adapts outcomes to your domains and brings your vision to life with precision and creativity.
        </p>
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
                        <h3 className="heading">AR/VR Experiences</h3>
                        <p>Our expert 3D modellers enrich the visual appeal of your AR/VR projects, creating deeply immersive environments and characters for a truly interactive journey.</p>
                      
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Animation</h3>
                        <p>Whether for promotional videos, educational content, or entertainment, our skilled 3D artists craft visually impressive animations, breathing life into your narratives.</p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Computer-generated imagery (CGI)</h3>
                        <p>Our CGI-specialist 3D modellers bring stunning visuals for your films, advertisements, and various digital media to add gravity to your storytelling and brand communication.</p>
                        
                        <span className="circle bg-gray-800"></span>
                    </li>
                    <li>
                        <h3 className="heading">Product Visualisation</h3>
                        <p>Our 3D development team delivers lifelike visualisations for you to showcase products with ultra-realistic visuals and gain an edge in your marketing efforts for unbeatable success.</p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>

                    <li>
                        <h3 className="heading">Product Animation</h3>
                        <p>Our team synergizes with yours to produce compelling product animations and dynamic product demonstrations that impactfully showcase your product’s functionality and features.</p>
                       
                        <span className="circle bg-gray-800"></span>
                    </li>

                    <li>
                        <h3 className="heading">Gaming</h3>
                        <p>Our game-crazy 3D modellers develop characters, environments, assets and other customised 3D models for Unity, Unreal or your specific game engine.</p>
                       
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
