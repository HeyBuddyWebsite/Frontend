import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Section4b = () => {
  return (
    <div className="bg-black relative" style={{ zIndex: 100 }}>
      <div
        className="bg-no-repeat bg-cover bg-center relative min-h-[420px] lg:min-h-[520px] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457149053_17i5il.png?x-id=PutObject')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative mx-auto w-full px-6 lg:w-[50%] py-6 sm:py-10 lg:py-12 flex flex-col items-center justify-center" style={{ zIndex: 101 }}>
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
          <p className="mt-0 px-4 lg:px-0 text-center mx-auto text-3xl lg:text-4xl font-bold sm:leading-8 text-white relative z-10">
            Your Next-gen AI-native Digital Solution is One Click Away
          </p>
          <Link href="/Pages/Contactus">
            <div
              style={{ width: "fit-content", position: "relative", zIndex: 10 }}
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6 flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-105"
            >
              Get Started
              <BsArrowRight className="text-xl" />
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Section4b;

