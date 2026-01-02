"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/vrdevelopmentcomp/Section10";
import Pagenation from "@/components/servicescomp/vrdevelopmentcomp/Section8";
import Mixsection from "@/components/servicescomp/vrdevelopmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/vrdevelopmentcomp/Section5";
import Motionslide from "@/components/servicescomp/vrdevelopmentcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/vrdevelopmentcomp/Section1";
import Bottomclient from "@/components/servicescomp/vrdevelopmentcomp/Section9";
import Section7 from "@/components/servicescomp/vrdevelopmentcomp/Section7";
import { FaXmark } from "react-icons/fa6";
import ContactUs from "@/components/ContactUs";
import ContactModal from "@/components/ContactModal/ContactModal";

const Page = () => {
  const [contactusModal, setcontactusModal] = useState(false);

  const handlecontactusModal = () => {
    setcontactusModal(true);
  };
  const handleClose = (e) => {
    if (e.target.id === "sidebar") setcontactusModal(false);
  };
  const handleModalClose = () => {
    setcontactusModal(false);
  };
  const [isHovered, setIsHovered] = useState(false);

  const buttonHeader = {
    border: isHovered ? "0px" : "1px solid white",
    background: isHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: isHovered ? "white" : "white", // Change the text color as needed
    padding: "10px 20px",
    fontSize: "16px",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };

  const controls = useAnimation();
  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the container is in the viewport
    const container = document.getElementById("fade-in-container");
    if (container) {
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const textAnimation = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const textAnimation1 = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5.5, ease: "easeOut" },
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

  const checklist1 = [
    {
      title: "VR Application Development",
    },
    {
      title: "VR Game Development",
    },
    {
      title: "Metaverse VR Development",
    },
    {
      title: "360° Video Production for VR",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Capitalize on Expertise",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "Leverage our extensive experience in VR development. Get the best solution for your specific business and industry needs as our VR experts use cutting-edge technology.",
    },
    {
      id: "2",
      heading: "Achieve Quality in Time ",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "Count on Hey Buddy’s streamlined VR development process for prompt project completion. Get high-quality VR solutions delivered in your timelines with precision.",
    },
    {
      id: "3",
      heading: "Take Control",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "Experience transparent and effective communication with Hey Buddy and command full control. Our dedicated SPOC keeps you informed throughout the development process.",
    },
    {
      id: "4",
      heading: "Be the Trendsetter",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "Surpass industry standards with high-quality Virtual Reality software solutions. Our expert team delivers consistently with industry-leading expertise and a streamlined process.",
    },
    {
      id: "5",
      heading: "Outsmart Competition",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "Capitalize on the power of innovation with Hey Buddy's creative VR solutions. Set your brand apart with a memorable and engaging user experience and high visual quality.",
    },
    {
      id: "6",
      heading: "Lead Your Domain",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "We offer VR development services with an in-depth understanding of your industry. Get bespoke VR experiences aligned perfectly with your unique requirements.",
    },
    {
      id: "7",
      heading: "Stay Agile",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Overcome challenges seamlessly with Hey Buddy's agile methodology. We rapidly adjust strategies to meet evolving project requirements and ensure success.",
    },
    {
      id: "8",
      heading: "Your Investment Yields",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Optimize your returns with Hey Buddy's cost-effective VR development services. We offer competitive pricing structures and zero compromise on quality.",
    },
    {
      id: "9",
      heading: "Stay Confident",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Sail easy with our strong commitment to post-service support and maintenance. We ensure your VR experience remains functional and up-to-date for sustained success.",
    },
  ];

  const Text1 = [
    {
      heading: "Benefits of our Custom Virtual Reality Development Services ",
      // subtext:
      //   "Hey Buddy is renowned for consistently delivering superior-quality VR solutions well within the stipulated time. Here are some of the many success stories where our custom VR development services worked wonders for the clients.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Android VR Development Services",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "We offer comprehensive Android VR development services so you easily reach a wider audience, right from day one.",
    },
    {
      id: "2",
      heading: "iOS VR Development Service",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "Our expert iOS development service helps you reach a high-quality audience of iOS users around the globe.",
    },
    {
      id: "3",
      heading: "Unreal Engine 5 VR Development",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "Get hyper-realistic VR experiences with our development services utilizing Unreal Engine 5.",
    },
    {
      id: "4",
      heading: "Unity VR Development Services",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "With our Unity VR development, we create visually interactive VR experiences for your specific audience.",
    },
    // {
    //   id: "5",
    //   heading: "Enhanced Brand Engagement",
    //   imgurl:
    //     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
    //   para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
    // {
    //   id: "6",
    //   heading: "Enhanced Brand Engagement",
    //   imgurl:
    //     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
    //   para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
  ];

  // const Text2 = [
  //   {
  //     heading:
  //       "Hey Buddy: Power VR Experiences Across Platforms",
  //     subtext:
  //       "We have a large team dedicated to VR development. This helps us possess talents for diverse platforms powered by powerful development frameworks.",
  //   },
  // ];

  // ----------------------------------------------------------------

  return (
    <div className="lg:w-[80%] mx-auto relative">
      {/* contact us modal */}
      <ContactModal
        handleClose={handleClose}
        contactusModal={contactusModal}
        handleModalClose={handleModalClose}
      />

      <div>
        {/* --------------------Section-1 ------------------------------------------ */}
        <div className="relative isolate px-6  pt-20 lg:px-8 ">
          <Herosection handlecontactusModal={handlecontactusModal} />

          <div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" bg-gradient-to-r from-[#24C2F8] to-[#0B0DF4] shadow-xl rounded-3xl py-4 lg:py-6 mt-8 mx-auto"
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-5 lg:gap-x-16">
                {checklist1.map((section, index) => (
                  <div className="px-2 lg:px-16 flex items-center text-[#FFFFFF]  space-x-2.5 rtl:space-x-reverse">
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="font-medium leading-tight">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>

          {/* -------------------------grid-reuse------------------------------------- */}

          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev2.png')] py-4 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List1} textData={Text1} />
          </div>

          {/* ------------------------Section-3-------------------------------------- */}
          <div>
            <Motionslide />
          </div>

          {/* ----------------------------Section-4---------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev4.png')] py-4 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Mixsection />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev5.png')] py-4 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Timelinecomp />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          {/* <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev6.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List2} textData={Text2} />
          </div> */}

          {/* ----------------------------Section7---------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev7.png')] py-4 bg-no-repeat bg-cover bg-[center_top_0rem]">
            {/* <Gridsection listData={List3} textData={Text3} /> */}
            <Section7 />
          </div>

          {/* ------------------------section-8-------------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev8.png')] py-4 bg-no-repeat bg-cover ">
            <Pagenation handlecontactusModal={handlecontactusModal} />
          </div>

          {/* uper section of 9 */}

          {/* -----------------------Section-9--------------------------------------- */}
          <div className="text-white lg:py-16 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev9.png')] py-4 bg-no-repeat bg-cover">
            <Bottomclient />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev10.png')] bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Faqsection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
