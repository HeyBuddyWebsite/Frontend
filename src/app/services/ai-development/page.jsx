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
import AIOpportunitySection from "@/components/servicescomp/aidevelopmentcomp/AIOpportunitySection";
import AIReasonsSection from "@/components/servicescomp/aidevelopmentcomp/AIReasonsSection";
import AISuccessStoriesSection from "@/components/servicescomp/aidevelopmentcomp/AISuccessStoriesSection";
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
      subtext: "We build AI solutions that solve real operational and decision-making challenges. Each solution is designed around your business workflows and growth goals.",
    },
  ];

  const List2 = [
    {
      id: "1",
      heading: "Intelligent Process Automation",
      icon: FaCode,
      para: "We help you automate repetitive and time-consuming business tasks using AI agents. Our AI agents handle tasks end to end while humans stay in control where it matters. Use cases: Data entry, report generation, approvals, ticket handling",
    },
    {
      id: "2",
      heading: "AI-Powered Customer Support",
      icon: FaUsers,
      para: "Our team builds AI support systems that understand customer intent, respond naturally, and know when to hand over to a human. This helps you reduce support load while keeping customer experience intact. Use cases: Customer queries, order tracking, issue resolution, multilingual support",
    },
    {
      id: "3",
      heading: "Predictive Analytics & Business Forecasting",
      icon: FaChartLine,
      para: "Being the best AI development company in India, we use your data to build AI models that predict trends and outcomes. This helps leadership teams make decisions based on signals. Use cases: Demand forecasting, churn prediction, sales projections, risk analysis",
    },
    {
      id: "4",
      heading: "Enterprise Knowledge Intelligence",
      icon: FaChartBar,
      para: "We turn your internal documents, data, and policies into an AI-powered knowledge system. Your teams can ask questions in plain language and get accurate answers instantly. Use cases: Internal Q&A bots, document search, compliance support, onboarding",
    },
    {
      id: "5",
      heading: "Custom AI Agents for Business Operations",
      icon: FaRocket,
      para: "Our engineers develop AI agents that can perform multi-step tasks like research, analysis, and execution. These agents work independently but stay aligned with your approval and control workflows. Use cases: Market research, competitor tracking, workflow execution, monitoring tasks",
    },
    {
      id: "6",
      heading: "Generative AI for Content & Design",
      icon: FaLightbulb,
      para: "Create on-brand content at scale while maintaining quality and control. Our GenAI solutions follow your brand voice and business rules. Use cases: Marketing content, product descriptions, reports, code generation",
    },
    {
      id: "7",
      heading: "AI for Sales & Marketing Intelligence",
      icon: FaUserTie,
      para: "We build custom AI solutions that help sales and marketing teams understand leads, customer behavior, and campaign performance so efforts are focused where they matter most. Use cases: Lead qualification, customer segmentation, campaign optimization",
    },
    {
      id: "8",
      heading: "AI-Driven Data Processing & Insights",
      icon: FaGlobe,
      para: "Being a top AI development company, we automate how your business processes large volumes of data. From documents to logs and reports, our AI systems extract insights without manual effort. Use cases: Invoice processing, document analysis, log monitoring, data enrichment",
    },
    {
      id: "9",
      heading: "Secure, Private AI for Enterprises",
      icon: FaShieldAlt,
      para: "Our AI software development company designs solutions that keep your data private, secure, and compliant. You stay in full control of your models and data. Use cases: Internal AI tools, regulated industries, proprietary model deployments",
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

      {/* AI Software Development: Decade Rare Opportunity - before Our Artificial Intelligence Development Services */}
      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev6.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
        <AIOpportunitySection />
      </div>

      <div className="py-10">
        <Motionslide />
      </div>

      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev6.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
        <Gridsection listData={List2} textData={Text2} />
      </div>

      {/* Success Stories - above Core Capabilities */}
      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev10.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
        <AISuccessStoriesSection />
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

      {/* Leading AI Development Company For More than One Reason */}
      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev4.png')] py-3 bg-no-repeat bg-cover bg-[center_top_0rem]">
        <AIReasonsSection />
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
