"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const solutions = [
    {
        title: "Comprehensive AR/VR Lab Infrastructure & School Setup",
        description: "We provide a full-cycle ar/vr lab setup that transforms traditional spaces into immersive innovation hubs. Our focus is on supplying enterprise-grade VR lab hardware, 3D printers, and software platforms for coding and AI to create a complete ecosystem for experiential learning.",
        keyComponents: "DIY Robotics & IoT kits, 3D printing stations, high-fidelity AR & VR HMDs, and virtual simulation software."
    },
    {
        title: "Graded Progressive Curriculum Deployment",
        description: "We deliver a structured learning path tailored to different grade levels to ensure concept mastery. By integrating virtual reality science lab modules and 14d science augmented reality content, we provide students with 24x7 access to world-class STEM resources through a centralized platform.",
        keyComponents: "24x7 LMS subscription, multi-lingual content, automated assessments, and progress reports with certification."
    },
    {
        title: "End-to-End Training & Execution Support",
        description: "Our role as an ar/vr lab setup company extends beyond installation to ensure long-term educational outcomes. We provide \"End-Mile Delivery\" through hybrid-mode training for both teachers and students, ensuring the virtual reality research lab environment is utilized to its full potential.",
        keyComponents: "Hybrid workshops, teacher/student training sessions, webinars, and continuous technical execution support."
    },
    {
        title: "Future-Ready Student Excellence Programs",
        description: "We prepare the next generation for the industrial metaverse by fostering a culture of high-level innovation and outreach. Our ar vr lab programs encourage students to move beyond the classroom by participating in global competitions and filing patents, turning digital skills into tangible intellectual property.",
        keyComponents: "Project exhibitions, community outreach, patent & IP support, and national-level STEM competitions."
    },
    {
        title: "Specialized Virtual Reality Anatomy & Science Labs",
        description: "We build domain-specific environments that allow for the safe exploration of high-stakes subjects. Whether it is a virtual reality anatomy lab or a specialized ar vr in cath lab for medical training, we offer precision-driven simulations that track student progress and accuracy in real-time.",
        keyComponents: "Cadaver-free anatomy exploration, risk-free chemical reaction modeling, and medical procedure simulations."
    },
    {
        title: "Scalable AR/VR Reality Labs for Research",
        description: "For institutions aiming to match the standards of the Harvard ar vr lab or Stanford ar vr lab, we design high-end research facilities. These ar vr reality labs are built for multi-user collaboration and data-heavy research, providing a scalable infrastructure that grows with your institution’s needs.",
        keyComponents: "Multi-user synchronization, advanced spatial mapping, and cross-platform research dashboards."
    }
];

const SolutionsSection = () => {
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
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our End-To-End VR/AR Lab Solutions</h2>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        We build AR lab and VR lab solutions that solve real-world pedagogical and training challenges. Each solution is designed around a "World Class STEM Curriculum" and unique methodology to ensure technology serves as a bridge to deeper understanding.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {solutions.map((sol, index) => (
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
                            className="bg-[#111] border border-white/10 rounded-2xl p-8 flex flex-col hover:border-blue-500/50 transition-colors"
                        >
                            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 font-bold mb-6">
                                {index + 1}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{sol.title}</h3>
                            <p className="text-gray-400 mb-6 flex-1 text-sm leading-relaxed">{sol.description}</p>
                            <div className="pt-6 border-t border-white/10">
                                <p className="text-sm">
                                    <span className="text-blue-400 font-semibold display-block mb-1">Key Components:</span>
                                    <span className="text-gray-300 block">{sol.keyComponents}</span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SolutionsSection;
