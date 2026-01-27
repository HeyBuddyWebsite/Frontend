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
    title: "AI-Powered Video Ads",
    description:
      "Engaging, data-driven video advertisements crafted using advanced AI to capture attention and drive conversions. Our AI technology creates compelling video content that resonates with your target audience and maximizes engagement across all platforms.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487192253_rfniow.png",
  },
  {
    title: "Dynamic Social Media Creatives",
    description:
      "Customizable and adaptive social media ad designs optimized for platform-specific engagement and audience targeting. Our AI creates dynamic content that adapts to different social media platforms and audience preferences for maximum impact.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487409798_mqj8of.png",
  },
  {
    title: "AI-Generated Ad Copywriting",
    description:
      "Persuasive and personalized ad copy created by AI to communicate your brand's message effectively and boost click-through rates. Our AI copywriting ensures your message resonates with your audience and drives action.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487409946_hfmifi.png",
  },
  {
    title: "Platform-Specific AI Ad Designs",
    description:
      "Tailored advertising creatives crafted for Facebook, Instagram, Google, LinkedIn, and other platforms to maximize impact. Each design is optimized for the specific platform's requirements and audience behavior patterns.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410074_wdmqs9.png",
  },
  {
    title: "Personalized Generative AI Creatives",
    description:
      "Unique ad content generated through AI algorithms that align precisely with your brand identity and audience preferences. Our generative AI creates personalized content that speaks directly to your target market.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410190_6usckc.png",
  },
  {
    title: "Automated AI Campaign Optimization",
    description:
      "Continuous AI-driven analysis and adjustment of your ad campaigns to improve performance and maximize return on investment. Our AI continuously monitors and optimizes your campaigns for better results.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410294_u83r3p.png",
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
            Get AI Video Ads Your Brand Needs and Your Audience Desires
          </h1>
          <p className="text-m lg:text-m">
            With our team of creative strategists and cutting-edge AI tools, we create high-performing video ads designed to engage, convert, and scale your D2C brand. Whether you need short-form product videos, AI-powered ad creatives, or platform-specific video campaigns, we deliver exactly what your business needs to grow.
          </p>
        </div>
      </div>
      <div className="h-fit relative lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev3.png')] bg-fixed bg-bottom" style={{ willChange: 'transform' }}>
        <section className="work  hidden lg:flex flex-row justify-between">
          <div className="work__left">
            {texts.map((text, index) => (
              <WorkItem
                key={index}
                title={text.title}
                description={text.description}
              />
            ))}
          </div>
          <div className="work__right">
            <div className="work__right-b1">
              <div className="work__photo flex flex-col items-center">
                <PhotoItem
                  title="0"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487192253_rfniow.png"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487409798_mqj8of.png"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487409946_hfmifi.png"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410074_wdmqs9.png"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410190_6usckc.png"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410294_u83r3p.png"
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
