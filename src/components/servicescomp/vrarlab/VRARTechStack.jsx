"use client";
import React, { useEffect, useRef, useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "@/components/servicescomp/aidevelopmentcomp/TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const VRARTechStack = ({ handlecontactusModal }) => {
    const controls = useAnimation();
    const ref = useRef();

    const [selectedTab, setSelectedTab] = useTabs([
        "headsets",
        "development",
        "tracking",
        "haptics",
        "platforms"
    ]);

    const textAnimation1 = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    const onScreen = async () => {
        const element = ref.current;
        if (element) {
            await controls.start("visible");
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onScreen();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const techStack = {
        "headsets": [
            "Meta Quest 3 / Pro", "Apple Vision Pro", "Microsoft HoloLens 2", "Pico 4 Enterprise", "Valve Index", "HTC Vive XR Elite", "Magic Leap 2"
        ],
        "development": [
            "Unity 2023 LTS", "Unreal Engine 5.3", "Meta Interaction SDK", "OpenXR", "Vuforia Engine", "Niantic Lightship", "ARCore / ARKit"
        ],
        "tracking": [
            "Spatial Anchors", "Eye Tracking", "Hand Tracking", "6-DOF Inside-Out Tracking", "Oculus Body Tracking", "Inside-Out Positional Tracking"
        ],
        "haptics": [
            "Haptic Gloves (SenseGlove)", "Bebop Sensors", "Teslasuit", "TactSuit x40", "Passive Haptic Proxies", "UltraLeap Mid-Air Haptics"
        ],
        "platforms": [
            "AWS Wavelength", "NVIDIA CloudXR", "Azure Remote Rendering", "SideQuest Manager", "VRChat SDK", "Meta Horizon Worlds"
        ]
    };

    const TechList = ({ items }) => (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 pb-12">
            {items.map((item, index) => (
                <div
                    key={index}
                    className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 flex items-center justify-center text-center hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_15px_rgba(59,130,246,0.15)]"
                >
                    <span className="text-gray-300 font-medium text-lg group-hover:text-blue-400 transition-colors uppercase tracking-wider">{item}</span>
                </div>
            ))}
        </div>
    );

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className="py-8 lg:py-12 px-6 lg:px-12 text-white"
        >
            <div className="py-6 mb-8 text-white">
                <h2 className="lg:w-[90%] text-2xl lg:text-4xl font-bold mb-6">
                    Spatial Tech & Hardware for Our <br />
                    <span className="text-white">
                        Advanced Immersive Labs
                    </span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    We deploy world-class XR hardware and development frameworks to ensure students master spatial computing and 3D interaction across all major platforms.
                </p>
            </div>

            <nav className="flex flex-nowrap overflow-x-auto scrollbar-hide border-b border-white/5 mb-8">
                {[
                    { id: "headsets", label: "XR Hardware" },
                    { id: "development", label: "Dev Frameworks" },
                    { id: "tracking", label: "Tracking Systems" },
                    { id: "haptics", label: "Haptics & Input" },
                    { id: "platforms", label: "Deployment Platforms" }
                ].map(tab => (
                    <TabSelector
                        key={tab.id}
                        isActive={selectedTab === tab.id}
                        onClick={() => setSelectedTab(tab.id)}
                        className={`whitespace-nowrap pb-4 px-4 text-base md:text-lg transition-all duration-300 border-b-2 font-semibold ${selectedTab === tab.id
                            ? 'border-blue-500 text-white'
                            : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-blue-500/30'
                            }`}
                    >
                        {tab.label}
                    </TabSelector>
                ))}
            </nav>

            <div className="py-6 min-h-[300px]">
                {Object.entries(techStack).map(([key, items]) => (
                    <TabPanel key={key} hidden={selectedTab !== key} className="w-full focus:outline-none">
                        <TechList items={items} />
                    </TabPanel>
                ))}
            </div>
        </motion.div>
    );
};

export default VRARTechStack;
