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
        title: "Vast Gaming Portfolio",
        description:
            "We have developed successful titles across mobile, PC, and web, ranging from casual puzzles to mid-core action games.",
    },
    {
        icon: FaCogs,
        title: "Engine Mastery",
        description:
            "Our team consists of Unity and Unreal Engine experts capable of squeezing every bit of performance and visual quality out of the platform.",
    },
    {
        icon: FaMapMarkerAlt,
        title: "End-to-End Development",
        description:
            "From concept art and Level Design to monetization strategy and backend scaling, we handle the entire game lifecycle.",
    },
    {
        icon: FaShieldAlt,
        title: "Robust Quality Assurance",
        description:
            "We perform rigorous playtesting and automated stress testing to ensure your game is bug-free and balanced for all players.",
    },
    {
        icon: FaExpandArrowsAlt,
        title: "Multi-Platform reach",
        description:
            "Build once, deploy everywhere. We specialize in cross-platform development so your game reaches players on iOS, Android, PC, and consoles.",
    },
    {
        icon: FaPlug,
        title: "Monetization Expertise",
        description:
            "We help you design sustainable economies, including In-App Purchases, Ad-integration, and Subscription models that drive LTV.",
    },
    {
        icon: FaHeadset,
        title: "Live Operations Support",
        description:
            "Post-launch is just the beginning. We provide continuous updates, community management tools, and event-based LiveOps.",
    },
    {
        icon: FaUsers,
        title: "Player-First Approach",
        description:
            "We focus on intuitive controls, satisfying loops, and community engagement to build games that players keep coming back to.",
    },
    {
        icon: FaLightbulb,
        title: "Experimental Innovation",
        description:
            "Stay ahead with Web3 gaming, NFT integration, and AI-driven procedural content to make your game truly unique.",
    },
];

const GamedevReasonsSection = () => {
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
                    Premium Game Development Company <br />
                    Crafting The Next Big Hit
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Hey Buddy is where creativity meets technical excellence. We don&apos;t just build games; we build ecosystems that engage millions. Our data-driven approach ensures your vision reaches its maximum potential.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-red-500/30 hover:shadow-[0_0_25px_rgba(239,68,68,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-3 w-fit rounded-xl bg-white/10 text-white group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-100 transition-colors duration-300">
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

export default GamedevReasonsSection;
