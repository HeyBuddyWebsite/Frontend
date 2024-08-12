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
      ques: "What expertise does Hey Buddy offer in VR development for Oculus?",
      ans: "Hey Buddy specializes in Oculus VR development. We develop immersive experiences tailored for Oculus devices. We maximize the potential of virtual reality on Oculus platforms, creating applications that redefine user interactions and elevate immersive experiences."
    },
    {
      id: 2,
      ques: "Does Hey Buddy provide VR development services for iOS and Android?",
      ans: "Yes, we offer complete VR development services for both iOS and Android platforms, for maximum reach and ensuring seamless and captivating experiences across mobile devices."
    },
    {
      id: 3,
      ques: "Can Hey Buddy assist in VR development for Metaverse?",
      ans: "Hey Buddy excels in Metaverse VR development for all prominent platforms including Roblox, Decentraland, Sansaar, and more. We align our solution with the right creative and social aspects to meet the standard at Metaverse."
    },
    {
      id: 4,
      ques: "Is there a VR development group at Hey Buddy for collaborative projects?",
      ans: "Yes, Hey Buddy has a dedicated VR development group to foster collaboration and enable expertise-sharing for innovative and impactful VR projects."
    },
    {
      id: 5,
      ques: "How does Hey Buddy approach VR development in Unity?",
      ans: "Unity is a cornerstone in Hey Buddy's VR development. We utilize its robust framework for creating immersive experiences across various platforms. Moreover, Hey Buddy’s proficient team in Unity for VR development delivers tailored solutions that harness the power of Unity's versatile development environment."
    },
    {
      id: 6,
      ques: "Does Hey Buddy support VR development in Unreal Engine 5?",
      ans: "Yes, We offer our adept VR development service using the powerful Unreal Engine 5. Its advanced features help us achieve high-fidelity and feature-packed virtual experiences."
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
