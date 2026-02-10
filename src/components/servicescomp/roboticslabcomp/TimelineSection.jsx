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
                <h1 className="py-2 lg:w-[80%] text-2xl lg:text-4xl">
                    Our Robotics Lab Implementation Process
                </h1>
                <p className="text-base md:text-lg lg:text-xl lg:w-[80%] mt-2">
                    The right execution strategy ensures a seamless transition from traditional classrooms to a world-class innovation hub. We follow a rigorous, enterprise-grade methodology built around institutional goals, safety, and long-term scalability to ensure your robotics lab remains at the cutting edge.
                </p>
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
                                                    Discovery & Strategic Planning
                                                </h3>
                                                <p>
                                                    We begin by aligning technology with your educational vision through a deep assessment of your robotics lab setup requirements. Our team evaluates student capacity, defines learning objectives, and audits your space to create a robust strategy that ensures long-term institutional growth and NEP compliance.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Lab Design & Infrastructure Setup
                                                </h3>
                                                <p>
                                                    We transform physical spaces into high-performance engineering hubs through expert robotic lab design. By integrating safety-first layout designs, custom laboratory furniture, and high-speed network infrastructure, we build a foundation capable of supporting heavy data loads and multi-user interaction within the school robotics lab.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Hardware Procurement & Calibration
                                                </h3>
                                                <p>
                                                    We equip your facility with enterprise-grade kits and specialized STEM tools from our comprehensive robotics lab equipment list. Our process includes full provisioning of microcontrollers and sensors, followed by rigorous stress testing to ensure every component in your robotics and ai lab is perfectly calibrated for immediate classroom use.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Content Deployment & LMS Integration
                                                </h3>
                                                <p>
                                                    We synchronize your lab with a world-class, grade-wise certified curriculum. By bridging our 550+ STEM simulations and robotics and automation lab modules with your existing LMS via Single Sign-On (SSO), we provide a personalized and frictionless learning experience for every student and faculty member.
                                                </p>
                                            </li>
                                            <li>
                                                <h3 className="font-bold text-2xl ">
                                                    Training, Launch & Excellence
                                                </h3>
                                                <p>
                                                    We guarantee successful adoption through on-site faculty workshops and student onboarding. Our commitment extends beyond the launch with pilot program feedback loops, intellectual property (IP) mentorship for student projects, and continuous maintenance to keep your robotics lab in school fully operational.
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
