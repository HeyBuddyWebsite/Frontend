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
            className="py-2 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(1)}
            >
              What makes a 3D billboard different from traditional advertising?
            </AccordionHeader>
            <AccordionBody>
            3D billboards go beyond static visuals. They create a three-dimensional visual experience and users do not need any additional visual aid to see them. This makes the visuals appear as if they are happening in reality merging seamlessly with the environment around them.  Thus, the way these billboards engage audiences, people, and businesses is going crazy with dynamic content that leaves a lasting impression.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 2}
            icon={<Icon id={2} open={open} />}
            className="py-2 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(2)}
            >
             What advantages do 3D ad billboards offer over traditional ads?
            </AccordionHeader>
            <AccordionBody>
            3D ad billboards provide a phenomenally engaging and impactful way to convey your brand message. Unlike traditional ads, they showcase content that merges with users' reality and communicates on deeper cognitive levels.
            </AccordionBody>
          </Accordion>

          {/* <Accordion
            open={open === 3}
            icon={<Icon id={3} open={open} />}
            className="py-2 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(3)}
            >
              ?
            </AccordionHeader>
            <AccordionBody>
           ans
            </AccordionBody>
          </Accordion> */}

          {/* <Accordion
            open={open === 8}
            icon={<Icon id={8} open={open} />}
            className="py-2 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(8)}
            >
             ?
            </AccordionHeader>
            <AccordionBody>
           ans
            </AccordionBody>
          </Accordion> */}
        </div>

        <div>
          <Accordion
            open={open === 4}
            icon={<Icon id={4} open={open} />}
            className="py-2 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(4)}
            >
              Why 3D ad billboards?
            </AccordionHeader>
            <AccordionBody>
            3D ad billboards provide a unique, and impactful way to convey your brand message. The depth and realism of 3D graphics capture passersby's attention, making them stop and get captivated by the visuals. 3D billboard ads enhance brand recall and create a memorable brand interaction for the audience.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 5}
            icon={<Icon id={5} open={open} />}
            className="py-2 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(5)}
            >
               Why should I choose a professional 3D billboard development company?
            </AccordionHeader>
            <AccordionBody>
            Professional 3D billboard development companies utilize the latest tools and techniques to create anamorphic videos meant to be displayed on curved anamorphic screens. A billboard development company, like Hey Buddy, makes sure that your vision is impeccably translated into a captivating and effective 3D billboard. 

            </AccordionBody>
          </Accordion>

          {/* <Accordion
            open={open === 7}
            icon={<Icon id={7} open={open} />}
            className="py-2 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(7)}
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
            className="py-2 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(6)}
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
