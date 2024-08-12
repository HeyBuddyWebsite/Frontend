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
      heading: "Android VR Development Services",
      imgurl: "",
      para: "We offer comprehensive Android VR development services so you easily reach a wider audience, right from day one.",
    },
    {
      id: "2",
      heading: "iOS VR Development Service",
      imgurl: "",
      para: "Our expert iOS development service helps you reach a high-quality audience of iOS users around the globe.",
    },
    {
      id: "3",
      heading: "Unreal Engine 5 VR Development",
      imgurl: "",
      para: "Get hyper-realistic VR experiences with our development services utilizing Unreal Engine 5.",
    },
    {
      id: "4",
      heading: "Unity VR Development Services",
      imgurl: "",
      para: "With our Unity VR development, we create visually interactive VR experiences for your specific audience.",
    },
    // {
    //   id: "5",
    //   heading: "Custom VR Simulation Development",
    //   imgurl: "",
    //   para: "We develop realistic VR simulations, with real-world physics and maneuverability. Get custom training, education, and other industry applications for effective outcomes.",
    // },
    // {
    //   id: "6",
    //   heading: "VR Content Creation Expertise",
    //   imgurl: "",
    //   para: "Want to enrich your VR applications? Our team is ready to deliver. Impress your audience with our visually stunning 3D models, animations, and multimedia content.",
    // },
    // {
    //   id: "7",
    //   heading: "Strategic VR Consulting",
    //   imgurl: "",
    //   para: "Leverage our industry expertise for insightful advice and data-driven strategy on VR technology. We guide you through every step for a seamless integration.",
    // },
    // {
    //   id: "8",
    //   heading: "Seamless VR Hardware Integration",
    //   imgurl: "",
    //   para: "Be assured of optimal performance for every VR headset, controller, and hardware component. We offer a unified and immersive experience with our virtual reality software.",
    // },
    // {
    //   id: "9",
    //   heading: "Dedicated VR Maintenance and Support",
    //   imgurl: "",
    //   para: "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
    // },
    // {
    //   id: "10",
    //   heading: "Cross-Platform VR Development",
    //   imgurl: "",
    //   para: "We ensure your broad accessibility with services across VR platforms and devices. Get maximized reach and impact of your VR applications with a consistent user experience.",
    // },
    // {
    //   id: "11",
    //   heading: "Intuitive VR UI/UX Design",
    //   imgurl: "",
    //   para: "We design user interfaces and experiences tailored to virtual reality applications. Here, we prioritize usability and user engagement for a high success rate.",
    // },
    // {
    //   id: "12",
    //   heading: "Rigorous VR App Testing",
    //   imgurl: "",
    //   para: "Get complete quality assurance with high functionality, performance, and user satisfaction of your VR applications. Avail of our VR app testing services.",
    // },
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