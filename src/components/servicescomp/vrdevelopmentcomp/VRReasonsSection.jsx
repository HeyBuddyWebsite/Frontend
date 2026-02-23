"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaFileAlt,
    FaCogs,
    FaMapMarkerAlt,
    FaShieldAlt,
    FaExpandArrowsAlt,
    FaPlug,
    FaHeadset,
    FaUsers,
    FaLightbulb,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaFileAlt,
        title: "Established VR Track Record",
        description:
            "We have a history of delivering complex VR environments across gaming, healthcare, and corporate training sectors.",
    },
    {
        icon: FaCogs,
        title: "High-End Technical Prowess",
        description:
            "Our developers are experts in Unreal Engine, Unity, and specialized VR hardware integrations for superior performance.",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Bespoke VR Experiences",
        description:
            "Every project is customized to meet your unique needs, whether it's for high-fidelity simulation or accessible mobile VR.",
    },
    {
        icon: FaShieldAlt,
        title: "Security & Confidentiality",
        description:
            "We prioritize data security, especially for enterprise training and healthcare simulations handling sensitive information.",
    },
    {
        icon: FaExpandArrowsAlt,
        title: "Cross-Platform Capability",
        description:
            "We design for Quest, HTC Vive, Pico, and PCVR platforms, ensuring your VR experience reaches your target audience.",
    },
    {
        icon: FaPlug,
        title: "Modern Tech Integration",
        description:
            "We seamlessly integrate VR experiences with your existing LMS, CRM, or proprietary enterprise software.",
    },
    {
        icon: FaHeadset,
        title: "End-to-End Support",
        description:
            "From hardware consulting and setup to content updates and maintenance, we are with you at every stage.",
    },
    {
        icon: FaUsers,
        title: "User-Centric Design",
        description:
            "Our focus is on comfort, intuition, and minimizing motion sickness through rigorous testing and quality UX design.",
    },
    {
        icon: FaLightbulb,
        title: "Innovation at Core",
        description:
            "We continuously innovate with VR haptics, hand-tracking, and AI-driven NPCs to create truly immersive worlds.",
    },
];

const VRReasonsSection = () => {
    const controls = useAnimation();
    const ref = useRef();

    const textAnimation1 = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className="py-6 lg:py-8 text-white"
        >
            <div className="py-4 mb-10 text-white">
                <h2 className="lg:w-[90%] text-2xl lg:text-4xl font-bold mb-6">
                    Leading VR Development Company <br />
                    Crafting Unrivaled Virtual Worlds
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    At Hey Buddy, we build more than just VR apps; we build experiences that resonate with users. Our commitment to quality, innovation, and client success makes us the preferred choice for global VR solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-3 w-fit rounded-xl bg-white/10 text-white group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-100 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default VRReasonsSection;
