"use client";
import "../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/digitalmarketingcomp/Section10";
import Mixsection from "@/components/servicescomp/digitalmarketingcomp/Section4";
import Timelinecomp from "@/components/servicescomp/digitalmarketingcomp/Section5";
import Motionslide from "@/components/servicescomp/digitalmarketingcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/digitalmarketingcomp/Section1";
import Bottomclient from "@/components/servicescomp/digitalmarketingcomp/Section9";
import Section7 from "@/components/servicescomp/digitalmarketingcomp/Section7";
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
      title: "SEO & SEM",
    },
    {
      title: "AI Led Social Media Marketing",
    },
    {
      title: "AI & CGI Ad production",
    },
    {
      title: "Email & Automation",
    },
    {
      title: "Influencer & Affiliate Marketing",
    },
    {
      title: "Performance Marketing & Analytics",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "100+",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "clients trust Hey Buddy for their digital marketing needs",
    },
    {
      id: "2",
      heading: "100M+",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "views generated across all digital marketing campaigns",
    },
    {
      id: "3",
      heading: "75%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "average increase in lead generation for our clients",
    },
    {
      id: "4",
      heading: "60%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "improvement in conversion rates with our strategies",
    },
    {
      id: "5",
      heading: "90%",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "client satisfaction rate across all digital marketing projects",
    },
    {
      id: "6",
      heading: "3x",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "faster campaign execution compared to industry standards",
    },
  ];

  const Text1 = [
    {
      heading:
        "Power Your Growth with Data-Driven Digital Marketing Solutions",
      subtext:
        "At Hey Buddy, we combine creativity and technology to craft strategies that deliver results. Whether it's SEO, paid ads, or full-scale brand campaigns, our team helps businesses achieve visibility, leads, and conversions with precision.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "High-Impact Campaigns, Faster Results",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "Our experienced marketers deliver high-performing SEO and PPC campaigns quickly and cost-effectively, ensuring your brand stays ahead.",
    },
    {
      id: "2",
      heading: "Minimize Risk with Proven Expertise",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "Leverage our seasoned team to navigate complex platforms, mitigate ad spend risks, and achieve measurable ROI with confidence.",
    },
    {
      id: "3",
      heading: "Technology-First Marketing",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "Stay competitive with cutting-edge tools, AI-driven analytics, and advanced tracking for smarter decisions and improved performance.",
    },
    {
      id: "4",
      heading: "Access to Specialized Talent",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "Work with strategists, content creators, and growth experts who bring niche skills across social media, search, content, and automation.",
    },
    {
      id: "5",
      heading: "Focus on Core Business",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Let us handle your digital presence and lead generation while your in-house team focuses on scaling and operations.",
    },
    {
      id: "6",
      heading: "Scalable Solutions",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "From startups to enterprises, we design campaigns that grow with your business needs and adapt to changing market dynamics.",
    },
  ];

  const Text2 = [
    {
      heading: "Hey Buddy: Your One-Stop Digital Marketing Partner",
      subtext:
        "No more juggling multiple vendors—Hey Buddy provides end-to-end digital marketing solutions, from SEO and SEM to social media, content, and automation, delivering measurable growth for every project.",
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
