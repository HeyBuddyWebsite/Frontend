"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "GlobalRetail Co: AI-Driven Supply Chain",
        description:
            "We built a bespoke inventory management system for a global retail giant, integrating predictive AI to forecast demand. The solution reduced stockouts by 40% and resulted in a 25% decrease in operational costs within the first six months.",
    },
    {
        title: "FinStream: Real-Time Analytics Portal",
        description:
            "A custom-built financial analytics dashboard that processes millions of transactions in real-time. We implemented military-grade security and a high-performance backend, leading to a 50% faster decision-making process for their executive team.",
    },
    {
        title: "EcoManufacture: Automated Workflow Engine",
        description:
            "We engineered a bespoke ERP and workflow automation tool for an industrial manufacturer. The legacy-to-modern migration allowed for 100% cloud-based operations, increasing production speed by 35% and eliminating data silos.",
    },
];

const CustomSoftwareSuccessStoriesSection = () => {
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
                    Custom Software Success Stories: Engineering <br />
                    Enterprise Efficiency
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
                    Witness the power of tailored code. Our success stories demonstrate how bespoke software solutions solve complex business problems, drive ROI, and create lasting competitive advantages.
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


export default CustomSoftwareSuccessStoriesSection;
