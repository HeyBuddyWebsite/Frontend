"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/ardevelopmentcomp/Section10";
import Pagenation from "@/components/servicescomp/ardevelopmentcomp/Section8";
import Mixsection from "@/components/servicescomp/ardevelopmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/ardevelopmentcomp/Section5";
import Motionslide from "@/components/servicescomp/ardevelopmentcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/ardevelopmentcomp/Section1";
import Bottomclient from "@/components/servicescomp/ardevelopmentcomp/Section9";
import Section7 from "@/components/servicescomp/ardevelopmentcomp/Section7";
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

  const checklist1 = [
    {
      title: "AR application Development",
    },
    {
      title: "AR Design and Prototypes",
    },
    {
      title: "AR Games",
    },
    {
      title: "AR Marketing and Advertising",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Expertise in Cutting-Edge AR Technologies",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "Benefit from our seasoned team of AR experts. Their expertise in the latest AR technologies brings your desired high-quality results.",
    },
    {
      id: "2",
      heading: "Proven Track Record with Diverse AR Projects",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "We have delivered AR projects of varying scales for a variety of clients. This included projects for budding startups to Fortune listers.",
    },
    {
      id: "3",
      heading: "Innovation and Creativity at the Core",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "With Hey Buddy, expect nothing less than innovation and creativity for your AR project. Our team goes up and beyond to infuse uniqueness into your project.",
    },
    {
      id: "4",
      heading: "Tailored Solutions Aligned with Your Goals",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "We understand that your business is unique, and so are your project and its requirements. And that is precisely why our customized AR solutions are here.",
    },
    {
      id: "5",
      heading: "Seamless Integration with Existing Systems",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "Want to include AR functionality but hesitant? Experience a smooth transition with our AR applications. We offer seamless integration with full compatibility and interoperability.",
    },
    {
      id: "6",
      heading: "Scalability and Future-Proofing",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Get scalable AR software solutions and future-proof your investments. Our AR applications adapt to your growing business needs for longevity and relevance.",
    },
  ];

  // const Text1 = [
  //   {
  //     heading:
  //       "Immerse Your Audience in Great Visuals with Our AR Software Solutionss",
  //     subtext:
  //       "At Hey Buddy, we pride ourselves on exceeding client expectations. With our comprehensive suite of Augmented Reality (AR) development services, we easily meet your project requirements. Here are the benefits and features of our AR development services, reflecting our commitment to excellence. ",
  //   },
  // ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "2",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "3",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "4",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "5",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
      id: "6",
      heading: "Enhanced Brand Engagement",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
  ];

  // const Text2 = [
  //   {
  //     heading:
  //       "Score Big Wins With Hey Buddy: Your Trusted  Game Development Company",
  //     subtext:
  //       "Hey Buddy is a renowned name in the game development space. We have an experienced development team who know what works best for your business.",
  //   },
  // ];

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

          {/* <div >
            <Gridsection listData={List1}  />
          </div> */}

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
          {/* <div >
            <Gridsection listData={List2} />
          </div> */}

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

export default page;
