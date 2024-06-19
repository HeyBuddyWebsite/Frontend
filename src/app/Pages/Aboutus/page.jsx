"use client";
import { useState, useEffect } from "react";
import React from "react";
import Section1 from "@/components/aboutuscomp/Section1";
import Section2 from "@/components/aboutuscomp/Section2";
import Section3 from "@/components/aboutuscomp/Section3";
import Section4desktop from "@/components/aboutuscomp/Section4desktop";
import Company from "@/components/aboutuscomp/Brands";
import Section4mob from "@/components/aboutuscomp/Section4mob";

const page = () => {
  const [isMobile, setIsMobile] = useState(false);
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
  return (
    <div className="mx-auto">
      <div className="mx-auto pb-8 lg:pb-20 ">
        <Section1 />
      </div>
      <div className="mx-auto pb-8 lg:pb-20 ">
        <Section2 />
      </div>
      <div className="mx-auto ">
        <Company />
      </div>
      <div className="mx-auto ">
        <Section3 />
      </div>
      <div className="mx-auto ">
        {isMobile ? <Section4mob /> : <Section4desktop />}
      </div>
    </div>
  );
};

export default page;
