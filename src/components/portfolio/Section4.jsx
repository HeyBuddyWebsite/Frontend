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
    <div
      className="pt-16 w-[100%] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse4.png')] bg-no-repeat bg-auto bg-[center_top_1rem]"
      id="faq"
    >
      <div className="w-[80%] mx-auto">
        <div className="font-bold text-[#2362AB]">{`FAQ's`}</div>
        <div className="pt-2 pb-8 mb-8 border-b-2 border-b-white">
          <h1 className="  text-4xl text-white">Frequently Asked Questions</h1>
        </div>

        <div className="pb-14 grid text-white sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4  gap-x-4">
          <div>
            <Accordion
              open={open === 1}
              icon={<Icon id={1} open={open} />}
              className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-opacity-20"
            >
              <AccordionHeader
                style={{ border: "0" }}
                onClick={() => handleOpen(1)}
                className="!text-lg"
              >
                What services does SquareUp provide?
              </AccordionHeader>
              <AccordionBody>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 2}
              icon={<Icon id={2} open={open} />}
              className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  hover:bg-opacity-20"
            >
              <AccordionHeader
                style={{ border: "0" }}
                onClick={() => handleOpen(2)}
                className="!text-lg"
              >
                How can SquareUp help my business?
              </AccordionHeader>
              <AccordionBody>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 3}
              icon={<Icon id={3} open={open} />}
              className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  hover:bg-opacity-20"
            >
              <AccordionHeader
                style={{ border: "0" }}
                onClick={() => handleOpen(3)}
                className="!text-lg"
              >
                What industries does SquareUp work with?
              </AccordionHeader>
              <AccordionBody>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 8}
              icon={<Icon id={8} open={open} />}
              className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  hover:bg-opacity-20"
            >
              <AccordionHeader
                style={{ border: "0" }}
                onClick={() => handleOpen(8)}
                className="!text-lg"
              >
                How long does it take to complete a project with SquareUp?
              </AccordionHeader>
              <AccordionBody>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </AccordionBody>
            </Accordion>
          </div>

          <div>
            <Accordion
              open={open === 4}
              icon={<Icon id={4} open={open} />}
              className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  hover:bg-opacity-20"
            >
              <AccordionHeader
                style={{ border: "0" }}
                onClick={() => handleOpen(4)}
                className="!text-lg"
              >
                Do you offer ongoing support and maintenance after the project
                is completed?
              </AccordionHeader>
              <AccordionBody>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </AccordionBody>
            </Accordion>

            <Accordion
              open={open === 5}
              icon={<Icon id={5} open={open} />}
              className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  hover:bg-opacity-20"
            >
              <AccordionHeader
                style={{ border: "0" }}
                onClick={() => handleOpen(5)}
                className="!text-lg"
              >
                Can you work with existing design or development frameworks?{" "}
              </AccordionHeader>
              <AccordionBody>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 6}
              icon={<Icon id={6} open={open} />}
              className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  hover:bg-opacity-20"
            >
              <AccordionHeader
                style={{ border: "0" }}
                onClick={() => handleOpen(6)}
                className="!text-lg"
              >
                How involved will I be in the project development process?{" "}
              </AccordionHeader>
              <AccordionBody>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 7}
              icon={<Icon id={7} open={open} />}
              className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  hover:bg-opacity-20"
            >
              <AccordionHeader
                style={{ border: "0" }}
                onClick={() => handleOpen(7)}
                className="!text-lg"
              >
                Can you help with website or app maintenance and updates?{" "}
              </AccordionHeader>
              <AccordionBody>
                SquareUp offers a range of services including design,
                engineering, and project management. We specialize in user
                experience design, web development, mobile app development,
                custom software development, branding and identity, and more.
              </AccordionBody>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqsection;
