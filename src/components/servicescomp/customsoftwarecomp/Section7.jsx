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

    const List = [
        {
          id: "1",
          heading: "Understanding Requirements",
          // imgurl: "",
          para: "We start with deep diving into project goals and your expectations. The practice of clear communication starts right here as align our strategies with your vision",
        },
        {
          id: "2",
          heading: "Planning and Strategy",
          // imgurl: "",
          para: "We transform concepts into a detailed plan, delineating project scope, timelines, and milestones. It sets the project’s future roadmap and ensures transparency.",
        },
        {
          id: "3",
          heading: "Development and Implementation",
          // imgurl: "",
          para: "We use the latest tools and technologies to deliver high-quality custom software solutions that meet your functional requirements and exceed visual expectations.",
        },
        {
          id: "4",
          heading: "Client Collaboration and Iterations",
          // imgurl: "",
          para: "We actively and continually seek your insights and feedback to bring about the project's evolution and ensure your satisfaction with the result.",
        },
        {
          id: "5",
          heading: "Quality Assurance",
          // imgurl: "",
          para: "Our custom software undergoes meticulous quality checks to ensure that the software meets the highest standards and is a polished and error-free solution.",
        },
        {
          id: "6",
          heading: "Timely Delivery",
          // imgurl: "",
          para: "Committed to punctuality, we adhere to strict timelines with our reliable development process and professionalism as the cornerstones of your project's success.",
        },
      ];
    
      const Text = [
        {
          heading:
            "Our Refined Custom Software Development Process",
          subtext:
            "Project after project, we've developed a sophisticated and meticulous process for our custom software development. We infuse innovation and precision into your projects while recognizing the significance of transparency and collaboration. our process reflects a commitment to clarity and excellence.",
        },
      ];
  return (
    <div>

<motion.div 
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    className="lg:py-4 text-white">

        <div >
        {Text.map((section, index) => (
          <div className="py-12" key={index}>
            <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">{section.heading}</h1>
            <p className="text-xl lg:text-2xl">{section.subtext}</p>
          </div>
        ))}
        </div>
      <div  class="p-2 lg:py-4  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {List.map((section, index) => (
          <figure class="flex flex-col  p-2 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40">
            <blockquote class="  text-gray-400">

                {/* <Image 
                src={section.imgurl}
                width={450}
                height={450}
                className="h-[32px] w-[32px] "
                /> */}


              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
              >
                {section.heading}
              </h3>

              <p style={{ color: "white" }} className="text-left">
                {section.para}
              </p>
            </blockquote>
          </figure>
        ))}
      </div>
    </motion.div>

    </div>
  )
}

export default Section7