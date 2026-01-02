"use client";

import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/cgidevelopmentcomp/Section10";
import Pagenation from "@/components/servicescomp/cgidevelopmentcomp/Section8";
import Mixsection from "@/components/servicescomp/cgidevelopmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/cgidevelopmentcomp/Section5";
import Motionslide from "@/components/servicescomp/cgidevelopmentcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/cgidevelopmentcomp/Section1";
import Bottomclient from "@/components/servicescomp/cgidevelopmentcomp/Section9";
import Section7 from "@/components/servicescomp/cgidevelopmentcomp/Section7";
import { Button } from "@material-tailwind/react";
import ContactUs from "@/components/ContactUs";
import { FaXmark } from "react-icons/fa6";
import ContactModal from "@/components/ContactModal/ContactModal";

const page = () => {
  const [isHovered, setIsHovered] = useState(false);

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
  const textContainerStyle = {
    marginBottom: "10%",
    paddingTop: "7rem",
    // position: "sticky",
    left: "50%",
    // zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "30%",
  };
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
    marginTop: "3rem",
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
      title: "3D Modeling",
    },
    {
      title: "3D Animation",
    },
    {
      title: "Virtual Effects (VFX)",
    },
    {
      title: "Product Visualization",
    },
    // {
    //   title: "3D Hard Surface ",
    // },
    // {
    //   title: "3D Animation",
    // },
  ];

  // --------------------grid section-1----------------------------------
  // const List1 = [
  //   {
  //     id: "1",
  //     heading: "Enhanced Marketing and Advertising",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
  //     para: "Get compelling and visually striking content for marketing and advertising campaigns. Empower your brand's visibility and customer engagement for assured business success.",
  //   },
  //   {
  //     id: "2",
  //     heading: "Visual Realism for Presentations",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
  //     para: "Your presentations were never so impactful. With realistic CGI visuals, achieve high client satisfaction and higher project approvals. Stand out from the crowd and be remembered.",
  //   },
  //   {
  //     id: "3",
  //     heading: "Cost-Effective Prototyping",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
  //     para: "Save a fortune with CGI virtual prototypes before starting with full-fledged physical production. Get a clear visual idea, test in simulation, and move ahead with certainty. ",
  //   },
  //   {
  //     id: "4",
  //     heading: "Efficient Communication of Concepts",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
  //     para: "Establish clear and efficient communication, especially for complex concepts. Make sure your teams, clients, and stakeholders share an understanding of your project vision.",
  //   },
  //   {
  //     id: "5",
  //     heading: "Iterative Design and Feedback",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
  //     para: "Benefit from the flexibility of CGI for iterative design processes and incorporate client feedback with ease. Refine the final product and meet client expectations without missteps.",
  //   },
  //   {
  //     id: "6",
  //     heading: "Time Savings in Production",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
  //     para: "Save time in the production process. Eliminate the need for extensive physical setups or reshoots with CGI's efficiency. Achieve a faster turnaround and meet project timelines. ",
  //   },
  //   {
  //     id: "7",
  //     heading: "Versatility in Creativity",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
  //     para: "Differentiate your business with the creative freedom of CGI. Explore different styles, settings, and visual elements to bring uniqueness and appeal to your final product.",
  //   },
  //   {
  //     id: "8",
  //     heading: "Adaptability to Changes",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
  //     para: "Be agile. Incorporate ongoing modifications in design during the production process. Experience dynamism with CGI's adaptability and meet evolving project requirements.  ",
  //   },
  //   {
  //     id: "9",
  //     heading: "Vast Talent Pool",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
  //     para: "With Hey Buddy’s CGI experts team, you access a diverse talent pool and skillset. We ensure you get the highest quality visuals within a specified timeline and impress your audience. ",
  //   },
  //   {
  //     id: "10",
  //     heading: "Future-Proofing Content",
  //     imgurl:
  //       "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
  //     para: "You can repurpose and reuse CGI assets for future-proofing. We create assets in a format usable for future projects. Therefore, you save resources for future projects.",
  //   },
  // ];

  // const Text1 = [
  //   {
  //     heading:
  //       "Bring Rewarding Business Benefits - Choose CGI technologies and solutions",
  //     subtext:
  //       "With flexible and adaptable CGI solutions, you get the best results for your business while saving your resources.",
  //   },
  // ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Delivering Realism",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "With keen attention to detail, we achieve accurate representation and life-like rendering.",
    },
    {
      id: "2",
      heading: "Timely Delivery",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "We strictly adhere to and respect the given timelines and deliver as per the specified schedule.      ",
    },
    {
      id: "3",
      heading: "Communication and Collaboration",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "We ensure to understand your vision in its entirety, share regular updates, and are open to your feedback and revisions.",
    },
    {
      id: "4",
      heading: "Technical Proficiency",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "We have a team of CGI experts ready to turn your vision into reality with the latest CGI tools and techniques.",
    },
    {
      id: "5",
      heading: "Creativity and Innovation",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "We tirelessly work towards infusing your CGI projects with innovative elements and creativity to make them stand out.      ",
    },
    {
      id: "6",
      heading: "Portfolio and Reputation",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "We have a vast portfolio of experience working with clients in different industries and scales, earning our name in the market.",
    },
    {
      id: "7",
      heading: "Cost-Effectiveness",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "Utilizing techniques like economy of scale, future-proofing, and more, we make sure you get the best outcome for every penny.      ",
    },
    {
      id: "8",
      heading: "Flexibility and Adaptability",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "With our agile operation, we quickly adapt to changes in scope or requirements during the project lifecycle.",
    },
    {
      id: "9",
      heading: "Legal and Ethical Compliance      ",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
      para: "We strictly adhere to legal and ethical standards, especially regarding intellectual property rights and confidentiality.      ",
    },
  ];

  const Text2 = [
    {
      heading: "Why Choose Hey Buddy as Your CGI Development Partner?",
      subtext:
        "Hey Buddy is a leading CGI development company for many reasons. We understand we do it your way, we deliver quality, and we deliver on time.        ",
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

          {/* <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev2.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List1} textData={Text1} />
          </div> */}

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

          {/* cta */}

          <div style={textContainerStyle}>
            <h1 style={{ fontSize: "3rem" }}>
              Your next eye-catching project needs your click on the below
              button.
            </h1>
            <h1 style={{ fontSize: "3rem" }}></h1>
            <Button
              style={buttonHeader}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Start Now
            </Button>
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

          <div style={textContainerStyle}>
            <h1 style={{ fontSize: "3rem" }}>
              Create a real impact in a visually-driven world. Experience the
              power with Hey Buddy CGI services
            </h1>
            <h1 style={{ fontSize: "3rem" }}></h1>
            <Button
              onClick={handlecontactusModal}
              style={buttonHeader}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Connect Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
