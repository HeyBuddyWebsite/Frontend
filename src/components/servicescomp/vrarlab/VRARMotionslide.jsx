"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import "@/components/servicescomp/aidevelopmentcomp/motionSlider.css";
import WorkItem from "@/components/servicescomp/aidevelopmentcomp/WorkItem";
import PhotoItem from "@/components/servicescomp/aidevelopmentcomp/PhotoItem";
import GamedevCard from "@/components/servicescomp/aidevelopmentcomp/GamedevCard";

const texts = [
    {
        title: "K-12 Virtual Field Trips",
        description: "Stand-alone VR experiences that transport students to Mars, ancient civilizations, or inside the blood stream. Certified content for core subjects.",
        subItems: [
            "360 Immersive Video",
            "Interactive Quests",
            "Teacher Controls",
            "Group Sync",
            "Voice Navigation",
            "Safe Hardware"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Custom+AI.jpg",
    },
    {
        title: "Mixed Reality Science Lab",
        description: "Using AR/MR to overlay scientific data onto real-world objects. Visualize magnetic fields, chemical reactions, and internal anatomy in the real world.",
        subItems: [
            "Spatial Mapping",
            "Gestural Control",
            "Real-Time Data",
            "3D Overlays",
            "Collaboration",
            "External Sensors"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Machine+learning.jpg",
    },
    {
        title: "Vocational Skill Training",
        description: "Precision VR simulators for training technicians in specialized fields such as aircraft maintenance, surgical procedures, and hazardous materials handling.",
        subItems: [
            "Haptic Feedback",
            "Multi-Step Drills",
            "Performance Scoring",
            "Risk-Free Environment",
            "Expert Certification",
            "Simulator Ready"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Natural+Language+Processing.jpg",
    },
    {
        title: "Remote XR Classroom",
        description: "A shared virtual space where students from different geographic locations can learn together under a single instructor in real-time.",
        subItems: [
            "Avatar Voice Chat",
            "Spatial Audio",
            "Shared 3D Models",
            "Whiteboard Tools",
            "Cross-Platform Support",
            "Recording & Playback"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/computer+vision+application.jpg",
    },
    {
        title: "AR History Exploration",
        description: "Using tablets and AR glasses to bring history to life in museums or classrooms. Watch battles unfold or see ancient statues restored in 3D.",
        subItems: [
            "Image Recognition",
            "Location Anchors",
            "Interactive Timelines",
            "Guided Narratives",
            "Multi-User Sharing",
            "Web-AR Enabled"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Data+Analytics+and+Insights.jpg",
    },
    {
        title: "Unity & XR Development Lab",
        description: "Specialized workstations and curriculum for teaching students how to build their own VR/AR applications from scratch.",
        subItems: [
            "Unity Programming",
            "Unreal Engine Prep",
            "3D Optimization",
            "XR Interaction Design",
            "Publishing Guide",
            "Portfolio Projects"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Automation+and+Optimization.jpg",
    },
];

const VRARMotionslide = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const workInfoItems = containerRef.current.querySelectorAll(".work__photo-item");
            const totalItems = workInfoItems.length;

            workInfoItems.forEach(function (item, index) {
                item.style.zIndex = totalItems - index;
                item.style.willChange = "clip-path";
                item.style.transform = "translateX(-50%) translateZ(0)";
            });

            gsap.set(".work__photo-item", {
                clipPath: "inset(0px 0px 0px 0px)",
                force3D: true,
            });

            const animation = gsap.to(".work__photo-item:not(:last-child)", {
                clipPath: "inset(0px 0px 100% 0px)",
                stagger: 0.5,
                ease: "power2.out",
                force3D: true,
            });

            ScrollTrigger.create({
                trigger: containerRef.current.querySelector(".work-section-inner"),
                start: "top top",
                end: "bottom bottom",
                animation: animation,
                scrub: 0.3,
                anticipatePin: 1,
                invalidateOnRefresh: true,
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="work-section bg-black text-white relative">
            <div className="py-10 px-6 lg:px-12 max-w-7xl mx-auto">
                {/* Desktop View */}
                <section className="work-section-inner hidden lg:flex flex-row gap-12 justify-between">
                    <div className="work__left w-1/2">
                        <div className="mb-20">
                            <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white">
                                Our Immersive<br /> Learning Programs
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                We provide curriculum-aligned VR/AR modules that transform abstract concepts into tangible experiences across sciences, history, and industrial training.
                            </p>
                        </div>

                        <div className="work__text flex flex-col gap-[15vh] pb-[20vh]">
                            {texts.map((text, index) => (
                                <WorkItem
                                    key={index}
                                    title={text.title}
                                    description={text.description}
                                    subItems={text.subItems}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="work__right w-1/2 relative">
                        <div className="work__right-b1 sticky top-0 h-screen flex items-start pt-20">
                            <div className="work__photo relative w-full h-[500px]">
                                {texts.map((text, index) => (
                                    <PhotoItem
                                        key={index}
                                        title={text.title}
                                        imgSrc={text.img}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mobile View */}
                <section className="flex flex-col gap-10 lg:hidden text-white">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold mb-4">
                            Our Immersive Learning Programs
                        </h2>
                        <p className="text-lg text-gray-300">
                            We provide curriculum-aligned VR/AR modules that transform abstract concepts into tangible experiences.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8 pb-20">
                        {texts.map((text, index) => (
                            <GamedevCard
                                key={index}
                                imageUrl={text.img}
                                title={text.title}
                                description={text.description}
                                subItems={text.subItems}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default VRARMotionslide;
