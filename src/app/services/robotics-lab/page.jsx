"use client";
import "../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaCode, FaPlug, FaShieldAlt, FaLock, FaChartLine, FaTools, FaUsers, FaLightbulb, FaBuilding, FaChartBar, FaUserTie, FaGlobe, FaRocket, FaDollarSign, FaVrCardboard, FaCube, FaGamepad, FaRobot, FaMicrochip, FaAward } from "react-icons/fa";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

import HeroSection from "@/components/servicescomp/roboticslabcomp/HeroSection";
import OpportunitySection from "@/components/servicescomp/roboticslabcomp/OpportunitySection";
import ReasonsSection from "@/components/servicescomp/roboticslabcomp/ReasonsSection";
import SuccessStoriesSection from "@/components/servicescomp/roboticslabcomp/SuccessStoriesSection";
import RoboticsMotionslide from "@/components/servicescomp/roboticslabcomp/RoboticsMotionslide";
import RoboticsTechStack from "@/components/servicescomp/roboticslabcomp/RoboticsTechStack";
import MixSection from "@/components/servicescomp/roboticslabcomp/MixSection";
import TimelineSection from "@/components/servicescomp/roboticslabcomp/TimelineSection";
import ClientsSection from "@/components/servicescomp/roboticslabcomp/ClientsSection";
import FAQSection from "@/components/servicescomp/roboticslabcomp/FAQSection";
import RoboticsCTASection from "@/components/servicescomp/roboticslabcomp/RoboticsCTASection";
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

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      await controls.start("visible");
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

  // Core Capabilities
  const checklist1 = [
    {
      title: "STEM Learning",
      description: "We provide comprehensive STEM curricula designed to foster critical thinking and practical problem-solving through hands-on robotics projects."
    },
    {
      title: "Coding & Programming",
      description: "Students master multiple languages from visual block-based coding to advanced Python and C++, specifically applied to robotic control and automation."
    },
    {
      title: "Problem Solving",
      description: "Our lab environment encourages students to tackle real-world engineering challenges, developing analytical skills and iterative design thinking."
    },
    {
      title: "Creative Innovation",
      description: "Beyond following instructions, we empower students to design and build their own robotic solutions, fostering a spirit of discovery and invention."
    },
    {
      title: "Technical Skills",
      description: "Mastery of electronics, mechanics, and sensor integration, providing a solid foundation for careers in high-tech industries and research."
    },
    {
      title: "Future Readiness",
      description: "Equipping the next generation with the technical literacy and adaptability required to excel in an increasingly automated and AI-driven world."
    },
  ];

  const Text2 = [
    {
      heading: "Our Robotics Lab Solutions",
      subtext: "We provide comprehensive robotics lab solutions that cater to every stage of education, from early learning to advanced research.",
    },
  ];

  const List2 = [
    {
      id: "1",
      heading: "K-12 Robotics Labs",
      icon: FaRobot,
      para: "Age-appropriate kits and curriculum designed to introduce young students to the basics of mechanics, electronics, and logic.",
    },
    {
      id: "2",
      heading: "Advanced AI & Robotics",
      icon: FaMicrochip,
      para: "High-performance labs for universities featuring industrial arms, humanoids, and AI-driven autonomous systems.",
    },
    {
      id: "3",
      heading: "Coding & IoT Stations",
      icon: FaCode,
      para: "Dedicated stations for programming and Internet of Things (IoT) projects, bridging the gap between software and hardware.",
    },
    {
      id: "4",
      heading: "Drone & Aerial Robotics",
      icon: FaRocket,
      para: "Specialized zones for designing, building, and piloting drones, understanding aerodynamics and flight control.",
    },
    {
      id: "5",
      heading: "Maker Spaces",
      icon: FaTools,
      para: "Collaborative environments equipped with 3D printers, laser cutters, and hand tools for prototyping and invention.",
    },
    {
      id: "6",
      heading: "Competition Training",
      icon: FaAward,
      para: "Focused training modules and arenas to prepare school teams for national and international robotics competitions.",
    },
  ];

  // Home page section background images
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
        <HeroSection handlecontactusModal={handlecontactusModal} />
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
            <OpportunitySection />
          </div>
        </div>
      </div>

      <div className="py-8">
        <RoboticsMotionslide />
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
            <Gridsection listData={List2} textData={Text2} />
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
            minHeight: "clamp(300px, 30vw, 500px)",
            paddingTop: "clamp(20px, 2vw, 30px)",
            paddingBottom: "clamp(20px, 2vw, 30px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <SuccessStoriesSection />
          </div>
        </div>
      </div>

      {/* Core Capabilities Section - Standardized AI Style */}
      <div className="py-12 w-full relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black -z-10" />

        <div className="lg:w-[80%] mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white">
              Our Core Robotics <br className="hidden md:block" />
              Competencies & Capabilities
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              Our robotics lab infrastructure is built around future-ready technologies, combining high-end hardware with deep educational expertise.
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
            <ReasonsSection />
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
            <RoboticsTechStack handlecontactusModal={handlecontactusModal} />
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
            <MixSection />
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
            <TimelineSection />
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
            paddingTop: "clamp(60px, 6vw, 100px)",
            paddingBottom: "clamp(60px, 6vw, 100px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <ClientsSection />
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
            paddingTop: "clamp(40px, 5vw, 80px)",
            paddingBottom: "clamp(40px, 5vw, 80px)",
          }}
        >
          <div className="lg:w-[80%] mx-auto px-6">
            <FAQSection />
          </div>
        </div>
      </div>

      <div className="lg:w-[80%] mx-auto">
        <RoboticsCTASection handlecontactusModal={handlecontactusModal} />
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
