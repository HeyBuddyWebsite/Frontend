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
      heading: "Custom Product Planning and Inventory Management Software",
      // imgurl: "",
      para: "Our client, a leading manufacturing company, faced inefficiencies in production planning and inventory management. We developed a custom software to optimize production schedules and automate inventory tracking for our client.The results were astonishing. The manufacturing company witnessed a significant 25% reduction in production costs while improving the overall efficiency of the supply chain.",
    },
    {
      id: "2",
      heading:
        "Custom Patient Data Management Software for Leading Healthcare Providers",
      // imgurl: "",
      para: "One of our healthcare provider clients needed a secure and compliant patient data management system to ensure better confidentiality and security and to streamline their operations. We developed the required software solution with robust security features, ensuring HIPAA compliance. With our solution, we successfully achieved the desired goals of improved data security, streamlined workflows, and consequently enhanced patient care.",
    },
    {
      id: "3",
      heading: "Feature-packed, User-friendly E-commerce Solution",
      // imgurl: "",
      para: "An e-commerce startup sought a scalable platform to handle rapid growth and a diverse product range. We developed a customized e-commerce solution with advanced features and a user-friendly interface for efficient catalog management and order processing. The e-commerce startup achieved a 40% increase in sales and successfully expanded its product offerings.",
    },
    // {
    //   id: "4",
    //   heading: "Client Collaboration and Iterations",
    //   // imgurl: "",
    //   para: "We actively and continually seek your insights and feedback to bring about the project's evolution and ensure your satisfaction with the result.",
    // },
    // {
    //   id: "5",
    //   heading: "Quality Assurance",
    //   // imgurl: "",
    //   para: "Our custom software undergoes meticulous quality checks to ensure that the software meets the highest standards and is a polished and error-free solution.",
    // },
    // {
    //   id: "6",
    //   heading: "Timely Delivery",
    //   // imgurl: "",
    //   para: "Committed to punctuality, we adhere to strict timelines with our reliable development process and professionalism as the cornerstones of your project's success.",
    // },
  ];

  const Text = [
    {
      heading: "Success Stories With Hey Buddy Customer Software Solutions",
      subtext:
        "Hey Buddy is a leading custom software development company. We have multiple success stories to share. After all, our custom software solutions have helped clients across industries and scales.",
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
