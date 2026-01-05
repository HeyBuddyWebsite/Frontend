import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from "react-icons/ai";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import "../../styles/Slider1.css";
import Link from "next/link";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import "@/app/globals.scss";
import Image from "next/image";

function Slider1() {
  const controls = useAnimation();
  const ref = useRef();
  let swiper = null;

  useEffect(() => {
    const cursor = new MouseFollower();
    return () => {
      cursor.destroy();
    };
  }, []);

  const variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
      if (isVisible) {
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMouseEnter = () => {
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  };

  const slide_image_1 =
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583513526_voncd5.png?x-id=PutObject";
  const slide_image_2 =
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583451336_j8b2ya.png?x-id=PutObject";
  const slide_image_3 =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Cube.jpg";
  const slide_image_4 =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/ai.jpg";
  const slide_image_5 =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/appdev.jpg";
  const slide_image_6 =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/metaverse.jpg";
  const web3dev =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/4.Web3.png";
  const cgi_IMG =
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583417929_c2y2c0.png?x-id=PutObject";
  const arDev_IMG =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/7.AR%20development.png";
  const customSoftware_IMG =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/2.Custom%20software%20development.png";
  const billBord =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/6.3D%20Billboard.png";
  const aiimg =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/4.jpg";
  const aiAds_IMG =
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583332240_77ojzh.png?x-id=PutObject";
  const digitalMarketing_IMG =
    "https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1762583695137_42mxev.png?x-id=PutObject";

  return (
    <motion.div
      id="services"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
        backgroundImage:
          "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763456534207_m7f7vl.png?x-id=PutObject')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        paddingTop: "clamp(50px, 5.2vw, 100px)",
        paddingBottom: "clamp(50px, 5.2vw, 100px)",
        paddingLeft: "clamp(40px, 8.33vw, 160px)",
        paddingRight: "clamp(40px, 8.33vw, 160px)",
      }}
    >
      <h2
        style={{
          width: "100%",
          maxWidth: "1536px",
          color: "white",
          textAlign: "center",
          fontSize: "clamp(1.5rem, 2vw, 2rem)",
          padding: "0 clamp(16px, 1.67vw, 32px)",
          margin: "0 auto clamp(50px, 5.2vw, 100px) auto",
        }}
      >
        We offer AI-augmented Services as Tech Evangelists
      </h2>
      <div 
        data-cursor-text="View Service" 
        className="container7" 
        style={{ 
          width: "100%", 
          maxWidth: "1700px", 
          margin: "0 auto",
          position: "relative",
          padding: "0 clamp(40px, 4.17vw, 100px)"
        }}
      >
        {/* Left Arrow Button */}
        <div 
          className="swiper-button-prev-custom" 
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 50,
            width: "clamp(52px, 3.8vw, 64px)",
            height: "clamp(52px, 3.8vw, 64px)",
            borderRadius: "50%",
            backgroundColor: "rgba(30, 41, 59, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(12px)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(51, 65, 85, 0.95)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(59, 130, 246, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.85)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.5)";
          }}
        >
          <AiOutlineArrowLeft 
            size={28} 
            style={{ color: "white" }} 
          />
        </div>

        {/* Right Arrow Button */}
        <div 
          className="swiper-button-next-custom"
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 50,
            width: "clamp(52px, 3.8vw, 64px)",
            height: "clamp(52px, 3.8vw, 64px)",
            borderRadius: "50%",
            backgroundColor: "rgba(30, 41, 59, 0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            border: "1px solid rgba(255, 255, 255, 0.15)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(12px)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(51, 65, 85, 0.95)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1.05)";
            e.currentTarget.style.boxShadow = "0 12px 40px rgba(59, 130, 246, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "rgba(30, 41, 59, 0.85)";
            e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            e.currentTarget.style.boxShadow = "0 8px 32px rgba(0, 0, 0, 0.5)";
          }}
        >
          <AiOutlineArrowRight 
            size={28} 
            style={{ color: "white" }} 
          />
        </div>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          spaceBetween={30}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: false,
            scale: 0.9,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          onSwiper={(swiperInstance) => {
            swiper = swiperInstance;
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
              coverflowEffect: {
                depth: 50,
                stretch: 0,
                modifier: 1,
              },
            },
            640: {
              slidesPerView: "auto",
              spaceBetween: 20,
              coverflowEffect: {
                depth: 80,
                stretch: 0,
                modifier: 1,
              },
            },
            768: {
              slidesPerView: "auto",
              spaceBetween: 25,
              coverflowEffect: {
                depth: 100,
                stretch: 0,
                modifier: 1,
              },
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 30,
              coverflowEffect: {
                depth: 100,
                stretch: 0,
                modifier: 1,
              },
            },
            1440: {
              slidesPerView: "auto",
              spaceBetween: 30,
              coverflowEffect: {
                depth: 100,
                stretch: 0,
                modifier: 2,
                scale: 0.9,
              },
            },
            1920: {
              slidesPerView: "auto",
              spaceBetween: 50,
              coverflowEffect: {
                depth: 100,
                stretch: 0,
                modifier: 2,
                scale: 0.9,
              },
            },
          }}
        >
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/billboard">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h3 style={{ fontSize: "1.7rem", color: "white" }}>
                    3D Billboard
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    Capture eyeball and captivate your audience with
                    larger-than-life 3D visuals.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={billBord}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/cgi">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h3 style={{ fontSize: "1.7rem", color: "white" }}>
                    CGI Development
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    Get high-quality CGI custom-made for your project, delivered
                    in time.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={cgi_IMG}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/gamedevelopment">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  overflow: "hidden",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h3 style={{ fontSize: "1.7rem", color: "white" }}>
                    Game Development
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    We excel in developing games across diverse genres on
                    leading platforms like Unity and Unreal.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={slide_image_1}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/ardevelopment">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  overflow: "hidden",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h3
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-4"
                  >
                    AR development
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    We create realistic immersive solutions that create a
                    convincing new reality to impress your user with AR, VR or
                    through Metaverse platforms.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={slide_image_2}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/metaverse">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  overflow: "hidden",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h3
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-4"
                  >
                    Metaverse Development
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    We create realistic immersive solutions that create a
                    convincing new reality to impress your user with AR, VR or
                    through Metaverse platforms.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={arDev_IMG}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/customsoftware">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left" }} className="p-4">
                  <h3
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-3"
                  >
                    Custom Software Development
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    We employ the best software development practices for
                    cross-device and cross-platform compatible, user-friendly
                    Android and iOS applications.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={customSoftware_IMG}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/vrdevelopment">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h3 style={{ fontSize: "1.7rem", color: "white" }}>
                    VR Development
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    Help your trainees learn 4 times faster with 500% more focus
                    and 1.75% time more confidence.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={slide_image_6}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/web3">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left" }} className="pt-4 px-4">
                  <h3
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-3"
                  >
                    Web3 Development
                  </h3>
                  <p className="text-[#cfcece] pb-2 font-thin">
                    Seize the power of pathbreaking Web3 technologies like
                    blockchain with use and open new digital avenues of
                    financial streams.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={web3dev}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/ai-development">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left" }} className="pt-4 px-4">
                  <h3
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-3"
                  >
                    AI Development
                  </h3>
                  <p className="text-[#cfcece] pb-2 font-thin">
                    We infuse intelligence in your business with AI solutions
                    that analyse huge data, predict future trends and automated
                    execution.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={aiimg}
                  alt="slide_image"
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/ai-development">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h3 style={{ fontSize: "1.7rem", color: "white" }}>
                    AI Ads
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    Automate, personalize, and optimize your ad campaigns with AI's power to analyze vast datasets for customer behavior, trends, and content.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={aiAds_IMG}
                  alt="AI Ads"
                />
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/services/digitalmarketing">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h3 style={{ fontSize: "1.7rem", color: "white" }}>
                    Digital Marketing Services
                  </h3>
                  <p className="text-[#cfcece] font-thin">
                    Our digital marketing experts use intelligent technical solutions for boosted revenue generation and customer loyalty.
                  </p>
                </div>
                <Image
                  loading="lazy"
                  width={450}
                  height={450}
                  src={digitalMarketing_IMG}
                  alt="Digital Marketing Services"
                />
              </div>
            </Link>
          </SwiperSlide>

          <div className="slider-controler" style={{ display: 'none' }}>
            <div className="swiper-button-prev slider-arrow">
              <AiOutlineArrowLeft />
            </div>
            <div className="swiper-button-next slider-arrow">
              <AiOutlineArrowRight />
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </motion.div>
  );
}

export default Slider1;
