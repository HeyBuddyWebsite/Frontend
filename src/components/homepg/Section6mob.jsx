"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Pagenationmob = () => {
  const cards = [
    {
      id: "1",
      cardheading: "3D Development",
      imageurl:
        "https://heybuddy-images.s3.ap-south-1.amazonaws.com/website-images/image+2.png",
      heading: "Virtual Property Tour",
      para: "See how our innovation, creativity, and the right expertise rendered the best results for our clients.           ",
      techused: "3D Max; C#; Unreal Engine 5",
      urllink: "/casestudies/realestate",
    },
    {
      id: "2",
      cardheading: "Game Development",
      imageurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/homepage%20banner.jpg",
      heading: "Safe VR Training Solution",
      para: "We helped our clients build a strong and loyal Games community for long-term success.",
      techused: "Autodesk 3D; C++; Unity 2023.1.5",
      urllink: "/casestudies/game-development",
    },
    {
      id: "3",
      cardheading: "AR Development",
      imageurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20banner.jpg",
      heading: "Youth attracting AR Games",
      para: "Experience the amazing blend of real and virtual worlds that creates an unforgettable user experience.",
      techused: "3D MAX; C#; Unreal Engine 5",
      urllink: "/casestudies/Games",
    },
    {
      id: "4",
      cardheading: "Fashion & Lifestyle",
      imageurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/meta%20vr%20glasses.jpg",
      heading: "AR Fashion Solution",
      para: "Our client wanted to enhance the convenience of their existing eCommerce store. They collaborated with us for our renowned AR tryon solution. This allowed users to try 3D models of the wearable without leaving home, be more certain and confident about the product and make faster decisions. More importantly, it reduced returns.",
      techused: "3D MAX; C#; Unity, Three.Js",
      urllink: "/casestudies/fashionlifestyle",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);
  const swiperRef = useRef(null);

  const handleChangeIndex = (index) => {
    setCurrentCard(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const controls = useAnimation();
  const ref = useRef();

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

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2.2 },
  };

  return (
    <div
      className="w-[100%] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-auto bg-center"
      id="testimonials"
    >
      <div
        id="projects"
        className="pt-20 pb-4  mx-auto text-center justify-center  text-3xl lg:text-4xl font-bold text-white mb-6"
      >
        <motion.h3 {...textAnimation1}>
          Success Stories with Hey Buddy
        </motion.h3>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper) => setCurrentCard(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={{
          WebkitOverflowScrolling: "touch",
          touchAction: "pan-x",
        }}
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="px-2 grid sm:grid-1 gap-y-4 gap-x-16  ">
              <h2
                style={{ fontSize: "2rem" }}
                className="  text-center text-white rounded-lg block  "
              >
                {card.cardheading}
              </h2>
              <div className="border-2 rounded-3xl ">
                <Image
                  loading="lazy"
                  src={card.imageurl}
                  width={500}
                  height={500}
                  alt="hey b"
                  className="rounded-3xl w-[100%] h-[30vh] "
                />
              </div>
              <div className="lg:pt-20">
                <h2 className="py-4 font-semibold text-3xl">{card.heading}</h2>
                <p>
                  {/* Our client wanted to enhance the convenience of their existing eCommerce store. They collaborated with us for our renowned AR tryon solution. This allowed users to try 3D models of the wearable without leaving home, be more certain and confident about the product and make faster decisions. More importantly, it reduced returns. */}
                  {card.para}
                </p>
                <p className="py-4">
                  Used Technology :{" "}
                  <span className="font-bold">{card.techused}</span>
                </p>
                <Link href={card.urllink}>
                  <button className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm">
                    Read Case Study <span aria-hidden="true">→</span>{" "}
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div style={{ textAlign: "center", marginTop: "6px" }}>
        <button
          style={{
            padding: "8px 16px",
            margin: "0 8px",
            borderRadius: "8px",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() =>
            handleChangeIndex((currentCard - 1 + cards.length) % cards.length)
          }
        >
          Previous
        </button>
        <button
          style={{
            padding: "8px 16px",
            margin: "0 8px",
            borderRadius: "8px",
            color: "#fff",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => handleChangeIndex((currentCard + 1) % cards.length)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagenationmob;
