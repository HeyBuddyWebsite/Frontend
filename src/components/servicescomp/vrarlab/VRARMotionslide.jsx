"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/components/servicescomp/aidevelopmentcomp/motionSlider.css";
import WorkItem from "@/components/servicescomp/aidevelopmentcomp/WorkItem";
import PhotoItem from "@/components/servicescomp/aidevelopmentcomp/PhotoItem";
import GamedevCard from "@/components/servicescomp/aidevelopmentcomp/GamedevCard";

const texts = [
    {
        title: "VR Lab Setup for Schools",
        description: "We build state-of-the-art Virtual Reality labs for K-12 and universities. Our end-to-end solution includes hardware procurement, spatial design, and curriculum integration.",
        subItems: [
            "Hardware Procurement",
            "Spatial Lab Design",
            "Safety Layouts",
            "Teacher Training",
            "Curriculum Mapping",
            "Maintenance Support"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Custom+AI.jpg",
    },
    {
        title: "AR/VR Educational Content",
        description: "We provide a library of K-12 mapped VR/AR modules that turn abstract concepts into interactive experiences. From dissecting frogs virtually to exploring space.",
        subItems: [
            "STEM Simulations",
            "Interactive History",
            "Virtual Field Trips",
            "Language Labs",
            "Skills Training",
            "Gamified Learning"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Machine+learning.jpg",
    },
    {
        title: "Industrial VR Training",
        description: "Train your workforce in a safe, risk-free virtual environment. We create custom VR training scenarios for manufacturing, safety, and operational excellence.",
        subItems: [
            "Safety Protocols",
            "Machine Operation",
            "Hazard Recognition",
            "Soft Skills",
            "Remote Assistance",
            "Performance Tracking"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Natural+Language+Processing.jpg",
    },
    {
        title: "Medical & Healthcare VR",
        description: "High-fidelity medical simulations for training doctors and nurses. Practice surgeries, patient interaction, and anatomy in hyper-realistic 3D environments.",
        subItems: [
            "Surgical Simulation",
            "Anatomy Visualization",
            "Patient Empathy",
            "Device Training",
            "Rehabilitation VR",
            "Collaborative Surgery"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/computer+vision+application.jpg",
    },
    {
        title: "AR Marketing Experiences",
        description: "Engage customers with immersive AR campaigns. We build WebAR and app-based AR experiences that bring products and brands to life in the user's space.",
        subItems: [
            "Product Visualization",
            "Virtual Try-Ons",
            "Interactive Packaging",
            "Location-based AR",
            "Social AR Filters",
            "WebAR Campaigns"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Data+Analytics+and+Insights.jpg",
    },
    {
        title: "Virtual Tours & walkthroughs",
        description: "Showcase real estate, campuses, or facilities with 360-degree virtual tours. We create high-resolution, interactive tours accessible from any device.",
        subItems: [
            "360° Photography",
            "Interactive Hotspots",
            "Guided Voiceovers",
            "VR Headset Ready",
            "Google Street View",
            "Floor Plan Integration"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Automation+and+Optimization.jpg",
    },
];

const VRARMotionslide = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        let workInfoItems = document.querySelectorAll(".work__photo-item");
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

        const scrollTrigger = ScrollTrigger.create({
            trigger: ".work",
            start: "top top",
            end: "bottom bottom",
            animation: animation,
            scrub: 0.3,
            anticipatePin: 1,
            invalidateOnRefresh: true,
        });

        return () => {
            scrollTrigger?.kill();
            workInfoItems.forEach((item) => {
                item.style.willChange = "auto";
            });
        };
    }, []);

    return (
        <div>
            <div className="py-8 text-white">
                <div className="text-content lg:w-[80%]">
                    <h2 className="py-4 text-2xl lg:text-4xl">
                        Our VR/AR Development Services
                    </h2>
                    <p className="text-m lg:text-m">
                        We don't just supply hardware; we build complete immersive ecosystems. From initial design to final deployment, our services cover every aspect of establishing a world-class VR/AR lab.
                    </p>
                </div>
            </div>
            <div
                className="h-fit relative lg:bg-no-repeat lg:bg-center"
                style={{
                    willChange: 'transform',
                    backgroundImage: "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763456534207_m7f7vl.png?x-id=PutObject')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'bottom center',
                    backgroundRepeat: 'no-repeat',
                    backgroundAttachment: 'fixed',
                }}
            >
                <section className="work hidden lg:flex flex-row justify-between">
                    <div className="work__left">
                        <div className="work__text flex flex-col items-center">
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
                    <div className="work__right">
                        <div className="work__right-b1">
                            <div className="work__photo flex flex-col items-center">
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
                <section className="flex flex-col gap-10 lg:hidden">
                    {texts.map((text, index) => (
                        <GamedevCard
                            key={index}
                            imageUrl={text.img}
                            description={text.description}
                            title={text.title}
                            subItems={text.subItems}
                        />
                    ))}
                </section>
            </div>
        </div>
    );
};

export default VRARMotionslide;
