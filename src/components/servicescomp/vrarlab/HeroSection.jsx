"use client";

import React, { useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

// Note: Using the provided banner image URL directly as requested
const BANNER_IMAGE = "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/banner.jpeg+(2).png";

const HeroSection = ({ handlecontactusModal }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        border: isHovered ? "0px" : "1px solid white",
        background: isHovered
            ? "linear-gradient(180deg, #3F8AE2 0%, #2361AB 100%)" // Using similar blue gradient
            : "transparent",
        color: "white",
        padding: "12px 24px",
        fontSize: "16px",
        fontWeight: "600",
        transition: "all 0.3s ease",
        cursor: "pointer",
        transform: isHovered ? "scale(1.05)" : "scale(1)",
        borderRadius: "8px",
    };

    return (
        <div
            className="relative w-full min-h-[85vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('${BANNER_IMAGE}')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 px-6 py-20 text-center max-w-6xl mx-auto flex flex-col items-center">
                <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight">
                    VR/AR Lab Setup Company for Schools & Enterprises
                </h1>

                <p className="text-gray-200 text-lg md:text-xl lg:text-2xl mt-4 max-w-4xl mx-auto leading-relaxed">
                    While others are still experimenting with hardware, we deliver production-ready VR/AR lab solutions designed for real educational and training impact. From virtual reality lab setup to custom curriculum-aligned content, we build ecosystems that scale.
                </p>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 flex-wrap">
                    <div className="flex items-center text-white space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                        <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
                        <span className="text-sm md:text-base font-medium">Full-cycle VR/AR Lab Development</span>
                    </div>
                    <div className="flex items-center text-white space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                        <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
                        <span className="text-sm md:text-base font-medium">Seamless Curriculum & Hardware Integration</span>
                    </div>
                    <div className="flex items-center text-white space-x-2 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                        <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
                        <span className="text-sm md:text-base font-medium">ISO 27001, SOC 2 Type II, GDPR-compliant</span>
                    </div>
                </div>

                <div className="mt-12">
                    <button
                        style={buttonStyle}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={handlecontactusModal}
                        className="flex items-center gap-2 group"
                    >
                        Get Lab Proposal
                        <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
