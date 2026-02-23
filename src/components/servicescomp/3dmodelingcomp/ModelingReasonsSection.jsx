"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaCube,
    FaShieldAlt,
    FaMagic,
    FaLightbulb,
    FaLayerGroup,
    FaCloud,
    FaClock,
    FaUsers,
    FaTools,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaCube,
        title: "High-Fidelity Poly Modeling",
        description:
            "From low-poly assets for mobile games to high-poly cinematic models, we deliver optimized geometry tailored to your platform.",
    },
    {
        icon: FaMagic,
        title: "Photorealistic Texturing",
        description:
            "Our PBR (Physically Based Rendering) texture artists create materials that react naturally to light, ensuring stunning realism in every scene.",
    },
    {
        icon: FaLayerGroup,
        title: "Character & Asset Rigging",
        description:
            "We build production-ready rigs with intuitive controls, ensuring smooth animations for characters, vehicles, and complex machinery.",
    },
    {
        icon: FaLightbulb,
        title: "Creative Conceptualization",
        description:
            "Our designers don&apos;t just model—they help envision. We provide concept art and blocking to ensure the final result aligns with your brand.",
    },
    {
        icon: FaCloud,
        title: "Cloud-Based Asset Management",
        description:
            "Access and review your 3D assets in real-time through our secure cloud portal, facilitating seamless feedback and iterations.",
    },
    {
        icon: FaClock,
        title: "Rapid Prototyping",
        description:
            "Need a visual fast? Our rapid blocking and modeling workflow delivers high-quality prototypes in record time for pitches and testing.",
    },
    {
        icon: FaShieldAlt,
        title: "Optimized for Performance",
        description:
            "Every model is rigorously checked for draw calls, tri-count, and UV efficiency to ensure peak performance in real-time engines.",
    },
    {
        icon: FaUsers,
        title: "Scalable Studio Capacity",
        description:
            "Whether you need a single hero asset or an entire environment library, our distributed studio model scales to fit your project size.",
    },
    {
        icon: FaTools,
        title: "Tech-Forward Workflow",
        description:
            "We utilize the latest industry tools—ZBrush, Maya, Substance, and AI-enhanced retopology—to stay at the cutting edge of 3D production.",
    },
];

const ModelingReasonsSection = () => {
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
                    World-Class 3D Production Studio <br />
                    Transforming Ideas into Reality
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    At Hey Buddy, we blend artistic mastery with technical precision. Our commitment to quality, optimization, and creative vision makes us the preferred 3D partner for global leaders in gaming, film, and enterprise.
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

export default ModelingReasonsSection;
