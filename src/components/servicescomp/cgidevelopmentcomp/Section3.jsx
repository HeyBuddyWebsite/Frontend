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
    title: "3D Modeling",
    description:
      "We create 3D digital representations of objects, environments, or characters. You can use them in various applications, from product design to virtual worlds.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/3d%20modeling.jpg",
  },
  {
    title: "Animation",
    description:
      "We bring 3D models to life. We create dynamic and engaging visual sequences for films, advertising, and Games. ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Animation.jpg",
  },
  {
    title: "Visual Effects (VFX)    ",
    description:
      "We integrate computer-generated elements with live-action footage. This gives you fantastic visuals to captivate your audience.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/visual%20effects.jpg",
  },
  {
    title: "Virtual Prototyping    ",
    description:
      "We create digital prototypes of products or structures, allowing you to test, modify, and visualize them before physical production.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/visual%20prototype.jpg",
  },
  {
    title: "Architectural Visualization",
    description:
      "We render realistic 3D visuals of architectural designs to help you showcase properties, interiors, or urban planning projects.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Architectural%20Visualization.jpg",
  },
  {
    title: "Product Visualization    ",
    description:
      "Showcase products with our high-quality 3D renderings, be it marketing campaigns or e-commerce product pages. ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Product%20Visualization.jpg",
  },
  {
    title: "Augmented Reality (AR) Development    ",
    description:
      "We add a layer to reality. By integrating CGI elements into real-world environments, we help you offer immersive AR experiences.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Augmented%20Reality%20(AR)%20Development.jpg",
  },
  {
    title: "Virtual Reality (VR) Development    ",
    description:
      "We create a new reality with fully immersive virtual reality environments. Use it for Games, training simulations, and virtual tours.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Virtual%20Reality%20(VR)%20Development.jpg",
  },
  {
    title: "Interactive Experiences ",
    description:
      "We develop CGI-driven interactive applications, such as touchscreen exhibits, interactive websites, or digital installations.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Interactive%20Experiences.jpg",
  },
  {
    title: "Simulation and Training    ",
    description:
      "We design realistic simulations for high-quality productive training, especially for businesses in aviation, healthcare, and the military.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Simulation%20and%20training.jpg",
  },
  {
    title: "Character Design and Animation    ",
    description:
      "We create unique 3D characters, from realistic to stylized, as per your project requirement - animations, games, or storytelling.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Character%20Design%20and%20Animation.jpg",
  },
  {
    title: "Environmental Visualization    ",
    description:
      "We simulate landscapes, cityscapes, or environmental changes for urban planning or educational purposes.      ",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Environmental%20Visualization.jpg",
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
          Hey Buddy - One Destination for All CGI services
          </h1>
          <p className=" lg:w-[95%] mx-auto text-base font-medium text-center">
          Hey Buddy is your go-to 3D CGI agency for services of all sorts. Our
            technical proficiency gets you innovative CGI solutions just for you
            while infusing eye-catching creativity. We deliver specialized CGI
            assets just for your project with complete future-proofing.
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
                  title="1"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/3d%20modeling.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Animation.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/visual%20effects.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/visual%20prototype.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Architectural%20Visualization.jpg"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Product%20Visualization.jpg"
                  }
                />
                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Augmented%20Reality%20(AR)%20Development.jpg"
                  }
                />
                <PhotoItem
                  title="8"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Virtual%20Reality%20(VR)%20Development.jpg"
                  }
                />
                <PhotoItem
                  title="9"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Interactive%20Experiences.jpg"
                  }
                />
                <PhotoItem
                  title="10"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Simulation%20and%20training.jpg"
                  }
                />
                <PhotoItem
                  title="11"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Character%20Design%20and%20Animation.jpg"
                  }
                />
                <PhotoItem
                  title="12"
                  imgSrc={
                    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Environmental%20Visualization.jpg"
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
