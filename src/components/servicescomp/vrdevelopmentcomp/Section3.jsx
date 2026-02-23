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
    title: "Immersive VR Application Development",
    description:
      "We craft captivating virtual reality applications across diverse platforms. Be assured of a seamless and immersive user experience that aligns with your specific requirements.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655668896_izl8oc.jpg",
  },
  {
    title: "Engaging VR Game Development",
    description:
      "We have a dedicated team of game-crazy expert developers. They deliver complete virtual reality games with innovation, creativity, and cross-platform compatibility.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655669552_htg45g.jpg",
  },
  {
    title: "Metaverse VR Development Services",
    description:
      "Discover the metaverse like never before with Hey Buddy's expert touch. Get tailored solutions for Roblox adventures to redefine social connections in Sansar.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655670368_qluzzg.jpg",
  },
  {
    title: "360° Video Production for VR Experiences",
    description:
      "We let you immerse your audience in captivating 360-degree videos. Our expertise in capturing and producing high-quality VR environments creates a new reality.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655670368_qluzzg.jpg",
  },
  {
    title: "Custom VR Simulation Development",
    description:
      "We develop realistic VR simulations, with real-world physics and maneuverability. Get custom training, education, and other industry applications for effective outcomes.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655671425_t7p2d2.jpg",
  },
  {
    title: "VR Content Creation Expertise",
    description:
      "Want to enrich your VR applications? Our team is ready to deliver. Impress your audience with our visually stunning 3D models, animations, and multimedia content.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655672082_kuvnps.jpg",
  },
  {
    title: "Strategic VR Consulting",
    description:
      "Leverage our industry expertise for insightful advice and data-driven strategy on VR technology. We guide you through every step for a seamless integration.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655672690_2i38e6.jpg",
  },
  {
    title: "Seamless VR Hardware Integration",
    description:
      "Be assured of optimal performance for every VR headset, controller, and hardware component. We offer a unified and immersive experience with our virtual reality software.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655673512_a8035v.jpg",
  },
  {
    title: "Dedicated VR Maintenance and Support",
    description:
      "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655674325_7al74e.jpg",
  },
  {
    title: "Cross-Platform VR Development",
    description:
      "We ensure your broad accessibility with services across VR platforms and devices. Get maximized reach and impact of your VR applications with a consistent user experience.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655674876_51gfl8.jpg",
  },
  {
    title: "Rigorous VR App Testing",
    description:
      "Get complete quality assurance with high functionality, performance, and user satisfaction of your VR applications. Avail of our VR app testing services. ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769655675988_gdghnp.jpg",
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
                360 Degree Virtual Reality Services With One Click
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Redefine possibilities with Hey Buddy’s comprehensive Virtual Reality
                development services. Immerse your audience in unparalleled digital
                experiences that elevate your brand and stay at the forefront of
                technological innovation.
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
              360 Degree Virtual Reality Services With One Click
            </h2>
            <p className="text-lg text-gray-300">
              Redefine possibilities with Hey Buddy’s comprehensive Virtual Reality
              development services. Immerse your audience in unparalleled digital
              experiences that elevate your brand.
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
