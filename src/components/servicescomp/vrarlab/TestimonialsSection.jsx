"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const testimonials = [
    {
        content: "Partnering with Hey Buddy for our school's AR/VR lab setup was a turning point for our STEM department. The integration of the virtual reality science lab and 360-degree content has completely revolutionized student engagement. The seamless execution and teacher training they provided saved us immense time and resources. Truly exceptional service!",
        name: "Oxford English School"
    },
    {
        content: "We sought Hey Buddy's assistance to enhance our student engagement. They delivered an interactive virtual reality science lab that responded intelligently to our academic needs and facilitated interactions tailored to individual learning speeds. We highly recommend their augmented and virtual reality development services!",
        name: "International Delhi Public School"
    },
    {
        content: "Hey Buddy's immersive learning capabilities helped us gain invaluable insights that really made the difference in student retention. The empowered strategic decision-making backed by deep curriculum analysis gave us a competitive edge. Investing in an AR/VR lab setup was a strategic move that paid off!",
        name: "Atal Utkrisht Rajkiya Inter College"
    },
    {
        content: "Hey Buddy's deep spatial learning solutions proved revolutionary for our tech-driven projects. Their expertly implemented complex simulations and 3D models considerably enhanced the capability of our training applications. Their prowess in AR/VR makes them a trustworthy partner for any organization aiming for excellence.",
        name: "IITIN Truckwala"
    },
    {
        content: "Implementing the AR/VR reality lab has transformed our approach to complex subjects. The hands-on experience provided to our students has bridged the gap between theoretical knowledge and practical understanding, making our school a hub for modern innovation.",
        name: "Nigam Pratibha School, Nand Nagari"
    },
    {
        content: "The addition of a virtual reality research lab has empowered our faculty and students alike. The quality of the 14D science modules and the ease of use provided by Hey Buddy's team ensure that our lab is utilized to its full potential every single day.",
        name: "Maharshi Sankrityayan Public School"
    }
];

const TestimonialsSection = () => {
    const controls = useAnimation();
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) controls.start("visible");
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [controls]);

    return (
        <section ref={ref} className="py-20 px-6 bg-transparent text-white">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial="hidden"
                    animate={controls}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                    }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">What Clients Say About Our AR/VR Lab Solutions</h2>
                    <p className="text-gray-300 max-w-4xl mx-auto text-lg">
                        We partner with institutions and enterprises to turn immersive visions into operational excellence. Our AR/VR lab setup has consistently transformed how our clients teach, train, and innovate, providing them with a competitive edge in the digital-first era.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial="hidden"
                            animate={controls}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: { duration: 0.5, delay: index * 0.1 }
                                }
                            }}
                            className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-blue-500/30 transition-colors flex flex-col justify-between"
                        >
                            <div className="mb-6">
                                <span className="text-5xl text-blue-500/20 font-serif leading-none">“</span>
                                <p className="text-gray-300 italic text-sm leading-relaxed -mt-4 relative z-10">{item.content}</p>
                            </div>
                            <div className="pt-4 border-t border-white/5">
                                <p className="text-blue-400 font-bold text-sm text-right">— {item.name}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
