"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import Sliderclient from "./Sliderclient";
import { AiFillCheckCircle } from "react-icons/ai";
import { motion, useAnimation } from "framer-motion";

const Mixsection = () => {
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
  const checklist1 = [
    {
      title: "Web 3 Games Solution",
    },
    {
      title: "Multi-chain Solutions",
    },
    {
      title: "Interoperability Solution",
    },
    {
      title: "Native Payment Solution",
    },
    // {
    //   title: "Product Animation",
    // },
    // {
    //   title: "Games",
    // },
  ];

  const cardData = [
    {
      id: 1,
      content:
        "Here is my opinion based on my experience, I have really enjoyed working with the game development team. The team is amicable, creative and understanding.",
      number: "01",
      name: "Zan Syed",
    },
    {
      id: 2,
      name: "Sarah",
      content:
        "Thank you very much! An amazing job done by buddies what I like to call the team that exceeds all expectations. I am glad that I trusted you guys with the work.",
      number: "02",
    },
    {
      id: 3,
      name: "Ankit",
      content:
        "I loved working with Hey Buddy and the way my VR project was handled, I consider this company as one of the best metaverse and game company in India.",
      number: "03",
    },
    {
      id: 4,
      name: "Riyahi",
      content:
        "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
      number: "04",
    },
    {
      id: 5,
      name: "Jeremy",
      content:
        "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
      number: "05",
    },
    {
      id: 6,
      name: "Bhaskar",
      content:
        "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
      number: "06",
    },
  ];


  const [currentCard, setCurrentCard] = useState(0);

  const handleChangeIndex = (index) => {
    setCurrentCard(index);
  };

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
     
      className="pt-[44px] lg:pt-[100px] mb-8 md:mb-12 lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(4).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div className=" text-white">
        <h1  className="mb-[25px] lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl">
        More Powerful Web 3 Development Solutions
        </h1>
        <p className="mb-[44px] lg:mb-[100px] text-base font-medium lg:w-[90%] mx-auto text-center">
        Hey Buddy offers unique and complete Web3 development solutions
        capable of overcoming the most challenging obstacles of your business.
        </p>
      </div>
      {/* --------------------box section ------------------------------------------ */}

      {/* pink box */}

      <div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" py-4 lg:py-6 px-2 lg:px-0 w-[100%]   mx-auto mb-8 md:mb-12 lg:mb-[150px]"
            style={{borderRadius:"24px",background: "linear-gradient(180deg, #3F8AE2 0%, #2362AB 100%)",border: "1px solid #FFFFFF",boxShadow: "0px 8px 10px -6px #0000001A",
              
            }}
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className="  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mx-auto lg:w-[80%] mx-auto gap-x-4 gap-y-8 ">
                {checklist1.map((section, index) => (
                  <div key={index} className="  flex items-center  justify-start gap-2 text-[#FFFFFF]  " >
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                      {/* &#10004; */}
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="font-semibold text-base">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>
      {/* ------------------slider-------------------------------- */}

      <Sliderclient />
      </div>
    </motion.div>
  );
};

export default Mixsection;
