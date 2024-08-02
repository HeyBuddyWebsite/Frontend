"use client";
import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import "./styles.css"
import Modal from "./Modal";

// Modal.setAppElement("#root");

const Section3 = () => {
  const [category, setcategory] = useState("");
  const variants = {
    hidden: { opacity: 0, y: "20%" },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const btnlist = [
    {
      id: 1,
      type: "All",
    },
    {
      id: 2,
      type: "CGI",
    },
    {
      id: 3,
      type: "Gaming",
    },
    {
      id: 4,
      type: "AR",
    },
    {
      id: 5,
      type: "VR",
    },
    {
      id: 6,
      type: "Metaverse",
    },
  ];

  const cards = [
    {
      id: 1,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Coca%20Cola.svg",
      heading: "Coca Cola CGI Ad",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Coca%20cola%20CGI.mp4",
      desc: "This Coca Cola CGI ad captures the essence of a hot summer day, showcasing the refreshing sensation of an ice-cold Coca Cola. It reminds viewers of the perfect beverage to enjoy under the scorching sun.",
    },
    {
      id: 2,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/luxury%20train.svg",
      heading: "Luxury Train for Personal Care Brands",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Blanko,%20Gucci,%20Fenty%20Beauty.mp4",
      desc: "In this campaign, a luxury train serves as a moving showroom for brands like Gucci, Fenty Beauty, Spirit & Blanko. Shot in London, the evening setting exudes an absolute luxury vibe, enhancing the CGI ad.",
    },
    {
      id: 3,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/World%20Cup.svg",
      // heading: "World Cup",
      heading: "IPL",
      category: "CGI Ad & Development",
      time: "10",
      videorotate: "true",
      videoUrl:
        // "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Worldcup%202024.mp4",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/CGI%20for%20IPL.mp4",
      // desc: `This dynamic CGI campaign is dedicated to cheering for Team India. It transforms India Gate into a passionate fan, shouting "India, India!" from the heart, capturing the spirit of the World Cup.`,
      desc: `This dynamic CGI campaign is dedicated to cheering for our favorite IPL team. It transforms landmarks into passionate fans, with the IPL Cup prominently displayed, capturing the spirit of the IPL season.`,
    },
    {
      id: 4,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/The%20Teaser%20Company.svg",
      heading: "The Treasure Company",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/The%20Teasure%20company.mp4",
      desc: "This campaign for The Treasure Company showcases the unique services they offer, using a cool and creative concept. It effectively highlights their capabilities and establishes a strong partnership appeal.",
    },
    {
      id: 5,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Taj%20Mahal.svg",
      heading: "Taj Mahal as the New Wrist for Watch Brands",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Tajwatchmahal%20(1).mp4",
      desc: "This campaign creatively showcases a watch wrapped around the Taj Mahal, blending iconic architecture with modern style. It presents a visually striking and cool concept for watch branding.",
    },
    {
      id: 6,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Zomato.svg",
      heading: "Zomato: Delivering Biryani and Thums Up in Large Order Fleet",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Thumsup%20&%20Zomato.mp4",
      desc: "This CGI campaign highlights Zomato's new large order fleet, capable of catering to weddings and parties. It also showcases the unbeatable combination of Thums Up and biryani, appealing to food lovers everywhere.",
    },
    {
      id: 7,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/asian_paints.svg",
      heading: "Asian Paint: Painting the Earth",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Asian%20paints%20(1).mp4",
      desc: "This campaign demonstrates that Asian Paints is not just about beautifying homes, but also about transforming the entire world with their magical brushes, making it a more beautiful place to live.",
    },
    {
      id: 8,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Ghoom%20Barabar%20Ghoom.svg",
      heading: "Travel Startup's Campaign: Ghoom Barabar Ghoom",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Ghoom%20Brabar%20Ghoom%20-%20Travel%20company%20.mp4",
      desc: "This campaign by the travel startup Ghoom Barabar Ghoom targets Delhi NCR residents frustrated with the heat. By creating a winter wonderland around India Gate, it offers a refreshing escape reminiscent of Manali.",
    },
    {
      id: 9,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Bira%20Beer.svg",
      heading: "Taste of Bira",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Bira%20-%20Beer.mp4",
      desc: "This campaign caters to beer lovers who always crave more. By showcasing an oversized crate of Bira beer, it captures the imagination and desires of beer enthusiasts, creating a visually impactful ad.",
    },
    {
      id: 10,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Donut.svg",
      heading: "Bigger the Better: Donut",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Baskin robbin Donut.mp4",
      desc: "This campaign visualizes a donut lover's dream of a giant, delicious donut coming towards them. It perfectly captures the irresistible allure of a yummy donut in a whimsical and engaging way.",
    },
    {
      id: 11,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Shoes%20Bacca%20Bucci.svg",
      heading: "Shoes on Top: Bacca Bucci",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/bacca%20bucci.mp4",
      desc: "This campaign appeals to sneaker lovers who want to keep their shoes pristine and free of dirt. By showcasing oversized sneakers in a clean and bold setting, it highlights the passion of sneaker enthusiasts.",
    },
    {
      id: 12,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Nescafe.svg",
      heading: "Nescafe: The More, The Merrier",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Nescafe.mp4",
      desc: "This campaign depicts every coffee lover's fantasy of being surrounded by an abundance of coffee beans, creating a visually stunning and appetizing scene that celebrates the love of coffee.",
    },
    {
      id: 13,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Parsana%20Therapy.svg",
      heading: "Parsana Therapy",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/CGI%20For%20Parsana%20(1).mp4",
      desc: "This campaign highlights the benefits of Parsana therapy, turning every plate into a Subway Surfer-like experience where tablets are avoided. It emphasizes the health benefits in a fun and engaging manner.",
    },
    {
      id: 14,
      img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Dairy%20Milk%20Silk%20Cadbury.svg",
      heading: "Dairy Milk Silk Cadbury",
      category: "CGI Ad & Development",
      time: "10",
      videoUrl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/Cadbury%20Dairymilk.mp4",
      desc: "This campaign features an oversized Dairy Milk Silk bar, appealing to the senses and satisfying the eyes. It creates a luxurious and indulgent visual experience for chocolate lovers.",
    },
  ];

  const arr = cards.map(() => {
    return false;
  });

  // const [playlogo, setplaylogo] = useState(arr);

  const [isPlaying, setIsPlaying] = useState(arr);
  const [isExpanded, setIsExpanded] = useState(arr);

  const handleClick = (id) => {
    arr[id] = true;
    setIsPlaying(arr);
  };
  const handleClose = (id) => {
    arr[id] = false;
    setIsPlaying(arr);
  };

  const toggleReadMore = (id) => {
    setIsExpanded((prevstate) => {
      return prevstate.map((state, index) => {
        return index === id ? !state : state;
      });
    });
  };
  const [isExpanded1, setIsExpanded1] = useState(arr);

  const toggleReadMore1 = (id) => {
    setIsExpanded1((prevstate) => {
      return prevstate.map((state, index) => {
        return index === id ? !state : state;
      });
    });
  };

  const paraStyles = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };
  const headingStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  return (
    <div className="responsive w-[100%] mx-auto pt-20 bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Aboutus/Ellipse2.png')] bg-no-repeat bg-auto bg-[center_top_1rem] ">
      <div className="flex flex-col lg:w-[80%] mx-auto gap-12 items-start  ">
        <div
          className="text-3xl lg:text-3xl text-center text-white"
          style={{ fontWeight: "600" }}
        >
          Explore Our Works
        </div>

        {/* <div className=" flex gap-6  w-[100%]  flex-start flex-wrap   items-center text-white md:text-[1em] font-semibold">
          
            <button
              onClick={() => toggleCategory("")}
              className={category === "" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              CGI Ad & Development
             
              <span className="line"></span>
              
            </button>
            
            
          </div> */}

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[2rem] w-[100%] mt-10">
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
                  style={{ width: "fit-content" }}
                >
                  <div
                    className="rounded-3xl cursor-pointer"
                    style={{ position: "relative", width: "100%" }}
                    onClick={() => handleClick(card.id - 1)}
                  
                  >
                    <Image
                      lazy={true}
                      width={500}
                      height={500}
                      src={card.img}
                      alt="image"
                      style={{ width: "100%" }}
                      className="rounded-3xl w-full aspect-[3/2] object-fit"
                    />
                    <div className="absolute top-0 h-full rounded-3xl flex items-center justify-center w-full">
                      <Image
                        lazy={true}
                        width={500}
                        height={500}
                        src="https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/portfolio/playlogo.svg"
                        alt="image"
                        className="rounded-3xl w-auto h-auto"
                      />
                    </div>
                  </div>
                  <div>
                    <div
                      className="font-semibold  text-xl text-white"
                      style={!isExpanded1[card.id - 1] ? headingStyles : null}
                    >
                      {card.heading.toUpperCase()}
                    </div>
                    <span
                      className="text-xs text-white font-thin cursor-pointer"
                      onClick={() => toggleReadMore1(card.id - 1)}
                    >
                      {isExpanded1[card.id - 1] ? "less" : "more"}
                    </span>
                  </div>
                  {isPlaying[card.id - 1] && (
                    <Modal
                      videoUrl={card.videoUrl}
                      handleClose={() => handleClose(card.id - 1)}
                      videorotate={card.videorotate ? true : false}
                    />
                  )}
                  <div
                    style={{ width: "fit-content" }}
                    className="rounded-l-full py-2 px-2 rounded-r-full bg-[rgba(151,151,151,0.2)] flex items-center gap-1"
                  >
                    <span className="text-[#B3B3B2] text-xs">Category</span>
                    <span>
                      <Image
                        lazy={true}
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
                      <Image
                        lazy={true}
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
                      style={!isExpanded[card.id - 1] ? paraStyles : null}
                    >
                      {card.desc}
                      {/* {isExpanded[card.id - 1]
                      ? card.desc
                      : `${card.desc.substring(0, 90)}...`} */}
                    </div>
                    <span
                      className="text-xs text-white font-thin cursor-pointer"
                      onClick={() => toggleReadMore(card.id - 1)}
                    >
                      {isExpanded[card.id - 1] ? "Read less" : "Read more"}
                    </span>
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
