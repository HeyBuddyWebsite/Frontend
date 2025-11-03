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
      heading: "Dynamic Storytelling and Gameplay",
      imgurl: "",
      para: "Using the PCG technique, we deploy AI creativity for on-the-go Games content. The technique adapts the storyline and gameplay to players’ preferences. ",
    },
    {
      id: "2",
      heading: "Humanised NPCs Who Learn And Evolve With The Game",
      imgurl: "",
      para: "Using Machine Learning and Natural Language Processing, we create humanised NPCs with intelligence, evolving personalities, and natural behaviour. They learn and adapt over time. ",
    },
    {
      id: "3",
      heading: "Adaptive Gameplay to Wider Audience Reach",
      imgurl: "",
      para: "We infuse AI-based machine learning to infuse adaptability into your games. This way the game adjusts to individual player skills and preferences. quality attracts a broader audience by including both casual and hardcore gamers. ",
    },
    {
      id: "4",
      heading: "Never-before Monetization Opportunities ",
      imgurl: "",
      para: "With AI-driven personalization, we also help you leverage targeted and refined in-game advertisements, promotions, and microtransactions.",
    },
    {
      id: "5",
      heading: "Perfect Strategies with AI-driven Data Analytics ",
      imgurl: "",
      para: "We leverage advanced AI tools to analyse player behaviour and get insights into gamers’ preferences and in-game behaviour. ",
    },
    {
      id: "6",
      heading: "Accurate Spatial Computing for Deep Immersion",
      imgurl: "",
      para: "We use AI-powered spatial computing to seamlessly merge the AR/VR Games experience with gamers’ reality. It facilitates accurate object and gesture recognition, precise tracking, and real-time rendering. ",
    },
    {
      id: "7",
      heading: "Anti-Cheat Solutions To Protect Your Games Brand",
      imgurl: "",
      para: "We safeguard the integrity of your games with AI-based robust anti-cheat systems, ensuring fair Games, reducing frustration among legitimate players, and preserving your brand and game's reputation. ",
    },
    {
      id: "8",
      heading: "Attracting Tech-savvy Gamers with AI-driven Competitive Edge",
      imgurl: "",
      para: "Games businesses that leverage AI gain a competitive edge in the industry. Players are often drawn to titles with advanced technologies and features, making AI an essential tool for staying relevant in the competitive Games market. ",
    },
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
    //   para: "We ensure your broad accessibility with services across VR platforms and devices. Get maximized reach and impact of your VR applications with a consistent user experience. ",
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
    //   para: "Get complete quality assurance with high functionality, performance, and user satisfaction of your VR applications. Avail of our VR app testing services. ",
    // },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div> 
        <Slider {...settings} className=" py-5 " >
          {List.map((section, index) => (
            <div className="px-2 h-[300px]">
              <figure class="flex flex-col p-4 lg:p-6  rounded-lg  h-full w-full bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
                <blockquote class=" text-gray-400">
                  <h3
                    style={{ color: "white" }}
                    class="py-4 text-xl font-semibold  text-gray-500 "
                  >
                    {section.heading}
                  </h3>

                  <p
                    style={{ color: "white", height: "25vh" }}
                    className="text-left "
                  >
                    {section.para}
                  </p>
                </blockquote>
              </figure>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
};

export default Sliderclient;
