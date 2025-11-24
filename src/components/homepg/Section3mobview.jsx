"use client";
import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";

function Mobslider() {
  const slideData = [
    {
      title: "3D Billboard",
      link: "/Pages/services/billboard",
      description:
        "Capture eyeball and captivate your audience with larger-than-life 3D visuals.",
      image:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/6.3D%20Billboard.png",
    },
    {
      title: "CGI Development",
      link: "/Pages/services/cgi",
      description:
        "Get high-quality CGI custom-made for your project, delivered in time.",
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583417929_c2y2c0.png?x-id=PutObject",
    },
    {
      title: "Game Development",
      link: "/Pages/services/gamedevelopment",
      description:
        "We excel in developing games across diverse genres on leading platforms like Unity and Unreal.",
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583513526_voncd5.png?x-id=PutObject",
    },
    {
      title: "AR Development",
      link: "/Pages/services/ardevelopment",
      description:
        "We create realistic immersive solutions that create a convincing new reality to impress your user with AR, VR or through Metaverse platforms.",
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583451336_j8b2ya.png?x-id=PutObject",
    },
    {
      title: "Metaverse Development",
      link: "/Pages/services/metaverse",
      description:
        "We create realistic immersive solutions that create a convincing new reality to impress your user with AR, VR or through Metaverse platforms.",
      image:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/7.AR%20development.png",
    },
    {
      title: "Custom Software Development",
      link: "/Pages/services/customsoftware",
      description:
        "We employ the best software development practices for cross-device and cross-platform compatible, user-friendly Android and iOS applications.",
      image:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/2.Custom%20software%20development.png",
    },
    {
      title: "VR Development",
      link: "/Pages/services/vrdevelopment",
      description:
        " Help your trainees learn 4 times faster with 500% more focus and 1.75% time more confidence.",
      image:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/metaverse.jpg",
    },
    {
      title: "Web3 Development",
      link: "/Pages/services/web3",
      description:
        "Seize the power of pathbreaking Web3 technologies like blockchain with use and open new digital avenues of financial streams.",
      image:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/4.Web3.png",
    },
    {
      title: "AI Development",
      link: "/Pages/services/aidevelopment",
      description:
        "We infuse intelligence in your business with AI solutions that analyse huge data, predict future trends and automated execution.",
      image:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/4.jpg",
    },
    {
      title: "AI Ads",
      link: "/Pages/services/aidevelopment",
      description:
        "Automate, personalize, and optimize your ad campaigns with AI's power to analyze vast datasets for customer behavior, trends, and content.",
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583332240_77ojzh.png?x-id=PutObject",
    },
    {
      title: "Digital Marketing Services",
      link: "/Pages/services/digitalmarketing",
      description:
        "Our digital marketing experts use intelligent technical solutions for boosted revenue generation and customer loyalty.",
      image:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583695137_42mxev.png?x-id=PutObject",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slideData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slideData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
        position: "relative",
        backgroundColor: "#000",
        paddingBottom: "100px",
      }}
    >
      <h1
        style={{
          width: "100vw",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "1.2rem",
          padding: "5vh",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundImage:
            "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763456534207_m7f7vl.png?x-id=PutObject')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Get All Emerging Tech Solutions Under One Roof
      </h1>

      {/* Card Container */}
      <div
        style={{
          position: "relative",
          width: "90%",
          maxWidth: "400px",
          margin: "20px auto",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
          }}
        >
          {slideData.map((slide, index) => (
            <div
              key={index}
              style={{
                minWidth: "100%",
                width: "100%",
                flexShrink: 0,
              }}
            >
              <Link
                href={slide.link}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    borderRadius: "12px",
                    overflow: "hidden",
                  }}
                >
                  <div style={{ textAlign: "left", margin: "1rem", width: "calc(100% - 2rem)" }}>
                    <h1 style={{ fontSize: "1.4rem", color: "white", marginBottom: "0.5rem" }}>
                      {slide.title}
                    </h1>
                    <p style={{ color: "#cfcece", fontSize: "0.9rem" }}>{slide.description}</p>
                  </div>
                  <div style={{ width: "100%", height: "300px", position: "relative" }}>
                    <Image
                      loading="lazy"
                      fill
                      src={slide.image}
                      alt={`slide_image_${index}`}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrow Buttons */}
      <div
        style={{
          position: "relative",
          display: "flex",
          gap: "20px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={goToPrevious}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
          }}
        >
          <BsChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "white",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
          }}
        >
          <BsChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}

export default Mobslider;
