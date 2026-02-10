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
              What age groups is the robotics lab suitable for?
            </AccordionHeader>
            <AccordionBody>
              Our robotics solutions cater to K-12 and higher education. We have simple block-based kits for primary students, intermediate mechanic kits for middle school, and advanced AI/ROS robots for high school and university students.
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
              Do you provide training for teachers?
            </AccordionHeader>
            <AccordionBody>
              Yes, absolutely. We believe the teacher is the key to a successful lab. We provide comprehensive, hands-on faculty development programs to ensure they are confident in teaching the curriculum and using the equipment.
            </AccordionBody>
          </Accordion>
        </div>

        <div>
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
              How much space is needed for a robotics lab?
            </AccordionHeader>
            <AccordionBody>
              A standard classroom size (approx 600-800 sq ft) is usually sufficient for a batch of 30 students. We design the layout to include workstations, a central testing arena, and storage units within the available space.
            </AccordionBody>
          </Accordion>

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
              Do you help with competitions?
            </AccordionHeader>
            <AccordionBody>
              Yes! Our curriculum and kits are aligned with major national and international robotics competitions. We provide mentorship and specific training tracks to help your school's team succeed on the global stage.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default FAQSection;
