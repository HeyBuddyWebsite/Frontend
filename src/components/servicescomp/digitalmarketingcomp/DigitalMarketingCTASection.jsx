"use client";

import React from "react";
import { motion } from "framer-motion";

const DigitalMarketingCTASection = ({ handlecontactusModal }) => {
    return (
        <div className="py-16 px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 px-8 py-12 shadow-2xl lg:px-16 lg:py-20">
                {/* Background glow effects */}
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 text-3xl font-bold tracking-tight text-white lg:text-5xl"
                    >
                        Scale Your Brand Authority
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-10 max-w-2xl text-lg text-blue-100 lg:text-xl"
                    >
                        From AI-driven performance marketing to world-class SEO, partner with Hey Buddy to dominate your industry. Let&apos;s build a strategy that delivers exponential growth.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlecontactusModal}
                        className="rounded-full bg-white px-8 py-4 text-lg font-bold text-blue-900 shadow-xl transition-all hover:bg-blue-50"
                    >
                        Claim Your Free Strategy Audit
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default DigitalMarketingCTASection;
