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
        title: "Proven Track Record",
        description:
            "Benefit from our established history of success in delivering cutting-edge AR projects across diverse industries.",
    },
    {
        icon: FaCogs,
        title: "Technical Expertise",
        description:
            "Our team of AR specialists masters the latest technologies to build complex, high-performance AR solutions.",
    },
    {
        icon: FaMapMarkerAlt,
        title: "Customized Solutions",
        description:
            "We design AR experiences tailored to your specific business goals, ensuring maximum impact and ROI.",
    },
    {
        icon: FaShieldAlt,
        title: "Quality & Precision",
        description:
            "We prioritize precision in tracking and high-quality visual rendering to create truly believable AR experiences.",
    },
    {
        icon: FaExpandArrowsAlt,
        title: "Scalability and Flexibility",
        description:
            "Our AR solutions are built to grow with your business, adapting to new platforms and evolving user needs.",
    },
    {
        icon: FaPlug,
        title: "Seamless Integration",
        description:
            "We ensure your AR features integrate perfectly with your existing applications and marketing ecosystems.",
    },
    {
        icon: FaHeadset,
        title: "Continuous Support",
        description:
            "From launch to updates, we provide ongoing maintenance and support to keep your AR experience running smoothly.",
    },
    {
        icon: FaUsers,
        title: "Collaborative Approach",
        description:
            "We work as your partners, involving you in every step of the creative and development process.",
    },
    {
        icon: FaLightbulb,
        title: "Innovation-Driven",
        description:
            "We constantly explore new AR possibilities, like WebAR and spatial computing, to keep your brand ahead.",
    },
];

const ARReasonsSection = () => {
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
                    Leading AR Development Company <br />
                    Pushing the Boundaries of Reality
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Hey Buddy is dedicated to creating AR software solutions that don't just wow the audience but also solve real business challenges. Our expert team combines creativity with technical precision to deliver unmatched immersive experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-3 w-fit rounded-xl bg-white/10 text-white group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
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

export default ARReasonsSection;
