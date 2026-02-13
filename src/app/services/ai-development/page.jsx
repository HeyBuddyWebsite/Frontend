"use client";
import "../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Faqsection from "@/components/servicescomp/aidevelopmentcomp/Section10";
import Pagenation from "@/components/servicescomp/aidevelopmentcomp/Section8";
import Mixsection from "@/components/servicescomp/aidevelopmentcomp/Section4";
import Timelinecomp from "@/components/servicescomp/aidevelopmentcomp/Section5";
import Motionslide from "@/components/servicescomp/aidevelopmentcomp/Section3";
import AISolutionsSlider from "@/components/servicescomp/aidevelopmentcomp/AISolutionsSlider";
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
  // Core AI Software Development Capabilities
  const checklist1 = [
    {
      title: "Machine Learning",
      description: "We build machine learning models that learn from data and improve over time. Our focus is on creating models that are accurate and practical to use in real business environments."
    },
    {
      title: "Deep Learning",
      description: "For complex problems and large datasets, we use deep learning techniques that can identify patterns traditional systems often miss. These models are designed to perform well even at scale."
    },
    {
      title: "Neural Networks",
      description: "Our AI development company designs and trains neural networks tailored to specific use cases. From basic architectures to more advanced models, we ensure they are efficient, stable, and production-ready."
    },
    {
      title: "Retrieval-Augmented Generation (RAG)",
      description: "We build RAG systems that connect AI models with your internal data and knowledge sources. This allows AI to generate accurate responses grounded in real information."
    },
    {
      title: "Computer Vision",
      description: "As a leading AI development company, we build AI systems that can analyze images and videos to extract meaningful insights. These solutions are used for detection and visual monitoring across industries."
    },
    {
      title: "Speech Recognition",
      description: "We develop speech-based AI systems that accurately convert spoken language into text and structured data. Our solutions work across different languages and real-world conditions."
    },
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

  // Home page section background images (same as homepage)
  const homeBg = {
    section3: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763456534207_m7f7vl.png?x-id=PutObject')",
    section4: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763456828718_1hm0vv.png?x-id=PutObject')",
    section4b: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457149053_17i5il.png?x-id=PutObject')",
    section5: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457720237_mv8kvj.png?x-id=PutObject')",
    section6: "url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/bg%20(1).png')",
    section6b: "url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse7.png')",
    section7: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457996300_v7h13t.png?x-id=PutObject')",
    section8: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763458037132_139ti0.png?x-id=PutObject')",
    section9: "url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')",
    successStories: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763963076417_a4hfqr.png?x-id=PutObject')",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.3 }}
      className="w-full relative"
    >
      <div className="relative isolate px-6 pt-20 lg:px-8 lg:w-[80%] mx-auto">
        <Herosection handlecontactusModal={handlecontactusModal} />
      </div>

      {/* AI Software Development: Decade Rare Opportunity - before Our Artificial Intelligence Development Services */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section5,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "300px",
            paddingTop: "clamp(10px, 1.5vw, 15px)",
            paddingBottom: "clamp(10px, 1.5vw, 15px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <AIOpportunitySection />
          </div>
        </div>
      </div>

      <div className="py-8">
        <Motionslide />
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section5,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(300px, 30vw, 500px)",
            paddingTop: "clamp(20px, 2vw, 30px)",
            paddingBottom: "clamp(20px, 2vw, 30px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <AISolutionsSlider listData={List2} textData={Text2} />
          </div>
        </div>
      </div>

      {/* Success Stories - above Core Capabilities */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.successStories,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(300px, 30vw, 500px)",
            paddingTop: "clamp(20px, 2vw, 30px)",
            paddingBottom: "clamp(20px, 2vw, 30px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <AISuccessStoriesSection />
          </div>
        </div>
      </div>

      {/* Core Capabilities Section */}
      {/* Core Capabilities Section */}
      <div className="py-12 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black -z-10" />

        <div className="lg:w-[80%] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white">
              Our Core AI Software <br className="hidden md:block" />
              Development Capabilities
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              The expertise of our AI development services span the full AI landscape, allowing us to choose the right approach for each business challenge rather than forcing a single solution.
            </p>
          </div>
        </div>

        <div className="lg:w-[80%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist1.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white group-hover:bg-blue-500 transition-all duration-300 shrink-0">
                    <AiFillCheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="ml-4 font-semibold text-xl text-white group-hover:text-blue-100 transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leading AI Development Company For More than One Reason */}
      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section6,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(400px, 45vw, 700px)",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <AIReasonsSection />
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section8,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(400px, 45vw, 700px)",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Pagenation handlecontactusModal={handlecontactusModal} />
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section4,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(400px, 45vw, 700px)",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Mixsection />
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section6b,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(400px, 45vw, 700px)",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Timelinecomp />
          </div>
        </div>
      </div>

      <div className="bg-black w-full text-white">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section7,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(400px, 45vw, 700px)",
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Bottomclient />
          </div>
        </div>
      </div>

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section9,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            minHeight: "clamp(400px, 45vw, 700px)",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Faqsection />
          </div>
        </div>
      </div>

      <div className="lg:w-[80%] mx-auto">
        <CTASection handlecontactusModal={handlecontactusModal} />
      </div>

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
