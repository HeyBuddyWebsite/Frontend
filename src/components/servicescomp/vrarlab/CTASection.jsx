"use client";

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const CTASection = ({ handlecontactusModal }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        border: isHovered ? "0px" : "1px solid white",
        background: isHovered
            ? "linear-gradient(180deg, #3F8AE2 0%, #2361AB 100%)"
            : "transparent",
        color: "white",
        padding: "16px 40px",
        fontSize: "18px",
        fontWeight: "600",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        gap: "10px",
    };

    return (
        <section className="bg-black py-24 relative overflow-hidden">
            {/* Background gradient/image simulation */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="max-w-5xl mx-auto px-6 text-center relative z-10"
            >
                <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
                    Ready to Transform Your Institution with AR/VR?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Let's discuss how our AR/VR lab setup can drive innovation and deliver measurable learning results for your students.
                </p>

                <div className="flex justify-center">
                    <button
                        onClick={handlecontactusModal}
                        style={buttonStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="group"
                    >
                        Check Setup Costs
                        <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </motion.div>
        </section>
    );
};

export default CTASection;
