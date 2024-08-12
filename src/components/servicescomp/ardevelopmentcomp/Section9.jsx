"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Bottomclient = () => {
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
  const clientcardData = [
    {
      id: 1,
      content:
        "Hey Buddy transformed our vision into a reality! Their Augmented Reality services exceeded our expectations. Their innovative solutions went a long way to set our project apart in the market. We highly recommend Hey Buddy for their commitment to deliver.",
      // position: "Head of VP at Disney Hotstar",
      name: "John D.",
    },
    {
      id: 2,
      name: "Jane S",
      content:
        "Working with Hey Buddy was real smooth! We needed AR functionalities that seamlessly integrate into our ongoing business endeavor, and they delivered flawlessly. They ensured a smooth transition with improved overall functionality. Hey Buddy are really the experts we needed and now, they are our go-to AR development company.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: "Michael K. ",
      content:
        "The thing we really liked about Hey Buddy is that they truly understood our business requirements, which was unique in itself. Their AR development services provided the tailored solutions we wanted so that they perfectly aligned with our goals. We are really glad with the results. After all, their collaborative approach and attention to detail really work and them a reliable partner for customized AR solutions.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 4,
      name: "Sarah T. ",
      content:
        "Our users are thrilled with the amazing immersive experience offered by our AR application and so are we. All thanks to Hey Buddy. The user-centric design approach ensured an intuitive and engaging experience that really resonated with the audience. They successfully met our project requirements and exceeded our expectations with their efficient project handling. Exceptional work and highly recommended!",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 5,
      name: "Elise W.",
      content:
        "Hey Buddy's commitment to deadlines is commendable! They delivered our AR project on time and offered unwavering post-launch support. Basically, they were there whenever we needed them. And still, their team continues to address our needs promptly, showcasing their dedication to client success. Hey, Buddy is a reliable partner for timely and ongoing AR development support.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 6,
      name: "Bhaskar",
      content:
        "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
      // position: "Head of VP at Disney Hotstar",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="pt-[44px] lg:pt-[100px] mb-8 md:mb-12 lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(7).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <h1 className="pb-[25px] lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl" style={{color:"white"}}>
      Here’s What Our Clients Have to Say about our AR Development Services
      </h1>
      <p className="pb-[44px] lg:pb-[100px] text-base font-medium lg:w-[90%] text-center mx-auto" style={{color:"white"}}>
        
      </p>
      <div className="    grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1  md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4">
        {clientcardData.map((section, index) => (
          <figure key={section.id} style={{borderRadius:"24px",background: "#0000001A"
            ,border: "2px solid #FFFFFF33"}} class="flex flex-col justify-between  p-4 lg:p-6 border-2  border-gray-500 rounded-lg  h-full w-full bg-gray-900  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 hover:bg-yellow-600 hover:bg-opacity-30">
            <blockquote class=" text-gray-400 flex flex-col justify-between h-full">
              <p  className="text-left text-base font-medium text-white">
                {section.content}
              </p>
              <div>
              <h3 className="pt-4 text-right font-bold text-white text-xl self-end">
                {section.name}
              </h3>
              {/* <h3
                style={{ color: "white" }}
                class="pt-2 text-right text-xl   text-gray-500 "
              >
                {section.position}
              </h3> */}
              </div>
              {/* <h3 className="text-right text-white text-xl">{section.name}</h3> */}
            </blockquote>
          </figure>
        ))}
      </div>
      </div>
    </motion.div>
  );
};

export default Bottomclient;
