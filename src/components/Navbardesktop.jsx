"use client";
import React, { useEffect, useState, useRef } from "react";

import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";

const Navbardesktop = () => {
  const [backgroundwhite, setBackgroundWhite] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

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
    <div className="fixed top-0 transition-all duration-800 w-full z-50">
      <nav className="relative px-2 py-0">
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
              {/* <p className="text-white text-[9px] lg:text-[11px] font-light mt-1">Beyond Reality</p> */}
            </Link>

            <ul className=" flex-1 flex justify-end items-center text-white  gap-4 max-lg:hidden ">
              <li 
                className="relative lg:text-[16px] px-2 sm:text-sm border-transparent hover:border-black cursor-pointer"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <div className="flex items-center">
                  Services
                  <i className="fa-solid fa-chevron-down fa-2xs pt-3 ml-1" />
                </div>
                {/* Mega menu */}
                {isServicesOpen && (
                  <div 
                    className="fixed left-0 right-0 top-[73px] w-full rounded-b-xl border-b border-x border-white/10 bg-[#121212]/95 backdrop-blur-xl shadow-2xl z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {/* Hover bridge - invisible area above dropdown to prevent gap */}
                    <div className="absolute -top-8 left-0 right-0 h-8" />
                    <div className="w-[92%] max-w-[1400px] mx-auto flex gap-8 px-8 py-8">
                      {/* Preview card - Left section */}
                      <div className="w-[32%] min-w-[280px] bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5">
                        <div className="aspect-video w-full bg-[url('/Images/blog/blogImg1.png')] bg-cover bg-center" />
                        <div className="p-5">
                          <p className="text-sm text-white leading-relaxed mb-4">What is CGI: Definition, Development & Common Examples</p>
                          <Link 
                            href="/Pages/Blog" 
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#2563EB] text-white text-sm font-medium hover:bg-[#1d4ed8] transition-colors"
                          >
                            Check Our Blogs
                            <i className="fa-solid fa-arrow-right text-xs" />
                          </Link>
                        </div>
                      </div>

                      {/* Service columns - Right section */}
                      <div className="flex-1 grid grid-cols-5 gap-8">
                        {/* Column 1: Artificial Intelligence */}
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white mb-5 leading-tight">Artificial Intelligence</p>
                          <ul className="space-y-3">
                            <li>
                              <Link 
                                href="/Pages/services/aidevelopment" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                AI Development Services
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/Pages/services/aiads" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                AI Ads Creative Services
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Column 2: Digital Marketing & Experience Design */}
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white mb-5 leading-tight">Digital Marketing & Experience Design</p>
                          <ul className="space-y-3">
                            <li>
                              <Link 
                                href="/Pages/services/digital-marketing" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                Digital Marketing Services
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Column 3: Creative Technologies */}
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white mb-5 leading-tight">Creative Technologies</p>
                          <ul className="space-y-3">
                            <li>
                              <Link 
                                href="/Pages/services/3dmodeling" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                3D Modeling
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/Pages/services/cgi" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                3D Animation
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/Pages/services/cgi" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                CGI Development
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/Pages/services/billboard" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                3D Billboards
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Column 4: Software & Emerging Tech Development */}
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white mb-5 leading-tight">Software & Emerging Tech Development</p>
                          <ul className="space-y-3">
                            <li>
                              <Link 
                                href="/Pages/services/customsoftware" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                Custom Software
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/Pages/services/gamedevelopment" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                Game Development
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/Pages/services/web3" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                Web3 Development
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Column 5: Immersive Technologies */}
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-white mb-5 leading-tight">Immersive Technologies</p>
                          <ul className="space-y-3">
                            <li>
                              <Link 
                                href="/Pages/services/ardevelopment" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                AR Development
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/Pages/services/vrdevelopment" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                VR Development
                              </Link>
                            </li>
                            <li>
                              <Link 
                                href="/Pages/services/metaverse" 
                                className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                              >
                                Metaverse Development
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
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
