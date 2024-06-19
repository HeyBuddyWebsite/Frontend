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
    title: "Custom AI Solutions",
    description:
      "We develop tailored AI applications crafted to align with your unique business goals and specific challenges. We have a team of AI experts that does it all for you with their skills, knowledge, and experience.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/custom_Ai.jpg",
  },
  {
    title: "Machine Learning Expertise",
    description:
      "We help you capitalize on the power of machine learning for predictive analytics, pattern recognition, and data-driven insights. Thereby, we not only drive informed decision-making for you but also deliver intelligence solutions.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/ml_expert.jpg",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "With our NLP solutions, we create intelligent chatbots and perform sentiment analysis and language understanding. Thereby, enriching customer interactions with your business and streamlining your business operations.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/scrl3.jpg",
  },
  {
    title: "Computer Vision Applications",
    description:
      "We give sight to your machines adding to their intelligence and capabilities with computer vision solutions. You can use it for image and video analysis, object recognition, and advanced visual data interpretation.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/computer_vision.jpg",
  },
  {
    title: "Data Analytics and Insights",
    description:
      "We power your decisions with AI solutions that extract deep yet meaningful insights from your data and surface unveil actionable intelligence for your strategic business planning for market leadership.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/scrl5.jpg",
  },
  {
    title: "Automation and Optimization",
    description:
      "We facilitate AI-driven automation to improve your business efficiency and reduce operational costs. This leads to workflow optimization and high overall productivity, resulting in timely quality delivery.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/automation.jpg",
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
    <div>
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
            AI Development Services:
            <br />
            Make the Most out of the AI-boom with Experts
          </h1>
          <p className="text-m lg:text-m">
            We offer a complete suite of Artificial Intelligence development
            services to make the most out of this opportunity for you.
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
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/custom_Ai.jpg"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/ml_expert.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/scrl3.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/computer_vision.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/scrl5.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/automation.jpg"
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
