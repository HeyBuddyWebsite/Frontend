"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const MixSection = () => {
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

    const onScreen = async () => {
        const element = ref.current;
        if (element) {
            const isVisible = await controls.start("visible");
            if (isVisible) {
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onScreen();
                }
            },
            { threshold: 0 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const industries = [
        {
            title: "K-12 Education",
            items: [
                "Foundational STEM concepts.",
                "Block-based coding for beginners.",
                "Simple mechanical construction."
            ]
        },
        {
            title: "Higher Universities",
            items: [
                "Industrial automation arms.",
                "ROS (Robot Operating System) research.",
                "AI & computer vision integration."
            ]
        },
        {
            title: "Technical Institutes",
            items: [
                "Vocational training in mechatronics.",
                "Real-world PLC and SCADA training.",
                "IoT connected machinery."
            ]
        }
    ];

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
        >
            <div className="py-4 text-white">
                <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                    Robotics Solutions for Every Level
                </h2>
                <p className=" text-base md:text-m lg:text-xl">
                    We tailor our robotics labs to suit the educational level and learning outcomes required, ensuring that every student gets the right tools to grow.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 px-2">
                {industries.map((industry, index) => (
                    <div key={index} className="p-6 rounded-lg bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-30 border border-gray-700 transition-all">
                        <h3 className="text-xl font-bold text-white mb-4">{industry.title}</h3>
                        <ul className="space-y-2">
                            {industry.items.map((item, i) => (
                                <li key={i} className="flex items-start text-gray-200">
                                    <span className="text-[#6FCF97] mr-2 mt-1">✔</span>
                                    <span className="text-sm">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default MixSection;
