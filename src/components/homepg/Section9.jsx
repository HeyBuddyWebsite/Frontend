import React from "react";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const Bottomsec = () => {
  return (
    <div className="bg-black pt-0">
      <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-contain bg-center min-h-[416px]" style={{ backgroundSize: 'contain', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', paddingTop: 'clamp(60px, 6.23vw, 119.5px)', paddingBottom: 'clamp(60px, 6.23vw, 119.5px)' }}>
        <div className="relative mx-auto" style={{ width: "clamp(90%, 58.7vw, 1127px)", marginLeft: "auto", marginRight: "auto", maxWidth: "1127px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          className="text-center"
        >
          <h2 className="text-center mx-auto text-3xl lg:text-4xl font-bold text-white mb-0 leading-tight" style={{ width: "100%", maxWidth: "1127px", marginBottom: "30px" }}>
            Super-charge your business capability with Intelligent Solutions. The time for AI is now.
          </h2>
          <Link href="/Pages/Contactus">
            <div className="rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 px-14 py-6 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group" style={{ width: "fit-content", marginLeft: "auto", marginRight: "auto" }}>
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
