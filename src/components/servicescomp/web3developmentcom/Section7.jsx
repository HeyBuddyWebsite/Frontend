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
        "Complete Security for Financial Transaction on DeFi application",
      // imgurl: "",
      para: "We launched a decentralized lending platform for one of our clients in the financial space. This way they earned enormous trust of their customers for using the most secure technologies for their DeFi dApps. This led to higher adoption rate with increased transaction number.",
    },
    {
      id: "2",
      heading: "Interconnected Web 3.0 Games Ecosystems",
      // imgurl: "",
      para: "We developed a Web 3.0 cross-chain Games title. As evident the Games ecosystem integrated multiple blockchain networks this required seamless interoperability among the. This resulted tin users moving across blockchain platform freely and in exponential increase in in-game transactions, hence, greater revenue.",
    },
    {
      id: "3",
      heading: "For top-class Caregiving With Power Healthcre DApp",
      // imgurl: "",
      para: "For a healthcare tech firm, we offered feature-packed DApp development. It helped caregivers monitor patient medical history, streamline appointment schedules, securely communicate with patients, and seamlessly access to lab results. The improved data integrity and increased patients’ trust in their healthcare services.",
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
        "Success Stories Make Us One of the Top Web3 Development Companies",
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
