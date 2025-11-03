"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const texts = [
  {
    title: "Metaverse Consultation & Analytics",
    description:
      "Understand the possibilities specific to your business. Define goals, plan a meticulous strategy, and track performance with our expert consultation and analytics services.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
  },
  {
    title: "Metaverse Integration & Optimisation",
    description:
      "We integrate and optimize metaverse into your existing systems with seamless interoperability and data synchronization, ensuring a cohesive digital user experience.       ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "Metaverse Training & Simulation",
    description:
      "We offer Metaverse training programs and simulations for industries across the spectrum. With realistic training scenarios for your trained get empowered skills and decisions.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds2.jpg",
  },
  {
    title: "Custom Metaverse Development    ",
    description:
      "For your specific business requirement, we offer custom metaverse development. You successfully meet your business goals with the required unique functionalities or features.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
  },
  {
    title: "Metaverse 3D Environment Development    ",
    description:
      "We develop 3D environments for your every need. Whether you want a digital replica of the real world or a digital-only infrastructure in Metaverse, our team delivers both.       ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds4.jpg",
  },
  {
    title: "Metaverse Digital Twin Development    ",
    description:
      "We replicate real-world complex entities and their functionalities in the digital environment. Thus, you get a better understanding, of monitoring, collaboration, and optimization.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "Metaverse Avatar Development   ",
    description:
      "For engaging user experiences, we develop 3D avatars with human-like personalized appearances, expressions, and movements on par with real people.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: " Art and Games Metaverse Development    ",
    description:
      "We design and develop immersive games and entertainment experiences with interactive storylines to attract a huge community of art and adventure enthusiasts to your metaverse.       ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "Metaverse Events     ",
    description:
      "We help you build business communities. Organize social gatherings like concerts and shows or host virtual business events like conferences and seminars.  ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "Metaverse Marketplace Development   ",
    description:
      "Attract the global audience with your captivating marketplace marketplace. We build immersive marketplaces for you with complete security and seamless transactions.     ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "NFT Metaverse Development    ",
    description:
      "We develop NFT Metaverse or integrate NFTs in your existing Metaverse. We help you tokenize and capitalize on digital assets and other collectibles for roof-shattering returns.     ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "Customised Rental Metaverse Development    ",
    description:
      "Test your Metaverse strategy without spending a fortune. Get custom Metaverse spaces on rent. Organize meetings, NFT exhibitions, product launches, showrooms, and much more.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
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
    <div className="app">
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
            Possibilities for You With Our Metaverse Development Services
          </h1>
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
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Consultation%20%26%20Analytics.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Integration%20%26%20Optimisation.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Training.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Custom%20Metaverse.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%203D%20Environment%20.jpg"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Digital%20Twin.jpg"
                  }
                />
                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Avatar.jpg"
                  }
                />
                <PhotoItem
                  title="8"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Art%20and%20Games%20Metaverse.jpg"
                  }
                />
                <PhotoItem
                  title="9"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Events%20.jpg"
                  }
                />
                <PhotoItem
                  title="10"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg"
                  }
                />
                <PhotoItem
                  title="11"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/NFT%20Metaverse.jpg"
                  }
                />
                <PhotoItem
                  title="12"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Customised%20Rental%20Metavers.jpg"
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
