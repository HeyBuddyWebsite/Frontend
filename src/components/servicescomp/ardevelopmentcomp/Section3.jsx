"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const texts = [
  {
    title: "AR App Development",
    description:
      "Achieve high engagement with immersive Augmented Reality applications. We create AR apps with seamless user experience and cross-platform compatibility for wider reach.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
  },
  {
    title: "AR Software Development",
    description:
      "Get an optimized and efficient solution that perfectly plugs the gap. We create customized AR development solutions for your very specific business needs.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "AR Consulting",
    description:
      "Gain data-driven insights and strategic guidance for AR business integration. Make informed decisions with our AR consulting services and achieve major business objectives.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds2.jpg",
  },
  {
    title: "AR Design and Prototyping",
    description:
      "We design AR interfaces and create interactive prototypes to help you refine and make is as per your expectations and requirements. All this, even before the development begins.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
  },
  {
    title: "Marker-Based and Markerless AR",
    description:
      "Whether marker-based or markerless AR solutions, you choose, we deliver. Get versatile AR experiences that function perfectly in every environment and condition.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
  },
  {
    title: "AR Content Development",
    description:
      "Enhance your user engagement with interactive AR content. We offer 3D modeling, animations, and overlays to make your AR experience compelling and memorable.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
  },
  {
    title: "AR for Marketing and Advertising",
    description:
      "Be a brand to remember. Standout with our interactive AR solutions for marketing, advertising, and brand promotions. Boost your brand visibility and brand recall.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds2.jpg",
  },
  {
    title: "AR for Training and Education",
    description:
      "Enhance learning outcomes with hands-on experiences. Our AR software solutions for training and education make complex concepts simple with experiential learning.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
  },
  {
    title: "AR Integration with IoT",
    description:
      "We make your AR experience seamlessly integrate with the real-world environment. Our AR-IoT integration services enhance connectivity and the overall user experience.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
  },
  {
    title: "AR for Games",
    description:
      "Add a layer of immersion and make your gamers enter the fantasy world. We design and develop augmented reality games for more enjoyable Games than ever.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
  },
  {
    title: "Cross-Platform AR Development",
    description:
      "Cater to a wider audience with our cross-platform AR application. We ensure seamless compatibility across devices and prominent platforms including iOS, Android, and others.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds2.jpg",
  },
  {
    title: "AR Maintenance and Support",
    description:
      "Ensure the relevance and improvement of your AR applications. With Hey Buddy, get ceaseless support, maintenance, and updates for an evolving AR application.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
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
            If it's AR, It's Hey Buddy: Our Comprehensive Augmented Reality
            Development Services
          </h1>
          <p className=" text-base md:text-l lg:text-xl">
            No need to lose your valuable time and resources on finding
            different service providers for your every need. Hey Buddy has got
            it all covered. We offer a complete suite of AR services. From AR
            app development to AR IoT integration to even cross-platform AR
            development, you name it, we deliver it.
          </p>
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
                  title="0"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Ar%20App%20dev.jpg"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/ar%20software%20dev.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Ar%20consulting.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/ar%20design%20and%20prototyping.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/markerbased%20&%20markerless%20ar.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/AR%20content%20dev.jpg"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Ar%20marketing.jpg"
                  }
                />
                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/AR%20training%20&%20education.jpg"
                  }
                />
                <PhotoItem
                  title="8"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/AR%20integration%20with%20IOT.jpg"
                  }
                />
                <PhotoItem
                  title="9"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Ar%20for%20gaming.jpg"
                  }
                />
                <PhotoItem
                  title="11"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Cross-Platform%20AR.jpg"
                  }
                />
                <PhotoItem
                  title="10"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/AR%20Maintenance%20.jpg"
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
