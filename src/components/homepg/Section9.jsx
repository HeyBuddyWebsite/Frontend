import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Bottomsec = () => {
  return (
    <div className="bg-black pt-16 lg:pt-24">
      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-contain bg-center min-h-[500px] lg:min-h-[700px]" style={{ backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat' }}>
        <div className="relative mx-auto lg:w-[50%] py-32 sm:py-48 lg:py-56">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="text-center"
        >
          <h1 className="mt-6 px-4 lg:px-0 text-center mx-auto text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
            Super-charge your business capability with Intelligent Solutions.
          </h1>
          <p className="px-4 lg:px-0 text-center mx-auto text-xl lg:text-2xl text-white mb-10">
            The time for AI is now.
          </p>
          <Link href="/Pages/Contactus">
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 px-14 py-6 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group">
              Get Started
              <BsArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Bottomsec;
