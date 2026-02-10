"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@material-tailwind/react";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaArrowRight } from "react-icons/fa";

const BANNER_IMAGE =
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/banner.jpeg+(2).png";

const HeroSection = ({ handlecontactusModal }) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonHeader = {
        border: isHovered ? "0px" : "1px solid white",
        background: isHovered
            ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
            : "transparent",
        color: "white",
        padding: "10px 20px",
        fontSize: "16px",
        transition: "background-color 0.3s, transform 0.3s",
        cursor: "pointer",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
    };

    return (
        <div
            className="relative w-full min-h-[70vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url('${BANNER_IMAGE}')`,
            }}
        >
            <div className="absolute inset-0 bg-black/60" />
            <div className="relative z-10 px-6 py-16 md:py-24 text-center max-w-5xl mx-auto">
                <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                    Robotics Lab Setup for Education
                </h1>
                <p className="text-white text-base md:text-lg lg:text-xl mt-4 max-w-4xl mx-auto leading-relaxed">
                    We build future-ready robotics labs that empower students to design, build, and program autonomous machines. From modular kits to advanced AI-integrated robotics, we provide a complete ecosystem for hands-on STEM learning.
                </p>
                <div className="mt-6 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 lg:gap-6 flex-wrap">
                    <div className="flex items-center text-white space-x-2">
                        <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
                        <span className="text-sm md:text-base">Custom Lab Design & Setup</span>
                    </div>
                    <div className="flex items-center text-white space-x-2">
                        <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
                        <span className="text-sm md:text-base">K-12 Aligned Curriculum</span>
                    </div>
                    <div className="flex items-center text-white space-x-2">
                        <AiFillCheckCircle className="w-5 h-5 text-[#6FCF97] flex-shrink-0" />
                        <span className="text-sm md:text-base">Teacher Training Certified</span>
                    </div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                    <Button
                        style={buttonHeader}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        className="text-lg md:text-xl lg:text-2xl flex items-center gap-2"
                        onClick={handlecontactusModal}
                    >
                        Get Lab Proposal
                        <FaArrowRight className="text-sm md:text-base lg:text-lg" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
