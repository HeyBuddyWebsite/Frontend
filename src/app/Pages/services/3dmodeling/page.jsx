"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/3dmodelingcomp/Section10";
import Pagenation from "@/components/servicescomp/3dmodelingcomp/Section8";
import Mixsection from "@/components/servicescomp/3dmodelingcomp/Section4";
import Timelinecomp from "@/components/servicescomp/3dmodelingcomp/Section5";
import Motionslide from "@/components/servicescomp/3dmodelingcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/3dmodelingcomp/Section1";
import Bottomclient from "@/components/servicescomp/3dmodelingcomp/Section9";
import Section7 from "@/components/servicescomp/3dmodelingcomp/Section7";
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
      title: "3D Assets",
    },
    {
      title: "3D Characters",
    },
    {
      title: "3D Environments",
    },
    {
      title: "MetaHuman Creations",
    },
    {
      title: "3D Hard Surface ",
    },
    {
      title: "3D Animation",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "High Quality, Faster Turnaround",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "With an experienced team that has worked on various projects, you get high-quality renders at affordable prices and in less time. ",
    },
    {
      id: "2",
      heading: "Mitigate Risk with Experience",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "Let the experienced team share your responsibilities and tackle challenges on your behalf so that you work with complete peace of mind ",
    },
    {
      id: "3",
      heading: "Technological Advancements",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "Expand your capability with the most advanced tools and technologies in the industry. Get customised 3D model development for your projects that set standards.",
    },
    {
      id: "4",
      heading: "Access to Specialized Talent",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "On-board the best talents in the industry for 3D modelling services by expanding your search to the global level.",
    },
    {
      id: "5",
      heading: "Focus on Core Competencies",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "When experts are taking care of your 3D modelling requirement, your in-house team concentrates on core and critical tasks.",
    },
    {
      id: "6",
      heading: "Ease of Scalability",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Scale up or down as per your business requirements with ease. Say goodbye to the hiring and training challenges of additional staff.",
    },
  ];

  const Text1 = [
    {
      heading: "Get 3D Models Your Project Needs and Your Desire",
      subtext:
        "With our large team of experienced 3D modellers, we have a skillset to suit every business. Whether you need Toon (Cel-Shaded) or hyper-realistic 3D models, High-poly or low-poly count we can develop anything and everything exactly the way you want for your project.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Quality by Expert",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "Our dedicated and experienced team of 3D modellers has 200+ members with a variety of experience delivering the industry-leading quality for your projects.",
    },
    {
      id: "2",
      heading: "Timely Deliveries",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "At Hey Buddy, we strictly adhere to your project timelines with our streamlined 3D development process that churns out high-quality results in a shorter time.",
    },
    {
      id: "3",
      heading: "Communication Clarity",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "We understand the criticality of clear communication and keeping you informed. We use the latest project management tool for data-driven and agile decision-making by you.",
    },
    {
      id: "4",
      heading: "Flexible and Cost-Effective Models",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "Choose from a variety of outsourcing models that best suit your project needs. Get the best quality 3D development services at the most reasonable prices.",
    },
    {
      id: "5",
      heading: "Adherence to Specifications",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "We do not just follow your specifications, we integrate them into the process. So that the outcomes automatically align with your specific project needs.",
    },

    {
      id: "6",
      heading: "Portfolio",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "We have a strong portfolio packed with diverse and successful 3D projects that helped our clients fare well in there industry and achieve their business goals.",
    },
  ];

  const Text2 = [
    {
      heading: "Why Choose Hey Buddy",
      subtext:
        "Partner with Hey Buddy if you want quality work from experts. We deliver the best outcome while completely adhering to timelines and ensuring that you get the best ROI every time.",
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

export default page;
