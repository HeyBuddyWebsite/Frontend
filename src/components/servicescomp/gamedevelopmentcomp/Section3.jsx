"use client";

import { useEffect, useLayoutEffect, useState } from "react";
// import { render } from "react-dom";
import classnames from "classnames";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import "../../../styles/slide.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";



const images = [0, 1, 2, 3, 4, 5, 6];
const texts = [
  {

    title: "Game Development",
    description:
      "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",
  },
  {
    title: "Mobile Game Development",
    description:
      "We develop highly functional mobile game solutions with cross-platform compatibility. So whether it is iOS or Android, smartphone or console, you name it and we, as your trusted Mobile game development company, will do it ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "Unreal Game Development",
    description:
      "Unreal engine is known to deliver powerful and dynamic games that stun gamers with its visuals and realism. Our developers love to work on this platform and get you a game with realistic game physics and animation and AI’s smart interactivity.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds2.jpg",
  },
  {
    title: "Unity 3D Game Development",
    description:
      "We use the robust Unity engine to develop immersive, high-performing, and visually stunning games for your target audience. Unity is known for its powerful tools and features and we, as Unity Game development company use it to the fullest for 2D and 3D games.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg",
  },
  {
    title: "Metaverse Game Development",
    description:
      "Get ready to teleport your gaming audience into a new reality of Metaverse games. We are a renowned Metaverse game development company that knows community-building, utilisation of user-generated content, and capitalise on social connectivity.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds4.jpg",
  },
  {
    title: "Web3 Game Development",
    description:
      "Ready to explore decentralised gaming for untapped business opportunities, we have an offer. Our team develops decentralised and secure Web3 gaming solutions utilising leading technologies like AI, blockchain, smart contracts, NFTs, and much more. ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
];

const Motionslide = () => {
  // this is the change that I implemented
  // ========================================================

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
      ease: "none",
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });
  }, []);

  // ==========================================================

  // const [visibleImagesMap, setVisibleImagesMap] = useState(
  //   images.reduce((map, image) => {
  //     map[image] = false;
  //     return map;
  //   }, {})
  // );

  // const [currentText, setCurrentText] = useState(null);
  // const [currentText1, setCurrentText1] = useState(null);

  // useLayoutEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = document.documentElement.scrollTop;
  //     const viewportHeight = window.innerHeight;

  //     const newVisibleImagesMap = images.reduce((map, image) => {
  //       map[image] = scrollTop >= image * viewportHeight;
  //       return map;
  //     }, {});

  //     setVisibleImagesMap(newVisibleImagesMap);

  //     // Find the index of the currently visible image
  //     const currentImageIndex = Math.floor(scrollTop / viewportHeight);

  //     // Update the current text based on the currently visible image
  //     setCurrentText(texts[currentImageIndex]?.title);
  //     setCurrentText1(texts[currentImageIndex]?.description);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll();

  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div className="app">
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
          Benefits of our Custom Virtual Reality Development Services

          </h1>
          {/* <p className="text-sm lg:text-lg">
            Hey Buddy is your one-stop shop for end-to-end game development
            services. With AI on our side, we successfully clear levels of your
            game development needs.
          </p> */}
        </div>
      </div>
      <div className="h-fit relative">
        <img
          src="https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png"
          alt="bg_image"
          className="absolute bottom-0"
          loading="lazy"
        />
        <section className="work  hidden lg:flex flex-row justify-between">
          <div className="work__left">
            <div className="work__text">
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
              <div className="work__photo">
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
          { texts.map((text , index)=>(
            <GamedevCard  key={index} imageUrl={text.img} description={text.description} title={text.title}/>
          ))}
        </section>
        {/* <div className="frame relative">

           {images.map((image, index) => (
            <div key={image} className={`image-container ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
              {currentText && (
                <div style={{display: 'flex' ,flexDirection: 'column'}}>
                <div className="text font-semibold text-2xl text-white">{currentText}</div>
                <div  className="text-desctiption text-white">{currentText1}</div>
                </div>
              )}
              <div
                className={classnames("image", `image_${image}`, {
                  image_visible: visibleImagesMap[image],
                })}
              />
            </div>
          ))} 
        </div> */}
      </div>
    </div>
  );
};

export default Motionslide;
