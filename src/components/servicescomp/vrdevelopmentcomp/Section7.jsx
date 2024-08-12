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
      heading: "Innovative Virtual Real Estate Tours with Complete Customisation",
      // imgurl: "",
      para: "Hey Buddy developed a cutting-edge virtual real estate tour application that exceeded client expectations. The immersive VR experience helped our client offer high-quality, completely customizable property tours. This not only enhanced their ability to market and sell properties remotely but also enhanced their name in the Real Estate market.",
    },
    {
      id: "2",
      heading: "Sophisticated VR Employee Training Solution in Manufacturing",
      // imgurl: "",
      para: "Staying true to its reputation, Hey Buddy successfully developed a VR training program for a manufacturing client. Our expert VR development team delivered high-quality immersive training solutions while ensuring timely delivery. The result helped the client in multiple ways including efficient onboarding, better employee engagement and learning outcomes, and high productivity.",
    },
    {
      id: "3",
      heading: "Virtual Reality in Healthcare: Medical Training ",
      // imgurl: "",
      para: "We developed an intricate training solution for a medical institution. It offered a digital environment with a realistic and interactive training experience. Additionally, we supplied them with post-launch support and maintenance services for seamless ongoing functionality. As always, we met the client's expectations by demonstrating our in-depth understanding of the medical industry, for a reliable, industry-specific VR training solution.",
    },
  ];

  const Text = [
    {
      heading:
        "Success Stories with Hey Buddy Custom Virtual Reality Development",
      subtext:
        "Hey Buddy is renowned for consistently delivering superior-quality VR solutions well within the stipulated time. Here are some of the many success stories where our custom VR development services worked wonders for the clients.",
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
