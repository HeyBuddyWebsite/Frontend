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
    title: "AI-Powered Video Ads",
    description:
      "Engaging, data-driven video advertisements crafted using advanced AI to capture attention and drive conversions. Our AI technology creates compelling video content that resonates with your target audience and maximizes engagement across all platforms.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487192253_rfniow.png",
  },
  {
    title: "Dynamic Social Media Creatives",
    description:
      "Customizable and adaptive social media ad designs optimized for platform-specific engagement and audience targeting. Our AI creates dynamic content that adapts to different social media platforms and audience preferences for maximum impact.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487409798_mqj8of.png",
  },
  {
    title: "AI-Generated Ad Copywriting",
    description:
      "Persuasive and personalized ad copy created by AI to communicate your brand's message effectively and boost click-through rates. Our AI copywriting ensures your message resonates with your audience and drives action.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487409946_hfmifi.png",
  },
  {
    title: "Platform-Specific AI Ad Designs",
    description:
      "Tailored advertising creatives crafted for Facebook, Instagram, Google, LinkedIn, and other platforms to maximize impact. Each design is optimized for the specific platform's requirements and audience behavior patterns.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410074_wdmqs9.png",
  },
  {
    title: "Personalized Generative AI Creatives",
    description:
      "Unique ad content generated through AI algorithms that align precisely with your brand identity and audience preferences. Our generative AI creates personalized content that speaks directly to your target market.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410190_6usckc.png",
  },
  {
    title: "Automated AI Campaign Optimization",
    description:
      "Continuous AI-driven analysis and adjustment of your ad campaigns to improve performance and maximize return on investment. Our AI continuously monitors and optimizes your campaigns for better results.",
    img: "https://heybuddy-images.s3.ap-south-1.amazonaws.com/uploads/1769487410294_u83r3p.png",
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
                Get AI Video Ads Your Brand Needs and Your Audience Desires
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                With our team of creative strategists and cutting-edge AI tools, we create high-performing video ads designed to engage, convert, and scale your D2C brand. Whether you need short-form product videos, AI-powered ad creatives, or platform-specific video campaigns, we deliver exactly what your business needs to grow.
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
              Get AI Video Ads Your Brand Needs and Your Audience Desires
            </h2>
            <p className="text-lg text-gray-300">
              With our team of creative strategists and cutting-edge AI tools, we create high-performing video ads designed to engage, convert, and scale your D2C brand.
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
