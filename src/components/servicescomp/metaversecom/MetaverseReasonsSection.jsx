"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaCube,
    FaShieldAlt,
    FaVrCardboard,
    FaExpandArrowsAlt,
    FaUsers,
    FaGlobe,
    FaTools,
    FaLightbulb,
    FaHandshake,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaCube,
        title: "End-to-End Metaverse Build",
        description:
            "From world-building and environment design to avatar creation and backend infrastructure, we provide complete Metaverse solutions.",
    },
    {
        icon: FaVrCardboard,
        title: "Immersive & Spatial UX",
        description:
            "We design for presence. Our spatial design experts create intuitive virtual environments that feel natural and engaging for users.",
    },
    {
        icon: FaShieldAlt,
        title: "Blockchain-Powered Assets",
        description:
            "Ensure true digital ownership with NFT-integrated assets, virtual land, and persistent digital economies in your Metaverse world.",
    },
    {
        icon: FaExpandArrowsAlt,
        title: "Cross-Platform Interoperability",
        description:
            "We build worlds that are accessible across devices—desktop, VR headsets, and mobile—ensuring your community stays connected anywhere.",
    },
    {
        icon: FaGlobe,
        title: "Enterprise Digital Twins",
        description:
            "We specialize in Industrial Metaverse applications, creating 1:1 digital twins of factories, offices, or cities for simulation and training.",
    },
    {
        icon: FaUsers,
        title: "Social & Community Features",
        description:
            "Implement robust social layers including voice chat, real-time avatar interaction, and collaborative workspaces to foster community.",
    },
    {
        icon: FaTools,
        title: "Scalable Infrastructure",
        description:
            "Our backend solutions are built to handle massive concurrency, ensuring smooth performance even with thousands of simultaneous users.",
    },
    {
        icon: FaHandshake,
        title: "Strategic Consulting",
        description:
            "Not sure how to enter the Metaverse? We provide strategy, roadmap, and economic modeling to ensure your project delivers ROI.",
    },
    {
        icon: FaLightbulb,
        title: "Cutting-Edge Innovation",
        description:
            "Leverage AI-driven NPC behavior, procedural world generation, and spatial audio to create truly sentient-feeling virtual spaces.",
    },
];

const MetaverseReasonsSection = () => {
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
                    Premium Metaverse Development Firm <br />
                    Crafting Your Digital Realm
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Hey Buddy is your bridge to the virtual future. We combine high-fidelity graphics with robust engineering to build Metaverse experiences that don&apos;t just wow—they work for your bottom line.
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

export default MetaverseReasonsSection;
