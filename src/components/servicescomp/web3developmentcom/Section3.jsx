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
    title: "Blockchain Consulting Service",
    description:
      "Our blockchain experts consult you on the blockchain. From understanding blockchain basics to crafting a tailored strategy, your every question is answered.    ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/blockchain%20consulting%20service%20.jpg",
  },
  {
    title: "Smart Contract Development",
    description:
      "Full-proof security with efficient self-executing and gas-optimized code, our Smart Contract expertise automates operations with strict Standards compliance.  ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Smart%20Contract%20Development.jpg",
  },
  {
    title: "Security Audits and Testing",
    description:
      "We safeguard your blockchain solutions with our rigorous security audits and testing. We identify vulnerabilities, fortify defenses, and ensure system resiliency.    ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Security%20Audits%20and%20Testing.jpg",
  },
  {
    title: "Decentralized Application (DApp) Development",
    description:
      "We build decentralized and automated dApps interacting with blockchain networks. The best part, these solutions are meant just for your business.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Decentralized%20Application%20.jpg",
  },
  {
    title: "Tokenomics and Cryptoeconomics Consulting",
    description:
      "We craft robust tokenomics strategies and token models that drive value and foster community engagement for long-term success in dynamic crypto-economics.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Tokenomics%20and%20Cryptoeconomics.jpg",
  },
  {
    title: "Consensus Mechanism Implementation",
    description:
      "We spot the right consensus mechanism for your blockchain network with our implementation expertise be it Proof-of-Work or Proof-of-Stake.  ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Consensus%20Mechanism%20Implementation.jpg",
  },
  {
    title: "DeFi Development",
    description:
      "With our powerful Smart Contracts engineering your DeFi dApps, you get high-performing, and scalable tokenomics and cryptonomics.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/DeFi%20Development.jpg",
  },
  {
    title: "Metaverse Development",
    description:
      "We develop immersive user experiences going across multiple metaverses and catering to a large user base. Plus, Blockchain protection to your virtual economy.  ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Metaverse%20Development.jpg",
  },
  {
    title: "NFT Development",
    description:
      "Tap into the lucrative NFT market with our attractive, unique, and creative NFTs. Be assured of the latest Smart Contract Standards compliance such as ERC-721.  ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/NFT%20Development.jpg",
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
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(3).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]">
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div className=" pt-[44px] lg:pt-[100px] text-white mx-auto">
        <div className=" flex flex-col items-center mx-auto">
          <h1 className=" pb-[25px] lg:w-[80%] mx-auto  font-bold text-center text-2xl lg:text-4xl">
          Our Web3 Development Services
          </h1>
          <p className=" lg:w-[95%] mx-auto text-base font-medium text-center">
          Our renowned blockchain expertise provides comprehensive Web 3.0
          development services for innovative and powerful solutions.
          </p>
        </div>
      </div>
      <div className="h-fit relative ">
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
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/blockchain%20consulting%20service%20.jpg"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Smart%20Contract%20Development.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Security%20Audits%20and%20Testing.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Decentralized%20Application%20.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Tokenomics%20and%20Cryptoeconomics.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Consensus%20Mechanism%20Implementation.jpg"
                  }
                />

                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/DeFi%20Development.jpg"
                  }
                />
                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Metaverse%20Development.jpg"
                  }
                />
                <PhotoItem
                  title="8"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/NFT%20Development.jpg"
                  }
                />
              </div>
            </div>
          </div>
        </section>
        <section className="work__right_mob flex flex-col gap-[15rem] lg:hidden">
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
    </div>
  );
};

export default Motionslide;
