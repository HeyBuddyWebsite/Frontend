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
            name: "Oxford English School",
            content:
                "Partnering with Hey Buddy for our school's AR/VR lab setup was a turning point for our STEM department. The integration of 360-degree content revolutionized student engagement. The seamless execution and teacher training saved us time and resources.",
        },
        {
            id: 2,
            name: "International Delhi Public School",
            content:
                "We sought Hey Buddy's assistance to enhance our student engagement. They delivered an interactive virtual reality science lab that responded intelligently to our academic needs. We highly recommend their augmented and virtual reality development services!",
        },
        {
            id: 3,
            name: "Atal Utkrisht Rajkiya Inter College",
            content:
                "Hey Buddy's immersive learning capabilities helped us gain invaluable insights that really made the difference in student retention. The empowered strategic decision-making backed by deep curriculum analysis gave us a competitive edge.",
        },
        {
            id: 4,
            name: "Maharshi Sankrityayan Public School",
            content:
                "The addition of a virtual reality research lab has empowered our faculty and students alike. The quality of the 14D science modules and the ease of use provided by Hey Buddy's team ensure that our lab is utilized to its full potential every single day.",
        },
    ];

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
        >
            <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
                What Clients Say About Our VR/AR Lab Solutions
            </h1>

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
