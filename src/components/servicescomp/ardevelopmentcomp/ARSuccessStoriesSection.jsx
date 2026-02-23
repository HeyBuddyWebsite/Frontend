"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "AR Furniture Visualizer for Global Retailer",
        description:
            "We developed an AR application that allowed customers to virtually place furniture in their homes before purchasing. This led to a 40% reduction in product returns and a significant increase in online sales conversion.",
    },
    {
        title: "Interactive AR Marketing for Beverage Brand",
        description:
            "We created a WebAR campaign where users could unlock 3D animations from product labels. The campaign achieved over 500k unique engagements and boosted brand recall by 25% among the target demographic.",
    },
    {
        title: "AR-Guided Maintenance for Manufacturing",
        description:
            "For a leading industrial firm, we built an AR training tool that provided step-by-step repair instructions overlaid on machinery. Training time was reduced by 30%, and on-site errors decreased by 15%.",
    },
];

const ARSuccessStoriesSection = () => {
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
                    Impactful Success Stories Driven by <br />
                    Our AR Development Expertise
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
                    We have helped brands across the globe leverage Augmented Reality to create deeper connections with their users and achieve real business efficiency.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="w-20 h-20 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                            {story.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            {story.description}
                        </p>

                        <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};


export default ARSuccessStoriesSection;
