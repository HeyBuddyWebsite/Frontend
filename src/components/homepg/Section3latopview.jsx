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
import "../../app/globals.scss";
import Image from "next/image";

function Slider1() {
  const controls = useAnimation();
  const ref = useRef();
  let swiper = null; // Reference to the Swiper instance

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
    // Pause the autoplay when mouse enters the SwiperSlide
    if (swiper && swiper.autoplay) {
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    // Resume the autoplay when mouse leaves the SwiperSlide
    if (swiper && swiper.autoplay) {
      swiper.autoplay.start();
    }
  };

  const slide_image_1 =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/game.png";
  const slide_image_2 =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Immersive.png";
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
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/1.balloon%20in%20shape.png";
  const arDev_IMG =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/7.AR%20development.png";
  const customSoftware_IMG =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/2.Custom%20software%20development.png";

  const billBord =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20service%20card/6.3D%20Billboard.png";
  const aiimg =
    "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/4.jpg";

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
      }}
      className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-contain "
    >
      <h1
        style={{
          width: "60vw",
          color: "white",
          textAlign: "center",
          fontSize: "2rem",
          padding: "5vh",
        }}
      >
        Get All Emerging Tech Solutions Under One Roof
      </h1>
      <div data-cursor-text="View Service" className="container7">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 50,
            modifier: 2.5,
          }}
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            clickable: true,
          }}
          modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
          className="swiper_container"
          onSwiper={(swiperInstance) => {
            swiper = swiperInstance;
          }}
        >
          <SwiperSlide
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="/Pages/services/billboard">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    3D Billboard
                  </h1>
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
            <Link href="/Pages/services/cgi">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    CGI Development
                  </h1>
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
            <Link href="/Pages/services/gamedevelopment">
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
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    Game Development
                  </h1>
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
            <Link href="/Pages/services/ardevelopment">
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
                  <h1
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-4"
                  >
                    AR development
                  </h1>
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
            <Link href="/Pages/services/metaverse">
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
                  <h1
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-4"
                  >
                    Metaverse Development
                  </h1>
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
            <Link href="/Pages/services/customsoftware">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left" }} className="p-4">
                  <h1
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-3"
                  >
                    Custom Software Development
                  </h1>
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
            <Link href="/Pages/services/vrdevelopment">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left", margin: "1rem" }}>
                  <h1 style={{ fontSize: "1.7rem", color: "white" }}>
                    VR Development
                  </h1>
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
            <Link href="/Pages/services/web3">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left" }} className="pt-4 px-4">
                  <h1
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-3"
                  >
                    Web3 Development
                  </h1>
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
            <Link href="/Pages/services/aidevelopment">
              <div
                className="textdiv"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ textAlign: "left" }} className="pt-4 px-4">
                  <h1
                    style={{ fontSize: "1.7rem", color: "white" }}
                    className="mt-3"
                  >
                    AI Development
                  </h1>
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

          <div className="slider-controler">
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
