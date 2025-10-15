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
          heading: "Enhanced Marketing and Advertising",
          imgurl: "",
          para: "Get compelling and visually striking content for marketing and advertising campaigns. Empower your brand's visibility and customer engagement for assured business success.",
        },
        {
          id: "2",
          heading: "Visual Realism for Presentations",
          imgurl: "",
          para: "Your presentations were never so impactful. With realistic CGI visuals, achieve high client satisfaction and higher project approvals. Stand out from the crowd and be remembered.",
        },
        {
          id: "3",
          heading: "Cost-Effective Prototyping",
          imgurl: "",
          para: "Save a fortune with CGI virtual prototypes before starting with full-fledged physical production. Get a clear visual idea, test in simulation, and move ahead with certainty. ",
        },
        {
          id: "4",
          heading: "Efficient Communication of Concepts",
          imgurl: "",
          para: "Establish clear and efficient communication, especially for complex concepts. Make sure your teams, clients, and stakeholders share an understanding of your project vision.",
        },
        {
          id: "5",
          heading: "Iterative Design and Feedback",
          imgurl: "",
          para: "Benefit from the flexibility of CGI for iterative design processes and incorporate client feedback with ease. Refine the final product and meet client expectations without missteps.",
        },
        {
          id: "6",
          heading: "Time Savings in Production",
          imgurl: "",
          para: "Save time in the production process. Eliminate the need for extensive physical setups or reshoots with CGI's efficiency. Achieve a faster turnaround and meet project timelines.",
        },
        {
          id: "7",
          heading: "Versatility in Creativity",
          imgurl: "",
          para: "Differentiate your business with the creative freedom of CGI. Explore different styles, settings, and visual elements to bring uniqueness and appeal to your final product.",
        },
        {
          id: "8",
          heading: "Adaptability to Changes",
          imgurl: "",
          para: "Be agile. Incorporate ongoing modifications in design during the production process. Experience dynamism with CGI's adaptability and meet evolving project requirements. ",
        },
        {
          id: "9",
          heading: "Vast Talent Pool",
          imgurl: "",
          para: "With Hey Buddy’s CGI experts team, you access a diverse talent pool and skillset. We ensure you get the highest quality visuals within a specified timeline and impress your audience.",
        },
        {
          id: "10",
          heading: "Future-Proofing Content",
          imgurl: "",
          para: "You can repurpose and reuse CGI assets for future-proofing. We create assets in a format usable for future projects. Therefore, you save resources for future projects.",
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