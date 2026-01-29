"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const images = [0, 1, 2, 3, 4, 5];
const texts = [
  {
    title: "3D Modeling",
    description:
      "We create 3D digital representations of objects, environments, or characters. You can use them in various applications, from product design to virtual worlds.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/3d+modeling.jpg",
  },
  {
    title: "Animation",
    description:
      "We bring 3D models to life. We create dynamic and engaging visual sequences for films, advertising, and Games. ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Animation.jpg",
  },
  {
    title: "Visual Effects (VFX)    ",
    description:
      "We integrate computer-generated elements with live-action footage. This gives you fantastic visuals to captivate your audience.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/visual+effects.jpg",
  },
  {
    title: "Virtual Prototyping    ",
    description:
      "We create digital prototypes of products or structures, allowing you to test, modify, and visualize them before physical production.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/visual+prototype.jpg",
  },
  {
    title: "Architectural Visualization",
    description:
      "We render realistic 3D visuals of architectural designs to help you showcase properties, interiors, or urban planning projects.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Architectural+Visualization.jpg",
  },
  {
    title: "Product Visualization    ",
    description:
      "Showcase products with our high-quality 3D renderings, be it marketing campaigns or e-commerce product pages. ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Product+Visualization.jpg",
  },
  {
    title: "Augmented Reality (AR) Development    ",
    description:
      "We add a layer to reality. By integrating CGI elements into real-world environments, we help you offer immersive AR experiences.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Augmented+Reality+(AR)+Development.jpg",
  },
  {
    title: "Virtual Reality (VR) Development    ",
    description:
      "We create a new reality with fully immersive virtual reality environments. Use it for Games, training simulations, and virtual tours.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Virtual+Reality+(VR)+Development.jpg",
  },
  {
    title: "Interactive Experiences ",
    description:
      "We develop CGI-driven interactive applications, such as touchscreen exhibits, interactive websites, or digital installations.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Interactive+Experiences.jpg",
  },
  {
    title: "Simulation and Training    ",
    description:
      "We design realistic simulations for high-quality productive training, especially for businesses in aviation, healthcare, and the military.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Simulation+and+training.jpg",
  },
  {
    title: "Character Design and Animation    ",
    description:
      "We create unique 3D characters, from realistic to stylized, as per your project requirement - animations, games, or storytelling.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Character+Design+and+Animation.jpg",
  },
  {
    title: "Environmental Visualization    ",
    description:
      "We simulate landscapes, cityscapes, or environmental changes for urban planning or educational purposes.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Environmental+Visualization.jpg",
  },
];

const Motionslide = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let workInfoItems = document.querySelectorAll(".work__photo-item");
    const totalItems = workInfoItems.length;
    
    // Set initial z-index and GPU-accelerated properties
    workInfoItems.forEach(function (item, index) {
      item.style.zIndex = totalItems - index;
      // Enable GPU acceleration for clipPath
      item.style.willChange = "clip-path";
      item.style.transform = "translateX(-50%) translateZ(0)";
    });

    // Set initial clipPath state (all images fully visible)
    gsap.set(".work__photo-item", {
      clipPath: "inset(0px 0px 0px 0px)",
      force3D: true,
    });

    // Create animation with clipPath - using original approach with optimized timing
    // The stagger ensures images change at the right time relative to text sections
    const animation = gsap.to(".work__photo-item:not(:last-child)", {
      clipPath: "inset(0px 0px 100% 0px)",
      stagger: 0.5, // Original value - keeps images visible longer
      ease: "power2.out", // Smooth easing
      force3D: true,
    });

    const scrollTrigger = ScrollTrigger.create({
      trigger: ".work",
      start: "top top",
      end: "bottom bottom",
      animation: animation,
      scrub: 0.3, // Reduced for more responsive sync
      anticipatePin: 1,
      invalidateOnRefresh: true,
    });

    // Cleanup function
    return () => {
      scrollTrigger?.kill();
      workInfoItems.forEach((item) => {
        item.style.willChange = "auto";
      });
    };
  }, []);

  return (
    <div className="app">
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
            Hey Buddy - One Destination for All CGI services
          </h1>
          <p className="text-l lg:text-xl">
            Hey Buddy is your go-to 3D CGI agency for services of all sorts. Our
            technical proficiency gets you innovative CGI solutions just for you
            while infusing eye-catching creativity. We deliver specialized CGI
            assets just for your project with complete future-proofing.
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
                  title="1"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/3d+modeling.jpg"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Animation.jpg"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/visual+effects.jpg"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/visual+prototype.jpg"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Architectural+Visualization.jpg"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Product+Visualization.jpg"
                  }
                />
                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Augmented+Reality+(AR)+Development.jpg"
                  }
                />
                <PhotoItem
                  title="8"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Virtual+Reality+(VR)+Development.jpg"
                  }
                />
                <PhotoItem
                  title="9"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Interactive+Experiences.jpg"
                  }
                />
                <PhotoItem
                  title="10"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Simulation+and+training.jpg"
                  }
                />
                <PhotoItem
                  title="11"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Character+Design+and+Animation.jpg"
                  }
                />
                <PhotoItem
                  title="12"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Environmental+Visualization.jpg"
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
