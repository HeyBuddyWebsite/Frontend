"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaRobot,
    FaPuzzlePiece,
    FaChalkboardTeacher,
    FaTools,
    FaAward,
    FaUsers,
    FaLightbulb,
    FaBook,
    FaHandshake,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaPuzzlePiece,
        title: "Modular Learning Kits",
        description:
            "Our labs feature modular robotics kits that scale with student ability, from simple snap-circuits to complex programmable humanoids.",
    },
    {
        icon: FaBook,
        title: "Step-by-Step Curriculum",
        description:
            "We provide a structured curriculum that guides students through mechanics, electronics, and coding, mapped to international STEM standards.",
    },
    {
        icon: FaChalkboardTeacher,
        title: "Teacher Training",
        description:
            "We empower educators with hands-on workshops, ensuring they are confident in guiding students through complex robotics projects.",
    },
    {
        icon: FaTools,
        title: "Maker-Space Integration",
        description:
            "We design labs that double as maker spaces, equipped with 3D printers and tools to encourage prototyping and creative invention.",
    },
    {
        icon: FaAward,
        title: "Competition Ready",
        description:
            "Our ecosystem prepares students for national and international robotics competitions, fostering a spirit of innovation and teamwork.",
    },
    {
        icon: FaRobot,
        title: "Advanced AI Robotics",
        description:
            "For higher education, we offer advanced platforms featuring ROS (Robot Operating System), computer vision, and AI integration.",
    },
    {
        icon: FaUsers,
        title: "Collaborative Projects",
        description:
            "Our labs are designed to promote team-based learning, where students collaborate to solve engineering challenges.",
    },
    {
        icon: FaHandshake,
        title: "Industry Partnerships",
        description:
            "We connect institutions with industry partners for mentorship, providing students with real-world exposure to automation careers.",
    },
    {
        icon: FaLightbulb,
        title: "Innovation Hub",
        description:
            "Turn your school into a hub of innovation. Our labs are designed to inspire curiosity and nurture the inventors of the future.",
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
                    Leading Robotics Lab Provider For More than One Reason
                </h2>
                <p className="text-base md:text-m lg:text-xl">
                    Hey Buddy transforms traditional classrooms into dynamic centers of innovation. Our robotics labs are not just about equipment; they are about building a culture of making, breaking, and creating.
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
