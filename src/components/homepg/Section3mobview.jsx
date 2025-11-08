"use client";
import React, { useEffect, useRef, useState } from "react";

import "../../styles/Slider2.css";
import Link from "next/link";
import Image from "next/image";
function Mobslider() {
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
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

  const totalCards = slideData.length;

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const section = sectionRef.current;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate when section enters viewport
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      // Calculate scroll progress (0 to 1)
      let progress = 0;
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        // Section is in viewport
        const scrollableDistance = sectionHeight - windowHeight + windowHeight;
        const scrolled = windowHeight - sectionTop;
        progress = Math.min(Math.max(scrolled / scrollableDistance, 0), 1);
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
        position: "relative",
        minHeight: `${100 * totalCards}vh`, // Ensure enough scroll space
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
          position: "sticky",
          top: "5rem",
          zIndex: totalCards + 10,
        }}
        className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover "
      >
        Get All Emerging Tech Solutions Under One Roof
      </h1>
      <div className="container8" style={{ position: 'relative', width: '100%' }}>
        {slideData.map((slide, index) => {
          // Calculate stacking position based on scroll progress
          const cardProgress = (scrollProgress * totalCards) - index;
          const isStacked = cardProgress >= 1;
          const isActive = cardProgress >= 0 && cardProgress < 1;
          const stackOffset = Math.min(cardProgress, 1) * 20; // 20px offset per card
          
          return (
            <Link href={slide.link} key={index}>
              <div
                className="textdiv1"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  position: isStacked ? 'fixed' : 'sticky',
                  top: isStacked ? `${100 + (index * 20)}px` : `${150 + (index * 100)}px`,
                  zIndex: totalCards - index,
                  transform: isStacked ? `translateY(${stackOffset}px)` : 'none',
                  transition: 'transform 0.1s ease-out',
                  width: '90%',
                  maxWidth: '400px',
                  margin: '0 auto',
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.4rem", color: "white" }}>
                    {slide.title}
                  </h1>
                  <p style={{ color: "#cfcece" }}>{slide.description}</p>
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
          );
        })}
      </div>
    </div>
  );
}

export default Mobslider;
