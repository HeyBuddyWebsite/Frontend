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
              What types of businesses can benefit from Hey Buddy's digital marketing services?
            </AccordionHeader>
            <AccordionBody>
              Our services cater to startups, SMEs, enterprises, and niche brands across industries like real estate, e-commerce, gaming, logistics, and tech. Whether you need SEO, PPC, content marketing, or social media advertising, we tailor strategies for your goals.
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
              How long does it take to see results from digital marketing campaigns?
            </AccordionHeader>
            <AccordionBody>
              Timelines vary based on the campaign type and objectives. SEO campaigns often show results within 3–6 months, while PPC ads, paid campaigns, and social media promotions can generate leads and traffic almost instantly.
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
              Can I track the ROI of my digital marketing investment?
            </AccordionHeader>
            <AccordionBody>
              Absolutely. We believe in data-driven digital marketing. Our team uses analytics tools, conversion tracking, and KPI dashboards to provide complete transparency, showing you how each strategy impacts your bottom line.
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
              How does Hey Buddy ensure security and confidentiality of client data?
            </AccordionHeader>
            <AccordionBody>
              We follow industry-best security practices, comply with data protection laws, and ensure all projects are handled with utmost confidentiality. Your business insights, campaign data, and client information are always secure with us.
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
              What makes Hey Buddy different from other digital marketing agencies?
            </AccordionHeader>
            <AccordionBody>
              Unlike generic agencies, we combine creative innovation with technical expertise in Web3, AR/VR, AI-driven marketing, and enterprise solutions. Our focus on customized strategies, advanced tools, and measurable outcomes ensures superior results.
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
              Do you offer digital marketing for international brands or location-based businesses?
            </AccordionHeader>
            <AccordionBody>
              Yes. We specialize in location-based SEO, Google My Business optimization, and international SEO campaigns. Whether you're targeting local leads in Gurugram or scaling globally, we build strategies to maximize reach.
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
              Can you integrate digital marketing with my existing business software?
            </AccordionHeader>
            <AccordionBody>
              Yes. Hey Buddy excels in custom enterprise solutions including CRM, ERP, and marketing automation platforms to streamline campaigns and maximize efficiency.
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
              Do you provide flexible engagement models for digital marketing?
            </AccordionHeader>
            <AccordionBody>
              We offer retainer-based, project-based, and performance-based pricing models to meet your budget and business goals, ensuring cost-effectiveness without compromising on quality.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default Faqsection;



