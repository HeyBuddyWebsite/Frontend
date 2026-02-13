"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

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
    <>
      {/* Backdrop blur overlay when dropdown is open */}
      <AnimatePresence>
        {isServicesOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            onClick={() => setIsServicesOpen(false)}
          />
        )}
      </AnimatePresence>

      <div
        className="fixed top-0 transition-all duration-800 z-50"
        style={{
          width: '100vw',
          left: 0,
          right: 0,
          marginLeft: 0,
          marginRight: 0,
          position: 'fixed',
          top: 0
        }}
      >
        <nav className="relative py-0 w-full">
          <div
            className={classNames(
              "fixed justify-center items-center border-white transition-all duration-800 py-4 z-50",
              {
                "bg-[#121212]/95 backdrop-blur-2xl z-50":
                  isServicesOpen,
                "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-70 z-50":
                  backgroundwhite && !isServicesOpen,
              }
            )}
            style={{
              width: '100vw',
              left: 0,
              right: 0,
              marginLeft: 0,
              marginRight: 0,
              maxWidth: 'none'
            }}
          >
            <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 flex items-center">
              <Link href="/" className="flex flex-col items-start">
                <Image
                  loading="lazy"
                  width={300}
                  height={300}
                  src="/Images/logo.png"
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
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed left-0 right-0 w-full border-b border-x border-white/10 bg-[#121212]/95 backdrop-blur-2xl shadow-2xl z-50"
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        onClick={() => setIsServicesOpen(false)}
                        style={{
                          top: '72px',
                          marginTop: '-1px',
                          borderRadius: '0 0 12px 12px',
                          width: '100vw',
                          left: 0,
                          right: 0
                        }}
                      >
                        {/* Hover bridge - invisible area above dropdown to prevent gap */}
                        <div className="absolute -top-8 left-0 right-0 h-8" />
                        <div className="w-full max-w-[1920px] mx-auto flex gap-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24 py-8">
                          {/* Preview card - Left section */}
                          <div className="w-[32%] min-w-[280px] bg-[#1a1a1a] rounded-lg overflow-hidden border border-white/5">
                            <div className="aspect-video w-full bg-[url('/Images/blog/blogImg1.png')] bg-cover bg-center" />
                            <div className="p-5">
                              <p className="text-sm text-white leading-relaxed mb-4">What is CGI: Definition, Development & Common Examples</p>
                              <Link
                                href="/blog"
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
                                    href="/services/ai-development"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    AI Development Services
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/aiads"
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
                                    href="/services/digital-marketing"
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
                                    href="/services/3dmodeling"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    3D Modeling
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/cgi"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    3D Animation
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/cgi"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    CGI Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/billboard"
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
                                    href="/services/customsoftware"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    Custom Software
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/gamedevelopment"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    Game Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/web3"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    Web3 Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/robotics-lab"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    Robotics Lab
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
                                    href="/services/ardevelopment"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    AR Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/vrdevelopment"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    VR Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/metaverse"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    Metaverse Development
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/services/vr-ar-lab"
                                    className="block text-[13px] text-neutral-300 hover:text-white hover:bg-blue-500/20 hover:rounded-md px-3 py-2 transition-all leading-relaxed"
                                  >
                                    VR/AR Lab Setup
                                  </Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  {/* /Mega menu */}
                </li>

                <Link href="/casestudies">
                  <li>Projects</li>
                </Link>

                <Link href="/#whyus">
                  <li>Why Us</li>
                </Link>

                <Link href="/blog">
                  <li>Blog</li>
                </Link>

                <Link href="https://portfolio.heybuddy.co.in/" target="_blank" rel="noopener noreferrer">
                  <li>Portfolio</li>
                </Link>

                <Link href="/#testimonials">
                  <li>Testimonials</li>
                </Link>

                <Link href="/aboutus">
                  <li>About Us</li>
                </Link>

                <Link href="/contactus">
                  <li>Contact Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbardesktop;
