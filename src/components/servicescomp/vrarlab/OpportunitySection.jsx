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
            className="py-12 text-white"
        >
            <div className="mb-12">
                <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white leading-tight">
                    VR/AR Lab Setup: A Transformative <br className="hidden md:block" /> Educational Opportunity
                </h2>
                <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
                    From immersive simulations to risk-free experimentation, AR/VR is propelling education into the future and your institution can be a leader. Tap into the unmatched potential of this spatial technology. Boost retention like never before, and stay ahead of the curve.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {stats.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="group flex flex-col p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                        >
                            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <IconComponent className="h-7 w-7" />
                            </div>
                            <p className="text-lg font-medium text-white group-hover:text-blue-100 transition-colors leading-relaxed">
                                {item.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default OpportunitySection;
