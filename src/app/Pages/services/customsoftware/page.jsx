"use client";
import '../../../../styles/Font.css'
import React, { useEffect, useState , useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/customsoftwarecomp/Section10";
import Pagenation from "@/components/servicescomp/customsoftwarecomp/Section8";
import Mixsection from "@/components/servicescomp/customsoftwarecomp/Section4";
import Timelinecomp from "@/components/servicescomp/customsoftwarecomp/Section5";
import Motionslide from "@/components/servicescomp/customsoftwarecomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/customsoftwarecomp/Section1";
import Bottomclient from "@/components/servicescomp/customsoftwarecomp/Section9";
import Section7 from "@/components/servicescomp/customsoftwarecomp/Section7";

const page = () => {


  const controls = useAnimation();
  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the container is in the viewport
    const container = document.getElementById('fade-in-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport) {
        setIsVisible(true);
      }
    }
  };

 

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const textAnimation = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const textAnimation1 = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5.5, ease: "easeOut" },
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

  const checklist1 = [
    {
      title: "Healthcare",
    },
    {
      title: "Gaming",
    },
    {
      title: "Finance and Banking",
    },
    {
      title: "E-commerce",
    },
    {
      title: "Manufacturing",
    },
    {
      title: "Education",
    },
  ];

  // --------------------grid section-1----------------------------------
  const List1 = [
    {
      id: "1",
      heading: "Tailored Solutions",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid1.png",
      para: "Custom software development provides tailored solutions specifically designed to meet your unique needs and overcome specific challenges of your business.",
    },
    {
      id: "2",
      heading: "Increased Efficiency",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid2.png",
      para: "When custom software fills the gaps, and streamlines and automates your business processes, your business operates on maximum efficiency.",
    },
    {
      id: "3",
      heading: "Competitive Advantage",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid3.png",
      para: "You gain a formidable competitive edge when custom software implements your distinct and innovative features and functionalities, setting you apart in the market.",
    },
    {
      id: "4",
      heading: "Scalability",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid4.png",
      para: "Custom software ensures your technology infrastructure expands as your company evolves and accommodates your growing needs.",
    },
    {
      id: "5",
      heading: "Cost Savings",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid5.png",
      para: "Customer software reduces your reliance on generic, off-the-shelf solutions that require extensive customization and maintenance, saving a lot of cost and time.",
    },
    {
      id: "6",
      heading: "Enhanced Security",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid6.png",
      para: "Integrate tailored security measures into your custom software, and get a higher level of protection against general as well as business-specific cyber threats.",
    },
  ];

  const Text1 = [
    {
      heading:
        "Get Specialised Software Solutions with Custom Software Development",
      subtext:
        "When you opt for customer software development, you get the exact solution you are looking for. This leads to higher business control, greater efficiency, outsmarting competition, and much more at a better price.",
    },
  ];

  //   ------------------grid section-2----------------------------------
  const List2 = [
    {
      id: "1",
      heading: "We Understand You",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid7.png",
      para: "At Hey Buddy, We understand and offer exactly what you expect. Thanks to our vast experience of working with hundreds of clients over the years.",
    },
    {
      id: "2",
      heading: "We Deliver Quality",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid8.png",
      para: "As we fully understand your requirements, we deliver the high quality you want. Our custom software fits your business requirements seamlessly.",
    },
    {
      id: "3",
      heading: "We Communicate Clearly",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid9.png",
      para: "We use the latest project management tools and employ time-tested techniques to ensure clear communication and keep you aware of every development.",
    },
    {
      id: "4",
      heading: "We Deliver on Time",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid10.png",
      para: "Our refined and streamlined software development process accelerates project deliveries to deliver well within timelines and without compromising on quality.",
    },
    {
      id: "5",
      heading: "We Value Your Money",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid11.png",
      para: "With Hey Buddy, we have experts readily available to deliver the best customer software solutions at the best price in the market. ",
    },
    {
      id: "6",
      heading: "We Adapt Quick",
      imgurl:
        "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/grid12.png",
      para: "Our experience makes use very flexible and adaptable to accommodate all your specific business needs and deliver the best custom software solutions.",
    },
  ];

  const Text2 = [
    {
      heading:
        "Choose Hey Buddy:",
      subtext:
        "We Listen To  Deliver",
    },
  ];


  //   ------------------grid section-4----------------------------------

  // ----------------------------------------------------------------


  return (
    <div className="lg:w-[80%] mx-auto">
      <div>

          {/* --------------------Section-1 ------------------------------------------ */}
        <div className="relative isolate px-6  pt-20 lg:px-8 ">
         
         <Herosection />

          <div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" bg-gradient-to-r from-[#24C2F8] to-[#0B0DF4] shadow-xl rounded-3xl py-4 lg:py-6 mt-8 mx-auto"
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-2 gap-5 lg:gap-x-16">
                {checklist1.map((section, index) => (
                  <div className="px-2 lg:px-16 flex items-center text-[#FFFFFF]  space-x-2.5 rtl:space-x-reverse">
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                     
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="font-medium leading-tight">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>

          {/* -------------------------grid-reuse------------------------------------- */}

          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev2.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List1} textData={Text1} />
          </div>

          {/* ------------------------Section-3-------------------------------------- */}
          <div> 
            <Motionslide />
          </div>

       

          {/* ----------------------------Section-4---------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev4.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Mixsection />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev5.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Timelinecomp />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev6.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Gridsection listData={List2} textData={Text2} />
          </div>

          {/* ----------------------------Section7---------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev7.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            {/* <Gridsection listData={List3} textData={Text3} /> */}
            <Section7/>
          </div>

          {/* ------------------------section-8-------------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev8.png')] py-8 bg-no-repeat lg:bg-cover ">
            <Pagenation />
          </div>

          {/* -----------------------Section-9--------------------------------------- */}
          <div className="text-white lg:py-16 bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev9.png')] py-8 bg-no-repeat lg:bg-cover">
            <Bottomclient />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div className="bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev10.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
            <Faqsection />
          </div>


        </div>
      </div>
    </div>
  );
};

export default page;
