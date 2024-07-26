"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
// import  './grid1styles.css';
import { motion, useAnimation } from "framer-motion";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { AiOutlineFullscreenExit } from "react-icons/ai";

const Grid1 = () => {
  const [userCount, setUserCount] = useState(0);
  const [counterOn, setCounterOn] = useState(false);
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

  const Img1 = `https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.png`;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <div className="pt-[44px] mb-8 md:mb-12  lg:pt-[100px] lg:px-[10%] lg:mb-[150px]  bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse7.png')] bg-no-repeat  bg-cover lg:bg-contain bg-[center_top_0rem] ">
        <div
          className="absolute inset-x-0 top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-90"
          aria-hidden="true"
        >
          {/* <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" /> */}
        </div>

        <div className="  mx-auto text-center justify-center lg:w-[100%]  ">
          <div className="mx-auto text-center justify-center ">
            <div className="px-2  lg:pt-0  lg:px-24  h-full ">
              <div className=" lg:px-8">
                <h1  className="px-4  text-2xl lg:text-4xl font-bold text-white mb-6">
                  Metaverse is the Future: It's Now and it's Here, You Better
                  Gear Up!
                </h1>
                <p style={{fontWeight:"500"}} className="text-white  text-sm lg:leading-6   lg:text-xl lg:w-[100%]  mx-auto text-center justify-center">
                  Experts across the globe agree the Metaverse is the next
                  social space where users will spend a significant part of
                  their day: socializing, working, and entertaining themselves.
                  HeyBuddy is not just in the Metaverse, It is building the
                  Metaverse.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-[44px] lg:mt-[100px] px-2 lg:px-0">
            <ScrollTrigger
              onEnter={() => setCounterOn(true)}
              onExit={() => setCounterOn(false)}
            >
              <div class="  grid  mx-auto text-center justify-center rounded-3xl shadow-sm grid-cols-2 md:grid-cols-2">
                <figure className="flex items-center  py-6 lg:p-12 border-b border-gray-900 rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl md:border-r h-full w-full bg-gray-600 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                  <blockquote className=" flex items-center text-white ">
                    <div className="grid lg:px-12 sm:grid-1 gap-1 lg:gap-0 md:grid-cols-2  lg:grid-cols-2   ">
                      <div className="flex justify-center lg:justify-start lg:items-center">
                        <Image
                          loading="lazy"
                          src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.png"
                          width={300}
                          height={300}
                          alt="logo"
                          className="w-[7vh] h-[7vh] lg:w-[11vh] lg:h-[11vh] lg:float-left "
                        />
                      </div>
                      <div className="lg:text-left flex flex-col lg:gap-2 items-left justify-center   ">
                        <h3  className="lg:text-2xl  font-semibold  lg:font-bold  text-white">
                          {counterOn && (
                            <CountUp
                              duration={2}
                              className="counter"
                              end={13}
                            />
                          )}{" "}
                          Trillion
                        </h3>
                        <p className="text-xs md:text-base  font-thin lg:leading-5 lg:font-medium">
                          The metaverse will reach somewhere between $8 Trillion
                          to $13 Trillion by 2030.
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </figure>

                <figure class="flex items-center  py-6 lg:p-12 border-b border-gray-900 rounded-tr-3xl  h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                 <blockquote className=" flex items-center text-white">
                    <div className="lg:px-10 grid sm:grid-1 gap-1 lg:gap-0  md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="flex justify-center lg:justify-start lg:items-center">
                        <Image
                          loading="lazy"
                          src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img2.png"
                          width={300}
                          height={300}
                          className="w-[7vh] h-[7vh] lg:w-[11vh] lg:h-[11vh] lg:float-left  "
                        />
                      </div>

                      <div className="lg:text-left flex flex-col lg:gap-2 items-left justify-center   ">
                        <h3  className="lg:text-2xl  font-semibold  lg:font-bold  text-white">
                          {counterOn && (
                            <CountUp
                              duration={2}
                              className="counter"
                              end={280}
                            />
                          )}{" "}
                          Billion
                        </h3>
                        <p className="text-xs md:text-base  font-thin lg:leading-5 lg:font-medium">
                        By 2024, the metaverse market may reach $280 billion
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </figure>

                <figure class="flex   items-center justify-center py-6 px-2 lg:p-12 text-center  border-b border-gray-900 rounded-bl-3xl md:border-b-0 md:border-r   h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                  <blockquote className=" flex items-center text-white">
                    <div className="lg:px-10 grid sm:grid-1 gap-1 lg:gap-0 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="flex justify-center lg:justify-start lg:items-center">
                        <Image
                          loading="lazy"
                          src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img3.png"
                          width={300}
                          height={300}
                          className="w-[7vh] h-[7vh] md:w-[10vh] md:h-[10vh] lg:w-[11vh] lg:h-[11vh] lg:float-left  "
                        />
                      </div>
                      <div className="lg:text-left flex flex-col lg:gap-2 items-left justify-center   ">
                        <h3  className="lg:text-2xl  font-semibold  lg:font-bold  text-white">
                          {counterOn && (
                            <CountUp
                              duration={2}
                              className="counter"
                              end={43}
                            />
                          )}{" "}
                          %
                        </h3>
                        <p className="text-xs md:text-base  font-thin lg:leading-5 lg:font-medium">
                        Metaverse Market could at a phenomenal CAGR of 43% between 2021 to 2027
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </figure>
                

                <figure class="flex  lg:items-center justify-center py-6 px-2 lg:p-12   border-gray-900 rounded-br-3xl md:rounded-br-3xl h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
                  <blockquote className=" flex lg:items-center text-white">
                    <div className="lg:px-10 grid sm:grid-1  lg:gap-0 md:grid-cols-2 lg:grid-cols-2 ">
                    <div className="flex justify-center lg:justify-start lg:items-center ">
                        <Image
                          loading="lazy"
                          src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img4.png"
                          width={300}
                          height={300}
                          className="w-[7vh] h-[7vh] lg:w-[11vh] lg:h-[11vh] lg:float-left  "
                        />
                      </div>

                      <div className="lg:text-left flex flex-col lg:gap-2 items-left justify-center   ">
                        <h3  className="lg:text-2xl  font-semibold  lg:font-bold  text-white">
                          {counterOn && (
                            <CountUp
                              duration={2}
                              className="counter"
                              end={5}
                            />
                          )}{" "}
                          Billion
                        </h3>
                        <p className="text-xs md:text-base  font-thin lg:leading-5 lg:font-medium">
                        By 2030, Metaverse’s unique users may reach up to 5 billion!
                        </p>
                      </div>
                    </div>
                  </blockquote>
                </figure>
              </div>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Grid1;
