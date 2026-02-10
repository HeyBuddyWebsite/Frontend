"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const reasons = [
    {
        title: "Comprehensive Lab Ecosystem",
        description: "We provide a total school solution that integrates AR lab and VR lab technology with broader STEM tools. Our setups feature DIY Kits for Robotics, AI, and IoT, alongside 3D printers and specialized software platforms for coding and virtual simulation. This creates a holistic environment for experiential learning."
    },
    {
        title: "Certified Graded Curriculum",
        description: "Our methodology includes a graded progressive curriculum deployment to ensure students master complex concepts over time. We provide a 24x7 LMS subscription for students and teachers, featuring multi-lingual content, automated assessments, and detailed progress reports with certification."
    },
    {
        title: "Education-First Hardware",
        description: "We avoid consumer-grade pitfalls by providing hardware engineered for a \"seamless classroom experience\". Our headsets feature efficient offline usage, built-in mobile device management for teacher control, and 128 GB ROM | 6 GB RAM to handle intensive virtual reality anatomy lab models."
    },
    {
        title: "Training & Execution Support",
        description: "We ensure long-term learning outcomes through dedicated \"End-Mile Delivery\". Our team provides comprehensive training for both teachers and students through a hybrid mode of on-site workshops and live webinars, ensuring the virtual reality research lab is fully utilized."
    },
    {
        title: "Path to Student Excellence",
        description: "Our goal is to prepare \"Future Ready Students\" who move beyond consumption to creation. We mentor students through projects, exhibitions, and community outreach, providing them with the support needed to compete in global events and even file their own Patents & IP."
    }
];

const WhyChooseSection = () => {
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
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Why Choose Hey Buddy for Your VR/AR Lab?</h2>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        We don't just supply equipment; we build future-ready ecosystems. Our "World Class STEM Curriculum & Unique Methodology" ensures that every AR/VR lab setup we deliver is a sustainable center for innovation and high-level student achievement.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason, index) => (
                        <motion.article
                            key={index}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: index * 0.1 }
                                }
                            }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/50 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{reason.description}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseSection;
