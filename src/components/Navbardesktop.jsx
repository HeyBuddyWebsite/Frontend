"use client";
import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const Navbardesktop = () => {
  const [backgroundwhite, setBackgroundWhite] = useState(false);

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <div className="fixed top-0 transition-all duration-800   w-full  z-50">
      <nav className="relative px-2  py-0">
        <div
          className={classNames(
            "fixed justify-center mx-auto items-center max-container w-full border-white transition-all duration-800 py-4 z-50",
            {
              "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 z-50":
                backgroundwhite,
            }
          )}
        >
          <div className="w-[80%] m-auto flex items-center">
            <Link href="/" className="flex flex-col items-start">
              <Image
                loading="lazy"
                width={300}
                height={300}
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/logo.png"
                className="lg:ml-0 h-6 w-[6rem] lg:h-10 lg:w-[12rem] cursor-pointer"
                alt="Hey Buddy"
              />
              <p className="text-white text-[9px] lg:text-[11px] font-light mt-1">Beyond Reality</p>
            </Link>

            <ul className=" flex-1 flex justify-end items-center text-white  gap-4 max-lg:hidden ">
              <li className="flex relative group lg:text-[16px] px-2 sm:text-sm border-transparent hover:border-black">
                Services
                <i className="fa-solid fa-chevron-down fa-2xs pt-3" />
                {/* Mega menu */}
                <div className="hidden group-hover:block absolute left-1/2 -translate-x-1/2 top-8 w-[min(1120px,calc(100vw-2rem))] rounded-xl border border-white/10 bg-[#121212]/95 shadow-2xl backdrop-blur-xl">
                  <div className="grid grid-cols-5 gap-6 p-6">
                    {/* Preview card */}
                    <div className="col-span-2 bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5">
                      <div className="aspect-video w-full bg-[url('/Images/blog/blogImg1.png')] bg-cover bg-center" />
                      <div className="p-4">
                        <p className="text-[13px] text-neutral-300 leading-snug">What is CGI: Definition, Development & Common Examples</p>
                        <Link href="/Pages/Blog" className="inline-block mt-3 text-xs px-3 py-2 rounded-full bg-[#2563EB] text-white">Check Our Blogs</Link>
                      </div>
                    </div>

                    {/* Column 1 */}
                    <div>
                      <p className="text-sm font-semibold text-white mb-3">Artificial Intelligence</p>
                      <ul className="space-y-2 text-[13px] text-neutral-300">
                        <li><Link href="/Pages/services/aidevelopment" className="hover:text-white">AI Development Services</Link></li>
                        <li><Link href="/Pages/services/aiads" className="hover:text-white">AI Ads Creative Services</Link></li>
                      </ul>
                    </div>

                    {/* Column 2 */}
                    <div>
                      <p className="text-sm font-semibold text-white mb-3">Digital Marketing</p>
                      <ul className="space-y-2 text-[13px] text-neutral-300">
                        <li><Link href="/Pages/services/digital-marketing" className="hover:text-white">Digital Marketing Services</Link></li>
                      </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                      <p className="text-sm font-semibold text-white mb-3">Creative Tech</p>
                      <ul className="space-y-2 text-[13px] text-neutral-300">
                        <li><Link href="/Pages/services/3dmodeling" className="hover:text-white">3D Modeling</Link></li>
                        <li><Link href="/Pages/services/cgi" className="hover:text-white">CGI Development</Link></li>
                        <li><Link href="/Pages/services/billboard" className="hover:text-white">3D Billboards</Link></li>
                      </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                      <p className="text-sm font-semibold text-white mb-3">Software & Emerging</p>
                      <ul className="space-y-2 text-[13px] text-neutral-300">
                        <li><Link href="/Pages/services/customsoftware" className="hover:text-white">Custom Software</Link></li>
                        <li><Link href="/Pages/services/gamedevelopment" className="hover:text-white">Game Development</Link></li>
                        <li><Link href="/Pages/services/web3" className="hover:text-white">Web3 Development</Link></li>
                      </ul>
                    </div>

                    {/* Column 5 */}
                    <div>
                      <p className="text-sm font-semibold text-white mb-3">Immersive Tech</p>
                      <ul className="space-y-2 text-[13px] text-neutral-300">
                        <li><Link href="/Pages/services/ardevelopment" className="hover:text-white">AR Development</Link></li>
                        <li><Link href="/Pages/services/vrdevelopment" className="hover:text-white">VR Development</Link></li>
                        <li><Link href="/Pages/services/metaverse" className="hover:text-white">Metaverse Development</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* /Mega menu */}
              </li>

              <Link href="/Pages/casestudies">
                <li>Projects</li>
              </Link>

              <Link href="/#whyus">
                <li>Why Us</li>
              </Link>

              <Link href="/Pages/Blog">
                <li>Blog</li>
              </Link>

              <Link href="#portfolio">
                <li>Portfolio</li>
              </Link>

              <Link href="/#testimonials">
                <li>Testimonials</li>
              </Link>

              <Link href="/Pages/Aboutus">
                <li>About Us</li>
              </Link>

              <Link href="/Pages/Contactus">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbardesktop;
