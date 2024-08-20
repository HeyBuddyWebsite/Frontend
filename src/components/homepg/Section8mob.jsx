// Slider.js

import React, { useState, useEffect } from "react";
// import Ourclients from "./Section8large";
import SwipeableViews from "react-swipeable-views-react-18-fix";
// import Sliderclient from "./Sliderclient"; 
import { IoArrowBackSharp } from "react-icons/io5";
import { IoArrowForwardSharp } from "react-icons/io5";
import "./styles.css"


const Ourclientsmob = () => {
  const cardData = [
    {
      id: 1,
      content:
        "Here is my opinion based on my experience, I have really enjoyed working with the game development team. The team is amicable, creative and understanding.",
      number: "01",
      name: "Zan Syed",
    },
    {
      id: 2,
      name: "Sarah",
      content:
        "Thank you very much! An amazing job done by buddies what I like to call the team that exceeds all expectations. I am glad that I trusted you guys with the work.",
      number: "02",
    },
    {
      id: 3,
      name: "Ankit",
      content:
        "I loved working with Hey Buddy and the way my VR project was handled, I consider this company as one of the best metaverse and game company in India.",
      number: "03",
    },
    {
      id: 4,
      name: "Riyahi",
      content:
        "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
      number: "04",
    },
    {
      id: 5,
      name: "Jeremy",
      content:
        "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
      number: "05",
    },
    {
      id: 6,
      name: "Bhaskar",
      content:
        "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
      number: "06",
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
      style={{
        overflow: "hidden",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="pt-[60px] mb-[80px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208mob.svg')] bg-no-repeat bg-contain bg-[center_top_0rem]"
        id="testimonials"
      >
        <div className="  mx-auto text-center justify-center  text-2xl lg:text-4xl font-bold text-white mb-[60px]">
          <h3>Listen from our clients</h3>
        </div>

        {/* <Sliderclient sliderlist={cardData} /> */}

        <SwipeableViews
          index={currentCard}
          onChangeIndex={handleChangeIndex}
          style={{
            width: "60%", // Set initial width to 60%
            margin: "auto", // Center the container
          }}
        >
          {cardData.map((card) => (
            <div key={card.id} style={{ display: "flex", justifyContent: "center", }} >
              <div
                
                style={{
                  flex: "0 0 70%", // Set width to 100%
                  boxSizing: "border-box",
                  padding: "16px",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  color: "white",
                  backgroundColor: "#0000001A",
                  width: "80%",
                  border:" 2px solid #FFFFFF33"
                }}
                
              >
                <p style={{ color: "white" }} className="text-[14px] lg:text-[16px] font-medium">{card.content}</p>

                <p style={{ textAlign: "right" }}>{card.number}</p>
                <p style={{ textAlign: "right" }}>{card.name}</p>
              </div>
            </div>
          ))}
        </SwipeableViews>

        {isMobile?<div className ="w-[100%] flex items-center justify-center gap-[2rem] mt-[40px]">

<div
  
  onClick={() =>
    handleChangeIndex(
      (currentCard - 1 + cardData.length) % cardData.length
    )
  }
  className="slider-circle-prev2"
>
  <IoArrowBackSharp size="1.5rem" color="white" className="slider-arrow" />
</div>
<div
  
  onClick={() =>
    handleChangeIndex((currentCard + 1) % cardData.length)
  }
  className="slider-circle-next2"
>
  <IoArrowForwardSharp size="1.5rem" color="white" className="slider-arrow" />
</div>
</div>:<div>
      <div
        
        onClick={() =>
          (currentCard - 1 + cardData.length) % cardData.length
        }
        className="slider-circle-prev"
      >
        <IoArrowBackSharp size="1.5rem" color="white" className="slider-arrow" />
      </div>
      <div
        
        onClick={() =>
          handleChangeIndex((currentCard + 1) % cardData.length)
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

export default Ourclientsmob;