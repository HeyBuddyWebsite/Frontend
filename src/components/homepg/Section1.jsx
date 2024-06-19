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

      <div className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          {/* ... Your existing code ... */}
          <div className="mx-auto lg:w-[60%] py-32 sm:pt-48 lg:pt-56">
            <div className="text-center">
              <motion.h1
                className="heading1 lg:text-6xl text-3xl lg:pb-8 font-bold tracking-tight text-white sm:text-6xl"
                {...textAnimation}
              >
                A Metaverse & Game Development Company in India
              </motion.h1>
              <motion.div className="wordCarousel">
                <span className="wearetext" style={{ fontWeight: "300" }}>
                  We Are{" "}
                </span>
                <div>
                  <ul className="flip5">
                    <li style={{ marginRight: "10rem" }}>Buddies!</li>
                    <li style={{ marginRight: "10rem" }}>Creative</li>
                    <li style={{ marginRight: "9rem" }}>Immersive</li>
                    <li style={{ marginRight: "10rem" }}>Dynamic</li>
                    <li style={{ marginRight: "9rem" }}> Innovative</li>
                  </ul>
                </div>
              </motion.div>

              <motion.div
                className="mt-10 flex items-center justify-center gap-x-6"
                {...textAnimation}
              >
                <Link href="Pages/Contactus">
                  <div className="getintouch rounded-3xl px-10 py-4 text-sm text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    Get in Touch{" "}
                    <span aria-hidden="true" className="arrow">
                      ➜
                    </span>
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
