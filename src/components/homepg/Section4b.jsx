import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Section4b = () => {
  return (
    <div className="bg-black relative" style={{ zIndex: 100, paddingTop: "0", paddingBottom: "0", marginTop: "0", marginBottom: "0" }}>
      <div
        className="bg-no-repeat bg-center relative flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457149053_17i5il.png?x-id=PutObject')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "clamp(250px, 30vw, 300px)",
          paddingTop: "0",
          paddingBottom: "0",
        }}
      >
        <div className="relative mx-auto flex flex-col items-center justify-center" style={{ zIndex: 101, width: "clamp(90%, 58.7vw, 1127px)", marginLeft: "auto", marginRight: "auto", maxWidth: "1127px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            position: "relative",
            zIndex: 102,
          }}
          className="text-center"
        >
          <p className="mt-0 text-center font-bold text-white relative z-10 md:whitespace-nowrap" style={{ width: "100%", maxWidth: "1127px", marginBottom: "30px", fontSize: "clamp(20px, 2.2vw, 42px)", lineHeight: "1.2" }}>
            Your Next-gen AI-native Digital Solution is One Click Away
          </p>
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

