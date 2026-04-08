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
        title: "School Robotics Lab",
        description: "Modular, age-appropriate robotics labs for K-12. Featuring colorful, safe, and engaging kits that teach the basics of mechanics, electronics, and coding.",
        subItems: [
            "STEM Kits",
            "Block Coding",
            "Mechanical Building",
            "Problem Solving",
            "Creative Design",
            "Safety First"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Custom+AI.jpg",
    },
    {
        title: "University Innovation Hub",
        description: "Advanced robotics research centers for higher education. Equipped with industrial arms, humanoids, and AI workstations for cutting-edge research.",
        subItems: [
            "Industrial Arms",
            "Humanoid Robots",
            "AI Integration",
            "Computer Vision",
            "Research Projects",
            "IoT Systems"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Machine+learning.jpg",
    },
    {
        title: "Competition Training",
        description: "Specialized tracks to prepare students for international robotics Olympiads and competitions like WRO, FLL, and more.",
        subItems: [
            "Strategy Planning",
            "Advanced Coding",
            "Precision Engineering",
            "Team Building",
            "Mock Competitions",
            "Mentorship"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Natural+Language+Processing.jpg",
    },
    {
        title: "Coding & AI Labs",
        description: "Software-focused labs where robotics is the medium to teach advanced Python, C++, and AI algorithms.",
        subItems: [
            "Python Programming",
            "C++ for Robots",
            "Algorithm Design",
            "Machine Learning",
            "Neural Networks",
            "Sensor Logic"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/computer+vision+application.jpg",
    },
    {
        title: "Drone & Aerial Robotics",
        description: "Dedicated zones for aerial robotics. Learn the physics of flight, drone programming, and aerial photography.",
        subItems: [
            "Flight Dynamics",
            "Drone Coding",
            "Aerial Mapping",
            "Safety Protocols",
            "Maintenance",
            "Simulator Training"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Data+Analytics+and+Insights.jpg",
    },
    {
        title: "Maker & IoT Space",
        description: "A creative space integrating robotics with IoT and 3D printing. Build smart gadgets and connected devices.",
        subItems: [
            "3D Printing",
            "Arduino/Raspberry Pi",
            "Circuit Design",
            "Soldering Tech",
            "Smart Home Projects",
            "Prototyping"
        ],
        img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Automation+and+Optimization.jpg",
    },
];

const RoboticsMotionslide = () => {
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
                                Our Robotics <br /> Development Programs
                            </h2>
                            <p className="text-lg text-gray-300 leading-relaxed">
                                We offer comprehensive robotics programs tailored to different ages and skill levels, ensuring a continuous learning path from kindergarten to university.
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
                            Our Robotics Development Programs
                        </h2>
                        <p className="text-lg text-gray-300">
                            We offer comprehensive robotics programs tailored to different ages and skill levels, ensuring a continuous learning path from kindergarten to university.
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

export default RoboticsMotionslide;
