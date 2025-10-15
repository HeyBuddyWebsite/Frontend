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
              What sets apart an AI development company from other software
              firms?
            </AccordionHeader>
            <AccordionBody>
              An AI development company like Hey Buddy specializes in creating
              advanced business solutions using artificial intelligence
              technologies. Unlike general software firms, they focus
              specifically on utilizing the power of AI to deliver innovative
              and intelligent applications.
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
              How can I find reliable AI development services for my project?
            </AccordionHeader>
            <AccordionBody>
              To find reliable AI development services, conduct thorough
              research, look for the project they delivered, and their
              clientele, review different platforms, and review their portfolio.
              Fix a meeting, and ask them about the AI software development
              process and how they collaborate with their clients for projects
              to guarantee the success of your project.
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
              Are there specialized AI development companies in India that focus
              on machine learning?
            </AccordionHeader>
            <AccordionBody>
              Yes, there are several AI or machine learning development
              companies in India specializing in the domain. Machine learning is
              basically a sub-set of AI and these companies utilize their AI
              expertise to achieve exactly that. Hey Buddy’s artificial
              intelligence development services lay a specific focus on machine
              learning to develop ML solutions that perfectly match your
              requirements.
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
              What benefits does an AI solutions company bring to businesses
              seeking technological advancements?
            </AccordionHeader>
            <AccordionBody>
              An AI solutions company brings various benefits, including
              customized AI solutions. They help businesses capitalize on this
              amazing technology to augment their efficiency, power
              decision-making processes, and stay way ahead of the competition
              in the cut-throat market.
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
              Can you recommend an experienced AI app development company for
              creating cutting-edge solutions?
            </AccordionHeader>
            <AccordionBody>
              Certainly! If you're looking for an experienced AI app development
              company, Hey Buddy. We specialize in developing sophisticated and
              robust applications, and our team of expert AI ML developers
              delivers innovative and high-performance solutions. So if you are
              looking for an AI ML company, Hey Buddy is the name you should
              trust.
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
              What is the difference between AI, ML and DL?
            </AccordionHeader>
            <AccordionBody>
              Artificial Intelligence: Machines doing smart things. Machine
              Learning: Machines learning from experience. Deep Learning:
              Machines learning from deep, layered neural network
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
              Does Hey Buddy provide Unity 3D development services, and what
              types of projects can be developed using Unity?
            </AccordionHeader>
            <AccordionBody>
              Yes, Hey Buddy offers Unity 3D development services. Projects
              developed using Unity include games, simulations, virtual tours,
              training applications, and various interactive experiences across
              diverse industries.
            </AccordionBody>
          </Accordion>

          <Accordion
            open={open === 6}
            icon={<Icon id={6} open={open} />}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(6)}
              className="!text-lg"
            >
              What is hard surface modelling, and how does it differ from other
              3D modelling techniques?
            </AccordionHeader>
            <AccordionBody>
              Hard surface modelling focuses on creating detailed 3D models of
              inanimate objects or structures, differing from organic modelling
              that emphasizes natural forms like characters or creatures.
            </AccordionBody>
          </Accordion> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Faqsection;
