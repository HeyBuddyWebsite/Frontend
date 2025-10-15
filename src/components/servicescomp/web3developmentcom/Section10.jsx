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
              Who is leading Web3 development in USA?
            </AccordionHeader>
            <AccordionBody>
            Hey Buddy has been a trusted name and  recognized as the best Web3 development company in the USA. With a proven track record and innovative solutions, they lead the charge in decentralized technologies.
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
          What does a Web3 developer do?
            </AccordionHeader>
            <AccordionBody>
            A Web3 developer excels specialize in implementing advanced Web3 technologies such as smart contract development, blockchain to create decentralized applications (DApps). These app stand out for operating without a central authority, utilising self-executing code for automated processes, record transaction on a blockchain for tamper-proof records, user control and ownership over their data and interoperability.
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
              What is a Web3 company?
            </AccordionHeader>
            <AccordionBody>
            Referring to Hey Buddy, a top Web3 development company in the USA, it offers comprehensive services encompassing blockchain, smart contracts, and decentralized applications. 
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
        Is a Web3 developer in demand?
            </AccordionHeader>
            <AccordionBody>
            Yes! Given the rise of decentralized technologies, the demand for Web3 developers is soaring. Companies, especially those seeking the best Web3 development company in the USA, recognize the crucial role these developers play in creating the next generation of digital solutions. 

            </AccordionBody>
          </Accordion>

         

         
        </div>
      </div>
    </motion.div>
  );
};

export default Faqsection;
