"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/gamedevelopmentcomp/Section10";
import Pagenation from "@/components/servicescomp/gamedevelopmentcomp/Section8";
import Mixsection from "@/components/servicescomp/gamedevelopmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/gamedevelopmentcomp/Section5";
import Motionslide from "@/components/servicescomp/gamedevelopmentcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/gamedevelopmentcomp/Section1";
import Bottomclient from "@/components/servicescomp/gamedevelopmentcomp/Section9";
import Section7 from "@/components/servicescomp/gamedevelopmentcomp/Section7";
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
      title: "Tablet/Mobile Game Development",
    },
    {
      title: "Metaverse Game Development",
    },
    {
      title: "Immersive AR/VR Game Development",
    },
    {
      title: "Unreal and Unity Game Development",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      heading: "Increased User Retention:",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "Games have an inherent ability to keep users hooked and invested. By incorporating addictive gameplay mechanics, your business can boost user retention, ensuring that your audience keeps coming back for more, and strengthening brand loyalty over time.",
    },
    {
      id: "3",
      heading: "Best Way for Brand Awareness",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "Games is a powerful tool to aware, educate and train your audience on your products. Create immersive experiences that communicate your brand message to your customers and inform them about your products or services. Thus, merging entertainment and marketing for the best possible outcomes. ",
    },
    {
      id: "4",
      heading: "Data-Driven Insights:",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "Games generate a wealth of data and information about player behaviour and preferences. Leverage it to gain deep audience insights, refine your marketing strategies, and make data-driven impactful decisions that get you the best business outcomes.",
    },
    {
      id: "5",
      heading: "Cross-Platform Reach:",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "Reach your audience across various platforms and devices. From mobile and tablets to PCs, consoles, or VR, be present where your audience is and enjoy a broader reach. Games ensures that your message is accessible to a diverse and widespread audience.",
    },
    {
      id: "6",
      heading: "Innovative Marketing Opportunities:",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Games offer innovative marketing avenues by integrating your brand seamlessly into Games storylines and environments. Utilize in-game advertising, or create branded mini-games for hyper-interactive campaigns, to enhance brand visibility and brand recall.",
    },
  ];

  const Text1 = [
    {
      heading:
        "Power up Your Brand and Press Start for Profit with Game Development -  Your Gamified Success Awaits!",
      subtext:
        "Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Expertise Across Platform",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "We offer a comprehensive suite of services across all Games platforms. We develop games for mobile, offer Unreal and Unity game development, AR/VR game development, and Metaverse game development.",
    },
    {
      id: "2",
      heading: "Cutting-Edge AI Solutions",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "We elevate your games with AI-powered techniques and algorithms such as PCG, Natural Language Processing (NLP), Machine Learning (ML), etc. Our AI expertise ensures your games are intelligent and outsmart competition.",
    },
    {
      id: "3",
      heading: "Creative Innovation",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "We don't just build games; we craft experiences as our team of gamer-first developers thrive on creative innovation. Expect unique storylines, dynamically engaging gameplay mechanics, and visually stunning environments to captivate your Games audience and set your brand apart.",
    },
    {
      id: "4",
      heading: "Collaborative Partnership",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "Believing in collaborative partnerships, we work closely with you. We ensure to completely understand your brand, goals, and it’s vision. And move forward with full might to realise the same. This is what differentiates our game development services.",
    },
    {
      id: "5",
      heading: "Commitment to Quality",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Quality is non-negotiable at Hey Buddy. Our rigorous and perfected-over-year development process ensures that every aspect of your game meets the highest standards. Be it graphics, gameplay, performance or experience, we prioritise excellence and your satisfaction.",
    },
    {
      id: "6",
      heading: "Transparent Communication",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "By working with clients across industries and scales, we understood the gravity of transparent communication. Be assured to experience transparent communication, timely updates, and a responsive team to keep you informed and involved.",
    },
  ];

  const Text2 = [
    {
      heading:
        "Score Big Wins With Hey Buddy: Your Trusted  Game Development Company",
      subtext:
        "Hey Buddy is a renowned name in the game development space. We have an experienced development team who know what works best for your business.",
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
          <div className=" relative">
            <Image
              loading="lazy"
              width={450}
              height={450}
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev5.png"
              alt="bg image"
              className="absolute bottom-0"
              loading="lazy"
            />
            <Timelinecomp />
          </div>

          {/* --------------------------Section-6--grid-reuse---------------------------------- */}
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
            <Pagenation handlecontactusModal={handlecontactusModal} />
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

export default Page;
