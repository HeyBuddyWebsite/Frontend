"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const steps = [
    {
        title: "Discovery & Strategic Planning",
        description: "We begin by aligning technology with your educational vision through deep assessment. Our team evaluates user capacity, defines learning objectives, and audits your space and budget to create a robust funding and grant strategy that ensures long-term institutional growth."
    },
    {
        title: "Lab Design & Infrastructure Setup",
        description: "We transform physical spaces into high-performance immersive hubs through expert spatial mapping. By integrating safety-first layout designs, custom laboratory furniture, and high-speed network infrastructure, we build a foundation capable of supporting heavy data loads and multi-user interaction."
    },
    {
        title: "Hardware Procurement & Calibration",
        description: "We equip your facility with enterprise-grade HMDs and specialized STEM tools. Our process includes full Mobile Device Management (MDM) provisioning, 3D printer integration, and rigorous stress testing to ensure every sensor and headset is perfectly calibrated for immediate classroom use."
    },
    {
        title: "Content Deployment & LMS Integration",
        description: "We synchronize your lab with a world-class, grade-wise certified curriculum. By bridging our 550+ STEM simulations and 14D science augmented reality modules with your existing LMS via Single Sign-On (SSO), we provide a personalized and frictionless learning experience for every student."
    },
    {
        title: "Training, Launch & Excellence",
        description: "We guarantee successful adoption through on-site faculty workshops and student onboarding. Our commitment extends beyond the launch with pilot program feedback loops, intellectual property (IP) mentorship for student projects, and continuous maintenance to keep your content up to date."
    }
];

const ProcessSection = () => {
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
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our VR/AR Lab Implementation Process</h2>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        The right execution strategy ensures a seamless transition from traditional classrooms to a world-class AR/VR lab. We follow a rigorous, enterprise-grade methodology built around institutional goals, safety, and long-term scalability.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, x: -20 },
                                visible: {
                                    opacity: 1,
                                    x: 0,
                                    transition: { duration: 0.5, delay: index * 0.15 }
                                }
                            }}
                            className="flex gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
                        >
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center text-xl font-bold text-blue-400">
                                {index + 1}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                                <p className="text-gray-300 leading-relaxed text-base">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
