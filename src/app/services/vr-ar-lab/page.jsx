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

    // Core Capabilities
    const checklist1 = [
        { title: "Immersive Learning" },
        { title: "Virtual Prototyping" },
        { title: "Remote Collaboration" },
        { title: "Risk-Free Training" },
        { title: "Spatial Computing" },
        { title: "Gamified Education" },
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
            para: "Overlay digital information onto the physical world. Perfect for engineering and biology, allowing students to visualize internal structures and mechanisms.",
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
            heading: "Virtual Field Trips",
            icon: FaRocket,
            para: "Take students to historical sites, space, or inside the human body without leaving the classroom. A cost-effective way to providing global exposure.",
        },
        {
            id: "7",
            heading: "Skills Development Simulations",
            icon: FaTools,
            para: "Safe environments for vocational training. Practice welding, carpentry, or hazardous chemical mixing without any physical risk.",
        },
        {
            id: "8",
            heading: "Remote Collaboration Tools",
            icon: FaUsers,
            para: "Enable multi-user sessions where students and teachers can interact in the same virtual space, regardless of their physical location.",
        },
        {
            id: "9",
            heading: "Safety Training Modules",
            icon: FaShieldAlt,
            para: "Mandatory safety drills simulated in VR. Fire safety, earthquake response, and industrial hazard training with zero real-world danger.",
        },
    ];

    // Home page section background images (using same as AI page for consistency)
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
            className="lg:w-[80%] mx-auto relative"
        >
            <div className="relative isolate px-6 pt-20 lg:px-8">
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
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(40px, 5vw, 80px)",
                        paddingBottom: "clamp(40px, 5vw, 80px)",
                    }}
                >
                    <OpportunitySection />
                </div>
            </div>

            <div className="py-10">
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
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(40px, 5vw, 80px)",
                        paddingBottom: "clamp(40px, 5vw, 80px)",
                    }}
                >
                    <Gridsection listData={List2} textData={Text2} />
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
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(40px, 5vw, 80px)",
                        paddingBottom: "clamp(40px, 5vw, 80px)",
                    }}
                >
                    <SuccessStoriesSection />
                </div>
            </div>

            <div className="bg-gradient-to-r from-[#FFA7A7] via-[#A30CB5] to-[#0B0DF4] shadow-xl rounded-3xl py-8 my-8 mx-auto w-[90%] lg:w-[80%]">
                <h2 className="text-center text-3xl font-bold text-white mb-8 px-4">Our Core VR/AR Lab Capabilities</h2>
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

            <div className="bg-black w-full">
                <div
                    className="bg-no-repeat bg-center w-full"
                    style={{
                        backgroundImage: homeBg.section6,
                        backgroundSize: "cover",
                        backgroundPosition: "top center",
                        backgroundRepeat: "no-repeat",
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(40px, 5vw, 80px)",
                        paddingBottom: "clamp(40px, 5vw, 80px)",
                    }}
                >
                    <ReasonsSection />
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
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(40px, 5vw, 80px)",
                        paddingBottom: "clamp(40px, 5vw, 80px)",
                    }}
                >
                    <VRARTechStack handlecontactusModal={handlecontactusModal} />
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
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(40px, 5vw, 80px)",
                        paddingBottom: "clamp(40px, 5vw, 80px)",
                    }}
                >
                    <MixSection />
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
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(40px, 5vw, 80px)",
                        paddingBottom: "clamp(40px, 5vw, 80px)",
                    }}
                >
                    <TimelineSection />
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
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(60px, 6vw, 100px)",
                        paddingBottom: "clamp(60px, 6vw, 100px)",
                    }}
                >
                    <ClientsSection />
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
                        minHeight: "clamp(500px, 55vw, 900px)",
                        paddingTop: "clamp(40px, 5vw, 80px)",
                        paddingBottom: "clamp(40px, 5vw, 80px)",
                    }}
                >
                    <FAQSection />
                </div>
            </div>

            <VRARCTASection handlecontactusModal={handlecontactusModal} />

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
