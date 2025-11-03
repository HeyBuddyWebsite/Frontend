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
    img: "https://heybuddystorage.blob.core.windows.net/images/sahm_futuristic_human_robot_with_a_black_faceshield_featureless_bb4f31d9-7706-4024-ad8d-f6360d0d075f.png",
  },
  {
    title: "Dynamic Social Media Creatives",
    description:
      "Customizable and adaptive social media ad designs optimized for platform-specific engagement and audience targeting. Our AI creates dynamic content that adapts to different social media platforms and audience preferences for maximum impact.",
    img: "https://heybuddystorage.blob.core.windows.net/images/gen_reacher_A_high-resolution_architectural_image_of_an_luxury__24ff36eb-58df-4a2f-9397-e51d1bca7b9f.png",
  },
  {
    title: "AI-Generated Ad Copywriting",
    description:
      "Persuasive and personalized ad copy created by AI to communicate your brand's message effectively and boost click-through rates. Our AI copywriting ensures your message resonates with your audience and drives action.",
    img: "https://heybuddystorage.blob.core.windows.net/images/_thevisualizer_a_cartoon_phoenix_bird_is_holing_a_big_beer_in_o_2d9c1ac7-924d-4236-b72c-94b7e4ad7c84.png",
  },
  {
    title: "Platform-Specific AI Ad Designs",
    description:
      "Tailored advertising creatives crafted for Facebook, Instagram, Google, LinkedIn, and other platforms to maximize impact. Each design is optimized for the specific platform's requirements and audience behavior patterns.",
    img: "https://heybuddystorage.blob.core.windows.net/images/u6355339189_Realistic_matcha_pistachio_levain_cookies_two_halve_600e6274-feab-4145-a003-2007c78f6b0d.png",
  },
  {
    title: "Personalized Generative AI Creatives",
    description:
      "Unique ad content generated through AI algorithms that align precisely with your brand identity and audience preferences. Our generative AI creates personalized content that speaks directly to your target market.",
    img: "https://heybuddystorage.blob.core.windows.net/images/borisa82_a_photo_of_a_cute_young_cat_Dancing_dressed_in_Traditi_b2141317-9cab-42b9-a4ce-28ecce585526.png",
  },
  {
    title: "Automated AI Campaign Optimization",
    description:
      "Continuous AI-driven analysis and adjustment of your ad campaigns to improve performance and maximize return on investment. Our AI continuously monitors and optimizes your campaigns for better results.",
    img: "https://heybuddystorage.blob.core.windows.net/images/roachbot_cinematic_portrait_of_a_male_cyborg_hacker_with_hologr_8c72874a-dc54-49cc-a528-f6419514d781.png",
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
            Get AI Video Ads Your Brand Needs and Your Audience Desires
          </h1>
          <p className="text-m lg:text-m">
            With our team of creative strategists and cutting-edge AI tools, we create high-performing video ads designed to engage, convert, and scale your D2C brand. Whether you need short-form product videos, AI-powered ad creatives, or platform-specific video campaigns, we deliver exactly what your business needs to grow.
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
                    "https://heybuddystorage.blob.core.windows.net/images/sahm_futuristic_human_robot_with_a_black_faceshield_featureless_bb4f31d9-7706-4024-ad8d-f6360d0d075f.png"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/roachbot_cinematic_portrait_of_a_male_cyborg_hacker_with_hologr_8c72874a-dc54-49cc-a528-f6419514d781.png"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/_thevisualizer_a_cartoon_phoenix_bird_is_holing_a_big_beer_in_o_2d9c1ac7-924d-4236-b72c-94b7e4ad7c84.png"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/u6355339189_Realistic_matcha_pistachio_levain_cookies_two_halve_600e6274-feab-4145-a003-2007c78f6b0d.png"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/borisa82_a_photo_of_a_cute_young_cat_Dancing_dressed_in_Traditi_b2141317-9cab-42b9-a4ce-28ecce585526.png"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/images/roachbot_cinematic_portrait_of_a_male_cyborg_hacker_with_hologr_8c72874a-dc54-49cc-a528-f6419514d781.png"
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
