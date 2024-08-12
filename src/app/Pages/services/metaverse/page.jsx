"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/metaversecom/Section10";
import Pagenation from "@/components/servicescomp/metaversecom/Section8";
import Mixsection from "@/components/servicescomp/metaversecom/Section4";
import Timelinecomp from "@/components/servicescomp/metaversecom/Section5";
import Motionslide from "@/components/servicescomp/metaversecom/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/metaversecom/Section1";
import Bottomclient from "@/components/servicescomp/metaversecom/Section9";
import Section7 from "@/components/servicescomp/metaversecom/Section7";
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
      title: "Metaverse/NFT Marketplace",
    },
    {
      title: "Metaverse Games",
    },
    {
      title: "Digital Twin",
    },
    {
      title: "Metaverse Avatar",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Reach Audience Worldwide",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "Have a borderless presence. Engage a huge audience around the world.       ",
    },
    {
      id: "2",
      heading: "Build Strong Brand Connections",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "Get higher engagement with immersive and interactive experiences.      ",
    },
    {
      id: "3",
      heading: "Innovative Marketing Opportunities",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "Add a unique flavor to your brand promotion with Metaverse ",
    },
    {
      id: "4",
      heading: "Facilitates Seamless Collaboration",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "Ensure better collaboration amongst your teams in virtual environments      ",
    },
    {
      id: "5",
      heading: "New Revenue Streams",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "Offer novel virtual offerings that attract users and build new markets.",
    },
    {
      id: "6",
      heading: "Make Targeted Decision",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Gather detailed data on user interactions and draw deep insights.      ",
    },
    {
      id: "7",
      heading: "Achieve High Productivity",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Offer immersive hands-on training experience for better outcomes      ",
    },
    {
      id: "8",
      heading: "Save to Invest      ",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Save costs in travel, physical infrastructure, event hosting, and more.      ",
    },
    {
      id: "9",
      heading: "Limitless Innovation      ",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Utilise Metaverse possibilities for a competitive edge and market leadership.      ",
    },
    {
      id: "10",
      heading: "Extended Brand Presence",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Go beyond existing platforms with a futuristic Metaverse touchpoint.      ",
    },
    {
      id: "11",
      heading: "Build Your Community",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Create a sense of belonging and loyalty among your audience.      ",
    },
    {
      id: "12",
      heading: "Future-Proof your Business      ",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Stay relevant in a rapidly evolving digital landscape.     ",
    },
  ];

  const Text1 = [
    {
      heading: "Why your next project should be in the Metaverse?",
      subtext:
        "Entering into the metaverse will bring your business unprecedented possibilities.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Contact Us",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "Fill out the NDA-protected contact form. Book a calendar and schedule a meeting.",
    },
    {
      id: "2",
      heading: "Consult",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "Get a dedicated session with our Metaverse expert to get clarity on any Metaverse aspect.",
    },
    {
      id: "3",
      heading: "Get a Cost Estimate",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "Our experts will then share a project proposal with a stipulated budget and timeline.",
    },
    // {
    //   id: "4",
    //   heading: "Project Onboarded",
    //   imgurl:
    //     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
    //   para: "Hey Buddy experts take over your project",
    // },
    // {
    //   id: "5",
    //   heading: "Commitment to Quality",
    //   imgurl:
    //     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
    //   para: "Quality is non-negotiable at Hey Buddy. Our rigorous and perfected-over-year development process ensures that every aspect of your game meets the highest standards. Be it graphics, gameplay, performance or experience, we prioritise excellence and your satisfaction.",
    // },
    // {
    //   id: "6",
    //   heading: "Transparent Communication",
    //   imgurl:
    //     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
    //   para: "By working with clients across industries and scales, we understood the gravity of transparent communication. Be assured to experience transparent communication, timely updates, and a responsive team to keep you informed and involved.",
    // },
  ];

  const Text2 = [
    {
      heading: "Get Started Today: Our Metaverse Project Onboarding Process",
      // subtext:
      //   "Hey Buddy is a renowned name in the game development space. We have an experienced development team who know what works best for your business.",
    },
  ];

  // ----------------------------------------------------------------

  return (
    <div className="w-[100%]  mx-auto relative">
      {/* contact us modal */}
      <ContactModal
        handleClose={handleClose}
        contactusModal={contactusModal}
        handleModalClose={handleModalClose}
      />
      <div>
        {/* --------------------Section-1 ------------------------------------------ */}
        <div className="relative isolate   pt-20   ">
          <Herosection handlecontactusModal={handlecontactusModal} />

          <div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" py-4 lg:py-6 px-2 lg:px-0 w-[90%] lg:w-[80%]   mx-auto mb-8 md:mb-12 lg:mb-[150px]"
            style={{borderRadius:"24px",background: "linear-gradient(180deg, #3F8AE2 0%, #2362AB 100%)",border: "1px solid #FFFFFF",boxShadow: "0px 8px 10px -6px #0000001A",
              
            }}
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mx-auto lg:w-[80%] mx-auto gap-x-4 gap-y-8 ">
                {checklist1.map((section, index) => (
                  <div key={index} className="  flex items-center justify-start gap-2 text-[#FFFFFF]  " >
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                      {/* &#10004; */}
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="font-semibold text-base">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>

          {/* -------------------------grid-reuse------------------------------------- */}

          <div >
            <Gridsection listData={List1} textData={Text1} />
          </div>

          {/* ------------------------Section-3-------------------------------------- */}
          <div>
            <Motionslide />
          </div>

          {/* ----------------------------Section-4---------------------------------- */}
          <div >
            <Mixsection />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div >
            <Timelinecomp />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          <div >
            <Gridsection listData={List2} textData={Text2} />
          </div>

          {/* ----------------------------Section7---------------------------------- */}
          <div>
            {/* <Gridsection listData={List3} textData={Text3} /> */}
            <Section7 />
          </div>

          {/* ------------------------section-8-------------------------------------- */}
          <div>
            <Pagenation handlecontactusModal={handlecontactusModal} />
          </div>

          {/* -----------------------Section-9--------------------------------------- */}
          <div>
            <Bottomclient />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div>
            <Faqsection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
