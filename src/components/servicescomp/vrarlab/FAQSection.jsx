"use client";

import React, { useState } from "react";
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

function Icon({ id, open }) {
    return (
        <AiOutlinePlus
            className={`${id === open ? "rotate-45" : ""} h-5 w-5 transition-transform text-blue-400`}
        />
    );
}

const faqs = [
    {
        q: "What is an AR/VR Lab for Schools?",
        a: "An AR/VR lab is a dedicated, high-tech learning environment equipped with Augmented Reality (AR) and Virtual Reality (VR) hardware and software designed for experiential education. It allows students to interact with complex 3D models and immersive simulations, transforming abstract concepts into tangible experiences in fields like science, history, and medicine."
    },
    {
        q: "What is the cost of AR/VR lab setup in India?",
        a: "The cost of an AR/VR lab setup in India varies based on the number of headsets, the complexity of the required curriculum, and the physical infrastructure needed. Our packages are highly customizable to fit various institutional budgets, ranging from entry-level setups for schools to advanced research centers for universities."
    },
    {
        q: "What is included in a VR lab setup in school?",
        a: "Our comprehensive setup includes enterprise-grade HMDs featuring 128 GB ROM and 6 GB RAM, built-in Mobile Device Management (MDM), and pre-loaded educational content. Additionally, we provide teacher training, a graded progressive curriculum, and a 24x7 subscription-based LMS for progress tracking."
    },
    {
        q: "What age or grades do the AR & VR curriculum cater to?",
        a: "Our AR/VR lab setup is suitable for all grade levels, from primary education through high school and university research. We provide age-appropriate, grade-wise certified curriculum modules that align with cognitive development stages for each group."
    },
    {
        q: "Do we need to provide separate space for an AR & VR Lab?",
        a: "Yes, a dedicated space is recommended to ensure student safety and equipment longevity. We provide spatial mapping services to optimize areas between 500–1,200 sq. ft., ensuring a \"safety-first\" layout that allows students to move freely within their virtual environments."
    },
    {
        q: "Can we customize the AR & VR Lab packages as per our needs?",
        a: "Absolutely. We offer modular packages that can be tailored to your specific institutional goals. Whether you require a focus on a virtual reality anatomy lab for medical students or a broad-based virtual reality science lab for K-12, we customize hardware quantities and content libraries accordingly."
    },
    {
        q: "Can the AR & VR curriculum be integrated with existing subjects or courses?",
        a: "Yes, our immersive modules are specifically designed to align with and enhance your existing school curriculum. This covers a vast range of subjects, including Physics, Chemistry, Biology, Mathematics, and Geography, making it a seamless addition to current lesson plans."
    },
    {
        q: "Are there any prerequisites for teachers to effectively conduct AR & VR lessons?",
        a: "No prior technical expertise is required. We provide \"End-Mile Delivery\" support, which includes hands-on faculty empowerment workshops. Our operating system is designed for educational focus, making it intuitive for teachers to launch apps and monitor student progress in real-time."
    },
    {
        q: "How does a virtual reality lab benefit students?",
        a: "A VR lab replaces passive observation with active participation, boosting student engagement and conceptual retention. It allows for risk-free experimentation in a virtual simulation, enabling students to master complex topics through trial and error in a safe digital environment."
    },
    {
        q: "Does the VR lab require continuous internet connectivity?",
        a: "No. Our hardware is engineered for efficient offline usage. While the internet is needed for initial setup and syncing data to the LMS, students can run simulations locally, ensuring zero downtime during classroom hours."
    },
    {
        q: "What ROI can universities expect?",
        a: "Universities typically see a 52% cost reduction in physical lab materials and a 250% increase in student engagement and retention. This allows institutions to scale their research capabilities without the overhead of expensive physical resources."
    },
    {
        q: "What kind of support and maintenance do you provide after installation?",
        a: "We offer comprehensive \"End-Mile Delivery\" support, which includes regular software and curriculum updates, hardware maintenance, and ongoing faculty training. Our dedicated technical team is available to ensure that your AR/VR lab remains fully operational and aligned with the latest educational standards year-round."
    }
];

const FAQSection = () => {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section className="py-20 px-6 bg-black text-white">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h2>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {faqs.map((faq, index) => (
                        <Accordion
                            key={index}
                            open={open === index + 1}
                            icon={<Icon id={index + 1} open={open} />}
                            className="bg-white/5 border border-white/10 rounded-xl px-4 lg:px-6 hover:bg-white/10 transition-colors"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(index + 1)}
                                className="border-b-0 text-white text-base lg:text-lg font-medium py-4 hover:text-blue-400 transition-colors"
                            >
                                {faq.q}
                            </AccordionHeader>
                            <AccordionBody className="text-gray-300 text-sm lg:text-base pb-6 leading-relaxed">
                                {faq.a}
                            </AccordionBody>
                        </Accordion>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
