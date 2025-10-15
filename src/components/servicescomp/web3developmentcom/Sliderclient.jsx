"use client";

import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "none" }}
        onClick={onClick}
      />
    );
  }

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
          heading: "Multi-chain Solutions",
          imgurl: "",
          para: "Elevate your project – choose multi-chain solutions for a connected blockchain ecosystem. Command multi-chain operations for the highest possible scalability. ",
        },
        {
          id: "2",
          heading: "Native Payment Solutions",
          imgurl: "",
          para: "No intermediaries mean faster and more effective operations. Our native payment solutions easily integrate and offer your users a frictionless payment experience.",
        },
        {
          id: "3",
          heading: "Self-sovereign Identity Solution",
          imgurl: "",
          para: "Revolutionize how individuals manage their digital identity on your platform. Say goodbye to centralized control and welcome the era of privacy.",
        },
        {
          id: "4",
          heading: "Interoperability Solutions",
          imgurl: "",
          para: "Connect, collaborate, and conquer with our interoperability solutions. Break down blockchain silos and foster seamless communication.",
        },
        {
          id: "5",
          heading: "Web3 Games Development",
          imgurl: "",
          para: "Capitalise on the future of Games with Web3 game development. Leverage blockchain Integration for in-game assets' uniqueness and monetization.",
        },
        {
          id: "6",
          heading: "Cross-Chain Development",
          imgurl: "",
          para: "Our cross-chain development solutions let your project span multiple networks with ease. Our solutions help you transcend the limits of a singular blockchain.",
        },
      ];
 
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


        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,

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
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
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
    >
         <div className="py-14">


          
        
        <Slider {...settings} >
       
        {List.map((section, index) => (
            <div className="px-2">

          <figure style={{maxHeight: '36vh' }} class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white",  height:"25vh" }} className="text-left">
                {section.para}
              </p>
            </blockquote>
          </figure>
                  </div>
        ))}
         
        </Slider>

      </div>
    </motion.div>
  )
}

export default Sliderclient