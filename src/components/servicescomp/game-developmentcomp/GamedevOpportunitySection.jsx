"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaRocket,
    FaGlobe,
    FaTools,
} from "react-icons/fa";

const stats = [
    {
        icon: FaRocket,
        title: "End-to-End Game Development",
        description: "From initial concept and mechanics design to final deployment and server scaling, we handle the entire game lifecycle.",
    },
    {
        icon: FaGlobe,
        title: "Cross-Platform Expertise",
        description: "We ensure your gaming experience remains consistent and high-performing across Mobile, PC, Consoles, and Web3 environments.",
    },
    {
        icon: FaTools,
        title: "Post-Launch Support & Live Ops",
        description: "We provide 24/7 monitoring, seasonal updates, and technical refinements to keep your game relevant and revenue-ready.",
    },
];

const GamedevOpportunitySection = () => {
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
            className="py-4 text-white"
        >
            <div className="py-2 mb-2 text-white">
                <h2 className="lg:w-[90%] text-2xl lg:text-4xl font-bold mb-3 text-white">
                    Our Comprehensive End-to-End Game Development Services
                </h2>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl">
                    At the intersection of high-end engineering and artistic vision, we provide comprehensive game development solutions. We don&apos;t just build games; we engineer high-performance digital ecosystems designed for the future gaming landscape.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <motion.figure
                            key={index}
                            whileHover={{ y: -5 }}
                            className="relative group flex flex-col p-4 rounded-xl h-full w-full bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <blockquote className="relative z-10">
                                <div className="mb-4 p-2.5 w-fit rounded-lg bg-white/10 text-white transition-colors duration-300">
                                    <IconComponent className="h-5 w-5" />
                                </div>
                                <div className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                                    {item.title}
                                </div>
                                <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {item.description}
                                </p>
                            </blockquote>
                        </motion.figure>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default GamedevOpportunitySection;
