"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "Blockchain for Supply Chain Transparency",
        description:
            "We implemented a private Hyperledger blockchain for a global logistics firm to track pharmaceutical shipments. This reduced document processing time by 80% and eliminated counterfeit products from their supply chain.",
    },
    {
        title: "NFT-Powered Loyalty Program for Luxury Brands",
        description:
            "For a high-end fashion retailer, we developed a token-gated loyalty program using NFTs. The project increased repeat purchase rates by 45% and built a community of 50k+ highly engaged digital collectors.",
    },
    {
        title: "DeFi Yield Optimization Protocol",
        description:
            "We built a custom yield aggregator that automatically rebalances assets across multiple liquidity pools. Within 6 months of launch, the protocol reached $50M in Total Value Locked (TVL) with zero security breaches.",
    },
];

const Web3SuccessStoriesSection = () => {
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
                    Web3 Success Stories: Real-World <br />
                    Blockchain Solutions at Scale
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
                    Discover how our blockchain expertise has helped global enterprises and startups build secure, transparent, and decentralized ecosystems that drive massive value.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {stories.map((story, index) => (
                    <div
                        key={index}
                        className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/5 overflow-hidden transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
                            <div className="w-20 h-20 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
                        </div>

                        <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                            {story.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed group-hover:text-gray-300 transition-colors">
                            {story.description}
                        </p>

                        <div className="mt-6 w-full h-[1px] bg-gradient-to-r from-blue-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    </div>
                ))}
            </div>
        </motion.div>
    );
};


export default Web3SuccessStoriesSection;
