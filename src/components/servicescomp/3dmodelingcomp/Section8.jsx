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
      name:"3D Modeling and Animation",
    },
    {
      id:2,
      name:"Game Development",
    },
    {
      id:3,
      name:"Texturing and Painting",
    },
    {
      id:4,
      name:"Rendering and Visualization",
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
      id:1,
      name:"3D Modeling and Animation",
      
      images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/blender.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Autodesk%20Maya.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/3ds%20max.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Z%20brush.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Cinema%204D.svg"]
    },
    {
      id:2,
      name:"Game Development",
      images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Houdini.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Substance%20Painter.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Mudbox.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/SketchUp.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Rhinoceros%203D.svg"]
    },
    {
      id:3,
      name:"Texturing and Painting",
      images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Unity3D.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Unreal%20Engine.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Photoshop.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Marvelous%20Designer.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/3D%20coat.svg"]
    },
    {
      id:4,
      name:"Rendering and Visualization",
      images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Marmoset%20Toolbag.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/KeyShot.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/SolidWorks.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Modo.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Daz%203D.svg"]
    },
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
          Hey Buddy Advanced Tech-stack for High-Quality 3D Model Development
        </h1>
        
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
