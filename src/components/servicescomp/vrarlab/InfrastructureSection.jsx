"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { AiFillCheckCircle } from "react-icons/ai";

const features = [
    {
        title: "Efficient Offline Usage",
        desc: "Our headsets function perfectly without a constant internet connection, preventing classroom downtime."
    },
    {
        title: "Built-in Mobile Device Management (MDM)",
        desc: "Centralized control for teachers to launch apps and monitor all student views in real-time."
    },
    {
        title: "High-Performance Internals",
        desc: "Equipped with 128 GB ROM and 6 GB RAM to handle complex virtual reality anatomy lab models without lag."
    },
    {
        title: "Massive Content Storage",
        desc: "Large internal capacity specifically designed to add more custom VR Lab modules over time."
    },
    {
        title: "Pre-loaded Ecosystem",
        desc: "Your AR/VR Lab setup arrives \"Plug-and-Play\" with a library of curriculum-aligned content already installed."
    },
    {
        title: "Educational OS",
        desc: "A proprietary operating system designed for focus, removing gaming distractions and non-essential apps."
    }
];

const InfrastructureSection = () => {
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) controls.start("visible");
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [controls]);

    return (
        <section ref={ref} className="py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                        Education-First Hardware for a Seamless Classroom Experience
                    </h2>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        To avoid the pitfalls of consumer-grade electronics, we provide proprietary hardware engineered specifically for the rigorous demands of an institutional VR Lab.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: index * 0.1 }
                                }
                            }}
                            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all"
                        >
                            <div className="flex items-start gap-4">
                                <AiFillCheckCircle className="w-6 h-6 text-[#6FCF97] flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfrastructureSection;
