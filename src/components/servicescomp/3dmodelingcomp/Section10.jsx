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
      id:1,
      ques:"What types of projects can benefit from Hey Buddy's 3D modelling services?",
      ans:"Hey Buddy's 3D modelling services contribute to a wide range of projects, including AR/VR, animations, CGI, product visualizations, product animations, and game development using Unity and Unreal Engine."
    },
    {
      id:2,
      ques:"How does Hey Buddy ensure the security and confidentiality of client projects?",
      ans:"We prioritize client confidentiality and security through robust measures, including signed NDAs, restricted access to project data, and secure file transfer protocols."
    },
    {
      id:3,
      ques:"What is the typical turnaround time for 3D modelling projects at Hey Buddy?",
      ans:"Turnaround times vary based on project complexity and scope. However, we strive for efficient timelines, ensuring timely deliveries without compromising quality."
    },
    {
      id:4,
      ques:"What is Unity 3D development, and how can it benefit my Games or interactive project?",
      ans:"Unity 3D development involves creating interactive experiences, primarily in Games. It offers a versatile platform for developing immersive games and applications across multiple platforms."
    },
    {
      id:5,
      ques:"Can clients provide input during the 3D modelling process, and how is feedback handled?",
      ans:"Yes, client input is encouraged. We have a collaborative approach, with dedicated points for client feedback. Revisions are made based on client suggestions to ensure the final product aligns with their vision."
    },
    {
      id:6,
      ques:"What sets Hey Buddy apart from other 3D modelling service providers?",
      ans:"Hey Buddy stands out due to its comprehensive suite of services covering various industries, a transparent and collaborative workflow, a client-centric approach, and a commitment to delivering high-quality, visually impressive 3D assets."
    },
    {
      id:7,
      ques:"Does Hey Buddy provide Unity 3D development services, and what types of projects can be developed using Unity?",
      ans:"Yes, Hey Buddy offers Unity 3D development services. Projects developed using Unity include games, simulations, virtual tours, training applications, and various interactive experiences across diverse industries."
    },
    {
      id:8,
      ques:"What is hard surface modelling, and how does it differ from other 3D modelling techniques?",
      ans:"Hard surface modelling focuses on creating detailed 3D models of inanimate objects or structures, differing from organic modelling that emphasizes natural forms like characters or creatures."
    },
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
