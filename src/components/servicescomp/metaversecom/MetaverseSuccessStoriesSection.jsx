"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "Industrial Metaverse: 1:1 Factory Digital Twin",
        description:
            "We developed a high-fidelity digital twin for a global electronics manufacturer. This allowed their team to simulate assembly line changes virtually before implementation, reducing downtime by 22% and optimizing energy consumption by 15%.",
    },
    {
        title: "Luxury Retail Metaverse Experience",
        description:
            "For a premier jewelry brand, we created a persistent virtual showroom with personalized avatars and private consultation rooms. The project drove a 35% increase in digital engagement and a 12% rise in high-value lead generation.",
    },
    {
        title: "Global Virtual Campus for Higher Education",
        description:
            "We built a decentralized Metaverse campus hosting 10k+ concurrent students globally. The platform features spatial audio classrooms, immersive labs, and social hubs, increasing student participation scores by 40% compared to video calls.",
    },
];

const MetaverseSuccessStoriesSection = () => {
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
                    Metaverse Success Stories: From <br />
                    Concept to Virtual Reality
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
                    Explore how our Metaverse engineering has empowered industries to break physical boundaries and build impactful, persistent digital experiences for global audiences.
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


export default MetaverseSuccessStoriesSection;
