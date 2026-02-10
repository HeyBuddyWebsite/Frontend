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
                        Our Robotics Development Programs
                    </h2>
                    <p className="text-m lg:text-m">
                        We offer comprehensive robotics programs tailored to diferent ages and skill levels, ensuring a continuous learning path from kindergarten to university.
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

export default RoboticsMotionslide;
