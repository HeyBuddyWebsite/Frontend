import React, { useEffect, useRef } from "react";

import "../../styles/Slider2.css";
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
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/1.balloon%20in%20shape.png",
    },
    {
      title: "Game Development",
      link: "/Pages/services/gamedevelopment",
      description:
        "We excel in developing games across diverse genres on leading platforms like Unity and Unreal.",
      image:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png",
    },
    {
      title: "AR Development",
      link: "/Pages/services/ardevelopment",
      description:
        "We create realistic immersive solutions that create a convincing new reality to impress your user with AR, VR or through Metaverse platforms.",
      image:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Immersive.png",
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
  ];

  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
      }}
      // className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-contain "
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
          position: "sticky",
          top: "5rem",
        }}
        className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover "
      >
        Get All Emerging Tech Solutions Under One Roof
      </h1>
      <div className="container8">
        {slideData.map((slide, index) => (
          <Link href={slide.link}>
            <div
              key={index}
              className="textdiv1"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <div style={{ textAlign: "left", margin: "1rem" }}>
                <h1 style={{ fontSize: "1.4rem", color: "white" }}>
                  {slide.title}
                </h1>
                <p>{slide.description}</p>
              </div>
              <Image
                loading="lazy"
                width={450}
                height={450}
                src={slide.image}
                alt={`slide_image_${index}`}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Mobslider;
