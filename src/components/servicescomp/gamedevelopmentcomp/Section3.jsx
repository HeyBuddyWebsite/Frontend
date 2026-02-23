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
    title: "Game Development",
    description:
      "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769650776618_0y3rom.jpg",
  },
  {
    title: "Mobile Game Development",
    description:
      "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769650773827_nwc5uc.jpg",
  },
  {
    title: "Unreal Game Development",
    description:
      "Unreal engine is known to deliver powerful and dynamic games that stun gamers with its visuals and realism. Our developers love to work on this platform and get you a game with realistic game physics and animation and AI's smart interactivity.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769650775146_yu8be2.jpg",
  },
  {
    title: "Unity 3D Game Development",
    description:
      "We use the robust Unity engine to develop immersive, high-performing, and visually stunning games for your target audience. Unity is known for its powerful tools and features and we, as Unity Game development company use it to the fullest for 2D and 3D games.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769650776618_0y3rom.jpg",
  },
  {
    title: "Metaverse Game Development",
    description:
      "Get ready to teleport your Games audience into a new reality of Metaverse games. We are a renowned Metaverse game development company that knows community-building, utilisation of user-generated content, and capitalise on social connectivity.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769650778144_gksa6j.jpg",
  },
  {
    title: "Web3 Game Development",
    description:
      "Ready to explore decentralised Games for untapped business opportunities, we have an offer. Our team develops decentralised and secure Web3 Games solutions utilising leading technologies like AI, blockchain, smart contracts, NFTs, and much more. ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769650773827_nwc5uc.jpg",
  },
  {
    title: "AR/VR Game Development",
    description:
      "We create immersive AR and VR games that merge with gamers' real world and alter their Games experience for good. The high-fidelity games blur the line between the real and the Games world and create a Games experience that gamers can never get enough of.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769650773827_nwc5uc.jpg",
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
                Hey Buddy, Game On!! - Complete <br /> Game Development Services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Hey Buddy is your one-stop shop for end-to-end game development
                services. With AI on our side, we successfully clear levels of your
                game development needs.
              </p>
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
              Complete Game Development Services
            </h2>
            <p className="text-lg text-gray-300">
              Hey Buddy is your one-stop shop for end-to-end game development
              services. With AI on our side, we successfully clear levels of your
              game development needs.
            </p>
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
