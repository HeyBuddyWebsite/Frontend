"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";

import ScrollTrigger from "react-scroll-trigger";

const Grid2 = () => {
  const [counterOn, setCounterOn] = useState(false);
  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div className="bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse7.png')] bg-no-repeat bg-cover lg:bg-contain bg-[center_top_1rem]">
      {/* <div
        className=" absolute inset-x-0 top-90 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-90"
        aria-hidden="true"
      
        
      </div> */}

      <div className="pt-[44px] mb-8 md:mb-12 lg:pt-[100px]  lg:mb-[150px]  " id="aboutus">
        <div className="mx-auto text-center justify-center lg:px-[8%] ">
          <div className="p-4 lg:p-0  h-full ">
            <div className="lg:px-0 lg:pt-0">
              <motion.h1
                className="px-4 text-2xl lg:text-4xl font-bold text-white mb-6"
                {...textAnimation1}
               
              >
                About Us
              </motion.h1>
              <motion.p
                className="text-white  lg:w-[80%] lg:leading-6 text-base lg:text-xl  mx-auto text-center justify-center"
                {...textAnimation1}
                style={{fontWeight:"500"}}
              >
                Hey Buddy is a leading name in Metaverse and Game Development in
                India and US. With industry-leading experts on our side and vast
                experience of working on projects of different scales, we are
                ready to develop a business solution that lets you achieve your
                business goals with ease. Our wide gamut of clients includes
                Fortune 500-listers to budding start-ups with HeyBuddy
                successfully serving their business needs.
              </motion.p>
            </div>
          </div>
        </div>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
        >
          <div>
            {/* <div
            className="absolute inset-x-0 top-[calc(100%-0rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-0rem)]"
            aria-hidden="true"
          >
           
          </div> */}

            <motion.div
              class="p-4 lg:p-0 lg:pt-[100px] lg:w-[100%] lg:px-[20%]  grid mb-8  mx-auto text-center justify-center rounded-xl shadow-sm  md:mb-12 lg:mb-0 grid-cols-2 md:grid-cols-2"
              {...textAnimation1}
            >
              <figure class="flex flex-col  p-8  items-center justify-center  border-b border-gray-900 rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl md:border-r h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote class="  mb-0 lg:py-8 lg:mb-0 :text-gray-400">
                  <h3 class="text-xl lg:text-5xl font-bold text-gray-900 text-white">
                    {counterOn && (
                      <CountUp duration={2} className="counter" end={400} />
                    )}
                    +
                  </h3>
                  <p style={{ color: "white" }} className="text-sm mt-2 font-medium">
                    Projects
                  </p>
                </blockquote>
              </figure>

              <figure class="flex flex-col p-8 items-center justify-center  border-b border-gray-900 rounded-tr-3xl    h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote class="max-w-2xl lg:py-8 mx-auto mb-0 text-gray-500 lg:mb-0 :text-gray-400">
                  <h3 class="text-xl lg:text-5xl font-bold text-gray-900 text-white">
                    {counterOn && (
                      <CountUp duration={2} className="counter" end={150} />
                    )}
                    +
                  </h3>
                  <p style={{ color: "white" }} className="text-sm mt-2 font-medium">
                    Clients
                  </p>
                </blockquote>
              </figure>

              <figure class="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-900 rounded-bl-3xl md:border-b-0 md:border-r   h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote class="max-w-2xl lg:py-8 mx-auto mb-0 text-gray-500 lg:mb-0 :text-gray-400">
                  <h3 class="text-xl lg:text-5xl font-bold text-gray-900 text-white">
                    {counterOn && (
                      <CountUp duration={2} className="counter" end={250} />
                    )}
                    +
                  </h3>
                  <p style={{ color: "white" }} className="text-sm mt-2 font-medium">
                    Experts
                  </p>
                </blockquote>
              </figure>

              <figure class="flex flex-col mx-auto items-center justify-center p-8 text-center  border-gray-900 rounded-br-3xl md:rounded-br-3xl h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
                <blockquote class="max-w-2xl lg:py-8 mx-auto mb-0 text-gray-500 lg:mb-0 :text-gray-400">
                  <h3 class="text-xl lg:text-5xl font-bold text-gray-900 text-white">
                    {counterOn && (
                      <CountUp duration={2} className="counter" end={97.68} />
                    )}
                    %
                  </h3>
                  <p style={{ color: "white" }} className="text-sm mt-2 font-medium">
                    Retention Rate
                  </p>
                </blockquote>
              </figure>
            </motion.div>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Grid2;
