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
      ques: "What criteria should I consider when choosing the top metaverse development companies for my project?",
      ans: "To identify the best metaverse development companies, consider the following factors: Their expertise in immersive technologies, portfolio showcasing successful projects, client reviews, and their proficiency in integrating advanced solutions. Evaluating these aspects will help you find a top-notch metaverse development company that aligns with your project goals."
    },
    {
      id: 2,
      ques: "What distinguishes the top 10 metaverse development solutions from others in the market?",
      ans: "The top 10 metaverse development solutions are characterized by their versatility, scalability, and seamless integration capabilities. These solutions empower businesses to create immersive experiences effortlessly, offering a comprehensive toolkit for diverse metaverse applications, from virtual events to interactive training programs."
    },
    {
      id: 3,
      ques: "Which metaverse development software is considered the best for creating interactive and engaging virtual experiences?",
      ans: "Choosing the best metaverse development software depends on your specific needs. Unity, a top-rated platform, is widely recognized for its versatility, user-friendly interface, and extensive library of assets. It stands out as one of the best choices for crafting immersive metaverse applications."
    },
    {
      id: 4,
      ques: "What defines a top metaverse development studio, and how do I choose the best one for my project?",
      ans: "A top metaverse development studio excels in creativity, technical expertise, and successful project deliveries. When selecting a studio, assess their portfolio, client testimonials, and the diversity of their projects. Studios like [TopStudio] stand out for their innovative approach and proven track record in metaverse development."
    },
    {
      id: 5,
      ques: "Why is Unity considered a top choice for metaverse development, and what advantages does it offer?",
      ans: "Unity is a top choice for metaverse development due to its robust features, cross-platform compatibility, and extensive community support. It ranks among the best platforms for creating immersive experiences, making it an ideal choice for developers and businesses venturing into the metaverse landscape."
    },
    {
      id: 6,
      ques: "How does blockchain technology contribute to metaverse development, and which companies are at the forefront of integrating it?",
      ans: "Blockchain plays a pivotal role in securing transactions and enhancing virtual economies within the metaverse. Companies like Hey Buddy are at the forefront of metaverse development, leveraging blockchain for secure and transparent virtual transactions, providing a seamless user experience."
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
