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
      ques: "What makes a 3D billboard different from traditional advertising?",
      ans: "3D billboards go beyond static visuals. They create a three-dimensional visual experience and users do not need any additional visual aid to see them. This makes the visuals appear as if they are happening in reality merging seamlessly with the environment around them. Thus, the way these billboards engage audiences, people, and businesses is going crazy with dynamic content that leaves a lasting impression."
    },
    {
      id: 2,
      ques: "What advantages do 3D ad billboards offer over traditional ads?",
      ans: "3D ad billboards provide a phenomenally engaging and impactful way to convey your brand message. Unlike traditional ads, they showcase content that merges with users' reality and communicates on deeper cognitive levels."
    },
    {
      id: 3,
      ques: "Why 3D ad billboards?",
      ans: "3D ad billboards provide a unique, and impactful way to convey your brand message. The depth and realism of 3D graphics capture passersby's attention, making them stop and get captivated by the visuals. 3D billboard ads enhance brand recall and create a memorable brand interaction for the audience."
    },
    {
      id: 4,
      ques: "Why should I choose a professional 3D billboard development company?",
      ans: "Professional 3D billboard development companies utilize the latest tools and techniques to create anamorphic videos meant to be displayed on curved anamorphic screens. A billboard development company, like Hey Buddy, makes sure that your vision is impeccably translated into a captivating and effective 3D billboard."
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
