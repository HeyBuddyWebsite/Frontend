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
            className="lg:py-4 text-white"
        >
            <div className="py-4 text-white">
                <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                    Leading VR/AR Lab Setup Company For More than One Reason
                </h2>
                <p className="text-base md:text-m lg:text-xl">
                    Hey Buddy has a proven track record of delivering high-quality immersive education solutions. With our skilled and experienced team, we are known to help institutions transform learning and achieve outcomes that earlier appeared impossible. That&apos;s the power of our VR/AR Labs.
                </p>
            </div>

            <div className="lg:py-4 grid mx-auto justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
                {reasons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <figure
                            key={index}
                            className="flex flex-col p-4 lg:p-6 rounded-lg h-full w-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-40"
                        >
                            <blockquote className="text-gray-400">
                                <IconComponent className="h-8 w-8 text-white" />
                                <h3
                                    style={{ color: "white" }}
                                    className="py-4 text-xl font-semibold text-white"
                                >
                                    {item.title}
                                </h3>
                                <p style={{ color: "white" }} className="text-left text-sm md:text-base">
                                    {item.description}
                                </p>
                            </blockquote>
                        </figure>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default ReasonsSection;
