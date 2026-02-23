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
    title: "SEO & SEM",
    description:
      "Improve search rankings and drive qualified traffic with proven strategies. Our SEO and SEM experts optimize your online presence to ensure maximum visibility and conversion rates across search engines.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769580012298_3kxxlo.png",
  },
  {
    title: "AI Led Social Media Marketing",
    description:
      "Build engagement and grow your audience across popular platforms. Our AI-powered social media strategies create compelling content that resonates with your target audience and drives meaningful interactions.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769580013484_5ivcl7.png",
  },
  {
    title: "AI & CGI Ad production",
    description:
      "Create stunning visual advertisements that capture attention and drive conversions. Our AI and CGI technology produces high-impact ads that stand out in today's competitive digital landscape.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769580014340_o7w654.png",
  },
  {
    title: "Email & Automation",
    description:
      "Convert and retain customers with personalized campaigns. Our email marketing and automation solutions nurture leads through the sales funnel with targeted, data-driven messaging.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769580014893_55tjqq.png",
  },
  {
    title: "Influencer & Affiliate Marketing",
    description:
      "Expand reach and trust with strategic partnerships. We connect your brand with the right influencers and affiliates to amplify your message and build credibility in your industry.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769580015438_p1p193.png",
  },
  {
    title: "Performance Marketing & Analytics",
    description:
      "Optimize campaigns for maximum ROI with data-driven insights. Our analytics and performance marketing experts track, measure, and optimize every aspect of your digital marketing campaigns.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769580015949_540uak.png",
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
                Customized Digital Marketing Strategies for Every Business and
                Every Goal
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                At Hey Buddy, we create tailored digital marketing solutions
                designed to amplify your brand's presence, attract qualified leads,
                and drive measurable growth. Our team combines data-driven insights
                with creativity to help businesses dominate the digital space.
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
              Customized Digital Marketing Strategies for Every Business and
              Every Goal
            </h2>
            <p className="text-lg text-gray-300">
              At Hey Buddy, we create tailored digital marketing solutions
              designed to amplify your brand's presence, attract qualified leads,
              and drive measurable growth.
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


