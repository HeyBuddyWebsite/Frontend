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
      ques:" What sets apart an AI development company from other software firms?",
      ans:" An AI development company like Hey Buddy specializes in creating advanced business solutions using artificial intelligence technologies. Unlike general software firms, they focus specifically on utilizing the power of AI to deliver innovative and intelligent applications."
    },
    {
      id:2,
      ques:"How can I find reliable AI development services for my project?",
      ans:"To find reliable AI development services, conduct thorough research, look for the project they delivered, and their clientele, review different platforms, and review their portfolio. Fix a meeting, and ask them about the AI software development process and how they collaborate with their clients for projects to guarantee the success of your project."
    },
    {
      id:3,
      ques:'Are there specialized AI development companies in India that focus on machine learning?',
      ans:"Yes, there are several AI or machine learning development companies in India specializing in the domain. Machine learning is basically a sub-set of AI and these companies utilize their AI expertise to achieve exactly that. Hey Buddy’s artificial intelligence development services lay a specific focus on machine learning to develop ML solutions that perfectly match your requirements."                       
    },
    {
      id:4,
      ques:"What benefits does an AI solutions company bring to businesses seeking technological advancements?",
              
      ans:"An AI solutions company brings various benefits, including customized AI solutions. They help businesses capitalize on this amazing technology to augment their efficiency, power decision-making processes, and stay way ahead of the competition in the cut-throat market."         
              
              
              
    },
    {
      id: 5,
      ques: "Can you recommend an experienced AI app development company for creating cutting-edge solutions?",
      ans: "Certainly! If you're looking for an experienced AI app development company, Hey Buddy. We specialize in developing sophisticated and robust applications, and our team of expert AI ML developers delivers innovative and high-performance solutions. So if you are looking for an AI ML company, Hey Buddy is the name you should trust."
    },
    {
      id: 6,
      ques: "What is the difference between AI, ML and DL?",
      ans: "Artificial Intelligence: Machines doing smart things. Machine Learning: Machines learning from experience. Deep Learning: Machines learning from deep, layered neural network"
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
