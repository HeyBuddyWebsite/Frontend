import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Section4b = () => {
  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-cover bg-center relative overflow-hidden">
      <div className="relative mx-auto lg:w-[50%] py-16 sm:py-24 lg:py-32">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="text-center"
        >
          <p className="mt-0 px-4 lg:px-0 text-center mx-auto text-2xl lg:text-4xl font-bold sm:leading-8 text-white">
            Your Next-gen AI-native Digital Solution is One Click Away
          </p>
          <Link href="/Pages/Contactus">
            <div
              style={{ width: "fit-content" }}
              className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 px-8 py-4 text-base font-semibold text-white shadow-lg hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-6 flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-105"
            >
              Get Started
              <BsArrowRight className="text-xl" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Section4b;

