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
    title: "3D Modeling",
    description:
      "We create 3D digital representations of object, environments, or characters. You can use them in various applications, from product design to virtual worlds.      ",
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
                Hey Buddy - One Destination for <br /> All CGI services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Hey Buddy is your go-to 3D CGI agency for services of all sorts. Our
                technical proficiency gets you innovative CGI solutions just for you
                while infusing eye-catching creativity. We deliver specialized CGI
                assets just for your project with complete future-proofing.
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
              One Destination for All CGI services
            </h2>
            <p className="text-lg text-gray-300">
              Hey Buddy is your go-to 3D CGI agency for services of all sorts. Our
              technical proficiency gets you innovative CGI solutions just for you
              while infusing eye-catching creativity.
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
