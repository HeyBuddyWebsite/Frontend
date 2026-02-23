"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaCube,
    FaGlobe,
    FaBuilding,
    FaUsers,
    FaVrCardboard,
    FaChartPie,
} from "react-icons/fa";

const stats = [
    {
        icon: FaGlobe,
        value: "$1.27T",
        label: "upper-end projected Metaverse market size by 2025",
    },
    {
        icon: FaUsers,
        value: "23.3M",
        label: "projected active users in virtual real estate by 2025",
    },
    {
        icon: FaBuilding,
        value: "$42B",
        label: "estimated industrial metaverse market size in 2025",
    },
    {
        icon: FaCube,
        value: "51.5%",
        label: "forecasted CAGR for the industrial metaverse (2024-2029)",
    },
    {
        icon: FaVrCardboard,
        value: "40%",
        label: "North American share of the global metaverse market",
    },
    {
        icon: FaChartPie,
        value: "$5B",
        label: "projected metaverse virtual real estate valuation in 2025",
    },
];

const MetaverseOpportunitySection = () => {
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
                    The Metaverse: Infinite Spaces for Limitless Potential
                </h2>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl">
                    The Metaverse is more than just virtual reality—it&apos;s a persistent, collective digital universe where physical and digital realities merge. From industrial digital twins that optimize manufacturing to immersive brand showrooms that redefine retail, the Metaverse is the next frontier of human interaction and enterprise efficiency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <motion.figure
                            key={index}
                            whileHover={{ y: -5 }}
                            className="relative group flex flex-col p-4 rounded-xl h-full w-full bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
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

export default MetaverseOpportunitySection;
