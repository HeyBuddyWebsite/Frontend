"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaCode,
    FaRobot,
    FaServer,
    FaMobileAlt,
    FaLayerGroup,
    FaShieldAlt,
    FaSync,
    FaHeadset,
    FaUsers,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaCode,
        title: "Bespoke Engineering",
        description:
            "We don't do 'one-size-fits-all'. Every line of code is written to solve your specific organizational challenges and workflows.",
    },
    {
        icon: FaRobot,
        title: "AI-First Approach",
        description:
            "We integrate advanced machine learning and GenAI into your core systems to automate complex decision-making and enhance productivity.",
    },
    {
        icon: FaServer,
        title: "Scalable Infrastructure",
        description:
            "Our solutions are built on cloud-native architectures that grow effortlessly as your user base and data requirements expand.",
    },
    {
        icon: FaLayerGroup,
        title: "Full-Stack Expertise",
        description:
            "From complex backend architecture to intuitive frontend UI, we handle the entire development lifecycle with precision.",
    },
    {
        icon: FaSync,
        title: "Agile Methodology",
        description:
            "Our iterative development process ensures transparent communication, rapid prototyping, and frequent delivery of value.",
    },
    {
        icon: FaShieldAlt,
        title: "Enterprise Security",
        description:
            "We implement military-grade encryption and robust compliance protocols to protect your most sensitive business data.",
    },
    {
        icon: FaUsers,
        title: "Collaborative Culture",
        description:
            "We act as an extension of your team, deeply aligning our technical goals with your long-term business objectives.",
    },
    {
        icon: FaMobileAlt,
        title: "Cross-Platform Delivery",
        description:
            "Whether it's web, mobile, or internal desktop tools, we ensure a seamless and high-performance experience across all devices.",
    },
    {
        icon: FaHeadset,
        title: "Post-Launch Support",
        description:
            "Our commitment doesn't end at deployment. We provide dedicated maintenance and evolution services to keep your systems at peak performance.",
    },
];

const CustomSoftwareReasonsSection = () => {
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
                    Premium Custom Software Solutions <br />
                    Engineering Your Future
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Hey Buddy is the trusted partner for enterprises that demand high-performance digital infrastructure. We combine senior engineering talent with cutting-edge tech stacks to deliver software that drives real business value.
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

export default CustomSoftwareReasonsSection;
