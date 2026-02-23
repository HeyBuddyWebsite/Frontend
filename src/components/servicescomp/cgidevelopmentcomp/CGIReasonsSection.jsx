"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaEye,
    FaClock,
    FaComments,
    FaCode,
    FaLightbulb,
    FaAward,
    FaDollarSign,
    FaExchangeAlt,
    FaShieldAlt,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaEye,
        title: "Life-Like Realism",
        description:
            "With meticulous attention to detail, we achieve photorealistic rendering and physically accurate simulations for absolute immersion.",
    },
    {
        icon: FaClock,
        title: "Streamlined Pipelines",
        description:
            "We strictly adhere to production schedules, utilizing parallel workflows to deliver high-quality CGI results within aggressive timelines.",
    },
    {
        icon: FaComments,
        title: "Collaborative Vision",
        description:
            "We maintain transparent communication, providing regular dailies and incorporating feedback to ensure the final visual aligns with your vision.",
    },
    {
        icon: FaCode,
        title: "Technical Excellence",
        description:
            "Our VFX artists and technical directors utilize the latest CGI toolsets and custom shaders to solve complex visual challenges.",
    },
    {
        icon: FaLightbulb,
        title: "Innovative Storytelling",
        description:
            "We go beyond technical execution, infusing every frame with creative direction and innovative visual metaphors to enhance your message.",
    },
    {
        icon: FaAward,
        title: "Proven Track Record",
        description:
            "Our diverse portfolio spans global advertising campaigns, cinematic features, and high-end real estate visualizations across multiple industries.",
    },
    {
        icon: FaDollarSign,
        title: "ROI-Focused Production",
        description:
            "By leveraging modular assets and AI-enhanced rendering, we maximize visual impact while ensuring cost-effectiveness for every project.",
    },
    {
        icon: FaExchangeAlt,
        title: "Agile Adaptability",
        description:
            "Our production environment is built for flexibility, allowing us to pivot quickly and incorporate changes throughout the project lifecycle.",
    },
    {
        icon: FaShieldAlt,
        title: "IP & Ethical Security",
        description:
            "We maintain strict data security and ethical standards, ensuring your intellectual property is protected throughout the creative process.",
    },
];

const CGIReasonsSection = () => {
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
                    Premium CGI & VFX Production <br />
                    Where Creativity Meets Precision
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Hey Buddy is a leading CGI partner for brands that demand excellence. We combine world-class artistry with robust engineering to deliver visual impact that drives results.
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
                                <div className="mb-6 p-3 w-fit rounded-xl bg-white/10 text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
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

export default CGIReasonsSection;
