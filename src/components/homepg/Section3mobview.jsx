"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const setupAnimation = () => {
      if (!containerRef.current || !sectionRef.current) {
        setTimeout(setupAnimation, 100);
        return;
      }

      const cards = Array.from(containerRef.current.querySelectorAll(".stack-card"));
      if (cards.length === 0) {
        setTimeout(setupAnimation, 100);
        return;
      }

      const vh = window.innerHeight;
      const spacing = vh * 0.9; // Space between cards initially
      const scrollPerCard = vh; // Each card gets 1 viewport height of scroll
      const totalScrollDistance = scrollPerCard * (totalCards - 1);

      // Set initial positions - cards spread out vertically
      cards.forEach((card, i) => {
        // Z-index: later cards have higher z-index so they stack on top
        // Card 0: z-index = 1 (bottom of stack)
        // Card 1: z-index = 2 (on top of Card 0)
        // Card 11: z-index = 12 (top of stack)
        card.style.zIndex = i + 1;
        
        // Initial position: each card starts at its own position
        gsap.set(card, {
          y: i * spacing,
          xPercent: -50,
        });
      });

      // Create a timeline where each card animates in sequence
      const masterTimeline = gsap.timeline();
      
      cards.forEach((card, i) => {
        if (i > 0) {
          // Each card animates one after another
          // Card 1 animates from 0-1, Card 2 from 1-2, etc.
          const startTime = i - 1; // Start time in timeline
          const duration = 1; // Duration for each card animation
          
          // All cards stack at y: 0 (top position)
          // Z-index ensures proper stacking order
          const anim = gsap.to(card, {
            y: 0, // Stack at top position
            ease: "none",
            duration: duration,
          });
          
          // Add animation to timeline at the correct start time
          masterTimeline.add(anim, startTime);
        }
      });

      // Create ScrollTrigger with the timeline
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${totalScrollDistance}`,
        animation: masterTimeline,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      });

      // Refresh after setup
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 200);
    };

    // Initialize after component mounts
    const timer = setTimeout(setupAnimation, 300);

    // Handle window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [totalCards]);

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
          top: "0",
          zIndex: totalCards + 10,
          backgroundColor: "rgba(0, 0, 0, 0.8)",
        }}
        className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover "
      >
        Get All Emerging Tech Solutions Under One Roof
      </h1>
      <div
        ref={containerRef}
        className="container8"
        style={{
          position: "relative",
          width: "100%",
          minHeight: `${totalCards * 100}vh`,
          overflow: "visible",
        }}
      >
        {slideData.map((slide, index) => {
          return (
            <div
              key={index}
              className="stack-card"
              style={{
                position: "absolute",
                top: "10vh",
                left: "50%",
                width: "90%",
                maxWidth: "400px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "20px 0",
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
                  className="textdiv1"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    width: "100%",
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Mobslider;
