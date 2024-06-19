"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Grid = () => {
  const controls = useAnimation();
  const ref = useRef();

  const variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 2, ease: "easeOut" } },
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

  const [isSmallScreen, setIsSmallScreen] = useState(false);

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

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontWeight: "bold",
      }}
      className=" "
      id="whyus"
    >
      {isSmallScreen ? (
        <div>
          <div class="p-2 lg:p-6 w-[90%] lg:w-[80%] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/bg%20(1).png')] bg-no-repeat bg-cover bg-[center_top_1rem] grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-4 gap-y-4 gap-x-4">
            <figure
              style={{ display: "flex", justifyContent: "center" }}
              class="lg:col-span-2 py-6 lg:row-span-2 flex flex-col lg:p-16 border-2 border-gray-500 rounded-3xl h-full w-full bg-gray-600 bg-clip-padding  bg-opacity-0 justify-center items-center"
            >
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3 class="lg:text-6xl  font-semibold  text-white">
                  Why <br /> Choose Us?
                </h3>
              </blockquote>
            </figure>

            <figure class="flex flex-col  p-2 lg:p-4  border-b border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0">
              <blockquote class="   :text-gray-400">
                <h3
                  style={{ color: "white" }}
                  class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 text-gray-500 "
                >
                  01
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Expertise
                </p>
                <p style={{ color: "white" }} className="text-left text-sm">
                  Hey Buddy is home to the rarest-of-the-rare industry talents
                  capable of delivering Metaverse and Game development solutions
                  inch-perfectly tailored to your business requirements.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3
                  style={{ color: "white" }}
                  class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 text-gray-500 "
                >
                  02
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Results
                </p>
                <p style={{ color: "white" }} className="text-left text-sm">
                  All our efforts are focused solely on successfully achieving
                  your business and project objectives. And we plan, prepare,
                  and perform to get the results that matter.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0">
              <blockquote class="max-w-2xl mx-auto  text-gray-500 lg:mb-8 :text-gray-400">
                <h3
                  style={{ color: "white" }}
                  class="text-left text-4xl lg:text-6xl font-semibold text-gray-900 text-gray-500 "
                >
                  03
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Innovation
                </p>
                <p style={{ color: "white" }} className="text-left text-sm">
                  Hey, Buddy stands tall amongst the first movers in the
                  technological space. We are known to deploy the latest
                  technology to innovate solutions that get you a competitive
                  edge.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3
                  style={{ color: "white" }}
                  class="text-left text-4xl lg:text-6xl font-semibold  text-white "
                >
                  04
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Trust
                </p>
                <p style={{ color: "white" }} className="text-left text-sm">
                  We are your trusted partners supplying our unwavering support
                  for all your challenges and limitations. We are professionals
                  with a heart and serving your needs is our utmost priority.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      ) : (
        <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/bg%20(1).png')] bg-no-repeat bg-cover">
          <div class="p-2 lg:p-6 w-[90%] lg:w-[80%]  grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-4 gap-y-4 gap-x-4">
            <figure class="flex flex-col  p-2 lg:p-4  border-b border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0">
              <blockquote class="   :text-gray-400">
                <h3
                  style={{ color: "white" }}
                  class="text-left text-4xl lg:text-6xl font-semibold text-white "
                >
                  01
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Expertise
                </p>
                <p style={{ color: "white" }} className="text-left text-sm">
                  Hey Buddy is home to the rarest-of-the-rare industry talents
                  capable of delivering Metaverse and Game development solutions
                  inch-perfectly tailored to your business requirements.
                </p>
              </blockquote>
            </figure>

            <figure
              style={{ display: "flex", justifyContent: "center" }}
              class="lg:col-span-2 lg:row-span-2 flex flex-col border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0 justify-centre"
            >
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3 class="lg:text-6xl font-semibold  text-white">
                  Why <br /> Choose Us?
                </h3>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0">
              <blockquote class="max-w-2xl mx-auto  text-gray-500 lg:mb-8 :text-gray-400">
                <h3
                  style={{ color: "white" }}
                  class="text-left text-4xl lg:text-6xl font-semibold text-white "
                >
                  03
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Innovation
                </p>
                <p style={{ color: "white" }} className="text-left text-sm">
                  Hey, Buddy stands tall amongst the first movers in the
                  technological space. We are known to deploy the latest
                  technology to innovate solutions that get you a competitive
                  edge.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl  h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3
                  style={{ color: "white" }}
                  class="text-left text-4xl lg:text-6xl font-semibold text-white "
                >
                  02
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Results
                </p>
                <p style={{ color: "white" }} className="text-left text-sm">
                  All our efforts are focused solely on successfully achieving
                  your business and project objectives. And we plan, prepare,
                  and perform to get the results that matter.
                </p>
              </blockquote>
            </figure>

            <figure class="flex flex-col items-center justify-center p-2 lg:p-4 text-center border-2 border-gray-500 rounded-3xl   h-full w-full bg-gray-600  bg-clip-padding  bg-opacity-0">
              <blockquote class="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                <h3
                  style={{ color: "white" }}
                  class="text-left text-4xl lg:text-6xl font-semibold text-white "
                >
                  04
                </h3>
                <p className="text-left font-bold text-white py-2 text-xl">
                  Trust
                </p>
                <p style={{ color: "white" }} className="text-left text-sm">
                  We are your trusted partners supplying our unwavering support
                  for all your challenges and limitations. We are professionals
                  with a heart and serving your needs is our utmost priority.
                </p>
              </blockquote>
            </figure>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Grid;
