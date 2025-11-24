"use client";
import React, { useState } from "react";
import Image from "next/image";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const stories = [
    {
      id: 1,
      heading: "E-COMMERCE: AI CUSTOMER SERVICE AGENT",
      description:
        "Our client, a renowned manufacturer of men's accessories, wanted to incorporate Agentic AI into their e-Commerce customer service function. Their goal was to reduce the cost of handling queries without causing customer dissatisfaction. Our team built a team of AI agents specialised for different tasks to achieve what the client aspired for.",
      technologies: ["OpenAI GPT", "Langchain", "Pinecone", "AWS"],
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763962658462_ls9032.png?x-id=PutObject",
    },
    {
      id: 2,
      heading: "FINANCE: RAG AGENT DEVELOPMENT",
      description:
        "One of our clients in finance Industries had their team struggling to juggle between compliance and data management, leading to the latter taking a backseat. Moreover, it gradually started to affect compliance and clients were seeking intervention. Our team sorted it all with a RAG system as an end result.",
      technologies: ["OpenAI GPT-4", "LangChain", "Pinecone", "PostgreSQL", "SharePoint"],
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763962709976_yh3jli.png?x-id=PutObject",
    },
    {
      id: 3,
      heading: "REAL ESTATE: VIRTUAL PROPERTY TOUR",
      description:
        "Our client in the Real Estate industry needed an innovative solution to showcase their properties to their prospective buyers. We created an immersive 360° Metaverse for our clients to showcase their properties and impress buyers.",
      technologies: ["3D Max", "C#", "Unreal Engine 5"],
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763962814573_eg12js.png?x-id=PutObject",
    },
    {
      id: 4,
      heading: "AUTOMOTIVE: SAFE VR TRAINING SOLUTION",
      description:
        "Our client wanted to train their employees on complex machine operations but in a safer and controlled environment to prevent any mishaps. We helped them with a VR training solution to deliver exactly that. As a result, they achieved better training outcomes in a safer environment saving a lot of time and resources.",
      technologies: ["Autodesk 3D", "C++", "Unreal Engine 5"],
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763963187069_pu1u77.png?x-id=PutObject",
    },
    {
      id: 5,
      heading: "GAMING : YOUTH ATTRACTING AR GAMES",
      description:
        "Our client approached us for game development expertise to reach Millennials and Gen Z through attractive AR gaming experiences. We created phenomenal AR games.",
      technologies: ["3D Max", "C#", "Unreal Engine 5"],
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763963226590_li5dvm.png?x-id=PutObject",
    },
  ];

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? stories.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === stories.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentStory = stories[currentIndex];

  return (
    <div
      className="bg-black relative"
      style={{
        paddingTop: "clamp(50px, 5vw, 100px)",
        paddingBottom: "clamp(50px, 5vw, 100px)",
        backgroundImage:
          "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763963076417_a4hfqr.png?x-id=PutObject')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "top center",
      }}
    >
      <div className="mx-auto" style={{ maxWidth: "1920px", padding: "0 clamp(15px, 8.33vw, 160px)" }}>
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-16">
          <h2 className="text-xl lg:text-3xl font-bold text-white" style={{ fontSize: "clamp(20px, 2.24vw, 43px)" }}>
            Success Stories with Hey Buddy's Digital Solutions
          </h2>
        </div>

        {/* Card Container */}
        <div className="relative mx-auto" style={{ maxWidth: "1600px", width: "100%" }}>
          <div
            className="border-2 border-white/20 rounded-[20px] overflow-hidden flex flex-col lg:flex-row"
            style={{
              gap: "20px",
              padding: "clamp(15px, 2vw, 20px)",
              backgroundColor: "transparent",
              minHeight: "auto",
            }}
          >
            {/* Left Panel - Text Content (Top on mobile, Left on desktop) */}
            <div
              className="bg-white/10 rounded-[14px] p-6 lg:p-12 flex flex-col gap-6 lg:gap-10 flex-1 order-1 lg:order-1"
              style={{
                minHeight: "auto",
                justifyContent: "center",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Icon and Heading */}
              <div className="flex items-start gap-3 lg:gap-4">
                <div
                  className="bg-white/21 border border-[#333333] rounded-xl p-3 lg:p-4 flex items-center justify-center flex-shrink-0"
                  style={{ width: "clamp(50px, 5vw, 66px)", height: "clamp(50px, 5vw, 66px)" }}
                >
                  <svg
                    width="34"
                    height="34"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 lg:w-8 lg:h-8"
                    style={{ color: "#E6E6E6" }}
                  >
                    <path
                      d="M12 2C8.13 2 5 5.13 5 9C5 11.38 6.19 13.47 8 14.74V17C8 17.55 8.45 18 9 18H15C15.55 18 16 17.55 16 17V14.74C17.81 13.47 19 11.38 19 9C19 5.13 15.87 2 12 2ZM14 19H10V20C10 20.55 10.45 21 11 21H13C13.55 21 14 20.55 14 20V19Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
                <h3
                  className="text-white font-medium text-lg lg:text-2xl uppercase leading-tight flex-1"
                  style={{ color: "#F9EFEC", fontSize: "clamp(16px, 1.25vw, 24px)" }}
                >
                  {currentStory.heading}
                </h3>
              </div>

              {/* Description */}
              <p
                className="text-gray-300 text-sm lg:text-lg leading-relaxed"
                style={{ color: "#B3B3B2", fontSize: "clamp(14px, 1.04vw, 16px)" }}
              >
                {currentStory.description}
              </p>

              {/* Technologies Used */}
              <div className="flex flex-col gap-4 lg:gap-5">
                <p
                  className="text-white font-medium text-base lg:text-lg uppercase"
                  style={{ color: "#FFFFFF", fontSize: "clamp(16px, 1.25vw, 18px)" }}
                >
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {currentStory.technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-white/21 rounded-full px-3 lg:px-4 py-2 lg:py-2.5"
                      style={{ backgroundColor: "rgba(255, 255, 255, 0.21)" }}
                    >
                      <span
                        className="text-gray-200 text-sm lg:text-base"
                        style={{ color: "#E6E6E6", fontSize: "clamp(12px, 0.83vw, 16px)" }}
                      >
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel - Image (Bottom on mobile, Right on desktop) */}
            <div
              className="flex-1 rounded-[14px] overflow-hidden relative order-2 lg:order-2"
              style={{ 
                minHeight: "clamp(250px, 50vw, 465px)", 
                height: "auto",
                width: "100%"
              }}
            >
              <Image
                src={currentStory.image}
                alt={currentStory.heading}
                fill
                className="object-cover"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Navigation Arrows - Desktop */}
          <div
            className="hidden lg:flex items-center justify-between absolute"
            style={{
              left: "-98px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "1796px",
              maxWidth: "calc(100% + 196px)",
              pointerEvents: "none",
            }}
          >
            <button
              onClick={goToPrevious}
              className="w-16 h-16 rounded-full bg-black/60 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-all pointer-events-auto"
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <BsChevronLeft className="text-white text-2xl" />
            </button>

            <button
              onClick={goToNext}
              className="w-16 h-16 rounded-full bg-black/60 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-all pointer-events-auto"
              style={{
                width: "64px",
                height: "64px",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <BsChevronRight className="text-white text-2xl" />
            </button>
          </div>

          {/* Navigation Arrows - Mobile */}
          <div className="flex lg:hidden items-center justify-center gap-5 mt-6">
            <button
              onClick={goToPrevious}
              className="w-14 h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-all"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <BsChevronLeft className="text-white text-xl" />
            </button>

            <button
              onClick={goToNext}
              className="w-14 h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center cursor-pointer hover:bg-black/80 transition-all"
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.6)",
              }}
            >
              <BsChevronRight className="text-white text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;

