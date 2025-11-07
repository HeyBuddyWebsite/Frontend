"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import "../../styles/landingpage.scss";
import { BsArrowRightShort } from "react-icons/bs";
import Link from "next/link";

const Landingpg = () => {
  const [blackScreenVisible, setBlackScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBlackScreenVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const textAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2 },
  };
  const staggerTextAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, delay: 0.2 },
  };
  const staggerTextAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1, delay: 0.7 },
  };
  const staggerTextAnimation2 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 1.2, delay: 1 },
  };
  const gradientTextStyles = {
    color: "transparent",
    background: "-webkit-linear-gradient(45deg, #2196F3, #ffffff)",
    WebkitBackgroundClip: "text",
    fontWeight: "bold",
    fontSize: "4rem",
  };
  const customExitAnimation = {
    initial: { opacity: 1, y: 0 },
    animate: { opacity: 0, y: -100 }, // Adjust the y value based on your preference
  };

  const scrollUpAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <div>
      <AnimatePresence>
        {blackScreenVisible && (
          <motion.div
            key="black-screen"
            initial={{ backgroundColor: "#000" }}
            animate={{ backgroundColor: "#000" }}
            exit={customExitAnimation}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              transition: "all ease 1s",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              key="text-container"
              className="text-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              style={{ position: "absolute", textAlign: "center" }}
            >
              <motion.p {...staggerTextAnimation} style={gradientTextStyles}>
                Innovative
              </motion.p>
              <motion.p {...staggerTextAnimation1} style={gradientTextStyles}>
                Dynamic
              </motion.p>
              <motion.p {...staggerTextAnimation2} style={gradientTextStyles}>
                Immersive
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="bg-no-repeat lg:bg-cover bg-center">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* Gradient blob container to mimic header__gradient__structure */}
          <div className="header__gradient__container">
            <div className="header__gradient__wrapper gdm-page-wrapper">
              <div className="header__gradient__shape" />
              <div className="header__gradient__shape" />
              <div className="header__gradient__shape" />
              <div className="header__gradient__shape" />
              <div className="header__gradient__shape" />
            </div>
          </div>

          <div className="relative z-10 mx-auto lg:w-[75%] py-20 sm:pt-32 lg:pt-40">
            <div className="text-center px-4 sm:px-6 lg:px-8">
              <motion.h1
                className="heading1 lg:text-5xl text-3xl lg:pb-6 font-bold tracking-tight text-white sm:text-4xl leading-tight px-2 sm:px-4"
                {...textAnimation}
              >
                Hey Buddy: The AI-Native Company for Creative Tech Solutions
              </motion.h1>
              
              <motion.p
                className="text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mt-6 font-light"
                {...textAnimation}
                style={{ fontWeight: 300 }}
              >
                We engineer intelligent solutions and groundbreaking digital products that unlock new possibilities for your brand
              </motion.p>

              <motion.div
                className="mt-12 flex items-center justify-center gap-x-6"
                {...textAnimation}
              >
                <Link href="Pages/Contactus">
                  <div className="getintouch rounded-full px-14 py-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
                    Experience Now{" "}
                    <BsArrowRightShort className="text-2xl transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landingpg;
