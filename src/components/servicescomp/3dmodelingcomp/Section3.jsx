"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";



const Motionslide = ({heading, para, list}) => {
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
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(3).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]">
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div className=" pt-[60px] lg:pt-[100px] text-white mx-auto">
        <div className=" pb-[60px] lg:pb-0 flex flex-col items-center mx-auto">
          <h1 className=" pb-[25px] lg:w-[80%] mx-auto  font-bold text-center text-2xl lg:text-4xl">
            {heading}
          </h1>
          <p className=" lg:w-[95%] mx-auto text-[16px] lg:text-[20px] font-medium text-center">
            {para}
          </p>
        </div>
      </div>
      <div className="h-fit relative " style={{padding:"0"}}>
        <section className="work  hidden lg:flex flex-row justify-between">
          <div className="work__left">
            <div className="work__text flex flex-col items-center">
              {list?.map((text, index) => (
                <WorkItem
                  key={index}
                  title={text.title}
                  description={text.description}
                />
              ))}
            </div>
          </div>
          <div className="work__right" >
            <div className="work__right-b1" style={{background:"transparent",padding:"0"}}>
              <div className="work__photo flex flex-col items-end">
              {list?.map((text, index) => (
                <PhotoItem
                key={index}
                title={index}
                imgSrc={
                  text.img
                }
              />
              ))}
                
              </div>
            </div>
          </div>
        </section>
        <section className="work__right_mob flex flex-col gap-[15rem] lg:hidden ">
          {list?.map((text, index) => (
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
