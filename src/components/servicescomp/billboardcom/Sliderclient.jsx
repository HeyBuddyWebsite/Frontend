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


    // const List = [
    //     {
    //       id: "1",
    //       heading: "AR/VR Experiences",
    //       imgurl: "",
    //       para: "Our expert 3D modelers enrich the visual appeal of your AR/VR projects, creating deeply immersive environments and characters for a truly interactive journey.",
    //     },
    //     {
    //       id: "2",
    //       heading: "Animation",
    //       imgurl: "",
    //       para: "Whether for promotional videos, educational content, or entertainment, our skilled 3D artists craft visually impressive animations, breathing life into your narratives.",
    //     },
    //     {
    //       id: "3",
    //       heading: "Computer-generated imagery (CGI)",
    //       imgurl: "",
    //       para: "Our CGI-specialist 3D modellers bring stunning visuals for your films, advertisements, and various digital media to add gravity to your storytelling and brand communication.",
    //     },
    //     {
    //       id: "4",
    //       heading: "Product Visualisation",
    //       imgurl: "",
    //       para: "Our 3D development team delivers lifelike visualisations for you to showcase products with ultra-realistic visuals and gain an edge in your marketing efforts for unbeatable success.",
    //     },
    //     {
    //       id: "5",
    //       heading: "Product Animation",
    //       imgurl: "",
    //       para: "Our team synergizes with yours to produce compelling product animations and dynamic product demonstrations that impactfully showcase your product’s functionality and features.",
    //     },
    //     {
    //       id: "6",
    //       heading: "Games",
    //       imgurl: "",
    //       para: "Our game-crazy 3D modellers develop characters, environments, assets and other customised 3D models for Unity, Unreal or your specific game engine.",
    //     },
    //   ];
 
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
    <></>
    // <motion.div
    // ref={ref}
    // initial="hidden"
    // animate={controls}
    // variants={textAnimation1}
    // >
    //      <div className="py-14">


          
        
    //     <Slider {...settings} >
       
    //     {List.map((section, index) => (
    //         <div className="px-2">

    //       <figure style={{maxHeight: '36vh' }} class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
    //         <blockquote class="  text-gray-400">
    //           <h3
    //             style={{ color: "white" }}
    //             class="py-4 text-xl font-semibold  text-gray-500 "
    //             >
    //             {section.heading}
    //           </h3>

    //           <p style={{ color: "white",  height:"25vh" }} className="text-left">
    //             {section.para}
    //           </p>
    //         </blockquote>
    //       </figure>
    //               </div>
    //     ))}
         
    //     </Slider>

    //   </div>
    // </motion.div>
  )
}

export default Sliderclient