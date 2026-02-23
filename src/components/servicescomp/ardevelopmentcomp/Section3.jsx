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
    title: "AR App Development",
    description:
      "Achieve high engagement with immersive Augmented Reality applications. We create AR apps with seamless user experience and cross-platform compatibility for wider reach.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654855124_i046e2.jpg",
  },
  {
    title: "AR Software Development",
    description:
      "Get an optimized and efficient solution that perfectly plugs the gap. We create customized AR development solutions for your very specific business needs.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654855900_wkqnli.jpg",
  },
  {
    title: "AR Consulting",
    description:
      "Gain data-driven insights and strategic guidance for AR business integration. Make informed decisions with our AR consulting services and achieve major business objectives.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654856630_ivx1cp.jpg",
  },
  {
    title: "AR Design and Prototyping",
    description:
      "We design AR interfaces and create interactive prototypes to help you refine and make is as per your expectations and requirements. All this, even before the development begins.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654857235_079sd1.jpg",
  },
  {
    title: "Marker-Based and Markerless AR",
    description:
      "Whether marker-based or markerless AR solutions, you choose, we deliver. Get versatile AR experiences that function perfectly in every environment and condition.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654858085_obmtmd.jpg",
  },
  {
    title: "AR Content Development",
    description:
      "Enhance your user engagement with interactive AR content. We offer 3D modeling, animations, and overlays to make your AR experience compelling and memorable.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654858664_ec22k7.jpg",
  },
  {
    title: "AR for Marketing and Advertising",
    description:
      "Be a brand to remember. Standout with our interactive AR solutions for marketing, advertising, and brand promotions. Boost your brand visibility and brand recall.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654859340_n8bs8a.jpg",
  },
  {
    title: "AR for Training and Education",
    description:
      "Enhance learning outcomes with hands-on experiences. Our AR software solutions for training and education make complex concepts simple with experiential learning.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654860010_loxezg.jpg",
  },
  {
    title: "AR Integration with IoT",
    description:
      "We make your AR experience seamlessly integrate with the real-world environment. Our AR-IoT integration services enhance connectivity and the overall user experience.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654860814_ojklez.jpg",
  },
  {
    title: "AR for Games",
    description:
      "Add a layer of immersion and make your gamers enter the fantasy world. We design and develop augmented reality games for more enjoyable Games than ever.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654861461_mgaqcz.jpg",
  },
  {
    title: "Cross-Platform AR Development",
    description:
      "Cater to a wider audience with our cross-platform AR application. We ensure seamless compatibility across devices and prominent platforms including iOS, Android, and others.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654862832_6lmf8a.jpg",
  },
  {
    title: "AR Maintenance and Support",
    description:
      "Ensure the relevance and improvement of your AR applications. With Hey Buddy, get ceaseless support, maintenance, and updates for an evolving AR application.      ",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769654862163_exq75m.jpg",
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
                If it&apos;s AR, It&apos;s Hey Buddy: Our Comprehensive <br /> Augmented Reality Development Services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                No need to lose your valuable time and resources on finding
                different service providers for your every need. Hey Buddy has got
                it all covered. We offer a complete suite of AR services. From AR
                app development to AR IoT integration to even cross-platform AR
                development, you name it, we deliver it.
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
              Our Comprehensive Augmented Reality Development Services
            </h2>
            <p className="text-lg text-gray-300">
              No need to lose your valuable time and resources on finding
              different service providers for your every need. Hey Buddy has got
              it all covered.
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
