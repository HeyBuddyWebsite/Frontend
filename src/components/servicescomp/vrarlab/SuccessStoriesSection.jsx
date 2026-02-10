"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "Immersive Virtual Reality Science Lab to Transform STEM Education",
        body: "We helped a premier K-12 institution revolutionize their science curriculum by deploying a state-of-the-art virtual reality science lab. By integrating over 500+ interactive simulations, we enabled students to conduct complex physics and chemistry experiments within a safe VR lab environment. The result was a 40% surge in conceptual clarity and a notable boost in overall classroom engagement."
    },
    {
        title: "Advanced AR VR in Cath Lab for Precision Medical Training",
        body: "We deployed a high-fidelity AR VR in Cath lab simulation for a leading medical university to streamline their interventional cardiology training. This specialized virtual reality anatomy lab setup allowed residents to practice complex catheterizations and valve replacements in a zero-risk environment. The outcome was a significant reduction in procedural errors and a leaner, more productive clinical training operation."
    },
    {
        title: "Collaborative Virtual Reality Research Lab for Global Innovation",
        body: "A top-tier research university partnered with Hey Buddy to establish a virtual reality research lab focused on collaborative engineering. Our team developed a custom multi-user environment that allowed researchers in India and NYC to interact with the same 3D prototypes in real-time. This facilitated data-driven informed decision-making, and the client experienced a 50% reduction in prototyping timelines, helping their innovation strategies soar higher than ever."
    }
];

const SuccessStoriesSection = () => {
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
        <section ref={ref} className="py-20 px-6 bg-transparent text-white">
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
                        Success Stories Showcasing Our AR/VR Lab Setup Services
                    </h2>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        Our VR/AR lab expertise has powered academic and industrial endeavors across regions, capitalizing on the brilliance of spatial computing. These success stories reflect our commitment as a leading AR/VR lab setup company to delivering measurable impact through immersive technology.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {stories.map((story, index) => (
                        <motion.article
                            key={index}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: index * 0.15 }
                                }
                            }}
                            className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-colors"
                        >
                            <h3 className="text-xl font-bold text-white mb-4 leading-tight">{story.title}</h3>
                            <p className="text-gray-300 leading-relaxed text-sm">{story.body}</p>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SuccessStoriesSection;
