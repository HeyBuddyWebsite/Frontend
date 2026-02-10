"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "Immersive Virtual Reality Science Lab to Transform STEM Education",
        description:
            "We helped a premier K-12 institution revolutionize their science curriculum by deploying a state-of-the-art virtual reality science lab. By integrating over 500+ interactive simulations, we enabled students to conduct complex physics and chemistry experiments within a safe VR lab environment. The result was a 40% surge in conceptual clarity and a notable boost in overall classroom engagement.",
    },
    {
        title: "Advanced AR VR in Cath Lab for Precision Medical Training",
        description:
            "We deployed a high-fidelity AR VR in Cath lab simulation for a leading medical university to streamline their interventional cardiology training. This specialized virtual reality anatomy lab setup allowed residents to practice complex catheterizations and valve replacements in a zero-risk environment. The outcome was a significant reduction in procedural errors and a leaner, more productive clinical training operation.",
    },
    {
        title: "Collaborative Virtual Reality Research Lab for Global Innovation",
        description:
            "A top-tier research university partnered with Hey Buddy to establish a virtual reality research lab focused on collaborative engineering. Our team developed a custom multi-user environment that allowed researchers in India and NYC to interact with the same 3D prototypes in real-time. This facilitated data-driven informed decision-making, and the client experienced a 50% reduction in prototyping timelines.",
    },
];

const SuccessStoriesSection = () => {
    const controls = useAnimation();
    const ref = useRef();

    const textAnimation1 = {
        hidden: { opacity: 0, y: "20%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start("visible");
                }
            },
            { threshold: 0 }
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
        >
            <div className="py-4 text-white">
                <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                    Success Stories Showcasing Our AR/VR Lab Setup Services
                </h2>
                <p className="text-base md:text-m lg:text-xl text-white/80">
                    Our VR/AR lab expertise has powered academic and industrial endeavors across regions, capitalizing on the brilliance of spatial computing. These success stories reflect our commitment to delivering measurable impact.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12 px-2">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-lg bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-opacity-30 border border-gray-700 transition-all"
                    >
                        <h3 className="text-xl font-bold text-white mb-4">{story.title}</h3>
                        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
                            {story.description}
                        </p>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default SuccessStoriesSection;
