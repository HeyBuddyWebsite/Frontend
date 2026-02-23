"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "Multiplayer Battle Royale: Scaling for Millions",
        description:
            "We built a cross-platform battle royale game from scratch, implementing a custom backend that handled 100k concurrent players at launch. The game reached 5M downloads in its first month with zero server downtime.",
    },
    {
        icon: null,
        title: "Hyper-Casual Hit: Top of the Charts",
        description:
            "For a leading publisher, we developed a minimalist puzzle game with addictive mechanics. Using data-driven iteration, we optimized the D1 retention from 25% to 42%, propelling the game to the top 10 in the US App Store.",
    },
    {
        title: "Gamified Brand Experience for Automotive Leader",
        description:
            "We created an immersive 3D racing game for a car manufacturer to showcase their new EV lineup. The game saw 1M+ plays and increased dealership test-drive bookings by 18% during the campaign period.",
    },
];

const GamedevSuccessStoriesSection = () => {
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
                    Leveling Up Our Clients: <br />
                    Game Development Success Stories
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
                    From independent studios to global brands, we help our partners turn pixels into profit. Explore how our gaming expertise creates industry-leading engagement.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="w-20 h-20 bg-red-500/20 blur-3xl rounded-full pointer-events-none" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors duration-300 leading-tight">
                            {story.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            {story.description}
                        </p>

                        <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-red-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};


export default GamedevSuccessStoriesSection;
