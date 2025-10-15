"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/aiadscomp/Section10";
import Mixsection from "@/components/servicescomp/aiadscomp/Section4";
import Timelinecomp from "@/components/servicescomp/aiadscomp/Section5";
import Motionslide from "@/components/servicescomp/aiadscomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/aiadscomp/Section1";
import Bottomclient from "@/components/servicescomp/aiadscomp/Section9";
import Section7 from "@/components/servicescomp/aiadscomp/Section7";
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

  const checklist1 = [
    {
      title: "AI-Powered Video Ads",
    },
    {
      title: "Dynamic Social Media Creatives",
    },
    {
      title: "AI-Generated Ad Copywriting",
    },
    {
      title: "Platform-Specific AI Ad Designs",
    },
    {
      title: "Personalized Generative AI Creatives",
    },
    {
      title: "Automated AI Campaign Optimization",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "85%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "of marketers report improved ROI with AI-powered ad creatives",
    },
    {
      id: "2",
      heading: "67%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "increase in engagement rates with personalized AI ad content",
    },
    {
      id: "3",
      heading: "92%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "of businesses see faster campaign optimization with AI tools",
    },
    {
      id: "4",
      heading: "78%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "reduction in ad production time with AI automation",
    },
    {
      id: "5",
      heading: "64%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "improvement in conversion rates with AI-generated creatives",
    },
    {
      id: "6",
      heading: "89%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "of brands achieve better audience targeting with AI insights",
    },
  ];

  const Text1 = [
    {
      heading:
        "AI Ads Creative Services: Get Ahead with Next-Gen AI Video Ads",
      subtext:
        "Elevate your brand with Hey Buddy—AI advertising specialists delivering high-impact AI ads creative, personalized Facebook and Google ad creatives, and multi-format AI marketing creatives to boost your ROI. Transform your advertising strategy with cutting-edge AI technology that creates, optimizes, and scales your campaigns automatically.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "High-Quality, Faster Turnaround",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "Deliver engaging, platform-ready AI video ads quickly without compromising creativity or quality—perfect for fast-moving D2C brands.",
    },
    {
      id: "2",
      heading: "Data-Driven Ad Creative",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "Leverage AI insights and audience behavior to create video ads that convert—tailored to your brand goals and customer journey.",
    },
    {
      id: "3",
      heading: "Access to Specialized Talent",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "Our AI-powered creative team combines technology and marketing expertise to deliver ads that stand out and drive ROI.",
    },
    {
      id: "4",
      heading: "Platform-Ready & Versatile",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "Ads optimized for social media, eCommerce, and paid campaigns—usable across Instagram, Facebook, YouTube, and more.",
    },
    {
      id: "5",
      heading: "Focus on Brand Storytelling",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "AI-generated videos crafted to highlight your brand's unique voice, product benefits, and customer value proposition.",
    },
    {
      id: "6",
      heading: "Scalable and Cost-Efficient",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "Easily scale your ad production—get multiple creative variations and test rapidly without overspending.",
    },
  ];

  const Text2 = [
    {
      heading: "Hey Buddy: Your One-Stop Destination for All AI Ads Creative Services",
      subtext:
        "Hey Buddy is your trusted partner for comprehensive AI Ads Creative Services. Leveraging advanced generative AI and data-driven insights, we deliver personalized, high-impact ad creatives across platforms like Facebook, Instagram, Google, and LinkedIn. Our expert team crafts dynamic video ads, social media creatives, and optimized ad copy designed to boost engagement, conversions, and ROI.",
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
                      {/* &#10004; */}
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

          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev2.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List1} textData={Text1} />
          </div>

                    {/* ------------------------Section-3-------------------------------------- */}
          <div>
            <Motionslide />
          </div>

          {/* ----------------------------Section-4---------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev4.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Mixsection />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev5.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Timelinecomp />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev6.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List2} textData={Text2} />
          </div>

          {/* ----------------------------Section7---------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev7.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Section7 />
          </div>


          {/* -----------------------Section-9--------------------------------------- */}
          <div className="text-white lg:py-16 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev9.png')] py-3 bg-no-repeat lg:bg-cover">
            <Bottomclient />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev10.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
            <Faqsection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;