"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation } from "framer-motion";

const Pagenation = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  // let [tabOrientation, setTabOrientation] = useState("horizontal");

  const [openTab, setOpenTab] = React.useState(1);

  const controls = useAnimation();
  const ref = useRef();

  const variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const onScreen = async () => {
    const element = ref.current;
    if (element) {
      const isVisible = await controls.start("visible");
      if (isVisible) {
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onScreen();
        }
      },
      { threshold: 0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 600);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2.2 },
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="flex flex-wrap lg:w-[80%] p-4 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse8.png')] bg-no-repeat bg-auto bg-[center_top_1rem] "
      >
        <div
          id="projects"
          className="py-20  mx-auto text-center justify-center  text-4xl lg:text-4xl font-bold text-white mb-6"
        >
          <motion.h3 {...textAnimation1}>
            Success Stories with Hey Buddy
          </motion.h3>
        </div>

        <div
          style={{
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
          role="tablist"
        >
          <div style={{ color: "white" }} className="px-12 mx-4 rounded-lg p-4">
            <a
              style={{ color: "white" }}
              className={
                " px-4 py-3  rounded block leading-normal " +
                (openTab === 1
                  ? "text-white bg" + "-600 bg-[#3F8AE2] bg-opacity-[50%]"
                  : "text" + "600 ")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(1);
              }}
              data-toggle="tab"
              href="#link1"
              role="tablist"
            >
              3D Development
            </a>
          </div>

          <div className="px-12 mx-4 rounded-lg p-4">
            <a
              className={
                "px-4 py-3  rounded block leading-normal" +
                (openTab === 2
                  ? "text-white bg-" + "-600 bg-[#3F8AE2] bg-opacity-[50%]"
                  : "text-" + "-600 ")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(2);
              }}
              data-toggle="tab"
              href="#link2"
              role="tablist"
            >
              Game Development
            </a>
          </div>

          <div className="px-12 mx-4 rounded-lg p-4">
            <a
              className={
                "px-4 py-3  rounded block leading-normal " +
                (openTab === 3
                  ? "text-white bg-" + "-600 bg-[#3F8AE2] bg-opacity-[50%]"
                  : "text-" + "-600 ")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(3);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              AR Development
            </a>
          </div>

          <div className="px-12 mx-4 rounded-lg p-4">
            <a
              className={
                "px-4 py-3  rounded block leading-normal " +
                (openTab === 4
                  ? "text-white bg-" + "-600 bg-[#3F8AE2] bg-opacity-[50%]"
                  : "text-" + "-600 ")
              }
              onClick={(e) => {
                e.preventDefault();
                setOpenTab(4);
              }}
              data-toggle="tab"
              href="#link3"
              role="tablist"
            >
              VR Development
            </a>
          </div>
        </div>

        <div className="relative flex flex-col min-w-0 break-words text-white w-full mb-6 shadow-lg rounded">
          <div className=" lg:px-4 py-5 flex-auto">
            <div className="tab-content tab-space">
              <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
                  <div className="border-2 rounded-3xl ">
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/A%20cubic%20shaped%20yellow%20duck%20in%20a%20Euclidean%20world.jpg"
                      width={700}
                      height={700}
                      alt="hey b"
                      className="rounded-3xl w-[100vh] h-[40vh] lg:w-[100vh] lg:h-[50vh] "
                    />
                  </div>
                  <div className="lg:pt-20">
                    <h1 className="py-4 font-semibold text-3xl">
                      3D Development
                    </h1>
                    <p>
                      See how our innovation, creativity, and the right
                      expertise rendered the best results for our clients.
                    </p>
                    {/* <p className="py-4">
                      Used Technology :{" "}
                      <span className="font-bold">
                        3D Max; C#; Unreal Engine 5
                      </span>
                    </p> */}
                    <Link href="/Pages/casestudies/realestate">
                      <button
                        style={{ marginTop: "2rem" }}
                        className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm"
                      >
                        Read Case Study <span aria-hidden="true">→</span>{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
                  <div className="border-2 rounded-3xl ">
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/homepage%20banner.jpg"
                      width={700}
                      height={700}
                      alt="hey b"
                      className="rounded-3xl w-[100vh] h-[40vh] lg:w-[100vh] lg:h-[50vh] "
                    />
                  </div>

                  <div className="lg:pt-20">
                    <h1 className="py-4 font-semibold text-3xl">
                      Game Development
                    </h1>
                    <p>
                      We helped our clients build a strong and loyal Games
                      community for long-term success.
                    </p>
                    {/* <p className="py-4">
                      Used Technology :{" "}
                      <span className="font-bold">
                        {" "}
                        Autodesk 3D; C++; Unity 2023.1.5
                      </span>
                    </p> */}
                    <Link href="/">
                      <button
                        style={{ marginTop: "2rem" }}
                        className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm"
                      >
                        Read Case Study <span aria-hidden="true">→</span>{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
                  <div className="border-2 rounded-3xl ">
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/home%20page%20banner.jpg"
                      width={700}
                      height={700}
                      alt="hey b"
                      className="rounded-3xl w-[100vh] h-[40vh] lg:w-[100vh] lg:h-[50vh] "
                    />
                  </div>
                  <div className="lg:pt-20">
                    <h1 className="py-4 font-semibold text-3xl">
                      AR Development
                    </h1>
                    <p>
                      Experience the amazing blend of real and virtual worlds
                      that creates an unforgettable user experience.
                    </p>
                    {/* <p className="py-4">
                      Used Technology :{" "}
                      <span className="font-bold">
                        3D MAX; C#; Unreal Engine 5
                      </span>
                    </p> */}
                    <Link href="/">
                      <button
                        style={{ marginTop: "2rem" }}
                        className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm"
                      >
                        Read Case Study <span aria-hidden="true">→</span>{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={openTab === 4 ? "block" : "hidden"} id="link3">
                <div className="grid sm:grid-1 gap-y-4 gap-x-16  md:mb-12 md:grid-cols-2 lg:grid-cols-2">
                  <div className="border-2 rounded-3xl ">
                    <Image
                      loading="lazy"
                      src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/meta%20vr%20glasses.jpg"
                      width={700}
                      height={700}
                      alt="hey b"
                      className="rounded-3xl w-[100vh] h-[40vh] lg:w-[100vh] lg:h-[50vh] "
                    />
                  </div>
                  <div className="lg:pt-20">
                    <h1 className="py-4 font-semibold text-3xl">
                      VR Development
                    </h1>
                    <p>
                      Our ultra-realistic VR experience helped clients enhance
                      their market share with innovative customer experience.
                    </p>
                    {/* <p className="py-4">
                      Used Technology :{" "}
                      <span className="font-bold">
                        3D MAX; C#; Unity, Three.Js
                      </span>
                    </p> */}
                    <Link href="/">
                      <button
                        style={{ marginTop: "2rem" }}
                        className="rounded-3xl bg-[#3F8AE2] px-6 py-4 text-sm font-semibold text-white shadow-sm"
                      >
                        Read Case Study <span aria-hidden="true">→</span>{" "}
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Pagenation;
