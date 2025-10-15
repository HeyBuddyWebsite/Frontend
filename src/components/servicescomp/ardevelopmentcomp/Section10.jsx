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
    //   <svg
    //   xmlns="http://www.w3.org/2000/svg"
    //   fill="none"
    //   viewBox="0 0 24 24"
    //   strokeWidth={2}
    //   stroke="currentColor"
    //   className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    // >
    //   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    // </svg>

    <AiOutlinePlus
      className={`${
        id === open ? "rotate-90" : ""
      } h-5 w-5 transition-transform`}
    />
  );
}

const Faqsection = () => {


  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
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
        <h1 style={{color: 'white'}} className="py-4 lg:w-[80%] text-2xl lg:text-4xl">FAQs</h1>
      </div>

      <div className="pb-14 grid text-white sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4  gap-x-4">
        <div>
          <Accordion
            open={open === 1}
            icon={<Icon id={1} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(1)}
            className="!text-lg"
            >
             What are Augmented Reality development services?

            </AccordionHeader>
            <AccordionBody>
            AR development services create AR experiences that offer immersion. To explain, these experiences overlay digital 3D information or objects onto the real world. All you need is a smartphone. 

            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(2)}
            className="!text-lg"
            >
              What kind of Augmented Reality services do you offer?
            </AccordionHeader>
            <AccordionBody>
            We offer a wide range of AR development services for various industries. This includes concept ideation, design, software development, integration, testing, and deployment. Our Augmented reality applications offer a stable and enriched AR experience across various platforms.

            </AccordionBody>
          </Accordion>

         
        </div>

        <div>
          <Accordion
            open={open === 4}
            icon={<Icon id={4} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(4)}
            className="!text-lg"
            >
              Can you help in the entire AR development lifecycle?

            </AccordionHeader>
            <AccordionBody>
            HeyBuddy is one of the few AR development companies that provide end-to-end Augmented Reality services. Starting from initial consultation and concept creation to design, development, testing, deployment, and ongoing support for AR applications.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 5}
            icon={<Icon id={5} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(5)}
            className="!text-lg"
            >
             What are the typical costs associated with AR development?

            </AccordionHeader>
            <AccordionBody>
            Costs can vary based on project complexity, features, platforms, and the scope of work. We offer tailored pricing after understanding your project requirements during the initial consultation phase.
            </AccordionBody>
          </Accordion>

          {/* <Accordion
            open={open === 6}
            icon={<Icon id={6} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(6)}
            className="!text-lg"
              >
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Faqsection;
