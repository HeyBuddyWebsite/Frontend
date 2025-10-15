import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
// import { useState, useEffect } from "react";
import { Button } from "@material-tailwind/react";
import { motion, useAnimation } from "framer-motion";

const Herosection = ({ handlecontactusModal }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textAnimation1 = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5.5, ease: "easeOut" },
    },
  };

  const containerStyle = {
    padding: "20px",
    position: "sticky",
  };

  const textContainerStyle = {
    marginBottom: "30%",
    position: "sticky",
    left: "50%",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "30%",
  };

  const imageContainerStyle = {
    position: "sticky",
    top: "30%",
    left: "50%",
    // transform: `translateX(-50%) translateY(-${scrollPosition / 2}px)`,
    width: "100%",
    height: "100%",
    overflow: "hidden",

    top: "15rem",
  };

  const imageStyle = {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease-out",
    opacity: "0.7",
  };

  const buttonHeader = {
    border: isHovered ? "0px" : "1px solid white",
    background: isHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: isHovered ? "white" : "white", // Change the text color as needed
    padding: "10px 20px",
    fontSize: "16px",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
    marginTop: "3rem",
  };

  return (
    <>
      <div style={containerStyle}>
        <div style={textContainerStyle}>
          <h1 className="text-3xl  md:text-5xl pb-5">
            Trusted Virtual Reality Development Company In India & USA
          </h1>

          <Button
            onClick={handlecontactusModal}
            style={buttonHeader}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Consult Our VR Experts
          </Button>
        </div>
        <div style={imageContainerStyle}>
          {/* Replace 'your-image.jpg' with the actual image source */}
          <Image
            loading="lazy"
            style={imageStyle}
            width={450}
            height={450}
            className="h-[24px] w-[24px] bg-white mx-auto mt-4"
            src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/a5a0e947a01622c735016d9ce3f93e55.png"
            alt="Background"
          />
        </div>
      </div>

      <div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={textAnimation1}
        className="py-8 text-base md:text-xl "
        style={{ color: "white" }}
      >
        <p>
          Your search for a globally recognized expert VR development company
          ends here. We have proven work experience with clients in India, the
          US, and around the globe. And it is our remarkable results and in-time
          delivery that places us among the top Virtual Reality companies.
        </p>
      </div>
    </>
  );
};

export default Herosection;
