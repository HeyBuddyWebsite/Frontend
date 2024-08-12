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

  const faqs=[
    {
      id: 1,
      ques: "What are Augmented Reality development services?",
      ans: "AR development services create AR experiences that offer immersion. To explain, these experiences overlay digital 3D information or objects onto the real world. All you need is a smartphone."
    },
    {
      id: 2,
      ques: "What kind of Augmented Reality services do you offer?",
      ans: "We offer a wide range of AR development services for various industries. This includes concept ideation, design, software development, integration, testing, and deployment. Our Augmented reality applications offer a stable and enriched AR experience across various platforms."
    },
    {
      id: 3,
      ques: "Can you help in the entire AR development lifecycle?",
      ans: "HeyBuddy is one of the few AR development companies that provide end-to-end Augmented Reality services. Starting from initial consultation and concept creation to design, development, testing, deployment, and ongoing support for AR applications."
    },
    {
      id: 4,
      ques: "What are the typical costs associated with AR development?",
      ans: "Costs can vary based on project complexity, features, platforms, and the scope of work. We offer tailored pricing after understanding your project requirements during the initial consultation phase."
    }
  ]
  

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="pt-[44px] lg:pt-[100px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(8).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div>
        <h1 className="pb-[44px] lg:pb-[100px] lg:w-[80%] text-center mx-auto font-bold text-white text-2xl lg:text-4xl">FAQs</h1>
      </div>

      <div className=" grid text-white sm:grid-1  md:grid-cols-2 lg:grid-cols-2 gap-y-4  gap-x-4">
        {
          faqs.map((faq,index)=>{
            return <Accordion key={faq.id}
            open={open === faq.id}
            icon={<Icon id={faq.id} open={open} />}
            style={{height:"fit-content"}}
            className="py-2 px-5 lg:px-8 my-4  rounded-lg bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 hover:bg-red-500 hover:bg-opacity-20"
          >
            <AccordionHeader
              style={{ border: "0" }}
              onClick={() => handleOpen(faq.id)}
            className="!text-lg !font-semibold"
            >
              {faq.ques}
            </AccordionHeader>
            <AccordionBody>
            {faq.ans}
            </AccordionBody>
          </Accordion>
          })
                   
        }
        <div> 

         

         
        </div>
      </div>
      </div>
    </motion.div>
  );
};

export default Faqsection;
