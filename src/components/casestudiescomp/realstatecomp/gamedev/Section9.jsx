"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
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

const Sliderclient = ({
  heading1,
  heading2,
  heading3,
  para1,
  para2,
  para3,
}) => {
  // const [isMobile, setIsMobile] = useState(false);
  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
  //   };

  //   // Initial check on mount
  //   handleResize();

  //   // Listen for window resize events
  //   window.addEventListener("resize", handleResize);

  //   // Cleanup on component unmount
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
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

  const List = [
    {
      id: "1",
      serialno: "01",
      heading: heading1,
      imgurl: "",
      para: para1,
    },
    {
      id: "2",
      serialno: "02",
      heading: heading2,
      imgurl: "",
      para: para2,
    },
    {
      id: "3",
      serialno: "03",
      heading: heading3,
      imgurl: "",
      para: para3,
    },
    // {
    //   id: "4",
    //   serialno: "01",
    //   heading: "Enhanced Brand Engagement4",
    //   imgurl: "",
    //   para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
    // {
    //   id: "5",
    //   serialno: "01",
    //   heading: "Enhanced Brand Engagement5",
    //   imgurl: "",
    //   para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
    // },
    // {
    //   id: "6",
    //   serialno: "01",
    //   heading: "Enhanced Brand Engagement6",
    //   imgurl: "",
    //   para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
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
          dots: false,
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
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/csgame10.png')] bg-no-repeat bg-auto lg:bg-cover bg-[center_top_0rem]">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
      >
        <div className="py-14 w-[90%] mx-auto flex-flex-col items-center">
          <div className="py-8  text-white mx-auto text-center">
            <h1 className="py-4 font-bold text-2xl lg:text-4xl">
              Project Challenges
            </h1>
            {/* <p className="text-xl lg:text-2xl">
        Investing in game development is not just about creating entertainment but a strategic move to brand expansion and market leadership. It is a strategic avenue for investing in innovation and engagement and staying ahead in today's dynamic business landscape.
        </p> */}
          </div>
          <div className="mx-auto">
            <div
              className={
                "grid justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 gap-y-4 gap-x-4 " +
                (List[2].para ? "lg:grid-cols-3" : "lg:grid-cols-2")
              }
            >
              {List.map((section, index) => (
                <div
                  className="px-2
                 mx-auto "
                >
                  {section.para && (
                    <figure class=" overflow-y-scroll scrollbar-hide flex flex-col p-4 lg:p-6 hover:bg-yellow-600 hover:bg-opacity-30 rounded-2xl h-full   w-full bg-gray-700  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-10 border-2 border-gray-700">
                      <blockquote class="  text-gray-400">
                        <span className="text-left text-4xl lg:text-6xl font-semibold text-gray-400">
                          {section.serialno}
                        </span>

                        <h3
                          style={{ color: "white" }}
                          class="py-4 text-xl font-semibold   "
                        >
                          {section.heading}
                        </h3>

                        <p className="text-white text-left mb-8 overflow-auto scrollbar-hide">
                          {section.para}
                        </p>
                      </blockquote>
                    </figure>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Sliderclient;
