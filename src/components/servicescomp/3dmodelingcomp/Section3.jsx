"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const texts = [
  {
    title: "3D Character Development",
    description:
      "Our experienced, skilled and creative 3D artists and modellers produce visually impressive 3D characters just for your project, brand and storytelling      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581173569_ui9qyi.png",
  },
  {
    title: "3D Asset Development",
    description:
      "We develop meticulously detailed, accurate, and high-quality 3D assets that perfectly fulfil your project's visual and functional needs.  ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581174159_cwfrr1.png",
  },
  {
    title: "3D Environment Development",
    description:
      "We create deeply immersive environments that captivate your audience with ultra-realistic visuals and perfectly fit your project needs.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581174874_f3scst.png",
  },
  {
    title: "3D Hard Surface Modelling",
    description:
      "We create detailed 3D models of objects or structures following your specific guidelines and ensure timely delivery for uninterrupted project operations.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581175611_8gu1xl.png",
  },
  {
    title: "3D Animation Services",
    description:
      "Our client-centric approach ensures our 3D animations and meticulous rigging convey your vision accurately while captivating the audience with high-quality visuals.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581176328_jwj7je.png",
  },
  {
    title: "3D MetaHuman Creation Services",
    description:
      "Get photorealistic digital humans with easy customisation, We create Metahumans for virtual productions, games, or all other applications. ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581177158_0lkfux.png",
  },
];

const Motionslide = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let workInfoItems = document.querySelectorAll(".work__photo-item");
    const totalItems = workInfoItems.length;
    
    // Set initial z-index and GPU-accelerated properties
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = totalItems - index;
      // Enable GPU acceleration for clipPath
      item.style.willChange = "clip-path";
      item.style.transform = "translateX(-50%) translateZ(0)";
    });

    // Set initial clipPath state (all images fully visible)
    gsap.set(".work__photo-item", {
      clipPath: "inset(0px 0px 0px 0px)",
      force3D: true,
    });

    // Create animation with clipPath - using original approach with optimized timing
    // The stagger ensures images change at the right time relative to text sections
    const animation = gsap.to(".work__photo-item:not(:last-child)", {
      clipPath: "inset(0px 0px 100% 0px)",
      stagger: 0.5, // Original value - keeps images visible longer
      ease: "power2.out", // Smooth easing
      force3D: true,
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 0.3, // Reduced for more responsive sync
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    // Cleanup function
    return () => {
      scrollTrigger?.kill();
      workInfoItems.forEach((item) => {
        item.style.willChange = "auto";
      });
    };
  }, []);

  return (
    <div>
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
            Hey Buddy:
            <br />
            One-stop Destination for all 3D Modelling services
          </h1>
          <p className="text-m lg:text-m">
            No tiring search for different vendors for different services, Hey
            Buddy’s comprehensive 3D modelling services get all you need. From
            AR/VR and CGI to product visualisation and animation, we offer
            complete 3D development services for every business and every
            project. Just partner and procure.
          </p>
        </div>
      </div>
      <div className="h-fit relative lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev3.png')] bg-fixed bg-bottom ">
        <section className="work  hidden lg:flex flex-row justify-between">
          <div className="work__left">
            <div className="work__text flex flex-col items-center">
              {texts.map((text, index) => (
                <WorkItem
                  key={index}
                  title={text.title}
                  description={text.description}
                />
              ))}
            </div>
          </div>
          <div className="work__right">
            <div className="work__right-b1">
              <div className="work__photo flex flex-col items-center">
                <PhotoItem
                  title="0"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581173569_ui9qyi.png"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581174159_cwfrr1.png"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581174874_f3scst.png"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581175611_8gu1xl.png"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581176328_jwj7je.png"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581177158_0lkfux.png"
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="flex flex-col gap-10 lg:hidden">
          {texts.map((text, index) => (
            <GamedevCard
              key={index}
              imageUrl={text.img}
              description={text.description}
              title={text.title}
            />
          ))}
        </section>
      </div>
    </div>
  );
};

export default Motionslide;
