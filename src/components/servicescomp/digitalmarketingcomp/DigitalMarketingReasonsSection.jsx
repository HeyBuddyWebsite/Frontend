"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import {
    FaAd,
    FaSearchDollar,
    FaChartLine,
    FaMagic,
    FaRobot,
    FaUserAstronaut,
    FaBullseye,
    FaLink,
    FaMobileAlt,
} from "react-icons/fa";

const reasons = [
    {
        icon: FaBullseye,
        title: "Performance First",
        description:
            "We focus on high-intent lead generation and conversion optimization. Every dollar spent is tracked against measurable business outcomes.",
    },
    {
        icon: FaRobot,
        title: "AI-Optimized Campaigns",
        description:
            "We use AI-driven bidding and creative optimization to ensure your ads are seen by the right person at the absolute lowest cost.",
    },
    {
        icon: FaMagic,
        title: "Deep Personalization",
        description:
            "We build dynamic marketing funnels that adapt in real-time to user behavior, increasing engagement and lifetime value.",
    },
    {
        icon: FaSearchDollar,
        title: "Strategic SEO & Content",
        description:
            "Beyond keywords, we build topical authority through data-backed content strategies that dominate search rankings for the long term.",
    },
    {
        icon: FaAd,
        title: "Omnichannel Dominance",
        description:
            "From Meta and Google to LinkedIn and TikTok, we ensure your brand message is consistent and high-performing across all platforms.",
    },
    {
        icon: FaChartLine,
        title: "Real-Time Analytics",
        description:
            "Our custom dashboards provide complete transparency, allowing you to see the direct impact of our strategies on your bottom line.",
    },
    {
        icon: FaUserAstronaut,
        title: "Conversion Engineering",
        description:
            "We don't just drive traffic; we optimize your landing pages and user journeys to ensure maximum ROI from every visitor.",
    },
    {
        icon: FaLink,
        title: "Authority Building",
        description:
            "We secure high-quality PR and backlink placements that improve your domain authority and brand credibility in your industry.",
    },
    {
        icon: FaMobileAlt,
        title: "Mobile-First Strategy",
        description:
            "With most digital consumption happening on mobile, we optimize every touchpoint for the highest-performing mobile experience.",
    },
];

const DigitalMarketingReasonsSection = () => {
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
            className="py-6 lg:py-8 text-white"
        >
            <div className="py-4 mb-10 text-white">
                <h2 className="lg:w-[90%] text-2xl lg:text-4xl font-bold mb-6">
                    Premium Performance Marketing <br />
                    Where Strategy Meets Scale
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    Hey Buddy is a growth-obsessed partner for brands ready to dominate their market. We combine data science with creative excellence to deliver marketing that doesn&apos;t just look good—it sells.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reasons.map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                        <div
                            key={index}
                            className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 overflow-hidden transition-all duration-300 hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.1)]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="mb-6 p-3 w-fit rounded-xl bg-white/10 text-white group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                    <IconComponent className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default DigitalMarketingReasonsSection;
