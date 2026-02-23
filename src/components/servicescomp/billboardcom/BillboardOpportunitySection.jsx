"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaTv,
    FaMousePointer,
    FaShareAlt,
    FaExpandArrowsAlt,
    FaChartBar,
    FaRegLightbulb,
} from "react-icons/fa";

const stats = [
    {
        icon: FaChartBar,
        value: "$31.95B",
        label: "projected global DOOH market size by 2025",
    },
    {
        icon: FaMousePointer,
        value: "40%",
        label: "increase in conversion rates for 3D vs traditional ads",
    },
    {
        icon: FaTv,
        value: "74%",
        label: "of mobile users took action after seeing a DOOH ad",
    },
    {
        icon: FaShareAlt,
        value: "Viral",
        label: "potential for 3D anamorphic content on TikTok and Instagram",
    },
    {
        icon: FaExpandArrowsAlt,
        value: "73%",
        label: "favorable viewership rating compared to social media ads",
    },
    {
        icon: FaRegLightbulb,
        value: "13.2%",
        label: "CAGR for digital out-of-home infrastructure growth",
    },
];

const BillboardOpportunitySection = () => {
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
                    3D Billboards: The New Era of <br />
                    Experience-First Advertising
                </h2>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl">
                    Digital Out-of-Home (DOOH) is evolving from static displays to immersive anamorphic illusions. 3D billboards don&apos;t just show an ad—they create a destination. We combine advanced CGI with anamorphic engineering to stop traffic, spark viral conversations, and drive measurable consumer action.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <motion.figure
                            key={index}
                            whileHover={{ y: -5 }}
                            className="relative group flex flex-col p-4 rounded-xl h-full w-full bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
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

export default BillboardOpportunitySection;
