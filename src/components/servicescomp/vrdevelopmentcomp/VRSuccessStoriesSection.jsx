"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "VR Medical Training for Surgical Precision",
        description:
            "We developed a VR simulation for a high-end medical school that allowed students to practice cardiac surgery in a zero-risk environment. The tool improved student success rates in physical simulations by 35%.",
    },
    {
        title: "Safety First: VR Hazard Simulation for Construction",
        description:
            "A global construction firm used our VR training to simulate high-risk site environments. The program led to a 50% decrease in safety-related incidents during the first year of implementation.",
    },
    {
        title: "Immersive Real Estate: Virtual 1:1 Scale Tours",
        description:
            "For a luxury property developer, we created 1:1 VR tours for unbuilt high-rises. This enabled them to pre-sell 70% of the units before the foundation was even laid, saving millions in marketing and physical staging.",
    },
];

const VRSuccessStoriesSection = () => {
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
            className="py-6 lg:py-8 px-6 lg:px-12"
        >
            <div className="py-4 mb-10 text-white px-6 lg:px-0">
                <h2 className="text-2xl lg:text-4xl font-bold mb-6">
                    VR Success Stories: Impactful <br />
                    Immersive Solutions That Deliver
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
                    Discover how our Virtual Reality development has helped global clients bridge the gap between imagination and reality, driving massive gains in safety, efficiency, and sales.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="w-20 h-20 bg-purple-500/20 blur-3xl rounded-full pointer-events-none" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                            {story.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            {story.description}
                        </p>

                        <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-purple-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};


export default VRSuccessStoriesSection;
