"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaCube,
    FaStreetView,
    FaShareAlt,
    FaPencilRuler,
    FaBolt,
    FaTrophy,
    FaHandshake,
    FaMobileAlt,
    FaShieldAlt,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaCube,
        title: "Anamorphic Mastery",
        description:
            "We specialize in forced perspective content that creates mind-bending 3D illusions on high-resolution LED corners.",
    },
    {
        icon: FaStreetView,
        title: "Localized Impact",
        description:
            "Our designs are tailored to specific viewer angles and pedestrian flow, ensuring the 3D effect hits the 'sweet spot' every time.",
    },
    {
        icon: FaShareAlt,
        title: "Viral Engineering",
        description:
            "We design specifically for social sharability, ensuring your DOOH campaign generates millions of organic views on TikTok and Instagram.",
    },
    {
        icon: FaPencilRuler,
        title: "Technical Precision",
        description:
            "From pixel-pitch calibration to sunlight readability, we ensure every asset is optimized for the target hardware's specs.",
    },
    {
        icon: FaBolt,
        title: "AR & AI Integration",
        description:
            "We bridge the gap between offline and online, integrating QR-based AR experiences and AI-driven reactive content.",
    },
    {
        icon: FaTrophy,
        title: "Award-Winning Creative",
        description:
            "Our team of world-class CGI artists and creative directors push the boundaries of what's possible in public spaces.",
    },
    {
        icon: FaHandshake,
        title: "Strategic Partnerships",
        description:
            "We work closely with global media owners and LED vendors to ensure seamless deployment and technical reliability.",
    },
    {
        icon: FaMobileAlt,
        title: "Measurable Results",
        description:
            "Our campaigns focus on driving mobile action, from website visits and social follows to direct product searches.",
    },
    {
        icon: FaShieldAlt,
        title: "End-to-End Reliability",
        description:
            "From conceptual storyboarding to final deployment and content scheduling, we handle the entire DOOH production pipeline.",
    },
];

const BillboardReasonsSection = () => {
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
                    Global Leader in 3D DOOH <br />
                    Stopping Traffic with Innovation
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Hey Buddy is the premier partner for brands seeking to dominate the physical world. We blend mathematical precision with cinematic art to turn any screen into an unforgettable landmark.
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

export default BillboardReasonsSection;
