"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGraduationCap, FaHeartbeat, FaIndustry, FaPlane, FaBriefcase } from "react-icons/fa";

const industries = [
    {
        icon: FaGraduationCap,
        title: "K-12 & Higher Education",
        description: "We transform classrooms into portals for discovery. By deploying virtual reality science labs and 14D science augmented reality modules, we help institutions boost student engagement and conceptual clarity by up to 40%. Our labs enable students to explore microscopic cells, historical monuments, or the solar system without leaving their desks."
    },
    {
        icon: FaHeartbeat,
        title: "Healthcare & Medical Sciences",
        description: "We design high-fidelity virtual reality anatomy labs and surgical suites for risk-free clinical training. Our AR VR in Cath lab simulations allow medical professionals to master complex procedures, such as catheterizations or anesthesia management, in a controlled environment, significantly reducing procedural errors."
    },
    {
        icon: FaIndustry,
        title: "Industrial & Manufacturing",
        description: "Our AR labs provide frontline workers with real-time, hands-on guidance. By overlaying digital schematics and assembly instructions onto physical machinery, we help manufacturing and logistics companies reduce production time, minimize human error, and enforce safety compliance at scale."
    },
    {
        icon: FaPlane,
        title: "Aerospace & Defense",
        description: "We build sophisticated virtual reality research labs for the aerospace sector, enabling pilots and technicians to train in high-risk scenarios without grounding expensive aircraft. Our digital twin simulations allow for virtual engine repairs and cockpit troubleshooting, accelerating upskilling by up to 4x compared to traditional methods."
    },
    {
        icon: FaBriefcase,
        title: "Corporate Training & Soft Skills",
        description: "We help enterprises scale their onboarding and empathy training through immersive simulations. Companies like Walmart use our VR lab methodology to train thousands of associates in customer service, hazard identification, and leadership, resulting in a 10-15% increase in test scores and employee confidence."
    }
];

const IndustriesSection = () => {
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
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Beyond the Classroom: Industries We Transform with AR/VR Labs</h2>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        Our AR/VR lab setup solutions are designed to address the unique challenges of diverse sectors, moving beyond traditional boundaries to deliver measurable ROI through spatial computing.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((item, index) => (
                        <motion.div
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
                            className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 transition-colors"
                        >
                            <div className="w-12 h-12 rounded-lg bg-purple-600/20 flex items-center justify-center mb-6 text-purple-400 text-2xl">
                                <item.icon />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-gray-400 leading-relaxed text-sm">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
