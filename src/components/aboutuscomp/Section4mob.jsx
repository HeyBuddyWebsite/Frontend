// Slider.js

import React, { useState } from "react";
// import Ourclients from "./Section8large";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import Image from "next/image"

const Section4mob = () => {
  const list = [
    {
      id: "1",
      heading: "We Listen to You",
      para: "Our major emphasis is on understanding your specific needs.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Vector.png",
    },
    {
      id: "2",
      heading: "We Deliver Quality",
      para: "Once we have the understanding, we know what needs to be delivered.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Time%20Circle.png",
    },
    {
      id: "3",
      heading: "We Deliver on Time",
      para: "Our refined and streamlined process delivers on time.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Time%20Circle%20(1).png",
    },
    {
      id: "4",
      heading: "We Communicate Clearly",
      para: "We Maintain clear communication throughout the process.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Vector%20(1).png",
    },
    {
      id: "5",
      heading: "We Adapt Quick",
      para: "Our team is quick to adapt to changing needs.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Time%20Circle%20(2).png",
    },
    {
      id: "6",
      heading: "We Value Your Money",
      para: "We get you the best result in the market at the right price.",
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Time%20Circle%20(3).png",
    },
  ];

  const [currentCard, setCurrentCard] = useState(0);

  const handleChangeIndex = (index) => {
    setCurrentCard(index);
  };

  return (
    <div
      style={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="pt-16 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse4.png')] bg-no-repeat bg-auto bg-[center_top_1rem]"
        id="testimonials"
      >
        <div className="py-2 lg:py-8  mx-auto text-center justify-center  text-2xl lg:text-4xl font-bold text-white mb-6">
          <h3>Listen from our clients</h3>
        </div>

        <SwipeableViews
          index={currentCard}
          onChangeIndex={handleChangeIndex}
          style={{
            width: "60%", // Set initial width to 60%
            margin: "auto", // Center the container
          }}
        >
          {list.map((section, index) => (
            <figure class="flex flex-col gap-2 mx-auto  p-2 lg:p-4 border-gray-500 rounded-lg  h-full w-[80%] bg-[#979797] opacity-90    bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20">
              
              <div className="mb-10">
            <div className="relative">
              <div className="absolute p-4 bg-[#979797] opacity-30 w-14 h-14 rounded-xl "></div>
              <Image
                loading="lazy"
                src={section.img}
                alt="img"
                width={200}
                height={200}
                className="absolute top-4 left-4 w-6 h-6 "
              />
            </div></div>

            <h3
              style={{ color: "white" }}
              class="pt-4 text-left text-xl font-semibold  text-white "
            >
              {section.heading}
            </h3>
            <p style={{ color: "white" }} className="text-left">
              {section.para}
            </p>
              
            </figure>
          ))}
        </SwipeableViews>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <button
            style={{
              padding: "8px 16px",
              margin: "0 8px",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() =>
              handleChangeIndex((currentCard - 1 + list.length) % list.length)
            }
          >
            Previous
          </button>
          <button
            style={{
              padding: "8px 16px",
              margin: "0 8px",
              borderRadius: "8px",
              color: "#fff",
              border: "none",
              cursor: "pointer",
            }}
            onClick={() => handleChangeIndex((currentCard + 1) % list.length)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section4mob;
