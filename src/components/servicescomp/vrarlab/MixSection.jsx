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
            title: "K-12 & Higher Education",
            items: [
                "Transform classrooms into discovery portals.",
                "Deploy virtual science labs avoiding physical risks.",
                "Boost student engagement and conceptual clarity."
            ]
        },
        {
            title: "Healthcare & Medical Sciences",
            items: [
                "High-fidelity anatomy labs for surgical training.",
                "Risk-free simulation for complex procedures.",
                "Reduce procedural errors with repeated practice."
            ]
        },
        {
            title: "Industrial & Manufacturing",
            items: [
                "Real-time guidance for frontline workers.",
                "Reduce production time and minimize human error.",
                "Enforce safety compliance at scale."
            ]
        },
        {
            title: "Aerospace & Defense",
            items: [
                "Train pilots and technicians in high-risk scenarios.",
                "Virtual engine repairs and cockpit troubleshooting.",
                "Accelerate upskilling by up to 4x."
            ]
        },
        {
            title: "Corporate Training",
            items: [
                "Scale onboarding and empathy training.",
                "Simulate hazard identification and leadership scenarios.",
                "Increase employee confidence and test scores."
            ]
        },
        {
            title: "Automotive & Design",
            items: [
                "Visualize prototypes in 3D before production.",
                "Collaborative design review in virtual space.",
                "Reduce cost of physical mockups."
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
                    Industries We Transform with AR/VR Labs
                </h2>
                <p className=" text-base md:text-m lg:text-xl">
                    Our AR/VR lab setup solutions are designed to address the unique challenges of diverse sectors, moving beyond traditional boundaries to deliver measurable ROI through spatial computing.
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
