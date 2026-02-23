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
    title: "3D Character Development",
    description:
      "Our experienced, skilled and creative 3D artists and modellers produce visually impressive 3D characters just for your project, brand and storytelling      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581173569_ui9qyi.png",
  },
  {
    title: "3D Asset Development",
    description:
      "We develop meticulously detailed, accurate, and high-quality 3D assets that perfectly fulfil your project's visual and functional needs.  ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581174159_cwfrr1.png",
  },
  {
    title: "3D Environment Development",
    description:
      "We create deeply immersive environments that captivate your audience with ultra-realistic visuals and perfectly fit your project needs.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581174874_f3scst.png",
  },
  {
    title: "3D Hard Surface Modelling",
    description:
      "We create detailed 3D models of objects or structures following your specific guidelines and ensure timely delivery for uninterrupted project operations.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581175611_8gu1xl.png",
  },
  {
    title: "3D Animation Services",
    description:
      "Our client-centric approach ensures our 3D animations and meticulous rigging convey your vision accurately while captivating the audience with high-quality visuals.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581176328_jwj7je.png",
  },
  {
    title: "3D MetaHuman Creation Services",
    description:
      "Get photorealistic digital humans with easy customisation, We create Metahumans for virtual productions, games, or all other applications. ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769581177158_0lkfux.png",
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
                Hey Buddy:
                <br />
                One-stop Destination for all 3D Modelling services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                No tiring search for different vendors for different services, Hey
                Buddy's comprehensive 3D modelling services get all you need. From
                AR/VR and CGI to product visualisation and animation, we offer
                complete 3D development services for every business and every
                project. Just partner and procure.
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
              One-stop Destination for all 3D Modelling services
            </h2>
            <p className="text-lg text-gray-300">
              No tiring search for different vendors for different services, Hey
              Buddy's comprehensive 3D modelling services get all you need.
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
