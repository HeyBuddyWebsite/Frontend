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
    title: "SEO & SEM",
    description:
      "Improve search rankings and drive qualified traffic with proven strategies. Our SEO and SEM experts optimize your online presence to ensure maximum visibility and conversion rates across search engines.",
    img: "https://heybuddystorage.blob.core.windows.net/images/SEO%20&%20SEM.png",
  },
  {
    title: "AI Led Social Media Marketing",
    description:
      "Build engagement and grow your audience across popular platforms. Our AI-powered social media strategies create compelling content that resonates with your target audience and drives meaningful interactions.",
    img: "https://heybuddystorage.blob.core.windows.net/images/social%20media%20marketing.png",
  },
  {
    title: "AI & CGI Ad production",
    description:
      "Create stunning visual advertisements that capture attention and drive conversions. Our AI and CGI technology produces high-impact ads that stand out in today's competitive digital landscape.",
    img: "https://heybuddystorage.blob.core.windows.net/images/Content%20Marketing.png",
  },
  {
    title: "Email & Automation",
    description:
      "Convert and retain customers with personalized campaigns. Our email marketing and automation solutions nurture leads through the sales funnel with targeted, data-driven messaging.",
    img: "https://heybuddystorage.blob.core.windows.net/images/email%20marketing%20(1).png",
  },
  {
    title: "Influencer & Affiliate Marketing",
    description:
      "Expand reach and trust with strategic partnerships. We connect your brand with the right influencers and affiliates to amplify your message and build credibility in your industry.",
    img: "https://heybuddystorage.blob.core.windows.net/images/Influencer%20&%20Affiliate%20Marketing.png",
  },
  {
    title: "Performance Marketing & Analytics",
    description:
      "Optimize campaigns for maximum ROI with data-driven insights. Our analytics and performance marketing experts track, measure, and optimize every aspect of your digital marketing campaigns.",
    img: "https://heybuddystorage.blob.core.windows.net/images/Performance%20Marketing%20&%20Analytics.png",
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
            Customized Digital Marketing Strategies for Every Business and Every Goal
          </h1>
          <p className="text-m lg:text-m">
            At Hey Buddy, we create tailored digital marketing solutions designed to amplify your brand's presence, attract qualified leads, and drive measurable growth. Our team combines data-driven insights with creativity to help businesses dominate the digital space.
          </p>
        </div>
      </div>
      <div className="h-fit relative lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gamedev3.png')] bg-fixed bg-bottom ">
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
                    "https://heybuddystorage.blob.core.windows.net/images/SEO%20&%20SEM.png"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/social%20media%20marketing.png"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/Content%20Marketing.png"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/email%20marketing%20(1).png"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/Influencer%20&%20Affiliate%20Marketing.png"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/Performance%20Marketing%20&%20Analytics.png"
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


