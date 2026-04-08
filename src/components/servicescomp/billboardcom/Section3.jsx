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
    title: "3D Design and Rendering",
    description:
      "We create visually captivating designs on 3D OOH billboards to powerfully convey your intended message.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/3d+modeling.jpg",
  },
  {
    title: "Concept Development",
    description:
      "We nudge you in the right direction by conceptualizing and developing ideas for your billboard campaigns.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/visual+prototype.jpg",
  },
  {
    title: "Customization",
    description:
      "We mold your 3D billboard designs to meet your business and branding needs and achieve your goals.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Product+Visualization.jpg",
  },
  {
    title: "Visualization Services",
    description:
      "We help you assess the impact of your 3D billboard in a particular environment with our visualization services.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Environmental+Visualization.jpg",
  },
  {
    title: "Animation and Motion Graphics",
    description:
      "We bring dynamism with live elements to your 3d animated billboards and amplify the impact exponentially.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Animation.jpg",
  },
  {
    title: "Maintenance and Updates",
    description:
      "For a sustained impact on your 3D billboard advertising, we offer sustained support for maintenance and updates.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Simulation+and+training.jpg",
  },
  {
    title: "Anamorphic Billboard Consultation",
    description:
      "We consult you on the best practices and strategies for powerful 3D billboard advertisements.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Interactive+Experiences.jpg",
  },
  {
    title: "Compliance and Regulations",
    description:
      "We ensure your 3d commercial billboard complies with local regulations and the latest industry standards.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/Architectural+Visualization.jpg",
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
                Hey Buddy - leading 3D Billboard Company for Next-Gen Services
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                We offer a comprehensive suite of 3D development services to help
                you grab the opportunity. Engage with your audience like never
                before and none another. Present your modernized avatar and get an
                unmatchable competitive edge with our your 3d led billboard today.
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
              leading 3D Billboard Company for Next-Gen Services
            </h2>
            <p className="text-lg text-gray-300">
              We offer a comprehensive suite of 3D development services to help
              you grab the opportunity.
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
