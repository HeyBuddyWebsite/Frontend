"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "../../../styles/Timelinecomp.css";
import { motion, useAnimation } from "framer-motion";

const TimelineSection = () => {
    const controls = useAnimation();
    const ref = useRef();
    const scrollContainerRef = useRef(null);
    const [showUpArrow, setShowUpArrow] = useState(false);
    const [showDownArrow, setShowDownArrow] = useState(true);

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

    const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        if (container) {
            const { scrollTop, scrollHeight, clientHeight } = container;
            setShowUpArrow(scrollTop > 0);
            setShowDownArrow(scrollTop < scrollHeight - clientHeight - 10);
        }
    };

    const scrollUp = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: -200,
                behavior: 'smooth'
            });
        }
    };

    const scrollDown = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                top: 200,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            checkScrollPosition();
            container.addEventListener('scroll', checkScrollPosition);
            return () => {
                container.removeEventListener('scroll', checkScrollPosition);
            };
        }
    }, []);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
        >
            <div className="py-8 text-white">
                <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                    Robotics Lab Setup Process: Concept to Completion
                </h1>
            </div>

            <div className="pb-24">
                <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
                    <div className="relative h-[60vh] w-full">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 flex flex-col items-center gap-3 pointer-events-none pr-2">
                            {showUpArrow && (
                                <button
                                    onClick={scrollUp}
                                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 transition-all duration-300 pointer-events-auto shadow-lg"
                                    aria-label="Scroll up"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 15l7-7 7 7"
                                        />
                                    </svg>
                                </button>
                            )}

                            {showDownArrow && (
                                <button
                                    onClick={scrollDown}
                                    className="bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-full p-2 transition-all duration-300 pointer-events-auto shadow-lg"
                                    aria-label="Scroll down"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-white"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>
                            )}
                        </div>

                        <div
                            ref={scrollContainerRef}
                            className="overflow-y-scroll scrollbar-hide h-full w-full pr-12"
                            onScroll={checkScrollPosition}
                        >
                            <div className="">
                                <div className="main ">
                                    <div className="container text-white">
                                        <ul>
                                            <li>
                                                <h3 className="font-bold text-2xl  ">
                                                    Requirement Analysis
                                                </h3>
                                                <p>
                                                    We assess your institution's grade levels, space, and learning goals to recommend the perfect robotic kits and curriculum mix.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Lab Layout & Design
                                                </h3>
                                                <p>
                                                    Our team designs a functional and inspiring lab layout, optimizing collaborative workstations, storage for components, and arena capability.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Equipment Installation
                                                </h3>
                                                <p>
                                                    We install everything from workbenches to 3D printers and robotics kits, ensuring all hardware is safe, calibrated, and ready for action.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Curriculum Deployment
                                                </h3>
                                                <p>
                                                    We hand over the structured curriculum, lesson plans, and project guides, integrated into your school's timeline.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Teacher Training
                                                </h3>
                                                <p>
                                                    We conduct intensive workshops to train your faculty, turning them into confident competitive robotics mentors.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Support & Upgrades
                                                </h3>
                                                <p>
                                                    We provide annual maintenance, component replacements, and curriculum updates to keep your lab state-of-the-art.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[50vh] w-full  px-16">
                        <div
                            style={{
                                width: "100%",
                                height: 0,
                                paddingBottom: "100%",
                                position: "relative",
                            }}
                        >
                            <Image
                                loading="lazy"
                                width={700}
                                height={700}
                                src="/Images/wheel-unscreen.gif"
                                className="lg:mr-6 h-[40vh] w-[52rem] lg:h-[60vh] lg:w-[92rem] "
                                alt="Robotics Implementation Process"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TimelineSection;
