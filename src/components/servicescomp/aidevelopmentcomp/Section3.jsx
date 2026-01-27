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
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Custom+AI.jpg",
  },
  {
    title: "Machine Learning Expertise",
    description:
      "We help you capitalize on the power of machine learning for predictive analytics, pattern recognition, and data-driven insights. Thereby, we not only drive informed decision-making for you but also deliver intelligence solutions.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Machine+learning.jpg",
  },
  {
    title: "Natural Language Processing (NLP)",
    description:
      "With our NLP solutions, we create intelligent chatbots and perform sentiment analysis and language understanding. Thereby, enriching customer interactions with your business and streamlining your business operations.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Natural+Language+Processing.jpg",
  },
  {
    title: "Computer Vision Applications",
    description:
      "We give sight to your machines adding to their intelligence and capabilities with computer vision solutions. You can use it for image and video analysis, object recognition, and advanced visual data interpretation.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/computer+vision+application.jpg",
  },
  {
    title: "Data Analytics and Insights",
    description:
      "We power your decisions with AI solutions that extract deep yet meaningful insights from your data and surface unveil actionable intelligence for your strategic business planning for market leadership.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Data+Analytics+and+Insights.jpg",
  },
  {
    title: "Automation and Optimization",
    description:
      "We facilitate AI-driven automation to improve your business efficiency and reduce operational costs. This leads to workflow optimization and high overall productivity, resulting in timely quality delivery.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Automation+and+Optimization.jpg",
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
      <div className="h-fit relative lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev3.png')] bg-fixed bg-bottom" style={{ willChange: 'transform' }}>
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
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Custom+AI.jpg"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Machine+learning.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Natural+Language+Processing.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/computer+vision+application.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Data+Analytics+and+Insights.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Automation+and+Optimization.jpg"
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
