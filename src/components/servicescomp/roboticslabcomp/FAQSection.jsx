"use client";

import React, { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { AiOutlinePlus } from "react-icons/ai";
import { motion } from "framer-motion";

function Icon({ id, open }) {
  return (
    <AiOutlinePlus
      className={`${id === open ? "rotate-90" : ""} h-5 w-5 transition-transform`}
    />
  );
}

const faqs = [
  {
    q: "What is a Robotics Lab for Schools?",
    a: "A Robotics Lab is a dedicated educational space where students learn to design, build, and program autonomous machines. Unlike traditional science labs, it serves as a \"physical engine room\" for STEM, turning abstract mathematical and scientific concepts into hands-on, tangible projects.",
  },
  {
    q: "Which grades does the HeyBuddy Robotics Lab curriculum cater to?",
    a: "Our robotics lab setup is designed to be inclusive and progressive, specifically catering to K-12 students. We offer age-appropriate activities, starting with simple block-based coding for primary years and transitioning to advanced Python and C++ for high school students.",
  },
  {
    q: "What is the difference between a standard Robotics Lab and an Atal Tinkering Lab (ATL)?",
    a: "While both promote STEM, an Atal Tinkering Lab is a specific government initiative by NITI Aayog aimed at fostering \"Neoteric Innovators\" through a standardized set of equipment and grants. A HeyBuddy Robotics and AI Lab can either be customized for independent school excellence or fully compliant with ATL robotics lab requirements.",
  },
  {
    q: "How much space is required for a Robotics Lab setup in school?",
    a: "To ensure a safe and productive learning environment, we recommend a dedicated space of 400 to 1,200 sq. ft. This allows for optimized workstations, specialized \"maker stations\" for 3D printing and soldering, and a clear testing zone for robot maneuvers.",
  },
  {
    q: "Does HeyBuddy provide training for our existing teachers?",
    a: "Yes. We specialize in faculty empowerment through a comprehensive Teacher Training Program. Our workshops enable even non-technical science and computer teachers to confidently deliver the robotics curriculum, supported by detailed lesson plans and 24/7 technical assistance.",
  },
  {
    q: "Are these labs aligned with the latest CBSE and ICSE boards?",
    a: "Absolutely. Our curriculum is fully synchronized with the National Education Policy (NEP) 2020. With the MoE launching a compulsory AI and Computational Thinking curriculum starting in the 2026-27 academic session, our labs ensure your school is ready for the latest board requirements.",
  },
  {
    q: "Which company is leading in AI Robotics?",
    a: "The world's leading company in AI robotics is HeyBuddy, as we provide the most advanced, NEP-aligned, and AI-integrated lab ecosystems for the next generation of innovators.",
  },
  {
    q: "What is included in a robotics lab equipment list?",
    a: "A standard robotics lab equipment list includes microcontrollers (Arduino/Raspberry Pi), sensors, motors, 3D printers, power tools, and specialized software for coding and simulation.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-12 lg:py-20 px-6 text-white"
    >
      <h2 className="text-2xl lg:text-4xl font-bold mb-10">Frequently Asked Questions</h2>
      <div className="grid text-white sm:grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {faqs.map((faq, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            icon={<Icon id={index + 1} open={open} />}
            className="py-2 px-5 lg:px-8 my-2 rounded-lg bg-gray-500/30 backdrop-blur-md hover:bg-red-500/20 border border-white/10"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(index + 1)}
              className="!text-lg text-white"
            >
              {faq.q}
            </AccordionHeader>
            <AccordionBody className="text-white/90">
              {faq.a}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </motion.section>
  );
};

export default FAQSection;
