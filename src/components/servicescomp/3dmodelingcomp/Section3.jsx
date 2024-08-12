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
    img:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20character%20development.jpg"
    ,
  },
  {
    title: "3D Asset Development",
    description:
      "We develop meticulously detailed, accurate, and high-quality 3D assets that perfectly fulfil your project's visual and functional needs.  ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20assets%20development.jpg",
  },
  {
    title: "3D Environment Development",
    description:
      "We create deeply immersive environments that captivate your audience with ultra-realistic visuals and perfectly fit your project needs.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20envoirnment%20development.jpg",
  },
  {
    title: "3D Hard Surface Modelling",
    description:
      "We create detailed 3D models of objects or structures following your specific guidelines and ensure timely delivery for uninterrupted project operations.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20hardsurface%20dev.jpg"
  },
  {
    title: "3D Animation Services",
    description:
      "Our client-centric approach ensures our 3D animations and meticulous rigging convey your vision accurately while captivating the audience with high-quality visuals.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20animation%20dev.jpg"
  },
  {
    title: "3D MetaHuman Creation Services",
    description:
      "Get photorealistic digital humans with easy customisation, We create Metahumans for virtual productions, games, or all other applications. ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20metahuman%20service.jpg",
  },
];

const Motionslide = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let workInfoItems = document.querySelectorAll(".work__photo-item");
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = workInfoItems.length - index;
    });
    gsap.set(".work__photo-item", {
      clipPath: function () {
        return "inset(0px 0px 0px 0px)";
      },
    });

    const animation = gsap.to(".work__photo-item:not(:last-child)", {
      clipPath: function () {
        return "inset(0px 0px 100% 0px)";
      },
      stagger: 0.5,
      ease: "back",
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 0.1,
    });
  }, []);

  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(3).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]">
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div className=" pt-[44px] lg:pt-[100px] text-white mx-auto">
        <div className=" flex flex-col items-center mx-auto">
          <h1 className=" pb-[25px] lg:w-[80%] mx-auto  font-bold text-center text-2xl lg:text-4xl">
            Hey Buddy:
            <br />
            One-stop Destination for all 3D Modelling services
          </h1>
          <p className=" lg:w-[95%] mx-auto text-base font-medium text-center">
            No tiring search for different vendors for different services, Hey
            Buddy’s comprehensive 3D modelling services get all you need. From
            AR/VR and CGI to product visualisation and animation, we offer
            complete 3D development services for every business and every
            project. Just partner and procure.
          </p>
        </div>
      </div>
      <div className="h-fit relative ">
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
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20character%20development.jpg"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20assets%20development.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20envoirnment%20development.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20hardsurface%20dev.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20animation%20dev.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20metahuman%20service.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="work__right_mob flex flex-col gap-[15rem] lg:hidden">
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
    </div>
  );
};

export default Motionslide;
