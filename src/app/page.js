"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Slider1 from "@/components/homepg/Section3latopview";
import MobSlider from "@/components/homepg/Section3mobview";
import Bottomsec from "@/components/homepg/Section9";
import Grid from "@/components/homepg/Section5";
import Grid1 from "@/components/homepg/Section4";
import Section4b from "@/components/homepg/Section4b";
import IndustrySolutions from "@/components/homepg/Section6";
import BusinessScale from "@/components/homepg/Section6b";
import Grid2 from "@/components/homepg/Section7";
import Company from "@/components/homepg/Section2";
import Landingpg from "@/components/homepg/Section1";
import Ourclients from "@/components/homepg/Section8large";
import Ourclientsmob from "@/components/homepg/Section8mob";
import Pagenation from "@/components/homepg/Section6large";
import Pagenationmob from "@/components/homepg/Section6mob";
import SuccessStories from "@/components/homepg/SuccessStories";
import gsap from "gsap";
import MouseFollower from "mouse-follower";
import "./globals.scss";

const fadeInAnimation = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.5 },
};

const fadeInAnimation2 = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 4.5 },
};

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  MouseFollower.registerGSAP(gsap);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const cursor = new MouseFollower();
    return () => {
      cursor.destroy();
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/*  --------------------section-1---------------------------------- */}

      <motion.div {...fadeInAnimation} className="w-full">
        <Landingpg />
      </motion.div>

      {/*  --------------------section-2---------------------------------- */}

      <div className="w-full">
        <Company />
      </div>

      {/*  --------------------section-3---------------------------------- */}

      <div className="w-full">
        {isMobile ? <MobSlider /> : <Slider1 />}
      </div>

      {/*  --------------------section-4---------------------------------- */}

      <motion.div {...fadeInAnimation2} className="w-full">
        <Grid1 />
      </motion.div>

      {/*  --------------------section-4b---------------------------------- */}

      <div className="w-full">
        <Section4b />
      </div>

      {/*  --------------------section-5---------------------------------- */}

      <div className="w-full">
        <Grid />
      </div>

      {/*  --------------------section-6---------------------------------- */}

      <div className="w-full">
        <IndustrySolutions />
      </div>

      {/*  --------------------section-6b---------------------------------- */}

      <div className="w-full">
        <BusinessScale />
      </div>

      {/*  --------------------section-7---------------------------------- */}

      <div className="w-full">
        <Grid2 />
      </div>

      {/*  --------------------Success Stories Section---------------------------------- */}

      <div className="w-full">
        <SuccessStories />
      </div>

      {/*  --------------------section-8---------------------------------- */}

      <div className="w-full">
        {isMobile ? <Ourclientsmob /> : <Ourclients />}
      </div>

      {/*  --------------------section-9 --------------------------------- */}

      <div className="w-full">
        <Bottomsec />
      </div>
    </main>
  );
}
