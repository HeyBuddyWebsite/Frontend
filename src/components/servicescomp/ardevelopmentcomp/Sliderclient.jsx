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
      heading: "Expertise in Cutting-Edge AR Technologies",
      imgurl: "",
      para: "Benefit from our seasoned team of AR experts. Their expertise in the latest AR technologies brings your desired high-quality results.",
    },
    {
      id: "2",
      heading: "Proven Track Record with Diverse AR Projects          ",
      imgurl: "",
      para: "We have delivered AR projects of varying scales for a variety of clients. This included projects for budding startups to Fortune listers.           ",
    },
    {
      id: "3",
      heading: "Innovation and Creativity at the Core          ",
      imgurl: "",
      para: "With Hey Buddy, expect nothing less than innovation and creativity for your AR project. Our team goes up and beyond to infuse uniqueness into your project.",
    },
    {
      id: "4",
      heading: "Tailored Solutions Aligned with Your Goals ",
      imgurl: "",
      para: "We understand that your business is unique, and so are your project and its requirements. And that is precisely why our customized AR solutions are here.",
    },
    {
      id: "5",
      heading: "Seamless Integration with Existing Systems",
      imgurl: "",
      para: "Want to include AR functionality but hesitant? Experience a smooth transition with our AR applications. We offer seamless integration with full compatibility and interoperability.",
    },
    {
      id: "6",
      heading: "Scalability and Future-Proofing",
      imgurl: "",
      para: "Get scalable AR software solutions and future-proof your investments. Our AR applications adapt to your growing business needs for longevity and relevance.          ",
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