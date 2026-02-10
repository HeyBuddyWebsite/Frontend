"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const stats = [
    {
        value: "400%",
        label: "faster training speed for students in a vr lab compared to traditional classroom settings",
    },
    {
        value: "75%",
        label: "higher knowledge retention rate when using a virtual reality science lab for complex subjects",
    },
    {
        value: "275%",
        label: "increase in student confidence to apply learned skills after training in ar vr reality labs",
    },
    {
        value: "30%",
        label: "improvement in overall classroom engagement through augmented reality labs modules",
    },
    {
        value: "52%",
        label: "more cost-effective than physical labs when managing a vr lab setup school for large cohorts",
    },
    {
        value: "3.75x",
        label: "stronger emotional connection to learning content within a virtual reality lab vs. 2D e-learning",
    },
];

const StatsSection = () => {
    const controls = useAnimation();
    const ref = useRef();
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    controls.start("visible");
                    setHasAnimated(true);
                }
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [controls, hasAnimated]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect for children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section ref={ref} className="py-20 px-6 lg:px-12 max-w-7xl mx-auto text-white">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={hasAnimated ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl lg:text-5xl font-bold mb-6 leading-tight">
                    The Real-World Impact of Virtual Reality Lab for Schools: <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Why VR/AR Lab Setup is the New Standard
                    </span>
                </h2>
                <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                    Deploying a VR/AR lab is no longer about following a trend; it is about hitting performance benchmarks that traditional classrooms simply cannot reach. From the virtual reality science lab to professional ar vr reality labs, the data is clear: spatial learning is the new standard for excellence.
                </p>
            </motion.div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 group"
                    >
                        <h3 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 origin-left">
                            {stat.value}
                        </h3>
                        <p className="text-gray-300 leading-relaxed text-lg">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default StatsSection;
