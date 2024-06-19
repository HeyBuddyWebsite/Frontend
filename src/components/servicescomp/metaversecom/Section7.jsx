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
      heading:
        "Innovative Metaverse Solution to Train Healthcare Staff in the US",
      // imgurl: "",
      para: "A major healthcare organization in the US sought Hey Buddy's metaverse services to enhance medical training for its staff. We developed a Metaverse platform that simulated medical procedures and emergency scenarios. The immersive experience allowed healthcare professionals to practice in a risk-free virtual environment, improving their skills and decision-making. The healthcare organization reported a significant improvement in staff readiness and performance. We met the client's expectations for innovative training but also contributed to a more prepared and efficient healthcare workforce.",
    },
    {
      id: "2",
      heading: "Engaging Expo in Metaverse for users in UAE",
      // imgurl: "",
      para: "A technology consortium in the UAE wanted to host an expo in Metaverse to showcase the latest tech innovations and foster collaboration within the region. We developed a Metaverse expo platform with interactive booths, live demonstrations, and networking features. The virtual expo received widespread participation from tech enthusiasts, startups, and established companies across the UAE.  It facilitated seamless engagement among visitors, participants, and our client, building connections for long-term growth and collaboration within the UAE's technology sector.",
    },
    {
      id: "3",
      heading:
        "Scalable Indian E-commerce Metaverse Platform with Seamless Integration",
      // imgurl: "",
      para: "A leading e-commerce company in India wanted to explore metaverse integration to enhance its online shopping experience. We extended our expertise to develop a shopping platform in the Metaverse that allowed users to explore products virtually, try on virtual clothing on their avatar, and engage in social shopping experiences.  The platform seamlessly integrated with the existing e-commerce infrastructure and witnessed increased user engagement and boosted online sales. Yet again we served innovative, creative, and scalable metaverse experiences that made our client eclipse the market.",
    },

    // {
    //   id: "4",
    //   heading: "Client Feedback and Revisions",
    //   // imgurl: "",
    //   para: "Staying true to our collaborative approach toward 3D development, we welcome your feedback and suggestions in this step. Accordingly, we make necessary revisions so that your input shapes the final product, guaranteeing satisfaction.",
    // },

    // {
    //   id: "5",
    //   heading: "Quality Assurance",
    //   // imgurl: "",
    //   para: "Before we finally deliver, the resulting 3D models undergo rigorous quality checks to ensure that our 3D models meet your project standards. We deliver polished, error-free 3D assets that meet your project's visual and functional needs.",
    // },

    // {
    //   id: "6",
    //   heading: "Timely Delivery",
    //   // imgurl: "",
    //   para: "With our unwavering commitment, we deliver your 3D assets with high regard to timelines. We ensure this by utilizing our reliable development process and high professionalism, the two most essential ingredients for your project's success.",
    // },
  ];

  const Text = [
    {
      heading:
        "Global Success Stories with Hey Buddy Metaverse Development Solutions",
      subtext:
        "We have served a range of feature-rich, creative, and engaging metaverse solutions for our clients across industries and countries.",
    },
  ];
  return (
    <div>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="lg:py-4 text-white"
      >
        <div>
          {Text.map((section, index) => (
            <div className="py-12" key={index}>
              <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                {section.heading}
              </h1>
              <p className="text-xl lg:text-2xl">{section.subtext}</p>
            </div>
          ))}
        </div>
        <div class="lg:p-2 lg:py-4  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
          {List.map((section, index) => (
            <figure class="flex flex-col  p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-red-600 hover:bg-opacity-40">
              <blockquote class="  text-gray-400">
                {/* <Image loading="lazy" 
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
  );
};

export default Section7;
