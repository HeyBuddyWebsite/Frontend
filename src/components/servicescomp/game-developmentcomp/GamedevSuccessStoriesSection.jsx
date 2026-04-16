"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const stories = [
    {
        title: "Interactive Mobile Game to Promote eCommerce Deals and Offers",
        description:
            "Hey Buddy developed an interactive mobile game for a leading eCommerce brand with in-game challenges related to the brand's offerings. The game featured exclusive discounts and rewards for top players, encouraging users to explore the brand's products while having fun. The mobile game phenomenally exceeded mobile game expectations. It doubled user engagement and led to an increase of 20% increase sales. Players enjoyed the interactive experience, and the brand reinforced its connection with its audience making it more profound.",
    },
    {
        icon: null,
        title: "Collaboration to Realize Metaverse Vision",
        description:
            "Hey Buddy extended its expertise as a metaverse game development company to realise the vision of a tech startup. We designed and developed a cutting-edge metaverse game that seamlessly integrated virtual and augmented reality experiences for a unique and completely immersive digital environment. The game received phenomenal reviews for its innovation and attracted an audience from a wide game - tech enthusiasts and mainstream media. As a result, the startup gained industry recognition and attracted potential partnerships and investors. We look forward to more such collaboration.",
    },
    {
        title: "Ai-Integration To Revitalize A Flagship Gaming Title",
        description:
            "Hey Buddy’s unmatched AI expertise helped an established gaming company revitalize its flagship gaming title. We integrated sophisticated AI algorithms into the game, to introduce PCG, adaptive gameplay, and AI-enable intelligent opponents that blew away their audience. The outcome, a 30% increase in active players and a 25% boost to in-game purchases. Players applauded the dynamic experience and our client solidified the game's position as a leading title in the competitive gaming market.",
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
                    Digital Joysticks, Real Rewards: <br />
                    Success Stories with Hey Buddy
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl">
                    Hey Buddy offers its services to clients working in different industries and different scales. Here are the success stories that make us the best gaming development company in India.
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
