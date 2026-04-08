"use client";
import React, { useEffect, useRef, useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "@/components/servicescomp/aidevelopmentcomp/TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

const RoboticsTechStack = ({ handlecontactusModal }) => {
    const controls = useAnimation();
    const ref = useRef();

    const [selectedTab, setSelectedTab] = useTabs([
        "platforms",
        "languages",
        "hardware",
        "electronics",
        "tools"
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
        "platforms": [
            "ROS (Robot Operating System)", "Arduino IDE", "Raspberry Pi OS", "MakeCode", "Scratch", "Tinkercad", "RoboDK"
        ],
        "languages": [
            "Python", "C++", "C", "Blockly", "Java", "LUA", "G-Code"
        ],
        "hardware": [
            "Arduino Uno/Mega", "Raspberry Pi 4/5", "ESP32 / ESP8266", "NVIDIA Jetson Nano", "Micro:bit", "LEGO Mindstorms", "VEX Robotics"
        ],
        "electronics": [
            "Servos & Stepper Motors", "Ultrasonic & IR Sensors", "LiDAR Modules", "IMU & Gyroscopes", "Motor Drivers (L298N)", "Force Sensors", "Vision Modules"
        ],
        "tools": [
            "3D Printers (Creality/Ultimaker)", "Laser Cutters", "Soldering Stations", "Digital Multimeters", "AutoDesk Fusion 360", "SolidWorks", "MATLAB"
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
                    Infrastructure & Equipment for Our <br />
                    <span className="text-white">
                        Advanced Robotics Labs
                    </span>
                </h2>
                <p className="text-lg lg:text-xl text-gray-300 max-w-4xl leading-relaxed">
                    We equip our labs with industry-standard hardware and software, ensuring students learn skills that are directly applicable in the real world. From core mechanical parts to high-level operating systems.
                </p>
            </div>

            <nav className="flex flex-nowrap overflow-x-auto scrollbar-hide border-b border-white/5 mb-8">
                {[
                    { id: "platforms", label: "Platforms" },
                    { id: "languages", label: "Languages" },
                    { id: "hardware", label: "Hardware" },
                    { id: "electronics", label: "Electronics" },
                    { id: "tools", label: "Tools" }
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

export default RoboticsTechStack;
