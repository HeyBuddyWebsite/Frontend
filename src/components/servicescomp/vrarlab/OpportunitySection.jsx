"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaChartBar,
    FaUsers,
    FaBullhorn,
    FaLightbulb,
    FaRocket,
    FaShieldAlt,
} from "react-icons/fa";

const stats = [
    {
        icon: FaLightbulb,
        text: "40% Increase in conceptual retention with VR learning",
    },
    {
        icon: FaUsers,
        text: "70% of students show higher engagement in VR classrooms",
    },
    {
        icon: FaChartBar,
        text: "52% Cost reduction in physical lab materials",
    },
    {
        icon: FaRocket,
        text: "4x Faster learning speed compared to traditional methods",
    },
    {
        icon: FaBullhorn,
        text: "90% of educators believe VR improves student outcomes",
    },
    {
        icon: FaShieldAlt,
        text: "100% Safe environment for hazardous experiments due to simulation",
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
                    VR/AR Lab Setup: A Transformative Educational Opportunity
                </h2>
                <p className="text-base md:text-m lg:text-xl">
                    From immersive simulations to risk-free experimentation, AR/VR is propelling education into the future and your institution can be a leader. Tap into the unmatched potential of this spatial technology. Boost retention like never before, and stay ahead of the curve. Your journey to academic excellence starts here!
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
