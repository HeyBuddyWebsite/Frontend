"use client";
import "../../../styles/Font.css";
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

// Standardized Components
import MetaverseOpportunitySection from "@/components/servicescomp/metaversecom/MetaverseOpportunitySection";
import MetaverseReasonsSection from "@/components/servicescomp/metaversecom/MetaverseReasonsSection";
import MetaverseSuccessStoriesSection from "@/components/servicescomp/metaversecom/MetaverseSuccessStoriesSection";
import MetaverseCTASection from "@/components/servicescomp/metaversecom/MetaverseCTASection";

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

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
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
      title: "3D Environment Development",
      description: "Creation of hyper-realistic, persistent virtual worlds and architectural spaces tailored for enterprise or retail."
    },
    {
      title: "Avatar & Character Systems",
      description: "Developing fully-customizable 3D avatars with spatial audio and real-time social interaction features."
    },
    {
      title: "Digital Twin Implementation",
      description: "Building 1:1 industrial digital twins for manufacturing, urban planning, and high-fidelity simulations."
    },
    {
      title: "Metaverse Real Estate & NFTs",
      description: "Facilitating virtual land development, ownership protocols, and NFT-integrated digital asset marketplaces."
    },
    {
      title: "Social & Immersive Interactivity",
      description: "Implementing real-time collaboration tools, interactive events, and social layers within virtual environments."
    },
    {
      title: "Metaverse Strategy & Consulting",
      description: "Providing roadmaps, economic modeling, and technology assessment for successful Metaverse entry."
    },
  ];

  const homeBg = {
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
            <MetaverseOpportunitySection />
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
            paddingTop: "clamp(20px, 2vw, 30px)",
            paddingBottom: "clamp(20px, 2vw, 30px)",
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
            backgroundImage: homeBg.successStories,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(20px, 2vw, 30px)",
            paddingBottom: "clamp(20px, 2vw, 30px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <MetaverseSuccessStoriesSection />
          </div>
        </div>
      </div>

      <div className="py-12 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black -z-10" />

        <div className="lg:w-[80%] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white">
              Core Metaverse & Immersive <br className="hidden md:block" />
              Development Capabilities
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              From high-fidelity virtual architecture to complex digital twin simulations, we have the technical prowess to build the Metaverse.
            </p>
          </div>
        </div>

        <div className="lg:w-[80%] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {checklist1.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:bg-white/10"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/10 text-white group-hover:bg-purple-500 transition-all duration-300 shrink-0">
                    <AiFillCheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="ml-4 font-semibold text-xl text-white group-hover:text-purple-100 transition-colors">
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

      <div className="bg-black w-full">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section6,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <MetaverseReasonsSection />
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
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <Pagenation />
          </div>
        </div>
      </div>

      <div className="bg-black w-full text-white">
        <div
          className="bg-no-repeat bg-center w-full"
          style={{
            backgroundImage: homeBg.section6b,
            backgroundSize: "cover",
            backgroundPosition: "top center",
            backgroundRepeat: "no-repeat",
            paddingTop: "clamp(30px, 4vw, 60px)",
            paddingBottom: "clamp(30px, 4vw, 60px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6 relative">
            <Image
              loading="lazy"
              width={450}
              height={450}
              src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev5.png"
              alt="bg image"
              className="absolute bottom-0 right-0 opacity-20 pointer-events-none"
            />
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
        <MetaverseCTASection handlecontactusModal={handlecontactusModal} />
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

export default Page;
