// Slider.js

import React, { useState,useEffect } from "react";
// import Ourclients from "./Section8large";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import Image from "next/image"
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./styles.css"


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


  const [isMobile,setIsMobile]=useState(false);
        const handleresize=()=>{
       
          if( window.innerWidth<=500) {
            setIsMobile(true);
          } else if( window.innerWidth>500) setIsMobile(false);
        }
        
        useEffect(()=>{
          handleresize();
          window.addEventListener("resize",handleresize);
        
          return ()=>{
            window.removeEventListener("resize",handleresize)
          }
        },[])

  return (
    <div
      // style={{
      //   overflow: "hidden",
      //   width: "100%",
      //   display: "flex",
      //   justifyContent: "center",
      //   alignItems: "center",
      // }}
    >
      <div
        className="pt-[60px] mb-[80px] lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob%20(2).svg')] lg:bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(6).svg')] bg-no-repeat bg-contain lg:bg-contain bg-[center_top_0rem]"
        id="testimonials"
      >
        <div className="w-[90%] lg:w-[80%] mx-auto text-center justify-center  text-2xl lg:text-4xl font-bold text-white mb-[60px]">
          <h3>The Distinguishing Values of Hey Buddy</h3>
        </div>

        <SwipeableViews
  index={currentCard}
  onChangeIndex={handleChangeIndex}
  style={{
    margin: "auto", // Center the container
  }}
>
  {list.map((section) => (
    <figure
      key={section.id}
      className="flex flex-col gap-2 mx-auto p-4 lg:p-4 border-gray-500 rounded-lg h-full w-[90%] lg:w-[80%] bg-[#979797] opacity-90 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20"
      style={{ borderRadius: "24px" }}
    >
      <div className="relative p-4 bg-[#979797] w-14 h-14 rounded-xl" style={{zIndex:"0"}}>
        <Image
          loading="lazy"
          src={section.img}
          alt="img"
          width={200}
          height={200}
          className="absolute top-4 left-4 w-6 h-6 "
          style={{zIndex:"2"}}
        />
      </div>

      <h3 className="pt-4 text-left text-xl font-semibold text-white">
        {section.heading}
      </h3>
      <p className="text-left text-[14px] lg:text-[16px] font-medium text-white">
        {section.para}
      </p>
    </figure>
  ))}
</SwipeableViews>


        {isMobile?<div className ="w-[100%] flex items-center justify-center gap-[2rem] mt-[40px]">

<div
  
  onClick={() =>
    handleChangeIndex(
      (currentCard - 1 + list.length) % list.length
    )
  }
  className="slider-circle-prev2"
>
  <IoArrowBackSharp size="1.5rem" color="white" className="slider-arrow" />
</div>
<div
  
  onClick={() =>
    handleChangeIndex((currentCard + 1) % list.length)
  }
  className="slider-circle-next2"
>
  <IoArrowForwardSharp size="1.5rem" color="white" className="slider-arrow" />
</div>
</div>:<div>
      <div
        
        onClick={() =>
          (currentCard - 1 + list.length) % list.length
        }
        className="slider-circle-prev"
      >
        <IoArrowBackSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      <div
        
        onClick={() =>
          handleChangeIndex((currentCard + 1) % list.length)
        }
        className="slider-circle-next"
      >
        <IoArrowForwardSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      </div> }

      </div>
    </div>
  );
};

export default Section4mob;
