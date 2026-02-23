"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

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

const Section3 = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const workInfoItems = containerRef.current.querySelectorAll(".work__photo-item");
      const totalItems = workInfoItems.length;

      workInfoItems.forEach(function (item, index) {
        item.style.zIndex = totalItems - index;
        item.style.willChange = "clip-path";
        item.style.transform = "translateX(-50%) translateZ(0)";
      });

      gsap.set(".work__photo-item", {
        clipPath: "inset(0px 0px 0px 0px)",
        force3D: true,
      });

      const animation = gsap.to(".work__photo-item:not(:last-child)", {
        clipPath: "inset(0px 0px 100% 0px)",
        stagger: 0.5,
        ease: "power2.out",
        force3D: true,
      });

      ScrollTrigger.create({
        trigger: ".work-section-inner",
        start: "top top",
        end: "bottom bottom",
        animation: animation,
        scrub: 0.3,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="work-section bg-black text-white relative">
      <div className="py-10 px-6 lg:px-12 max-w-7xl mx-auto">
        {/* Desktop View */}
        <section className="work-section-inner hidden lg:flex flex-row gap-12 justify-between">
          <div className="work__left w-1/2">
            <div className="mb-20">
              <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-white">
                Possibilities for You With Our Metaverse Development Services
              </h2>
            </div>

            <div className="work__text flex flex-col gap-[15vh] pb-[20vh]">
              {texts.map((text, index) => (
                <WorkItem
                  key={index}
                  title={text.title}
                  description={text.description}
                />
              ))}
            </div>
          </div>
          <div className="work__right w-1/2 relative">
            <div className="work__right-b1 sticky top-0 h-screen flex items-start pt-20">
              <div className="work__photo relative w-full h-[500px]">
                {texts.map((text, index) => (
                  <PhotoItem
                    key={index}
                    title={text.title}
                    imgSrc={text.img}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile View */}
        <section className="flex flex-col gap-10 lg:hidden text-white">
          <div className="mb-10">
            <h2 className="text-3xl font-bold mb-4">
              Possibilities for You With Our Metaverse Development Services
            </h2>
          </div>
          <div className="flex flex-col pb-20">
            {texts.map((text, index) => (
              <div
                key={index}
                className="sticky top-20"
                style={{
                  top: `${100 + index * 40}px`,
                  marginBottom: `${index === texts.length - 1 ? 0 : 40}px`,
                  zIndex: index,
                }}
              >
                <GamedevCard
                  imageUrl={text.img}
                  title={text.title}
                  description={text.description}
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Section3;
