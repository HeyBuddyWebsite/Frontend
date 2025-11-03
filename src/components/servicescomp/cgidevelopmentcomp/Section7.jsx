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
        "Immersive and Realistic Visualization for Expedited Approval          ",
      // imgurl: "",
      para: "One of Hey Buddy's clients, a leading architecture firm, wanted to elevate their project presentations. We developed realistic 3D architectural visualizations aligned with their business needs. The outcomes impressed clients and helped them expedite project approvals. Our refined practices for seamless collaboration helped in bridging gaps and fulfilling clients’ expectations to transform concepts into realities.          ",
    },
    {
      id: "2",
      heading: "Interactive Product Launch for Technology Start-up          ",
      // imgurl: "",
      para: "A tech startup based in the United States partnered with Hey Buddy for their product launch. Our CGI development services brought their product to life. We created interactive and engaging visuals and made sure that the final CGI representation perfectly aligned with the brand's vision.  The launch was successful and it captivated audiences, making the launch memorable and resonating for a long time to come and enhancing the product's market presence.",
    },
    {
      id: "3",
      heading:
        "Better Learning Outcome with CGI Animation for Educational Content          ",
      // imgurl: "",
      para: "An educational content provider collaborated with Hey Buddy to enhance their digital learning materials. Our CGI development team crafted dynamic CGI animations that significantly improved engagement in the education content, breaking the monotony.  Our client-centric approach flawlessly integrated the client’s feedback and ensured that the outcome perfectly matched the original plan and achieved educational objectives. The results were very pleasing. Apart from high engagement, we significantly improved the learning outcome, higher retention, users’ confidence, and great overall positive learning experiences.",
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
      heading: "Success Story with Hey Buddy CGI Services",
      subtext:
        "Hey Buddy has offered CGI solutions to companies across the board. From flourishing startups to established businesses, we have contributed our bit to the ease of business for everyone.",
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
