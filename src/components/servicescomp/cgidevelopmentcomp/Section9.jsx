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
        "Hey Buddy's CGI development services delivered exactly what we wanted. The attention to detail made the CGI assets look unbelievably real as if they were really there in the real world. Moreover, the seamless collaboration with which they worked throughout the project was really commendable. They understood our requirements so well that they easily delivered visuals that truly brought our product to life. Their expertise is unmatched and their commitment is commendable. Highly recommended.         ",
      // position: "Head of VP at Disney Hotstar",
      name: "John A.",
    },
    {
      id: 2,
      name: "Emily T.",
      content:
        "Working with Hey Buddy was a game-changer. The CGI content brought amazing uniqueness to our marketing campaigns. The advertisement showcased our large-sized product placed in busy public locations with renowned ancient architecture. The CGI content they created was visually stunning. It was as if our product was actually there. Moreover, it perfectly aligned with our brand image. Their team's creativity and professionalism are applaudable; we recommend Hey Buddy.",
      // position: "Head of VP at Disney Hotstar",
    },
    {
      id: 3,
      name: "Michael R.",
      content:
        "Hey Buddy transformed our architectural visualization projects. Their CGI development team took a serious interest in our project and understood it thoroughly. Once they captured the essence of our designs, they perfectly developed 3D CGI content with an added level of realism. This was really impressive for us as well as our prospective clients. Their attention to architectural details and commitment to delivering on time make them the right CGI design agency to partner with.        ",
      // position: "Head of VP at Disney Hotstar",
    },
    // {
    //   id: 4,
    //   name: "Riyahi",
    //   content:
    //     "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
    //   // position: "Head of VP at Disney Hotstar",
    // },
    // {
    //   id: 5,
    //   name: "Jeremy",
    //   content:
    //     "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
    //   // position: "Head of VP at Disney Hotstar",
    // },
    // {
    //   id: 6,
    //   name: "Bhaskar",
    //   content:
    //     "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
    //   // position: "Head of VP at Disney Hotstar",
    // },
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
      What Clients Say About Hey Buddy as CGI Development Partner

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
