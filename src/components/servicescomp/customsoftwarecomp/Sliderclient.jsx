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
          heading: "Custom Product Planning and Inventory Management Software",
          imgurl: "",
          para: "Our client, a leading manufacturing company, faced inefficiencies in production planning and inventory management. We developed a custom software to optimize production schedules and automate inventory tracking for our client. The results were astonishing.",
        },
        {
          id: "2",
          heading: "Custom Patient Data Management Software for Leading Healthcare Providers",
          imgurl: "",
          para: "One of our healthcare provider clients needed a secure and compliant patient data management system to ensure better confidentiality and security and to streamline their operations. We developed the required software solution with robust security features, ensuring HIPAA compliance.",
        },
        {
          id: "3",
          heading: "Feature-packed, User-friendly E-commerce Solution",
          imgurl: "",
          para: "An e-commerce startup sought a scalable platform to handle rapid growth and a diverse product range. We developed a customized e-commerce solution with advanced features and a user-friendly interface for efficient catalog management and order processing.",
        },
        {
          id: "4",
          heading: "Visually-High Gaming Demand Met with Innovative Custom Solutions",
          imgurl: "",
          para: "Our partners, a renowned gaming studio, faced challenges in creating an immersive multiplayer online game with complex graphics and interactive features. The solution required a special focus on the visuals of the game.",
        },
        {
          id: "5",
          heading: "Success Stories With Hey Buddy Customer Software Solutions",
          imgurl: "",
          para: "Hey Buddy is a leading custom software development company. We have multiple success stories to share. After all, our custom software solutions have helped clients across industries and scales.",
        },
        // {
        //   id: "6",
        //   heading: "We Understand You",
        //   imgurl: "",
        //   para: "At Hey Buddy, We understand and offer exactly what you expect. Thanks to our vast experience of working with hundreds of clients over the years. ",
        // },
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

          <figure class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
            <blockquote class="  text-gray-400">
              <h3
                style={{ color: "white" }}
                class="py-4 text-xl font-semibold  text-gray-500 "
                >
                {section.heading}
              </h3>

              <p style={{ color: "white" , height:"25vh" }} className="text-left">
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