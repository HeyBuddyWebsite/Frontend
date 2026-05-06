"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ClientsSection = () => {
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

    const clientcardData = [
        {
            id: 1,
            name: "St. Mary's High School",
            content:
                "The robotics lab setup by Hey Buddy has been a game-changer. Our students now win regional competitions, and their interest in science has skyrocketed.",
        },
        {
            id: 2,
            name: "TechWorld University",
            content:
                "Their advanced automation lab is exactly what our engineering department needed. The industrial arms and ROS integration provided our students with real-world exposure.",
        },
        {
            id: 3,
            name: "Future Kids Academy",
            content:
                "The modular curriculum is fantastic. It starts simple enough for our 5th graders but scales up to complex programming for our high schoolers. Highly recommended!",
        },
    ];

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
        >
            <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                What Educators Say About Our Robotics Labs
            </h2>

            <div className="pt-5 lg:py-12 grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
                {clientcardData.map((section, index) => (
                    <figure key={index} className="flex flex-col justify-between p-4 lg:p-6 border-2 border-gray-500 rounded-lg h-full w-full bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30">
                        <blockquote className="text-gray-400 flex flex-col justify-between h-full">
                            <p className="text-left text-white">{section.content}</p>
                            <div>
                                <h3 className="pt-4 text-right font-semibold text-white text-xl self-end">
                                    {section.name}
                                </h3>
                            </div>
                        </blockquote>
                    </figure>
                ))}
            </div>
        </motion.div>
    );
};

export default ClientsSection;
