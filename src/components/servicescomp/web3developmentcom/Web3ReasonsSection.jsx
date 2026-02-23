"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaCode,
    FaShieldAlt,
    FaCogs,
    FaLock,
    FaExpandArrowsAlt,
    FaPlug,
    FaHeadset,
    FaUsers,
    FaLightbulb,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaCode,
        title: "Expert Smart Contract Dev",
        description:
            "Our team is proficient in Solidity, Rust, and Vyper, delivering gas-optimized and highly secure smart contracts for diverse use cases.",
    },
    {
        icon: FaShieldAlt,
        title: "Security & Auditing",
        description:
            "We prioritize security with rigorous audits and testing, ensuring your decentralized applications are resilient against vulnerabilities.",
    },
    {
        icon: FaCogs,
        title: "Custom Blockchain Solutions",
        description:
            "From private consortium networks to public DApps, we build tailored blockchain architectures that align with your business goals.",
    },
    {
        icon: FaLock,
        title: "Trust & Transparency",
        description:
            "Leverage the power of immutability and decentralized consensus to build systems that foster unparalleled trust with your users.",
    },
    {
        icon: FaExpandArrowsAlt,
        title: "Multi-Chain Proficiency",
        description:
            "We work across leading ecosystems including Ethereum, Solana, Polygon, Binance Smart Chain, and more.",
    },
    {
        icon: FaPlug,
        title: "Seamless Integration",
        description:
            "We bridge the gap between Web2 and Web3, integrating blockchain features into your existing enterprise systems and legacy software.",
    },
    {
        icon: FaHeadset,
        title: "Comprehensive Lifecycle Support",
        description:
            "From protocol design and tokenomics consulting to post-deployment maintenance and scaling, we are your long-term partners.",
    },
    {
        icon: FaUsers,
        title: "Tokenomics Excellence",
        description:
            "Our consultants help you design sustainable economic models, including token distribution, staking mechanisms, and governance structures.",
    },
    {
        icon: FaLightbulb,
        title: "Future-Ready Innovation",
        description:
            "We stay at the forefront of Web3 trends, exploring ZK-proofs, Account Abstraction, and Layer 2 scaling to keep you ahead.",
    },
];

const Web3ReasonsSection = () => {
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
                    Leading Web3 Development Partner <br />
                    Empowering Your Decentralized Vision
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    At Hey Buddy, we combine technical depth with strategic insight. Our commitment to decentralization, security, and user ownership makes us the catalyst for your Web3 success.
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

export default Web3ReasonsSection;
