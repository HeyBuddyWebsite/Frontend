"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./styles.css"




const Sliderclient = () => {

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
  


  const List = [
    {
      id: "1",
      heading: "Interoperable Standards",
      imgurl: "",
      para: "We ensure the interoperability of your metaverse by following the industry standards comprising elements.",
    },
    {
      id: "2",
      heading: "Smart Contract",
      imgurl: "",
      para: "We infuse smart contracts for transparent and permissionless transactions introducing automation and efficiency.",
    },
    {
      id: "3",
      heading: "Decentralized Network",
      imgurl: "",
      para: "We facilitate decentralized data transmission for your Metaverse project on a high-bandwidth, decentralized network.",
    },
    {
      id: "4",
      heading: "Full-stack Programming",
      imgurl: "",
      para: "We use open programming language standards to offer front-end and back-end development.",
    },
    {
      id: "5",
      heading: "Payment Wallets",
      imgurl: "",
      para: "We integrate feature-rick crypto wallets and gateways for a globally convenient payment system for your user.",
    },
    {
      id: "6",
      heading: "Continuous Support Upgrade",
      imgurl: "",
      para: "We provide maintenance and upgrade services to ensure that your network, nodes, and smart contracts never face downtime.",
    },
  ];


      const slider = React.useRef(null);
      
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        style={{ ...style,right: "0rem" }}
        onClick={onClick}
        className="circle"
      >
        <IoArrowForwardSharp size="1.2rem" className="arrow" />
      </div>
    );
  }
  
  
  function SamplePrevArrow(props) {
    const {  onClick } = props;
    return (
      <div
        style={{left: "0rem" }}
        onClick={onClick}
        className="circle"
      >
        <IoArrowBackSharp size="1.2rem" className="arrow" />
      </div>
    );
  }
 
        const settings = {

        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        // autoplay: true,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        arrows:false,


        // nextArrow: <SampleNextArrow />,
        // prevArrow: <SamplePrevArrow />,

        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
        };

  return (
    <motion.div
    ref={ref}
    initial="hidden"
    animate={controls}
    variants={textAnimation1}
    className="w-[100%] mx-auto"
    >
         <div className="w-[90%] mx-auto">


          
        
         <Slider ref={slider} {...settings}>
       
        {List.map((section, index) => (
            <div className="px-2" key={index}>

          <figure style={{background: "#FFFFFF1A",borderRadius:"24px",height:"300px", overflow:"auto"}} class="flex scrollbar-hide flex-col p-4 lg:p-6    h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-bold   "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white",paddingBottom:"7px"   }} className="text-left text-base font-medium ">
                {section.para}
              </p>
            </blockquote>
          </figure>
                  </div>
        ))}
        
         
        </Slider>
        

      

      </div>

      <div
        style={{left: "0rem" }}
        onClick={() => slider?.current?.slickPrev()}
        className="slider-circle"
      >
        <IoArrowBackSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      <div
        style={{right: "0rem" }}
        onClick={() => slider?.current?.slickNext()}
        className="slider-circle"
      >
        <IoArrowForwardSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
    </motion.div>
  )
}

export default Sliderclient