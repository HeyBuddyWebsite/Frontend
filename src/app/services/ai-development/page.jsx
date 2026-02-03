"use client";
import "../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/aidevelopmentcomp/Section10";
import Pagenation from "@/components/servicescomp/aidevelopmentcomp/Section8";
import Mixsection from "@/components/servicescomp/aidevelopmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/aidevelopmentcomp/Section5";
import Motionslide from "@/components/servicescomp/aidevelopmentcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaCode, FaPlug, FaShieldAlt, FaLock, FaChartLine, FaTools, FaUsers, FaLightbulb, FaBuilding, FaChartBar, FaUserTie, FaGlobe, FaRocket, FaDollarSign } from "react-icons/fa";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";
import Herosection from "@/components/servicescomp/aidevelopmentcomp/Section1";
import Bottomclient from "@/components/servicescomp/aidevelopmentcomp/Section9";
import Section7 from "@/components/servicescomp/aidevelopmentcomp/Section7";
import ContactModal from "@/components/ContactModal/ContactModal";
import CTASection from "@/components/servicescomp/aidevelopmentcomp/CTASection";

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
    window.addEventListener("scroll", handleScroll);
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

  // Core AI Software Development Capabilities
  const checklist1 = [
    { title: "Machine Learning (ML)" },
    { title: "Deep Learning (DL)" },
    { title: "Neural Networks (ANN, CNN, RNN)" },
    { title: "Retrieval-Augmented Generation (RAG)" },
    { title: "Computer Vision" },
    { title: "Speech Recognition & Synthesis" },
  ];

  const Text2 = [
    {
      heading: "Our AI Development Solutions",
      subtext: "We build more than just software; we build intelligent systems. Our custom AI solutions are designed to address the specific operational/strategic needs of your business.",
    },
  ];

  const List2 = [
    {
      id: "1",
      heading: "Intelligent Process Automation (IPA)",
      icon: FaCode,
      para: "We combine RPA with AI to automate complex workflows that involve decision-making, such as invoice processing, claims handling, and employee onboarding.",
    },
    {
      id: "2",
      heading: "Predictive Analytics Engines",
      icon: FaChartLine,
      para: "Our developers build custom models that analyze historical data to forecast trends, demand, and risks, helping you plan with confidence.",
    },
    {
      id: "3",
      heading: "Recommendation Systems",
      icon: FaUsers,
      para: "We create personalized recommendation engines for e-commerce, media, and content platforms to boost engagement and cross-selling.",
    },
    {
      id: "4",
      heading: "Voice & Speech AI Solutions",
      icon: FaPlug,
      para: "From custom voice assistants to automated transcription services, we build voice-enabled applications that enhance accessibility and user experience.",
    },
    {
      id: "5",
      heading: "Fraud Detection & Security AI",
      icon: FaShieldAlt,
      para: "We implement real-time anomaly detection systems that flag suspicious activities in finance, retail, and cybersecurity operations.",
    },
    {
      id: "6",
      heading: "Knowledge Graph Development",
      icon: FaChartBar,
      para: "We organize your unstructured data into connected knowledge graphs, making information retrieval faster and more contextual for your teams.",
    },
    {
      id: "7",
      heading: "AI-Powered Search (Semantic Search)",
      icon: FaGlobe,
      para: "Upgrade your internal or customer-facing search with NLP that understands intent, not just keywords, delivering accurate results instantly.",
    },
    {
      id: "8",
      heading: "Sentiment Analysis Tools",
      icon: FaUserTie,
      para: "Monitor brand health and customer feedback in real-time with AI tools that analyze emotions in social media posts, reviews, and support tickets.",
    },
    {
      id: "9",
      heading: "Visual Inspection Systems",
      icon: FaLightbulb,
      para: "For manufacturing and logistics, we build computer vision systems that automatically detect defects and track inventory quality on the line.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      className="lg:w-[80%] mx-auto relative"
    >
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <Herosection handlecontactusModal={handlecontactusModal} />
      </div>

      <div className="py-10">
        <Motionslide />
      </div>

      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev6.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
        <Gridsection listData={List2} textData={Text2} />
      </div>

      {/* Core Capabilities Section */}
      <div className="bg-gradient-to-r from-[#FFA7A7] via-[#A30CB5] to-[#0B0DF4] shadow-xl rounded-3xl py-8 my-8 mx-auto w-[90%] lg:w-[80%]">
        <h2 className="text-center text-3xl font-bold text-white mb-8 px-4">Our Core AI Software Development Capabilities</h2>
        <div className="lg:mx-auto lg:text-center w-full justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-6 gap-6">
            {checklist1.map((item, index) => (
              <div key={index} className="flex items-center text-white space-x-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm">
                <span className="flex items-center justify-center w-8 h-8 rounded-full shrink-0 bg-white/20">
                  <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97]" />
                </span>
                <h3 className="font-medium text-lg leading-tight">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev8.png')] py-3 bg-no-repeat lg:bg-cover">
        <Pagenation handlecontactusModal={handlecontactusModal} />
      </div>

      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev4.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
        <Mixsection />
      </div>

      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev5.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
        <Timelinecomp />
      </div>

      <div className="text-white lg:py-16 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev9.png')] py-3 bg-no-repeat lg:bg-cover">
        <Bottomclient />
      </div>

      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev10.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
        <Faqsection />
      </div>

      <CTASection handlecontactusModal={handlecontactusModal} />

      <ContactModal
        contactusModal={contactusModal}
        handlecontactusModal={handlecontactusModal}
        handleClose={handleClose}
        handleModalClose={handleModalClose}
      />
    </motion.div>
  );
};

export default page;
