"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { render } from "react-dom";
import classnames from "classnames";
import "../../../styles/slide.css";
import WorkItem from "../gamedevelopmentcomp/WorkItem";
import PhotoItem from "../gamedevelopmentcomp/PhotoItem";
import GamedevCard from "../gamedevelopmentcomp/GamedevCard";

const images = [0, 1, 2, 3, 4, 5];
const texts = [
  {
    title: "3D Character Development",
    description:
      "Our experienced, skilled and creative 3D artists and modellers produce visually impressive 3D characters just for your project, brand and storytelling      ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
  },
  {
    title: "3D Asset Development",
    description:
      "We develop meticulously detailed, accurate, and high-quality 3D assets that perfectly fulfil your project's visual and functional needs.  ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "3D Environment Development",
    description:
      "We create deeply immersive environments that captivate your audience with ultra-realistic visuals and perfectly fit your project needs.      ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds2.jpg",
  },
  {
    title: "3D Hard Surface Modelling",
    description:
      "We create detailed 3D models of objects or structures following your specific guidelines and ensure timely delivery for uninterrupted project operations.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg",
  },
  {
    title: "3D Animation Services",
    description:
      "Our client-centric approach ensures our 3D animations and meticulous rigging convey your vision accurately while captivating the audience with high-quality visuals.      ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds4.jpg",
  },
  {
    title: "3D MetaHuman Creation Services",
    description:
      "Get photorealistic digital humans with easy customisation, We create Metahumans for virtual productions, games, or all other applications. ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
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
      ease: "power3",
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });
  }, []);

  return (
    <div className="app">
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
            Hey Buddy:
            <br />
            One-stop Destination for all 3D Modelling services
          </h1>
          <p className="text-xl lg:text-2xl">
            No tiring search for different vendors for different services, Hey
            Buddy’s comprehensive 3D modelling services get all you need. From
            AR/VR and CGI to product visualisation and animation, we offer
            complete 3D development services for every business and every
            project. Just partner and procure.
          </p>
        </div>
      </div>
      <div className="h-fit relative lg:bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png')] bg-fixed bg-bottom ">
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
                  title="1"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds2.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds4.jpg"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds5.jpg"
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
