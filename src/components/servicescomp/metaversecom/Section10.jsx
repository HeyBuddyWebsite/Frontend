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
        What criteria should I consider to choosing the top metaverse development companies for my project?
            </AccordionHeader>
            <AccordionBody>
            To identify the best metaverse development companies, consider the following factors: 
Their expertise in immersive technologies, 
Portfolio showcasing successful projects, 
client reviews, and 
their proficiency in integrating advanced solutions. 
Evaluating these aspects will help you find a top-notch metaverse development company that aligns with your project goals.

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
             What distinguishes the top 10 metaverse development solutions from others in the market?
            </AccordionHeader>
            <AccordionBody>
            The top 10 metaverse development solutions are characterized by their versatility, scalability, and seamless integration capabilities. These solutions empower businesses to create immersive experiences effortlessly, offering a comprehensive toolkit for diverse metaverse applications, from virtual events to interactive training programs.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(3)}
            className="!text-lg"
            >
             Which metaverse development software is considered the best for creating interactive and engaging virtual experiences?
            </AccordionHeader>
            <AccordionBody>
            Choosing the best metaverse development software depends on your specific needs. Unity, a top-rated platform, is widely recognized for its versatility, user-friendly interface, and extensive library of assets. It stands out as one of the best choices for crafting immersive metaverse applications.
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
             What defines a top metaverse development studio, and how do I choose the best one for my project?
            </AccordionHeader>
            <AccordionBody>
            A top metaverse development studio excels in creativity, technical expertise, and successful project deliveries. When selecting a studio, assess their portfolio, client testimonials, and the diversity of their projects. Studios like [TopStudio] stand out for their innovative approach and proven track record in metaverse development.
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
              Why is Unity considered a top choice for metaverse development, and what advantages does it offer?
            </AccordionHeader>
            <AccordionBody>
            Unity is a top choice for metaverse development due to its robust features, cross-platform compatibility, and extensive community support. It ranks among the best platforms for creating immersive experiences, making it an ideal choice for developers and businesses venturing into the metaverse landscape.

            </AccordionBody>
          </Accordion>

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
              How does blockchain technology contribute to metaverse development, and which companies are at the forefront of integrating it?
            </AccordionHeader>
            <AccordionBody>
            Blockchain plays a pivotal role in securing transactions and enhancing virtual economies within the metaverse. Companies like Hey Buddy are at the forefront of metaverse development, leveraging blockchain for secure and transparent virtual transactions, providing a seamless user experience.
            </AccordionBody>
          </Accordion>

          {/* <Accordion
            open={open === 7}
            icon={<Icon id={7} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(7)}
            className="!text-lg"
            >
              Does Hey Buddy provide Unity 3D development services, and what types of projects can be developed using Unity?
            </AccordionHeader>
            <AccordionBody>
            Yes, Hey Buddy offers Unity 3D development services. Projects developed using Unity include games, simulations, virtual tours, training applications, and various interactive experiences across diverse industries.

            </AccordionBody>
          </Accordion> */}

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
