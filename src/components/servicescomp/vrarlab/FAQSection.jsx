"use client";

import React, { useEffect, useRef } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";

function Icon({ id, open }) {
    return (
        <AiOutlinePlus
            className={`${id === open ? "rotate-90" : ""
                } h-5 w-5 transition-transform`}
        />
    );
}

const FAQSection = () => {
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

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
        >
            <div>
                <h2 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">FAQs</h2>
            </div>

            <div className="pb-14 grid text-white sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
                <div>
                    <Accordion
                        open={open === 1}
                        icon={<Icon id={1} open={open} />}
                        className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
                    >
                        <AccordionHeader
                            style={{ border: "0" }}
                            onClick={() => handleOpen(1)}
                            className="!text-lg"
                        >
                            What is an AR/VR Lab for Schools?
                        </AccordionHeader>
                        <AccordionBody>
                            An AR/VR lab is a dedicated, high-tech learning environment equipped with Augmented Reality (AR) and Virtual Reality (VR) hardware and software. It allows students to interact with complex 3D models and immersive simulations, transforming abstract concepts into tangible experiences.
                        </AccordionBody>
                    </Accordion>

                    <Accordion
                        open={open === 2}
                        icon={<Icon id={2} open={open} />}
                        className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
                    >
                        <AccordionHeader
                            style={{ border: "0" }}
                            onClick={() => handleOpen(2)}
                            className="!text-lg"
                        >
                            What is included in a VR lab setup in school?
                        </AccordionHeader>
                        <AccordionBody>
                            Our comprehensive setup includes enterprise-grade HMDs, built-in Mobile Device Management (MDM), and pre-loaded educational content. Additionally, we provide teacher training, a graded progressive curriculum, and a 24x7 subscription-based LMS.
                        </AccordionBody>
                    </Accordion>

                    <Accordion
                        open={open === 3}
                        icon={<Icon id={3} open={open} />}
                        className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
                    >
                        <AccordionHeader
                            style={{ border: "0" }}
                            onClick={() => handleOpen(3)}
                            className="!text-lg"
                        >
                            Do we need to provide separate space for an AR & VR Lab?
                        </AccordionHeader>
                        <AccordionBody>
                            Yes, a dedicated space is recommended to ensure student safety and equipment longevity. We provide spatial mapping services to optimize areas between 500–1,200 sq. ft., ensuring a "safety-first" layout.
                        </AccordionBody>
                    </Accordion>
                </div>

                <div>
                    <Accordion
                        open={open === 4}
                        icon={<Icon id={4} open={open} />}
                        className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
                    >
                        <AccordionHeader
                            style={{ border: "0" }}
                            onClick={() => handleOpen(4)}
                            className="!text-lg"
                        >
                            Are there any prerequisites for teachers?
                        </AccordionHeader>
                        <AccordionBody>
                            No prior technical expertise is required. We provide "End-Mile Delivery" support, which includes hands-on faculty empowerment workshops. Our operating system is designed for educational focus, making it intuitive for teachers.
                        </AccordionBody>
                    </Accordion>

                    <Accordion
                        open={open === 5}
                        icon={<Icon id={5} open={open} />}
                        className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
                    >
                        <AccordionHeader
                            style={{ border: "0" }}
                            onClick={() => handleOpen(5)}
                            className="!text-lg"
                        >
                            Does the VR lab require continuous internet connectivity?
                        </AccordionHeader>
                        <AccordionBody>
                            No. Our hardware is engineered for efficient offline usage. While the internet is needed for initial setup and syncing data to the LMS, students can run simulations locally, ensuring zero downtime.
                        </AccordionBody>
                    </Accordion>

                    <Accordion
                        open={open === 6}
                        icon={<Icon id={6} open={open} />}
                        className="py-2 px-5 lg:px-8 my-4 rounded-lg bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
                    >
                        <AccordionHeader
                            style={{ border: "0" }}
                            onClick={() => handleOpen(6)}
                            className="!text-lg"
                        >
                            What support do you provide after installation?
                        </AccordionHeader>
                        <AccordionBody>
                            We offer comprehensive "End-Mile Delivery" support, which includes regular software and curriculum updates, hardware maintenance, and ongoing faculty training to ensure your lab remains fully operational.
                        </AccordionBody>
                    </Accordion>
                </div>
            </div>
        </motion.div>
    );
};

export default FAQSection;
