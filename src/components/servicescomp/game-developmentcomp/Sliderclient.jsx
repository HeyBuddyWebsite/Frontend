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
      heading: "Mobile Game Development Services",
      para: "We develop outstanding mobile games for iOS and Android, reaching a global audience through seamless cross-platform skills. From hyper-casual titles to complex mid-core RPGs, we optimize for performance and retention.",
    },
    {
      id: "2",
      heading: "Unreal Engine Game Development Services",
      para: "Utilizing Unreal Engine 5.5, we push the limits of visual fidelity. We specialize in high-end graphics and complex physics to create cinematic experiences that blur the line between reality and digital art.",
    },
    {
      id: "3",
      heading: "Unity Game Development Services",
      para: "As experts in Unity 6, we offer versatile development for 2D, 3D, and AR/VR projects. We leverage Unity’s universal reach to ensure your game performs flawlessly across mobile, web, and desktop.",
    },
    {
      id: "4",
      heading: "Metaverse Game Development Services",
      para: "We build persistent virtual worlds that serve as social and economic hubs. Our metaverse solutions combine spatial computing with digital identity to create the next generation of social gaming.",
    },
    {
      id: "5",
      heading: "Web3 Game Development Services",
      para: "As a leading Web3 game development company, we integrate blockchain technology to facilitate decentralized gameplay. We focus on player-driven economies and secure, transparent digital ownership.",
    },
    {
      id: "6",
      heading: "AR/VR Game Development Services",
      para: "We push the boundaries with AR/VR technology, crafting unforgettable experiences for hardware like Apple Vision Pro and Meta Quest. We redefine interactive entertainment through spatial immersion.",
    },
    {
      id: "7",
      heading: "Console Game Development Services",
      para: "We bring your vision to the \"big screen\" by developing native titles for PlayStation 5 Pro, Xbox Series X, and Nintendo Switch. Our team manages the rigorous technical requirements and certification standards.",
    },
    {
      id: "8",
      heading: "PC Game Development Services",
      para: "Our team delivers captivating games for Windows and MacOS, ensuring \"Ultra\" performance. We specialize in building scalable architectures that run smoothly from Steam Deck to high-end enthusiast rigs.",
    },
    {
      id: "9",
      heading: "Casino Game Development Services",
      para: "We build high-stakes, visually stunning casino ecosystems. Our focus is on creating immersive, \"Vegas-style\" experiences that prioritize mathematical precision and global security standards.",
    },
    {
      id: "10",
      heading: "Rummy Game Development Services",
      para: "We develop secure, high-concurrency Rummy platforms designed for millions of real-time players. Our architecture is built to handle rapid card logic and seamless tournament transitions without latency.",
    },
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
