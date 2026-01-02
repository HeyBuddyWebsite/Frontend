import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Section4b = () => {
  return (
    <div className="bg-black relative" style={{ zIndex: 31, paddingTop: "clamp(80px, 8vw, 120px)", paddingBottom: "clamp(80px, 8vw, 120px)", marginTop: "0", marginBottom: "0", width: "100%", position: "relative", overflow: "visible" }}>
      <div
        className="bg-no-repeat bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457149053_17i5il.png?x-id=PutObject')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          maxWidth: "100%",
          minHeight: "clamp(320px, 35vw, 400px)",
          paddingTop: "clamp(50px, 5vw, 70px)",
          paddingBottom: "clamp(50px, 5vw, 70px)",
          position: "relative",
        }}
      >
        {/* Overlay to ensure text visibility */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 1,
          pointerEvents: "none"
        }}></div>
        <div className="relative mx-auto flex flex-col items-center justify-center" style={{ zIndex: 100, width: "clamp(90%, 58.7vw, 1127px)", marginLeft: "auto", marginRight: "auto", maxWidth: "1127px", position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 101,
            width: "100%",
          }}
          className="text-center"
        >
          <h2 className="mt-0 text-center text-3xl lg:text-4xl font-bold text-white relative md:whitespace-nowrap" style={{ 
            width: "100%", 
            maxWidth: "1127px", 
            marginBottom: "30px", 
            lineHeight: "1.2", 
            color: "#ffffff", 
            opacity: 1,
            zIndex: 102,
            position: "relative",
            textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
            display: "block",
            visibility: "visible"
          }}>
            Your Next-gen AI-native Digital Solution is One Click Away
          </h2>
          <Link href="/Pages/Contactus">
            <div
              style={{ width: "fit-content", position: "relative", zIndex: 10, marginLeft: "auto", marginRight: "auto" }}
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-105"
            >
              Get Started
              <BsArrowRight className="text-lg" />
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section4b;

