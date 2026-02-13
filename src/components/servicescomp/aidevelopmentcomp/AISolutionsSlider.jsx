"use client";

import React from "react";
import { motion } from "framer-motion";

const AISolutionsSlider = ({ listData, textData }) => {
    // Duplicate the list to create a seamless infinite loop
    const duplicatedList = [...listData, ...listData];

    return (
        <div className="py-8 text-white overflow-hidden">
            <div>
                {textData.map((section, index) => (
                    <div className="mb-10 px-6" key={index}>
                        <h2 className="text-2xl lg:text-4xl font-bold mb-4 text-white">
                            {section.heading}
                        </h2>
                        <p className="text-lg text-gray-300 max-w-4xl leading-relaxed">
                            {section.subtext}
                        </p>
                    </div>
                ))}
            </div>

            <div className="relative w-full">
                {/* Gradient Masks for fading edges */}
                <div className="absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                <motion.div
                    className="flex gap-6 w-max"
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40, // Adjust speed here (higher = slower)
                        repeat: Infinity,
                        ease: "linear",
                    }}
                >
                    {duplicatedList.map((section, index) => {
                        const IconComponent = section.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/5 transition-all duration-500 hover:border-white/50 hover:bg-white/10 w-[350px] md:w-[400px] flex-shrink-0"
                            >
                                {/* Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-white/10 text-white transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]">
                                        {IconComponent && <IconComponent className="w-7 h-7" />}
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-4 transition-colors duration-300">
                                        {section.heading}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300 text-sm">
                                        {section.para}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default AISolutionsSlider;
