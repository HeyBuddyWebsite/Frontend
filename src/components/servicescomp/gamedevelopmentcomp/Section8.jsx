"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { TabSelector } from "./TabSelector";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { Button } from "@material-tailwind/react";
import "./styles.css"
import MobDropDown from "@/components/mobdropdown/MobDropDown";
import { AiOutlineConsoleSql } from "react-icons/ai";

const Pagenation = ({ handlecontactusModal }) => {
  const [isHovered, setIsHovered] = useState(false);
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

  const buttonHeader = {
    border: isHovered ? "0px" : "1px solid white",
    background: isHovered
      ? "linear-gradient(180deg, color(display-p3 0.2471 0.5412 0.8863) 0%, color(display-p3 0.137 0.3826 0.6708) 100%)"
      : "transparent",
    color: isHovered ? "white" : "white", // Change the text color as needed
    padding: "10px 20px",
    fontSize: "16px",
    transition: "background-color 0.3s, transform 0.3s",
    cursor: "pointer",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
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



  const btnlist=[
    {
      id:1,
      name:"Platforms",
    },
    {
      id:2,
      name:"ARVRPlatforms",
    },
    {
      id:3,
      name:"MetaversePlatforms",
    },
    {
      id:4,
      name:"GameEngines",
    },
    {
      id:5,
      name: "Languages",
    },
    {
      id:6,
      name:"ArtificalIntelligence(AI)",
    },
  ]

  const [category,setCategory]=useState(btnlist[0].name);

  const toggleCategory=(x)=>{
    setCategory(x);
  }

  const textContainerStyle = {
    marginBottom: "30px",
    // position: "sticky",
    left: "50%",
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
    top: "30%",
  };
  

  

  const data=[
    {
      id: 1,
      name:"Platforms",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Apple%20vision.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Appstore.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/PC.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Playstation.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Xbox.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Nintendo.svg"
      ]
    },
    {
      id: 2,
      name:"ARVRPlatforms",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Apple%20vision.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Oculus.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/HTC%20vive.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Google%20daydream.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Meta%20quest.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Game%20Development%20Service/Microsoft%20Hololens.svg"
      ]
    },
    {
      id: 3,
      name:"MetaversePlatforms",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Decentraland.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Roblox.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Axie%20Infinity.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Sandbox.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Horizon%20Worlds.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Sanskar.svg"
      ]
    },
    {
      id: 4,
      name:"GameEngines",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Unreal%20engine.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Unity.svg"
      ]
    },
    {
      id: 5,
      name: "Languages",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/C%23.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/C%2B%2B.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Java%20script.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Python.svg"
      ]
    },
    {
      id: 6,
      name:"ArtificalIntelligence(AI)",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/PCG.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Natural%20language%20processing.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Machine%20learning.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AGA.svg"
      ]
    }
  ]
  

  const [isMobile,setIsMobile]=useState(false);
  const handleresize=()=>{
 
    if( window.innerWidth<=640) {
      setIsMobile(true);
    } else if( window.innerWidth>640) setIsMobile(false);
  }
  
  useEffect(()=>{
    handleresize();
    window.addEventListener("resize",handleresize);
  
    return ()=>{
      window.removeEventListener("resize",handleresize)
    }
  },[])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={textAnimation1}
      className="pt-[44px] lg:pt-[100px] text-white mb-8 md:mb-12 lg:mb-[150px] bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Ellipse%208%20(6).svg')] bg-no-repeat bg-auto lg:bg-contain bg-[center_top_0rem]"
    >
      <div className="w-[90%] lg:w-[80%] mx-auto">
      <div className="">
        <h1 className=" lg:w-[80%] font-bold text-center mx-auto text-2xl lg:text-4xl" style={{color:"white"}}>
        Hey Buddy Tech Arsenal for best Game Solutions Expertise on all fronts
        </h1>

        <p className="text-base font-medium text-white tex-center mx-auto lg:w-[90%] pt-[25px]">
          Hey Buddy claim to the leading spot of a game development company in
          India emanates from its expert team. Our developers bring in advanced
          and profound expertise to deliver the best Games solution for you.
        </p>
        
      </div>

      {isMobile ? <div className="pt-[25px]"><MobDropDown btnlist={btnlist} toggleCategory={(name) => toggleCategory(name)}/></div>: <div className="pt-[25px] lg:pt-[50px] flex gap-4 md:gap-6  w-[100%]  flex-start flex-wrap   items-center text-white md:text-[1em] font-semibold">
          {
            btnlist.map((btn,index)=>{
              return <button key={btn.id}
              onClick={() => toggleCategory(btn.name)}
              className={category === btn.name ? "btnShape btnShapeClicked"  : "btnShape"}
              
            >
              {btn.name}
             
              {/* <span className="line"></span> */}              
            </button>
            })
          } 

         </div>}

      <div className="pt-[44px] lg:pt-[100px]">
        {
          <div
          style={{borderRadius:"24px",background: "#FFFFFF1A",height:"fit-content"}}
          className="p-8 bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30  w-full"
        >
          <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-6 ">  
            
          {data.filter((item,index)=>{
            return category===item.name;
          }).map((item,index)=>{
            return item.images.map((image,index)=>{
              return <div key={index}> <Image
              loading="lazy"
              src={image}
              width={450}
              height={450}
              className="w-[100%] h-[100%]"
              alt="9"
            />
          </div>
            })
          })            
           }
            

            
          </div>
        </div>
        }
      </div>
      </div>
    </motion.div>
  );
};

export default Pagenation;
