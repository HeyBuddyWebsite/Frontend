"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaGamepad,
    FaUsers,
    FaMobileAlt,
    FaChartLine,
    FaDownload,
    FaGlobe,
} from "react-icons/fa";

const stats = [
    {
        icon: FaMapMarkerAlt,
        title: "Enhanced Brand Engagement",
        description: "Gaming offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    },
    {
        icon: FaUsers,
        title: "Increased User Retention",
        description: "Games have an inherent ability to keep users hooked and invested. By incorporating addictive gameplay mechanics, your business can boost user retention, ensuring that your audience keeps coming back for more, and strengthening brand loyalty over time.",
    },
    {
        icon: FaGlobe,
        title: "Best Way for Brand Awareness",
        description: "Gaming is a powerful tool to aware, educate and train your audience on your products. Create immersive experiences that communicate your brand message to your customers and inform them about your products or services. Thus, merging entertainment and marketing for the best possible outcomes.",
    },
    {
        icon: FaChartLine,
        title: "Data-Driven Insights",
        description: "Games generate a wealth of data and information about player behaviour and preferences. Leverage it to gain deep audience insights, refine your marketing strategies, and make data-driven impactful decisions that get you the best business outcomes.",
    },
    {
        icon: FaMobileAlt,
        title: "Cross-Platform Reach",
        description: "Reach your audience across various platforms and devices. From mobile and tablets to PCs, consoles, or VR, be present where your audience is and enjoy a broader reach. Gaming ensures that your message is accessible to a diverse and widespread audience.",
    },
    {
        icon: FaGamepad,
        title: "Innovative Marketing Opportunities",
        description: "Games offer innovative marketing avenues by integrating your brand seamlessly into gaming storylines and environments. Utilize in-game advertising, or create branded mini-games for hyper-interactive campaigns, to enhance brand visibility and brand recall.",
    },
];

const GamedevOpportunitySection = () => {
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
            className="py-4 text-white"
        >
            <div className="py-2 mb-2 text-white">
                <h2 className="lg:w-[90%] text-2xl lg:text-4xl font-bold mb-3 text-white">
                    Power up Your Brand and Press Start for Profit with Game Development - Your Gamified Success Awaits!
                </h2>
                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-4xl">
                    Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {stats.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <motion.figure
                            key={index}
                            whileHover={{ y: -5 }}
                            className="relative group flex flex-col p-4 rounded-xl h-full w-full bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <blockquote className="relative z-10">
                                <div className="mb-4 p-2.5 w-fit rounded-lg bg-white/10 text-white transition-colors duration-300">
                                    <IconComponent className="h-5 w-5" />
                                </div>
                                <div className="text-xl font-bold text-white mb-2 transition-colors duration-300">
                                    {item.title}
                                </div>
                                <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                                    {item.description}
                                </p>
                            </blockquote>
                        </motion.figure>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default GamedevOpportunitySection;
