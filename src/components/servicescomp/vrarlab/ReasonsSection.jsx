"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaLaptop,
    FaFileAlt,
    FaUsers,
    FaShieldAlt,
    FaRocket,
    FaExpandArrowsAlt,
    FaCogs,
    FaHeadset,
    FaLightbulb,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaLaptop,
        title: "Education-First Hardware",
        description:
            "We avoid consumer-grade pitfalls by providing hardware engineered for a 'seamless classroom experience'. Our headsets feature efficient offline usage and built-in MDM.",
    },
    {
        icon: FaFileAlt,
        title: "Certified Graded Curriculum",
        description:
            "Our methodology includes a graded progressive curriculum deployment to ensure students master complex concepts over time, fully aligned with NEP/STEM standards.",
    },
    {
        icon: FaUsers,
        title: "Teacher Empowerment",
        description:
            "We specialize in faculty empowerment through a comprehensive Teacher Training Program, enabling even non-technical teachers to confidently deliver the curriculum.",
    },
    {
        icon: FaShieldAlt,
        title: "Safety First Layouts",
        description:
            "We integrate safety-first layout designs and custom laboratory furniture to build a foundation capable of supporting heavy data loads and multi-user interaction safely.",
    },
    {
        icon: FaRocket,
        title: "Future Ready Skills",
        description:
            "Our goal is to prepare 'Future Ready Students' who move beyond consumption to creation, mentoring them through projects, exhibitions, and patent filing.",
    },
    {
        icon: FaExpandArrowsAlt,
        title: "Scalable Ecosystem",
        description:
            "We provide a total school solution that integrates AR/VR technology with broader STEM tools, creating a holistic environment that grows with your needs.",
    },
    {
        icon: FaCogs,
        title: "Technical Expertise",
        description:
            "Capitalize on our team's unparalleled technical prowess in spatial computing. Our dedicated group of VR/AR experts tackles the most intricate challenges.",
    },
    {
        icon: FaHeadset,
        title: "End-Mile Support",
        description:
            "Count on our unwavering support. We provide regular software updates, hardware maintenance, and ongoing training to keep your lab fully operational.",
    },
    {
        icon: FaLightbulb,
        title: "Innovation Driven",
        description:
            "Stay ahead in the digital landscape. Our commitment to innovation ensures that your lab solutions are not just current but future-ready.",
    },
];

const ReasonsSection = () => {
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
                    Leading VR/AR Lab Setup Company<br className="hidden md:block" /> For More than One Reason
                </h2>
                <p className="text-gray-400 text-lg max-w-4xl leading-relaxed">
                    Hey Buddy has a proven track record of delivering high-quality immersive education solutions. With our skilled and experienced team, we are known to help institutions transform learning and achieve outcomes that earlier appeared impossible. That&apos;s the power of our VR/AR Labs.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="group flex flex-col p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:bg-white/10 shadow-sm hover:shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                        >
                            <div className="mb-6 flex items-center justify-center w-14 h-14 rounded-xl bg-blue-600/20 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                <IconComponent className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default ReasonsSection;
