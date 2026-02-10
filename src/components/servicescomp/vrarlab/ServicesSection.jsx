"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaChess, FaTools, FaBookOpen, FaDna, FaIndustry,
    FaMobileAlt, FaUsers, FaHandPaper, FaCloud
} from "react-icons/fa";

const services = [
    {
        icon: FaChess,
        title: "1. VR/AR Lab Strategy & Consulting",
        description: "Not sure which \"reality\" fits your curriculum? We provide collaborative strategy workshops and a comprehensive AR/VR lab setup readiness assessment. We’ll help you decide when to use an AR lab for world-overlay learning versus a VR lab for total immersion.",
        points: ["AR/VR Lab Setup Cost ROI Forecasting", "Readiness Scoring & MVP Blueprints", "Hardware & Software Vendor Selection", "Roadmap for VR Lab Expansion", "Multi-Phase Strategy Workshops"]
    },
    {
        icon: FaTools,
        title: "2. Custom VR Lab Setup & Infrastructure",
        description: "We provide end-to-end virtual reality lab setup services, from designing the physical spatial tracking area to the local server architecture. We build high-performance VR lab environments that handle high-fidelity simulations with zero latency.",
        points: ["High-End HMD Integration (Meta, Vive, Apple)", "Spatial Mapping & Boundary Design", "Zero-Downtime VR Lab Deployment", "Stationed & Tetherless Configurations", "Performance SLAs & Monitoring"]
    },
    {
        icon: FaBookOpen,
        title: "3. Immersive Content & Curriculum Integration",
        description: "A virtual reality lab for schools is only as good as the lessons inside it. We specialize in connecting new immersive modules with your current syllabus. We ensure your ar vr lab content happens smoothly, with real-time data tracking and zero classroom friction.",
        points: ["LMS & Gradebook Connectors", "Legacy Content Compatibility", "Zero-Downtime Software Updates", "Subject-Wise Module Mapping", "Security & Privacy Protocols", "Usage Analytics Integration"]
    },
    {
        icon: FaDna,
        title: "4. Virtual Reality Science & Anatomy Lab Development",
        description: "We build domain-specific environments, ranging from a virtual reality anatomy lab to a comprehensive virtual reality science lab. These setups allow students to explore the human body or chemical reactions in a safe, repeatable digital sandbox.",
        points: ["AR VR in Cath Lab Simulations", "High-Fidelity 3D Organ Models", "Virtual Specimen Libraries", "Physics & Chemistry Engine Training", "Real-Time Interactive Feedback"]
    },
    {
        icon: FaIndustry,
        title: "5. Enterprise Augmented Reality Labs",
        description: "We create custom augmented reality labs designed to overlay digital intelligence onto the physical world. From 14d science augmented reality modules to industrial repair guides, we build multimodal AR solutions that enhance skill development while maintaining safety.",
        points: ["Guided Repair & Assembly Overlays", "Real-Time Sentiment & Safety Analysis", "Industry Jargon Trained Models", "Multi-Format AR Parsing", "Remote Expert Collaboration Tools"]
    },
    {
        icon: FaMobileAlt,
        title: "6. AR/VR App & WebXR Development",
        description: "We specialize in building software that brings the virtual reality lab experience to any device. Whether you need a native app for meta ar vr labs hardware or a browser-based WebXR solution, our team builds software that thinks in 3D.",
        points: ["Cross-Platform Logic (iOS/Android)", "User Behavior Modeling", "Offline Simulation Capabilities", "App Store & Enterprise Ready", "Interactive 3D UI/UX"]
    },
    {
        icon: FaUsers,
        title: "7. Collaborative Virtual Reality Research Labs",
        description: "Our team builds ar vr reality labs that allow for complex multi-user interaction and remote collaboration. Our virtual reality research lab setups focus on context-aware environments where multiple users can work on the same 3D model in real-time.",
        points: ["Multi-User Avatar Systems", "Real-Time Voice Spatialization", "Collaborative Whiteboarding", "Session Recording & Playback", "Research Data Dashboards"]
    },
    {
        icon: FaHandPaper,
        title: "8. Advanced Spatial Computing & Haptic Integration",
        description: "Why settle for just seeing when you can feel? Our ar/vr lab development involves fine-tuning hardware like brain computer interface lab mit standards and haptic vests to create a sense of touch and \"presence\" within the digital environment.",
        points: ["Eye & Gaze Tracking Integration", "Hand Tracking Optimization", "Fact-Checking Spatial Layers", "Multi-Sense Input Handling", "Hardware Portability Testing"]
    },
    {
        icon: FaCloud,
        title: "9. Hybrid & Remote AR/VR Lab Deployment",
        description: "Automate how your institution manages remote learning with decentralized ar vr labs. We create systems capable of deploying simulations to students at home while keeping the central ar vr lab nyc or ar vr lab in india as the command center.",
        points: ["Remote Device Management (MDM)", "Cloud-Based Content Streaming", "Collaborative Approval Workflows", "Automated Failure Recovery", "Usage & Decision Logging", "Global Deployment Support"]
    }
];

const ServicesSection = () => {
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) controls.start("visible");
            },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [controls]);

    return (
        <section ref={ref} className="py-20 px-6 bg-black text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our VR/AR Lab Development Services</h2>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        At Hey Buddy, we believe spatial technology is most effective when it bridges the gap between theory and practice. Our services are designed to help you adopt, build, and scale your AR lab and VR lab environments to deliver measurable results.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
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
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors group"
                        >
                            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <service.icon className="text-2xl text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4 min-h-[56px] flex items-center">{service.title}</h3>
                            <p className="text-gray-400 mb-6 text-sm leading-relaxed">{service.description}</p>
                            <ul className="space-y-2">
                                {service.points.slice(0, 3).map((point, i) => ( // Showing top 3 points to save space/keep clean
                                    <li key={i} className="flex items-start text-sm text-gray-300">
                                        <span className="text-blue-400 mr-2 mt-1">•</span>
                                        {point}
                                    </li>
                                ))}
                                {service.points.length > 3 && (
                                    <li className="text-xs text-gray-500 italic mt-2">+ {service.points.length - 3} more...</li>
                                )}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
