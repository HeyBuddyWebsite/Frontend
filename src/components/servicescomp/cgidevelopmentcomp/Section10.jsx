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
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">FAQs</h1>
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
         What is a CGI company?
            </AccordionHeader>
            <AccordionBody>
            A CGI company specializes in creating visuals using computer graphics and offers services such as 3D modeling, animation, visual effects, and virtual reality. These services are used by businesses across industries, including entertainment, advertising, and simulation.

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
              How do CGI production companies contribute to the film and entertainment industry?

            </AccordionHeader>
            <AccordionBody>
            CGI production companies play a pivotal role in film and entertainment. They produce high-quality visual effects, animations, and computer-generated sequences. This way, they bring imaginative and realistic visuals to the screen to captivate the viewers and deliver an enchanting cinematic experience.


            </AccordionBody>
          </Accordion>

          {/* <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(3)}
            className="!text-lg"
            >
             ?

            </AccordionHeader>
            <AccordionBody>
            CGI packaging involves creating ultra-realistic and visually mesmerising 3D digital product representations of an actual product. This involved using computer-generated imagery, which allows companies to showcase products in various scenarios and designs for impactful marketing, flexible prototyping, and captivating visualization for packaging solutions.


            </AccordionBody>
          </Accordion> */}

          <Accordion
            open={open === 8}
            icon={<Icon id={8} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(8)}
            className="!text-lg"
            >
             What services are offered by GI agencies? 

            </AccordionHeader>
            <AccordionBody>
            A CGI agencies specialize in providing computer-generated imagery solutions. This included 3D visualization, animation, and virtual experiences. 
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
              How does a 3D CGI Company differ from traditional creative agencies?

            </AccordionHeader>
            <AccordionBody>
            Unlike traditional creative agencies, CGI agencies focus on the technical aspects of visual content creation, thereby delivering realistic and impactful visuals for every business requirement, be it marketing or training.

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
              How does CGI technology work?

            </AccordionHeader>
            <AccordionBody>
            CGI technology involves the use of computer software and algorithms to create realistic and appealing images to captivate viewers. This also includes animations, i.e., infusing life into 3D models with movements. Recent advancements in CGI technology include real-time rendering, improved physics simulations, and the integration of artificial intelligence. This enhances the efficiency and quality of CGI production and makes them highly useful for various applications, from movies to virtual experiences.


            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 7}
            icon={<Icon id={7} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(7)}
            className="!text-lg"
            >
             What is CGI packaging? And what benefits does it offer to product presentation?
            </AccordionHeader>
            <AccordionBody>
            CGI packaging involves creating ultra-realistic and visually mesmerising 3D digital product representations of an actual product. This involved using computer-generated imagery, which allows companies to showcase products in various scenarios and designs for impactful marketing, flexible prototyping, and captivating visualization for packaging solutions.

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
              What is hard surface modelling, and how does it differ from other 3D modelling techniques?
            </AccordionHeader>
            <AccordionBody>
            Hard surface modelling focuses on creating detailed 3D models of inanimate objects or structures, differing from organic modelling that emphasizes natural forms like characters or creatures.
            </AccordionBody>
          </Accordion> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Faqsection;
