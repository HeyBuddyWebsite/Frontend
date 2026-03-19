"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaGamepad,
    FaUsers,
    FaMobileAlt,
    FaChartLine,
    FaDownload,
    FaGlobe,
} from "react-icons/fa";

const stats = [
    {
        icon: FaUsers,
        value: "3.32B",
        label: "active gamers worldwide projected for 2025",
    },
    {
        icon: FaMobileAlt,
        value: "$126B",
        label: "projected mobile gaming revenue in 2025",
    },
    {
        icon: FaGamepad,
        value: "40M",
        label: "concurrent users on platforms like Steam in early 2025",
    },
    {
        icon: FaChartLine,
        value: "55%",
        label: "mobile gaming market share of total industry revenue",
    },
    {
        icon: FaDownload,
        value: "49B",
        label: "global mobile game downloads in 2024",
    },
    {
        icon: FaGlobe,
        value: "3.6B",
        label: "forecasted total gaming population by 2027",
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
                    Game Development: Tapping Into a Multi-Billion Dollar Universe
                </h2>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl">
                    The gaming industry is larger than film and music combined. With billions of active players across mobile, PC, and consoles, the opportunity to create a breakout hit or an engaging brand experience has never been greater. Whether it&apos;s hyper-casual or triple-A, we build games that win.
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
                                <div className="text-2xl font-bold text-white mb-1.5 transition-colors duration-300">
                                    {item.value}
                                </div>
                                <p className="text-base text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {item.label}
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
