"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/web3developmentcom/Section10";
import Pagenation from "@/components/servicescomp/web3developmentcom/Section8";
import Mixsection from "@/components/servicescomp/web3developmentcom/Section4";
import Timelinecomp from "@/components/servicescomp/web3developmentcom/Section5";
import Motionslide from "@/components/servicescomp/web3developmentcom/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/web3developmentcom/Section1";
import Bottomclient from "@/components/servicescomp/web3developmentcom/Section9";
import Section7 from "@/components/servicescomp/web3developmentcom/Section7";
import { FaXmark } from "react-icons/fa6";
import ContactUs from "@/components/ContactUs";
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
      title: "Blockchain Consulting",
    },
    {
      title: "Smart Contract Development",
    },
    {
      title: "Security Audits and Testing",
    },
    {
      title: "Decentralized Application (DApp) Development",
    },
    {
      title: "Tokenomics and Cryptoeconomics Consulting ",
    },
    {
      title: "Consensus Mechanism Implementation",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Decentralization and Trust",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
      para: "Experience the power of trustless rapid transactions and interactions with zero interference from intermediaries and ensure transparency in your business. ",
    },
    {
      id: "2",
      heading: "New High-paying Revenue Models",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
      para: "Tap into lucrative revenue streams and opportunities. Explore tokenization, decentralized finance (DeFi), non-fungible tokens (NFTs), and much more.",
    },
    {
      id: "3",
      heading: "Safeguard Your Records",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
      para: "Establish complete security with blockchain's cryptographic principles and ensure tamper-proof, auditable records and your peace of mind.",
    },
    {
      id: "4",
      heading: "Build Loyal Community",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
      para: "Engage your community through decentralized applications (dApp), foster user participation and collaboration, and build a loyal user base.",
    },
    {
      id: "5",
      heading: "Cost Efficiency",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
      para: "Cut down unnecessary costs that come with intermediaries, middlemen, and other vulnerable operational processes by leveraging Web 3.0 technologies.",
    },
    {
      id: "6",
      heading: "Experience Seamless Interoperability",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
      para: "Integrate seamlessly with any blockchain network and traditional systems and let the opportunities come from every direction.",
    },
  ];

  const Text1 = [
    {
      heading: "Choose Web 3 Development For Unique and Powerful Features",
      subtext:
        "With innovative and powerful Web 3 development solution we help you gain a competitive edge and global accessibility.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "Blockchain Expertise",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
      para: "We have a team of expert blockchain developers capable of working on every blockchain component on any platform including Ethereum, Stellar, EOS, Solana, and others.",
    },
    {
      id: "2",
      heading: "We Ensure Security",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
      para: "We implement robust security measures and follow best practices to ensure the safety of your dApps, blockchain networks, secure smart contract development, and auditing.",
    },
    {
      id: "3",
      heading: "Project Management",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
      para: "Our efficient project management skills achieve timely delivery of milestones every time. Moreover, our emphasis on collaboration ensures you get the perfect outcome.",
    },
    {
      id: "4",
      heading: "Innovation",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
      para: "We stay updated on the latest blockchain developments to incorporate the most innovative solutions into your projects. Thus, we ensure you stand out from your competitors.",
    },
    {
      id: "5",
      heading: "Scalability",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "Our solutions grow with your business and serve ever-evolving customer demands. We strategize for blockchain network scalability challenges for efficient and scalable solutions.",
    },
    {
      id: "6",
      heading: "Proven Track Record",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
      para: "With a proven track record, we've demonstrated success in delivering top-notch blockchain solutions with expertise spanning Ethereum, Stellar, EOS, Solana, and more.",
    },
  ];

  const Text2 = [
    {
      heading: "Why We Are the Right Web3 Development Partner For You",
      subtext:
        "Hey Buddy gives you multiple compelling reasons for being the right Web3 development firm for you.",
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
