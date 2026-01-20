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
      className="bg-no-repeat bg-auto bg-center min-h-screen"
      id="testimonials"
      style={{
        backgroundImage:
          "url('https://heybuddy-images.s3.ap-south-1.amazonaws.com/blogs/covers/1763458037132_139ti0.png?x-id=PutObject')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "top center",
        width: "100%",
        paddingTop: "clamp(60px, 6vw, 100px)",
        paddingBottom: "clamp(60px, 6vw, 100px)",
      }}
    >
      <div className="py-2 lg:py-8  mx-auto text-center justify-center  text-xl lg:text-2xl font-bold text-white mb-6">
        <h3>Listen from our clients</h3>
      </div>
      <motion.div
        className="p-2 lg:p-12  w-[90%] lg:w-[80%]  grid mx-auto text-center justify-center rounded-xl shadow-sm sm:grid-1 md:mb-12 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4"
        {...textAnimation1}
      >
        {list.map((section, index) => (
          <figure key={section.id} className="flex flex-col  p-2 lg:p-3 border-gray-500 rounded-lg  w-full bg-gray-900 hover:bg-yellow-600 hover:bg-opacity-30 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20" style={{ maxHeight: '200px', minHeight: '180px' }}>
            <blockquote className="  :text-gray-400">
              <p style={{ color: "white", fontSize: 'clamp(12px, 1.2vw, 14px)' }} className="text-left">
                {section.para}{" "}
              </p>

              <h3
                style={{ color: "white" }}
                className="pt-2 text-right text-base font-semibold  text-gray-500 "
              >
                {section.num}
              </h3>
              <h3 className="text-right text-white text-base">{section.name}</h3>
            </blockquote>
          </figure>
        ))}
      </motion.div>
    </div>
  );
};

export default Ourclients;
