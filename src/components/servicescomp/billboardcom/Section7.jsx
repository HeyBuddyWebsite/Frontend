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
      heading: "Reaching More Eyes 3d Advertising Billboard",
      // imgurl: "",
      para: "One of our clients wanted to enhance their improve their brand awareness. Hey Buddy helped them build a presence and boost brand visibility in a bustling urban area. We designed 3D corner billboards strategically placed at street intersections that maximized exposure and reached more passersby. This resulted in Increased engagement with a noticeable uptick in brand recognition and customer inquiries.",
    },
    {
      id: "2",
      heading: "Striking Visuals, Lasting Impressions",
      // imgurl: "",
      para: "For our client with a presence in the FMCG sector, we developed 3D billboards to make their brand significantly more memorable and be a top-of-the-mind recall when the users are in the aisle. Our team crafted 3D illusion billboards, leveraging the optical tricks of anamorphic advertising for visually stunning and long-lasting effects. The unique visual appeal left an indelible mark on viewers, giving our client significantly high memorability and recall.",
    },
    {
      id: "3",
      heading: "Revamping Brand Image with Innovating Impressions",
      // imgurl: "",
      para: "One of our clients in the BFSI space wants to improve its image as a technologically advanced brand. We developed an amazing 3d cgi billboard to project the brand’s efforts toward technology integration. The innovative approach not only garnered attention but positioned our client as a trendsetter in their industry for utilizing 3D billboards to reach out to their customer.",
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
        "Success Stories with Hey Buddy 3D Billboards Development Service",
      // subtext:
      //   "Project after project, we have refined our 3D development process to deliver creativity and innovation to your project. We understand the importance of a transparent and collaborative workflow, which is reflected in our process.",
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
        <div class="p-2 lg:py-4  grid mx-auto  justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
          {List.map((section, index) => (
            <figure class="flex flex-col  p-2 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-red-600 hover:bg-opacity-40">
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
