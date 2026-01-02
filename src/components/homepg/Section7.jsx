"use client";
import React,{useState} from "react";
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
    <div className="bg-black relative z-10" style={{ paddingTop: "clamp(40px, 5vw, 80px)" }}>
      <div
        className="bg-no-repeat bg-contain bg-center min-h-[839px]"
        style={{
          backgroundImage:
            "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763457996300_v7h13t.png?x-id=PutObject')",
          backgroundSize: "contain",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
          paddingTop: "clamp(60px, 6vw, 120px)",
        }}
      >
      <div className="pt-0" id="aboutus">
        <div className="mx-auto text-center justify-center">
          <div className="h-full" style={{ paddingLeft: "0", paddingRight: "0" }}>
            <div style={{ paddingLeft: "0", paddingRight: "0", paddingTop: "0" }}>
              <motion.h2
                className="text-3xl lg:text-4xl font-bold text-white mb-6"
                {...textAnimation1}
                style={{ width: "fit-content", maxWidth: "302px", marginLeft: "auto", marginRight: "auto" }}
              >
                About Hey Buddy
              </motion.h2>
              <motion.p
                className="text-white text-sm lg:text-base mx-auto text-center justify-center leading-relaxed"
                {...textAnimation1}
                style={{ width: "clamp(90%, 71.56vw, 1374px)", marginLeft: "auto", marginRight: "auto", marginTop: "18px", maxWidth: "1374px" }}
              >
                Hey Buddy is a leading AI-native company offering creative tech services in India and US. Our wide gamut of clients includes Fortune 500-listers to budding start-ups with HeyBuddy successfully serving their business needs. With AI at the core and expert humans at our side, we ensure faster delivery and higher quality. Moreover, by combining the highly reusable experience of our team from across industries and scales, we bring you the best knowledge and practices to accelerate your digital transformation.
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
              className="grid mb-8 mx-auto text-center justify-center rounded-xl shadow-sm md:mb-12 grid-cols-2 md:grid-cols-2"
              {...textAnimation1}
              style={{ width: "clamp(90%, 55vw, 1056px)", marginLeft: "auto", marginRight: "auto", marginTop: "clamp(50px, 5.2vw, 100px)", padding: "0", maxWidth: "1056px" }}
            >
              <figure className="flex flex-col  p-8  border-b border-gray-900 rounded-tl-3xl md:rounded-t-none md:rounded-tl-3xl md:border-r h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote className=" mb-4 lg:py-8 lg:mb-8 :text-gray-400">
                  <span className="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                    {counterOn && (
                      <CountUp duration={2} className="counter" end={400} />
                    )}
                    +
                  </span>
                  <p style={{ color: "white" }} className="text-sm">
                    Projects
                  </p>
                </blockquote>
              </figure>

              <figure className="flex flex-col p-8  border-b border-gray-900 rounded-tr-3xl    h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote className="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                  <span className="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                    {counterOn && (
                      <CountUp duration={2} className="counter" end={150} />
                    )}
                    +
                  </span>
                  <p style={{ color: "white" }} className="text-sm">
                    Clients
                  </p>
                </blockquote>
              </figure>

              <figure className="flex flex-col items-center justify-center p-8 text-center  border-b border-gray-900 rounded-bl-3xl md:border-b-0 md:border-r   h-full w-full bg-gray-500  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40">
                <blockquote className="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                  <span className="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                    {counterOn && (
                      <CountUp duration={2} className="counter" end={250} />
                    )}
                    +
                  </span>
                  <p style={{ color: "white" }} className="text-sm">
                    Experts
                  </p>
                </blockquote>
              </figure>

              <figure className="flex flex-col mx-auto items-center justify-center p-8 text-center  border-gray-900 rounded-br-3xl md:rounded-br-3xl h-full w-full bg-gray-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30">
                <blockquote className="max-w-2xl lg:py-8 mx-auto mb-4 text-gray-500 lg:mb-8 :text-gray-400">
                  <span className="text-xl lg:text-5xl font-semibold text-gray-900 text-white">
                    {counterOn && (
                      <CountUp duration={2} className="counter" end={97.68} />
                    )}
                    %
                  </span>
                  <p style={{ color: "white" }} className="text-sm">
                    Retention Rate
                  </p>
                </blockquote>
              </figure>
            </motion.div>
          </div>
        </ScrollTrigger>
      </div>
      </div>
    </div>
  );
};

export default Grid2;
