"use client";

import React from "react";
import { motion } from "framer-motion";

const ModelingCTASection = ({ handlecontactusModal }) => {
    return (
        <div className="py-16 px-6 lg:px-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-900 px-8 py-12 shadow-2xl lg:px-16 lg:py-20">
                {/* Background glow effects */}
                <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-400/20 blur-3xl" />
                <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl" />

                <div className="relative z-10 flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 text-3xl font-bold tracking-tight text-white lg:text-5xl"
                    >
                        Bring Your Vision to Life in 3D
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mb-10 max-w-2xl text-lg text-blue-100 lg:text-xl"
                    >
                        Partner with Hey Buddy for high-fidelity 3D modeling, photorealistic rendering, and production-ready assets. From characters to entire virtual worlds, we build the dimensions of your success.
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
                        Get Free 3D Modeling Consultation
                    </motion.button>
                </div>
            </div>
        </div>
    );
};

export default ModelingCTASection;
