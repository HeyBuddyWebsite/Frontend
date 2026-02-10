"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaChartBar,
    FaUsers,
    FaBullhorn,
    FaLightbulb,
    FaRocket,
    FaCogs,
} from "react-icons/fa";

const stats = [
    {
        icon: FaCogs,
        text: "50% increase in STEM enrollment with robotics programs",
    },
    {
        icon: FaUsers,
        text: "85% of jobs in 2030 will require digital skills like coding",
    },
    {
        icon: FaChartBar,
        text: "60% improvement in problem-solving skills among students",
    },
    {
        icon: FaRocket,
        text: "3x faster grasp of physics concepts through practical application",
    },
    {
        icon: FaBullhorn,
        text: "95% of educators see robotics as essential for future readiness",
    },
    {
        icon: FaLightbulb,
        text: "Inspiring the next generation of engineers and innovators",
    },
];

const OpportunitySection = () => {
    const controls = useAnimation();
    const ref = useRef();

    const textAnimation1 = {
        hidden: { opacity: 0, y: "20%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                }
            },
            { threshold: 0 }
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
            className="lg:py-4 text-white"
        >
            <div className="py-4 text-white">
                <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                    Robotics Lab: Building the Innovators of Tomorrow
                </h2>
                <p className="text-base md:text-m lg:text-xl">
                    From basic mechanics to complex AI-driven automation, robotics is the gateway to understanding the modern world. Equip your students with the tools to build, code, and innovate. Don't let them just consume technology—teach them to create it.
                </p>
            </div>

            <div className="lg:py-4 grid mx-auto justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
                {stats.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <figure
                            key={index}
                            className="flex flex-col p-4 lg:p-6 rounded-lg h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40"
                        >
                            <blockquote className="text-gray-400">
                                <IconComponent className="h-8 w-8 text-white" />
                                <p style={{ color: "white" }} className="py-4 text-left text-base">
                                    {item.text}
                                </p>
                            </blockquote>
                        </figure>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default OpportunitySection;
