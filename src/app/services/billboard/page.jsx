"use client";

import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/billboardcom/Section10";
import Pagenation from "@/components/servicescomp/billboardcom/Section8";
import Mixsection from "@/components/servicescomp/billboardcom/Section4";
import Timelinecomp from "@/components/servicescomp/billboardcom/Section5";
import Motionslide from "@/components/servicescomp/billboardcom/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/billboardcom/Section1";
import Bottomclient from "@/components/servicescomp/billboardcom/Section9";
import Section7 from "@/components/servicescomp/billboardcom/Section7";
import ContactUs from "@/components/ContactUs";
import { FaXmark } from "react-icons/fa6";
import ContactModal from "@/components/ContactModal/ContactModal";

const page = () => {
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

  // const checklist1 = [
  //   {
  //     title: "3D Asset",
  //   },
  //   {
  //     title: "3D Characters",
  //   },
  //   {
  //     title: "3D Environments",
  //   },
  //   {
  //     title: "MetaHuman Creations",
  //   },
  //   {
  //     title: "3D Hard Surface ",
  //   },
  //   {
  //     title: "3D Animation",
  //   },
  // ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Hyper-Engagement",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "3D corner billboards capture viewer attention like no other advertising. Thus, your message stands out in high-traffic areas and busy intersections.",
    },
    {
      id: "2",
      heading: "Long-lasting Memorability",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "By capturing maximum senses, 3D illusion billboards leave a lasting impression on your audiences.",
    },
    {
      id: "3",
      heading: "Wide Impact",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "The uniqueness and novelty of Anamorphic 3D billboards develop an emotional connection with your customers.",
    },
    {
      id: "4",
      heading: "Innovation",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "These amazing 3D billboards break the mold, showcasing your brand at the forefront of innovation and unique capabilities.",
    },
    {
      id: "5",
      heading: "Clear Communication",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "The dynamic and eye-catching three-dimensional visuals not only catch eyeballs but also communicate your brand message loud and clear.",
    },
    {
      id: "6",
      heading: "Higher Conversions",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "The powerful 3D billboard qualities lead to developer connection on a deeper cognitive level with the audience. Result: higher conversions.",
    },
  ];

  const Text1 = [
    {
      heading: "Why your next campaign should be 3D Out of Home Advertising?",
      subtext:
        "If you want to lead the market, stand out from competitors and be the top choice of your competitor, you need to be the first mover. 3D outdoor advertising is making a huge buzz with every single ad run on it. Make sure, you don’t get left out.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Creative Vision Realisation",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "With our vast experience and expert team we have developed precision realizing your vision and turning it into a visually stunning anamorphic 3D advertisement.",
    },
    {
      id: "2",
      heading: "Impactful Branding",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "Having worked with brands across industries, we achieve brand representation with a lasting impact and a clear, resonating message that stands out.",
    },
    {
      id: "3",
      heading: "Precision in Execution",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "We assure flawless execution from concept to installation, with utmost precision and attention to detail. Just the way you wanted it.",
    },
    {
      id: "4",
      heading: "Expert Guidance",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "We have a 3D curved screen expert who provides deep insight that leads to a sophisticated outcome needed to catch and hold attention.",
    },
    {
      id: "5",
      heading: "Measurable Impact",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "We help you sharpen your campaign and measure success with tangible results. We craft 3D billboard advertisements for your high brand visibility and engagement.",
    },
    {
      id: "6",
      heading: "Transparent Communication",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "Right from the start, we keep you informed every step of the way. Our transparent communication keeps you in the loop for a collaborative and smooth process.",
    },
  ];

  const Text2 = [
    {
      heading: "Hey Buddy top 3D billboard company in India, the USA, and UAE ",
      subtext:
        "Hey Buddy puts your business objective at the forefront and makes sure that your next OOH 3D Billboard campaign attains its full potential.",
    },
  ];

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

          {/* <div
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
          </div> */}

          {/* -------------------------grid-reuse------------------------------------- */}

          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev2.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List1} textData={Text1} />
          </div>

          {/* ------------------------Section-3-------------------------------------- */}
          <div>
            <Motionslide />
          </div>

          {/* ----------------------------Section-4---------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev4.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Mixsection />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev5.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Timelinecomp />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev6.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List2} textData={Text2} />
          </div>

          {/* ----------------------------Section7---------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev7.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            {/* <Gridsection listData={List3} textData={Text3} /> */}
            <Section7 />
          </div>

          {/* ------------------------section-8-------------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev8.png')] py-8 bg-no-repeat lg:bg-cover ">
            <Pagenation />
          </div>

          {/* -----------------------Section-9--------------------------------------- */}
          <div className="text-white lg:py-16 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev9.png')] py-8 bg-no-repeat lg:bg-cover">
            <Bottomclient />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev10.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Faqsection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
