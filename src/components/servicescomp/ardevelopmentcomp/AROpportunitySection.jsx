"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaChartBar,
    FaUser,
    FaBullhorn,
    FaChartPie,
    FaLaptop,
    FaBullseye,
} from "react-icons/fa";

const stats = [
    {
        icon: FaChartBar,
        value: "61%",
        label: "of consumers prefer shopping at retailers offering AR experiences",
    },
    {
        icon: FaUser,
        value: "90%",
        label: "rise in conversion rates for consumers interacting with AR",
    },
    {
        icon: FaBullhorn,
        value: "200%",
        label: "more engaging compared to non-AR product experiences",
    },
    {
        icon: FaChartPie,
        value: "$50B",
        label: "projected AR market size by 2025",
    },
    {
        icon: FaLaptop,
        value: "1B+",
        label: "estimated AR users worldwide in 2024",
    },
    {
        icon: FaBullseye,
        value: "$5.8B",
        label: "expected AR advertising revenue in 2025",
    },
];

const AROpportunitySection = () => {
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
                    Augmented Reality: The Future of Immersive Engagement
                </h2>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl">
                    From retail to healthcare, AR is transforming how businesses connect with their customers. By overlaying digital information onto the physical world, AR creates unmatched engagement and drives measurable business results. Seize the opportunity to lead in this immersive era.
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

export default AROpportunitySection;
