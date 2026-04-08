"use client";
import "../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaCode, FaPlug, FaShieldAlt, FaLock, FaChartLine, FaTools, FaUsers, FaLightbulb, FaBuilding, FaChartBar, FaUserTie, FaGlobe, FaRocket, FaDollarSign, FaVrCardboard, FaCube, FaGamepad } from "react-icons/fa";
import { useAnimation } from "framer-motion";
import { motion } from "framer-motion";

import HeroSection from "@/components/servicescomp/vrarlab/HeroSection";
import OpportunitySection from "@/components/servicescomp/vrarlab/OpportunitySection";
import ReasonsSection from "@/components/servicescomp/vrarlab/ReasonsSection";
import SuccessStoriesSection from "@/components/servicescomp/vrarlab/SuccessStoriesSection";
import VRARMotionslide from "@/components/servicescomp/vrarlab/VRARMotionslide";
import VRARTechStack from "@/components/servicescomp/vrarlab/VRARTechStack";
import MixSection from "@/components/servicescomp/vrarlab/MixSection";
import TimelineSection from "@/components/servicescomp/vrarlab/TimelineSection";
import ClientsSection from "@/components/servicescomp/vrarlab/ClientsSection";
import FAQSection from "@/components/servicescomp/vrarlab/FAQSection";
import VRARCTASection from "@/components/servicescomp/vrarlab/VRARCTASection";
import IndustriesSection from "@/components/servicescomp/vrarlab/IndustriesSection";
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
            title: "Immersive Learning",
            description: "Transforming standard classrooms into limitless exploration hubs where students can physically interact with 1:1 scale digital subjects."
        },
        {
            title: "Virtual Prototyping",
            description: "Building a bridge between conceptual design and physical reality through high-fidelity VR engineering environments and spatial testing."
        },
        {
            title: "Remote Collaboration",
            description: "Connecting experts and students across the globe in a shared virtual campus, enabling seamless multi-user collaboration in real-time."
        },
        {
            title: "Risk-Free Training",
            description: "Providing a safe haven for high-stakes vocational training, allowing users to master hazardous procedures without real-world danger."
        },
        {
            title: "Spatial Computing",
            description: "Leveraging the next generation of computing to place digital information exactly where it matters in the physical environment through AR."
        },
        {
            title: "Data-Driven Insights",
            description: "Capturing detailed user engagement and learning analytics inside the virtual environment to continuously optimize educational outcomes."
        },
    ];

    const Text2 = [
        {
            heading: "Our VR/AR Lab Solutions",
            subtext: "We build immersive ecosystems that solve real educational and training challenges. Each solution is aligned with curriculum goals and industrial requirements.",
        },
    ];

    const List2 = [
        {
            id: "1",
            heading: "Virtual Reality Labs",
            icon: FaVrCardboard,
            para: "Fully equipped VR labs with high-end headsets and content management systems. Enable students to explore complex subjects like anatomy and astronomy in 3D.",
        },
        {
            id: "2",
            heading: "Augmented Reality Labs",
            icon: FaCube,
            para: "Overlay digital information onto the physical world. Perfect for engineering and biology, allowing students to visualize internal structures.",
        },
        {
            id: "3",
            heading: "Mixed Reality Labs",
            icon: FaGlobe,
            para: "The best of both worlds. Interact with digital objects while staying aware of the physical environment. Ideal for advanced collaborative projects.",
        },
        {
            id: "4",
            heading: "Custom Content Development",
            icon: FaCode,
            para: "We create bespoke VR/AR modules tailored to your specific curriculum or training needs. From K-12 subjects to specialized vocational training.",
        },
        {
            id: "5",
            heading: "Gamified Learning Modules",
            icon: FaGamepad,
            para: "Engage students with game-based learning mechanics. Turn lessons into quests and assessments into challenges to boost retention.",
        },
        {
            id: "6",
            heading: "Skills Development Simulations",
            icon: FaTools,
            para: "Safe environments for vocational training. Practice welding, carpentry, or hazardous chemical mixing without any physical risk.",
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
                <VRARMotionslide />
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
                            Our Core VR/AR Lab <br className="hidden md:block" />
                            Competencies & Capabilities
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl">
                            Our immersive lab infrastructure is designed for high-fidelity spatial learning, combining state-of-the-art headsets with grade-certified educational content.
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

            <div className="bg-black w-full pb-12">
                <IndustriesSection />
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
                        <VRARTechStack handlecontactusModal={handlecontactusModal} />
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
                <VRARCTASection handlecontactusModal={handlecontactusModal} />
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
