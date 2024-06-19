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
          <div className="w-[80%] m-auto">
            <Link href="/">
              <Image
                loading="lazy"
                width={300}
                height={300}
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/logo.png"
                className=" lg:ml-0 h-6 w-[6rem] lg:h-10 lg:w-[12rem] cursor-pointer float-left"
                alt="Hey Buddy"
              />
            </Link>

            <ul className=" flex-1 flex justify-end items-center text-white  gap-4 max-lg:hidden ">
              <li className="flex relative  group lg:text-[16px] px-2 sm:text-sm border-transparent hover:border-black">
                {/* <Link href=""  className=""> */}
                Services
                {/* </Link> */}
                <i className="fa-solid fa-chevron-down fa-2xs pt-3" />
                {/* Submenu starts */}
                <ul className=" flex flex-col items-left absolute bg-[#030914] rounded-lg p-3 w-[250px] top-6 transform scale-0 group-hover:scale-100 transition duration-150 ease-in-out origin-top shadow-2xl bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-90 ">
                  <Link href="/Pages/services/3dmodeling" className="w-full ">
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg  hover:font-bold leading-8">
                      3D Modeling
                    </li>
                  </Link>

                  <Link
                    href="/Pages/services/ardevelopment"
                    className="w-full "
                  >
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      AR Development
                    </li>
                  </Link>

                  <Link
                    href="/Pages/services/customsoftware"
                    className="w-full "
                  >
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      Custom Software
                    </li>
                  </Link>

                  <Link
                    href="/Pages/services/gamedevelopment"
                    className="w-full "
                  >
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      Game Development
                    </li>
                  </Link>

                  <Link href="/Pages/services/vrdevelopment" className="w-full">
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      VR Development
                    </li>
                  </Link>
                  <Link href="/Pages/services/billboard" className="w-full">
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      3D BillBoards
                    </li>
                  </Link>

                  <Link href="/Pages/services/cgi" className="w-full">
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      CGI Development
                    </li>
                  </Link>
                  <Link href="/Pages/services/web3" className="w-full">
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      Web3 Development
                    </li>
                  </Link>
                  <Link href="/Pages/services/metaverse" className="w-full">
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      Metaverse Development
                    </li>
                  </Link>
                  <Link href="/Pages/services/aidevelopment" className="w-full">
                    <li className="text-sm px-4 text-[white] hover:bg-[#1a1ae669] hover:text-[white]-focus hover:rounded-lg hover:font-bold leading-8">
                      AI Development
                    </li>
                  </Link>
                </ul>
                {/* Submenu ends */}
              </li>

              <Link href="/Pages/casestudies">
                <li>Projects</li>
              </Link>

              <Link href="/#whyus">
                <li>Why Us</li>
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

              <Link href="/Pages/Blog">Blog</Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbardesktop;
