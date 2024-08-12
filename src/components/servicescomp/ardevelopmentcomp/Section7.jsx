"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const Section7 = () => {
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

  const List = [
    {
      id: "1",
      heading: "Immersive Retail Experience with AR Tryon for Fashion Enthusiasts",
     
      para: "Our client, a fashion retailers, aimed to enhance the shopping experience of their online shoppers. They knew the power of immersive AR experience. Hence, they wanted to offer their customers AR-based virtual try-on experiences for their clothing collection. So before making a purchase, users get a better idea of the product and make faster purchases. AR tryons are also known to reduce returns by up to 40% and increase customer satisfaction. Hey Buddy designed a custom AR application for the fashion retailer. The application allowed users to visualize how different clothing would look on them in real-time. The AR fitting room enhanced user engagement and increased conversion rates by 20%.",
    },
    {
      id: "2",
      heading: "Interactive Educational Tools for Faster and Better Learning          ",
      
      para: "Our client, an educational learning solution provider wanted to revolutionize its educational materials by incorporating augmented reality. They wanted to improve the learning experience and achieve better outcomes. Along with that, they sought interactive and engaging tools to make complex subjects more accessible to students. Hey Buddy developed AR-based educational modules that brought textbooks to life. And the results were astonishing. With interactive learning, students could explore 3D models of complex concepts. This led to a 25% increase in engagement and a better understanding of the same. As well, students could conduct virtual experiments, and explore the concepts from different perspectives for a complete understanding",
    },
    {
      id: "3",
      heading: "AR-Enabled Gamified Marketing Campaign for Cosmetics Products ",
     
      para: "Nothing can beat gamified software solutions when it comes to marketing. One of our clients wanted to use this potential of AR experiences and run a memorable marketing campaign to promote their latest cosmetic product launch. They collaborated with multiple AR development companies but could not get the desired outcome. Hey Buddy devised an amazing gamified AR-driven marketing campaign. Users can scan product images in print advertisements and instantly access interactive games where they can apply and try different cosmetic products, try different looks, including some inspired by popular fantasies. As expected, the campaign generated huge buzz with a phenomenal 40% increase in traffic and unmatched positive social media engagement.",
    },
  ];

  const Text = [
    {
      heading:
        "Success Stories with Hey Buddy AR Software Solutions",
      subtext:
        "Hey Buddy maintains leadership amongst AR development companies. All credit to its team of high-skilled AR professionals, streamlined development process, and client-centric approach. We have delivered various disruptive AR development solutions that helped our clients reach new success levels.            ",
    },
  ];
  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="pt-[44px] lg:pt-[100px] text-white mb-8 md:mb-12 lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(5).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto">
        <div>
          {Text.map((section, index) => (
            <div className="mb-[44px] lg:mb-[100px]" key={index}>
              <h1 className=" lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl">
                {section.heading}
              </h1>
              <p className="text-base font-medium mx-auto text-center lg:w-[90%]">{section.subtext}</p>
            </div>
          ))}
        </div>
        <div class="   grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
          {List.map((section, index) => (
            <figure key={section.id} style={{borderRadius:"24px",background: "#FFFFFF1A"}} class="flex flex-col  p-4 lg:p-6    h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-red-600 hover:bg-opacity-40">
              <blockquote class="  text-gray-400">
                {/* <Image loading="lazy" 
                src={section.imgurl}
                width={450}
                height={450}
                className="h-[32px] w-[32px] "
                /> */}

                <h3
                  style={{ color: "white" }}
                  class="py-4 text-xl font-bold  text-gray-500 "
                >
                  {section.heading}
                </h3>

                <p style={{ color: "white" }} className="text-left text-base font-medium">
                  {section.para}
                </p>
              </blockquote>
            </figure>
          ))}
        </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Section7;
