"use client";

import React from "react";
import { motion } from "framer-motion";

const MetaverseCTASection = ({ handlecontactusModal }) => {
    return (
        <div className="py-16 px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-600 to-indigo-900 px-8 py-12 shadow-2xl lg:px-16 lg:py-20">
                {/* Background glow effects */}
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 text-3xl font-bold tracking-tight text-white lg:text-5xl"
                    >
                        Ready to Build Your Corner of the Metaverse?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-10 max-w-2xl text-lg text-purple-100 lg:text-xl"
                    >
                        From conceptualizing your virtual world to building persistent digital ecosystems, partner with Hey Buddy to lead the Metaverse revolution. Let&apos;s build the future together.
                    </motion.p>
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handlecontactusModal}
                        className="rounded-full bg-white px-8 py-4 text-lg font-bold text-purple-900 shadow-xl transition-all hover:bg-purple-50"
                    >
                        Get Free Metaverse Consultation
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default MetaverseCTASection;
