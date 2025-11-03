"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
// import './Timelinecomp.css'
import "../../../styles/Timelinecomp.css";
import { motion, useAnimation } from "framer-motion";

const Timelinecomp = () => {
  const controls = useAnimation();
  const ref = useRef();

  const textAnimation1 = {
    hidden: { opacity: 0, y: "20%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
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
  const events = [
    {
      status: "Ordered",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Processing",
      date: "15/10/2020 14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
    },
    {
      status: "Shipped",
      date: "15/10/2020 16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Delivered",
      date: "16/10/2020 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
    >
      <div className="py-8 text-white">
        <h1 className="py-4 lg:w-[80%] text-2xl lg:text-4xl">
          Hey Buddy: Metaverse Development Process
        </h1>
        <p className=" text-base md:text-lg lg:text-2xl">
          Our years of commitment to deliver perfection have resulted in a
          streamlined and evolved Metaverse Development Process.
        </p>
      </div>

      <div className="pb-24">
        <div className="grid sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
          <div className="overflow-y-scroll scrollbar-hide md:scrollbar-default h-[60vh] w-full  ">
            <div className="">
              <div className="main ">
                {/* <h3 class="head">Responsive Timeline</h3> */}
                <div class="container text-white">
                  <ul>
                    <li>
                      <h3 className="font-bold text-2xl  ">Ideation Phase</h3>

                      <p>
                        Our experts collaborate closely with your team to
                        understand your vision, goals, and audience. Then
                        through power-packed brainstorming sessions, we craft a
                        comprehensive blueprint to meet your expectations.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Design & Prototyping
                      </h3>

                      <p>
                        Our experienced designers create immersive environments
                        and interactive elements, bringing your concept to life.
                        With rapid prototyping, we ensure your Metaverse project
                        meets your standards.
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Development & Implementation
                      </h3>
                      <p>
                        Our seasoned developers utilize cutting-edge
                        technologies and build a robust foundation for your
                        Metaverse project. By deploying agile methodologies, we
                        infuse flexibility and adaptability throughout the
                        development process
                      </p>
                    </li>
                    <li>
                      <h3 className="font-bold text-2xl ">
                        Testing & Refinement
                      </h3>
                      <p>
                        We execute rigorous testing to ensure a glitch-free
                        Metaverse experience for your audience. We invite your
                        feedback and fine-tune every aspect to refine the
                        experience for high-class performance and impressive
                        user engagement.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">Launch & Beyond</h3>

                      <p>
                        Lastly, we guide you through a successful launch and we
                        continue to support you in the post-launch phase. Hence,
                        not only do we ensure seamless integration and
                        scalability but also time-bound troubleshooting.
                      </p>
                    </li>

                    <li>
                      <h3 className="font-bold text-2xl ">Timely Delivery</h3>

                      <p>
                        With our unwavering commitment, we deliver your 3D
                        assets with high regard to timelines. We ensure this by
                        utilizing our reliable development process and high
                        professionalism, the two most essential ingredients for
                        your project's success.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[50vh] w-full  px-16">
            <div
              style={{
                width: "100%",
                height: 0,
                paddingBottom: "100%",
                position: "relative",
              }}
            >
              <Image
                loading="lazy"
                width={700}
                height={700}
                src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/wheel-unscreen.gif"
                className="lg:mr-6 h-[40vh] w-[52rem] lg:h-[60vh] lg:w-[92rem] "
                alt="Hey B"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Timelinecomp;
