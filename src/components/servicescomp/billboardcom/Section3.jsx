"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./motionSlider.css";
import WorkItem from "./WorkItem";
import PhotoItem from "./PhotoItem";
import GamedevCard from "./GamedevCard";

const images = [0, 1, 2, 3, 4, 5, 6];
const texts = [
  {
    title: "3D Design and Rendering",
    description:
      "We create visually captivating designs on 3D OOH billboards to powerfully convey your intended message.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
  },
  {
    title: "Concept Development",
    description:
      "We nudge you in the right direction by conceptualizing and developing ideas for your billboard campaigns.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "Customization",
    description:
      "We mold your 3D billboard designs to meet your business and branding needs and achieve your goals.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds2.jpg",
  },
  {
    title: "Visualization Services",
    description:
      "We help you assess the impact of your 3D billboard in a particular environment with our visualization services.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
  },
  {
    title: "Animation and Motion Graphics",
    description:
      "We bring dynamism with live elements to your 3d animated billboards and amplify the impact exponentially.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds4.jpg",
  },
  {
    title: "Maintenance and Updates",
    description:
      "For a sustained impact on your 3D billboard advertising, we offer sustained support for maintenance and updates.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds1.jpg",
  },
  {
    title: "Anamorphic Billboard Consultation",
    description:
      "We consult you on the best practices and strategies for powerful 3D billboard advertisements.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
  },
  {
    title: "Compliance and Regulations",
    description:
      "We ensure your 3d commercial billboard complies with local regulations and the latest industry standards.",
    img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
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
    <div>
      <div className="py-8 text-white">
        <div className="text-content lg:w-[80%]">
          <h1 className="py-4 text-2xl lg:text-4xl">
            Hey Buddy - leading 3D Billboard Company for Next-Gen Services
          </h1>
          <p className="text-l lg:text-xl">
            We offer a comprehensive suite of 3D development services to help
            you grab the opportunity. Engage with your audience like never
            before and none another. Present your modernized avatar and get an
            unmatchable competitive edge with our your 3d led billboard today.
          </p>
        </div>
      </div>
      <div className="h-fit relative">
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
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769648501268_5jngep.png"
                  }
                />
                <PhotoItem
                  title="1"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769648508674_zyumz4.png"
                  }
                />
                <PhotoItem
                  title="2"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769648513771_tu2pxw.png"
                  }
                />
                <PhotoItem
                  title="3"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769648438047_29uuvb.png"
                  }
                />
                <PhotoItem
                  title="4"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769648519674_15goqn.png"
                  }
                />
                <PhotoItem
                  title="5"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769648524656_41kyt5.png"
                  }
                />
                <PhotoItem
                  title="6"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769648529696_ilxawf.png"
                  }
                />
                <PhotoItem
                  title="7"
                  imgSrc={
                    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769648534591_ur8ig3.png"
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
