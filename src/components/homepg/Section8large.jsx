"use client";
import React from "react";
import { motion } from "framer-motion";

const Ourclients = () => {
  const list = [
    {
      id: "1",
      para: "Here is my opinion based on my experience, I have really enjoyed working with the game development team. The team is amicable, creative and understanding.",
      num: "01",
      name: "Zan Syed",
    },
    {
      id: "2",
      para: "Thank you very much! An amazing job done by buddies what I like to call the team that exceeds all expectations. I am glad that I trusted you guys.",
      num: "02",
      name: "Sarah",
    },
    {
      id: "3",
      para: "I loved working with Hey Buddy and the way my VR project was handled, I consider this company the best metaverse company in India.",
      num: "03",
      name: "Ankit",
    },
    {
      id: "4",
      para: "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
      num: "04",
      name: "Riyahi",
    },
    {
      id: "5",
      para: "Best game company in India, though I am from US but never felt that I had hired this company, it was like this is my in-house team.",
      num: "05",
      name: "Jeremy",
    },

    {
      id: "6",
      para: "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
      num: "06",
      name: "Bhaskar",
    },
  ];

  const textAnimation1 = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 1.2 },
  };

  return (
    <div
      className="pt-16  lg:pt-[100px] lg:px-[10%] mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse%208.png')] bg-no-repeat bg-cover bg-[center_top_-8rem] 2xl:bg-[center_top_-16rem]"
      id="testimonials"
    >
      <div className="py-2 lg:pb-[100px]  mx-auto text-center justify-center  text-2xl lg:text-4xl font-bold text-white mb-6 lg:mb-0">
        <h3>Listen from our clients</h3>
      </div>
      <motion.div
        class="p-2 lg:p-0  w-[90%] lg:w-[100%]  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 lg:mb-0"
        {...textAnimation1}
      >
        {list.map((section, index) => (
          <figure key={index} className="flex flex-col justify-between items-between   p-2 lg:p-4 border-gray-500 rounded-lg  h-full w-full bg-gray-900 hover:bg-red-600  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20" style={{backgroundColor: "#0000001A"
            ,border:" 2px solid #FFFFFF33"}}>

              <p style={{ color: "white",opacity:"70%" }} className="text-left">
                {section.para}{" "}
              </p>
              <div >

              <h3
                style={{ color: "white" }}
                className=" text-right text-xl font-semibold  text-gray-500 "
              >
                {section.num}
              </h3>
              <h3 className="text-right text-white text-xl">{section.name}</h3>
              </div>
           
          </figure>
        ))}
      </motion.div>
    </div>
  );
};

export default Ourclients;
