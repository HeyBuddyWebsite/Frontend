"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "Cross-Platform Game Development: Building Ecosystems, Not Just Apps",
        description: "We provide end-to-end cross-platform game development that erases the boundaries between hardware. Our focus is on technical reliability and seamless performance across every major platform.",
    },
    {
        title: "Mobile Game Development",
        description: "We develop outstanding mobile games for iOS and Android. Our cross-platform expertise allows us to reach a global audience seamlessly, combining high-performance playability with deep social integration.",
    },
    {
        title: "Console Game Development",
        description: "We bring your vision to the \"big screen\" with native builds for PS5 Pro, Xbox Series X, and Nintendo Switch. Our team navigates the complex certification processes to ensure a Day-1 global launch.",
    },
    {
        title: "AR / VR Game Development",
        description: "We push the boundaries with AR/VR technology, crafting unforgettable, immersive experiences that redefine interactive entertainment for the next generation of spatial computing.",
    },
    {
        title: "PC Game Development",
        description: "Our team delivers captivating games for Windows and MacOS, ensuring \"Ultra\" performance and a fantastic gaming environment tailored specifically for desktop players.",
    },
];

const GamedevSuccessStoriesSection = () => {
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
                    Success Stories Showcasing our Game Development Studio
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
                    Hey Buddy offers its services to clients working in different industries and different scales. Here are the success stories that make us the best game development company in India.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="w-20 h-20 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300 leading-tight">
                            {story.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            {story.description}
                        </p>

                        <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-red-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};


export default GamedevSuccessStoriesSection;
