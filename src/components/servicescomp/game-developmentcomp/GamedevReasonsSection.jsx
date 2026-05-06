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
        icon: FaMapMarkerAlt,
        title: "Expertise Across Platforms",
        description:
            "We offer a comprehensive suite of services across all gaming platforms. We develop games for mobile, offer Unreal and Unity game development, AR/VR game development, and Metaverse game development.",
    },
    {
        icon: FaCogs,
        title: "Cutting-Edge AI Solutions",
        description:
            "We elevate your games with AI-powered techniques and algorithms such as PCG, Natural Language Processing (NLP), Machine Learning (ML), etc. Our AI expertise ensures your games are intelligent and outsmart competition.",
    },
    {
        icon: FaLightbulb,
        title: "Creative Innovation",
        description:
            "We don't just build games; we craft experiences as our team of gamer-first developers thrive on creative innovation. Expect unique storylines, dynamically engaging gameplay mechanics, and visually stunning environments to captivate your gaming audience and set your brand apart.",
    },
    {
        icon: FaUsers,
        title: "Collaborative Partnership",
        description:
            "Believing in collaborative partnerships, we work closely with you. We ensure to completely understand your brand, goals, and it’s vision. And move forward with full might to realise the same. This is what differentiates our game development services.",
    },
    {
        icon: FaShieldAlt,
        title: "Commitment to Quality",
        description:
            "Quality is non-negotiable at Hey Buddy. Our rigorous and perfected-over-year development process ensures that every aspect of your game meets the highest standards. Be it graphics, gameplay, performance or experience, we prioritise excellence and your satisfaction.",
    },
    {
        icon: FaHeadset,
        title: "Transparent Communication",
        description:
            "By working with clients across industries and scales, we understood the gravity of transparent communication. Be assured to experience transparent communication, timely updates, and a responsive team to keep you informed and involved.",
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
                    Why Game Studios choose our Game Development Company
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Hey Buddy is a renowned name in the game development space. We have an experienced development team who know what works best for your business.
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
