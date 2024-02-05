"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import { render } from "react-dom";
import classnames from "classnames";
import "../../../styles/slide.css";
import WorkItem from "../gamedevelopmentcomp/WorkItem";
import PhotoItem from "../gamedevelopmentcomp/PhotoItem";
import GamedevCard from "../gamedevelopmentcomp/GamedevCard";

const images = [0, 1, 2, 3, 4, 5];
const texts = [
 

  {

    title: "Blockchain Consulting Service",
    description:
      "Our blockchain experts consult you on the blockchain. From understanding blockchain basics to crafting a tailored strategy, your every question is answered.    ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/game.png",

  },
  {
    title: "Smart Contract Development",
    description:

      "Full-proof security with efficient self-executing and gas-optimized code, our Smart Contract expertise automates operations with strict Standards compliance.  ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "Security Audits and Testing",
    description:
      "We safeguard your blockchain solutions with our rigorous security audits and testing. We identify vulnerabilities, fortify defenses, and ensure system resiliency.    ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds2.jpg",
  },
  {
    title: "Decentralized Application (DApp) Development",
    description:
      "We build decentralized and automated dApps interacting with blockchain networks. The best part, these solutions are meant just for your business.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds3.jpg",
  },
  {
    title: "Tokenomics and Cryptoeconomics Consulting",
    description:
      "We craft robust tokenomics strategies and token models that drive value and foster community engagement for long-term success in dynamic crypto-economics.      ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds4.jpg",
  },
  {
    title: "Consensus Mechanism Implementation",
    description:
      "We spot the right consensus mechanism for your blockchain network with our implementation expertise be it Proof-of-Work or Proof-of-Stake.  ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "DeFi Development",
    description:
      "With our powerful Smart Contracts engineering your DeFi dApps, you get high-performing, and scalable tokenomics and cryptonomics.",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "Metaverse Development",
    description:
      "We develop immersive user experiences going across multiple metaverses and catering to a large user base. Plus, Blockchain protection to your virtual economy.  ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
  },
  {
    title: "NFT Development",
    description:
      "Tap into the lucrative NFT market with our attractive, unique, and creative NFTs. Be assured of the latest Smart Contract Standards compliance such as ERC-721.  ",
    img: "https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gds1.jpg",
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
      stagger: 0.8,
      ease: "power3",
    });

    ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 1,
    });
  }, []);

  return (
    <div className="app">
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
          Our Web3 Development Services
          </h1>
          <p className="text-xl lg:text-2xl">
          Our renowned blockchain expertise provides comprehensive Web 3.0 development services for innovative and powerful solutions.
          </p>
        </div>
      </div>
      <div className="h-fit relative lg:bg-[url('https://heybuddywebsite.s3.ap-south-1.amazonaws.com/Images/gamedev3.png')] bg-fixed bg-bottom ">
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
