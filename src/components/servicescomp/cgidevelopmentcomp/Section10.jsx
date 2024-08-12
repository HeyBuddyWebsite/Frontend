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
      ques: "What is a CGI company?",
      ans: "A CGI company specializes in creating visuals using computer graphics and offers services such as 3D modeling, animation, visual effects, and virtual reality. These services are used by businesses across industries, including entertainment, advertising, and simulation."
    },
    {
      id: 2,
      ques: "How do CGI production companies contribute to the film and entertainment industry?",
      ans: "CGI production companies play a pivotal role in film and entertainment. They produce high-quality visual effects, animations, and computer-generated sequences. This way, they bring imaginative and realistic visuals to the screen to captivate the viewers and deliver an enchanting cinematic experience."
    },
    {
      id: 3,
      ques: "What services are offered by CGI agencies?",
      ans: "CGI agencies specialize in providing computer-generated imagery solutions. This included 3D visualization, animation, and virtual experiences."
    },
    {
      id: 4,
      ques: "How does a 3D CGI Company differ from traditional creative agencies?",
      ans: "Unlike traditional creative agencies, CGI agencies focus on the technical aspects of visual content creation, thereby delivering realistic and impactful visuals for every business requirement, be it marketing or training."
    },
    {
      id: 5,
      ques: "How does CGI technology work?",
      ans: "CGI technology involves the use of computer software and algorithms to create realistic and appealing images to captivate viewers. This also includes animations, i.e., infusing life into 3D models with movements. Recent advancements in CGI technology include real-time rendering, improved physics simulations, and the integration of artificial intelligence. This enhances the efficiency and quality of CGI production and makes them highly useful for various applications, from movies to virtual experiences."
    },
    {
      id: 6,
      ques: "What is CGI packaging? And what benefits does it offer to product presentation?",
      ans: "CGI packaging involves creating ultra-realistic and visually mesmerising 3D digital product representations of an actual product. This involved using computer-generated imagery, which allows companies to showcase products in various scenarios and designs for impactful marketing, flexible prototyping, and captivating visualization for packaging solutions."
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
