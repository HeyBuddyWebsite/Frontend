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
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">FAQs on AI Ads Services</h1>
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
              What types of AI ad creatives do you create?
            </AccordionHeader>
            <AccordionBody>
              We specialize in a wide range of AI-generated ad creatives, including product-centric demo videos, UGC-style ads, short-form social media videos, multi-format video delivery, and AI-generated hook & caption variations. We also provide AI voiceovers and subtitles for enhanced reach and accessibility.
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
              How does AI improve ad creative effectiveness?
            </AccordionHeader>
            <AccordionBody>
              AI uses data-driven insights and generative algorithms to create personalized and optimized ad content that resonates with your target audience, improves engagement, and maximizes ROI.
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
              Can you customize AI ads to fit my brand and campaign goals?
            </AccordionHeader>
            <AccordionBody>
              Absolutely! Our AI ads creative services are fully customizable to align with your brand identity, marketing objectives, and target audience preferences.
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
              Which advertising platforms do your AI creatives support?
            </AccordionHeader>
            <AccordionBody>
              We create AI ad creatives optimized for major digital advertising platforms including Facebook, Instagram, Google Ads, LinkedIn, and more.
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
              How quickly can I expect to see results from AI-generated ads?
            </AccordionHeader>
            <AccordionBody>
              Results vary depending on the campaign type and target audience, but AI-optimized ads typically achieve faster engagement and improved conversion rates due to their personalized and data-driven nature.
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
              Do you provide support for ad campaign performance analysis?
            </AccordionHeader>
            <AccordionBody>
              While our primary focus is on AI ad creative development, we can collaborate with your marketing team or provide insights to help optimize your campaign performance over time.
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
              Is AI advertising suitable for small businesses?
            </AccordionHeader>
            <AccordionBody>
              Yes, AI ads are highly beneficial for small businesses, allowing you to compete effectively with personalized, scalable, and budget-friendly ad creatives.
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
              How do AI voiceovers and subtitles enhance my ad campaigns?
            </AccordionHeader>
            <AccordionBody>
              AI-generated voiceovers and subtitles improve accessibility, cater to diverse audiences, and increase viewer engagement by making your ads easier to understand and more inclusive across different languages and hearing abilities.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </motion.div>
  );
};

export default Faqsection;


