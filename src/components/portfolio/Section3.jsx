
import React, { useState } from "react";
import { cards } from "../../utils/index.js";
import "./styles.css"
import Modal from "./Modal.jsx";

const Section3 = () => {

 const [category,setCategory]=useState("");
  const arr = cards.map(() => {
    return false;
  });
  const [isPlaying, setIsPlaying] = useState(arr);
  console.log("component mount");
  const handleClick = (id) => {
    console.log("click id",id)
    setIsPlaying((prev) => {
      const newArr = [...prev];
      newArr[id] = true;
      return newArr;
    });
  };

  const handleClose = (id) => {
    setIsPlaying((prev) => {
      const newArr = [...prev];
      newArr[id] = false;
      return newArr;
    });
  };  

  return (
    <div className="responsivew-[100%] mx-auto pt-[60px] lg:pt-[100px] mb-[80px] lg:mb-[150px]  bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse2.png')] bg-no-repeat bg-auto bg-[center_top_0rem] ">
      
      <div className="flex flex-col w-[90%] lg:w-[80%] mx-auto  items-center   ">
        <div
          className="text-2xl lg:text-4xl text-center text-white mb-[60px] lg:mb-[100px]" 
          style={{ fontWeight: "600" }}
        >
          Explore Our Works
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] w-[100%]">
          {cards
            .filter((card, index) => {
              if (
                card.category === category ||
                category === "All" ||
                category === ""
              ) {
                return true;
              }
              return false;
            })
            .map((card) => (
              <div key={card.id} className="h-full w-full" style={{margin:"0"}}>
                <div
                  className="bg-[rgba(255,255,255,0.1)]  rounded-3xl p-4 flex flex-col gap-3 items-start"
                  style={{ width: "fit-content",height:"100%" }}
                >
                  <div className="rounded-3xl  w-[100%]" style={{overflow:"hidden"}}  onClick={() => handleClick(card.id - 1)}>
                  <div
                    className=" ogimg rounded-3xl cursor-pointer"
                    style={{ position: "relative", width: "100%", }}
                   
                  
                  >
                   <img
  loading="lazy"
  width={500}
  height={500}
  src={card.img}
  alt="image"
  style={{ width: "100%" }}
  className="rounded-3xl w-full aspect-[3/2] object-cover"
/>
                    <div className="absolute top-0 h-full rounded-3xl flex items-center justify-center w-full">
                       <img
  loading="lazy"
                        width={500}
                        height={500}
                        src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/playlogo.svg"
                        alt="image"
                        className="rounded-3xl w-auto h-auto"
                      />
                    </div>
                  </div>
                  </div>
                  <div>
                    <div
                      className="font-semibold  text-xl text-white"
                      
                    >
                      {card.heading.toUpperCase()}
                    </div>
                    
                  </div>
                  {isPlaying[card.id - 1] && (
  <>
    {console.log("React Video Player Loading....")}
    <Modal
      videoUrl={card.videoUrl}
      handleClose={() => handleClose(card.id - 1)}
      videorotate={!!card.videorotate} // Using double negation to ensure a boolean value
    />
  </>
)}

                  <div
                    style={{ width: "fit-content" }}
                    className="rounded-l-full py-2 px-2 rounded-r-full bg-[rgba(151,151,151,0.2)] flex items-center gap-1"
                  >
                    <span className="text-[#B3B3B2] text-xs">Category</span>
                    <span>
                       <img
  loading="lazy"
                        width={500}
                        height={500}
                        src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Shape.svg"
                        alt="img"
                        className="w-auto h-auto"
                      />
                    </span>
                    <span className="text-xs text-white">{card.category}</span>
                  </div>
                  <div
                    style={{ width: "fit-content" }}
                    className="rounded-l-full py-2 px-2 rounded-r-full bg-[rgba(151,151,151,0.2)] flex items-center gap-1"
                  >
                    <span className="text-[#B3B3B2] text-xs">Time Taken</span>
                    <span>
                       <img
  loading="lazy"
                        width={500}
                        height={500}
                        src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Shape.svg"
                        alt="img"
                        className="w-auto h-auto"
                      />
                    </span>
                    <span className="text-xs text-white">
                      {card.time + " "}days{" "}
                    </span>
                  </div>
                  <div>
                    <div
                      className="  font-thin text-base text-white"
                      
                    >
                      {card.desc}
                      {/* {isExpanded[card.id - 1]
                      ? card.desc
                      : `${card.desc.substring(0, 90)}...`} */}
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Section3;
