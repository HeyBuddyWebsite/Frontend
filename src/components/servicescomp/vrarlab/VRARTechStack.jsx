"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "@/components/servicescomp/aidevelopmentcomp/TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@material-tailwind/react";

const VRARTechStack = ({ handlecontactusModal }) => {
    const [isHovered, setIsHovered] = useState(false);
    const controls = useAnimation();
    const ref = useRef();

    const textAnimation1 = {
        hidden: { opacity: 0, y: "20%" },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.5, ease: "easeOut" },
        },
    };

    const onScreen = async () => {
        const element = ref.current;
        if (element) {
            const isVisible = await controls.start("visible");
            if (isVisible) {
            }
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    onScreen();
                }
            },
            { threshold: 0 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    const [selectedTab, setSelectedTab] = useTabs([
        "hardware",
        "development",
        "3d-modeling",
        "platforms",
        "tools"
    ]);

    const techStack = {
        "hardware": [
            "Meta Quest 3", "HTC Vive", "Apple Vision Pro", "HoloLens 2", "Pico Neo"
        ],
        "development": [
            "Unity 3D", "Unreal Engine 5", "WebXR", "A-Frame", "Three.js"
        ],
        "3d-modeling": [
            "Blender", "Maya", "3ds Max", "Cinema 4D", "Substance Painter"
        ],
        "platforms": [
            "Oculus Store", "SteamVR", "SideQuest", "Viveport", "Web Browsers"
        ],
        "tools": [
            "Vuforia", "ARCore", "ARKit", "8th Wall", "Niantic Lightship"
        ]
    };

    const TechList = ({ items }) => (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {items.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg p-4 flex items-center justify-center text-center hover:bg-white/20 transition-all border border-white/20">
                    <span className="text-white font-medium text-lg">{item}</span>
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
            className="lg:py-8 text-white"
        >
            <div className="py-6">
                <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                    Technology Stack for Our VR/AR Solutions
                </h2>
                <p className="text-xl lg:text-xl">
                    The right technology foundation makes all the difference between a prototype and a scalable immersive solution. We use industry-standard engines and hardware to build future-proof VR/AR experiences.
                </p>
            </div>

            <nav className="flex border-b border-gray-300 overflow-x-auto scrollbar-hide mb-6 gap-8">
                {[
                    { id: "hardware", label: "Hardware" },
                    { id: "development", label: "Development" },
                    { id: "3d-modeling", label: "3D Modeling" },
                    { id: "platforms", label: "Platforms" },
                    { id: "tools", label: "SDKs & Tools" }
                ].map(tab => (
                    <TabSelector
                        key={tab.id}
                        isActive={selectedTab === tab.id}
                        onClick={() => setSelectedTab(tab.id)}
                        className="whitespace-nowrap pb-4 px-2"
                    >
                        {tab.label}
                    </TabSelector>
                ))}
            </nav>

            <div className="py-6 px-2 min-h-[300px]">
                {Object.entries(techStack).map(([key, items]) => (
                    <TabPanel key={key} hidden={selectedTab !== key} className="w-full">
                        <TechList items={items} />
                    </TabPanel>
                ))}
            </div>
        </motion.div>
    );
};

export default VRARTechStack;
