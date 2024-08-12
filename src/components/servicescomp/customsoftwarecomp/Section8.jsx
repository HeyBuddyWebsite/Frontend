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
      name:"Technologies",
    },
    {
      id:2,
      name:"Tools",
    },
    {
      id:3,
      name:"Platforms",
    },
    {
      id:4,
      name:"ProgrammingLanguages",
    },
    {
      id:5,
      name:"Frameworks",
    },
    {
      id:6,
      name:"Databases",
    },
    {
      id:7,
      name:"DevelopmentMethodologies",
    },
    {
      id:8,
      name:"MobileDevelopment",
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
      name:"Technologies",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/cloud%20computing.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Internet%20of%20Things%20(IoT).svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Artificial%20Intelligence%20(AI).svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Blockchain.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/AR%20VR.svg"
      ]
    },
    {
      id: 2,
      name:"Tools",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Git.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Jira-.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Docker.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Jenkins.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Selenium.svg"
      ]
    },
    {
      id: 3,
      name:"Platforms",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/AWS%20(Amazon%20Web%20Services).svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Microsoft%20Azure.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Google%20Cloud%20Platform.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Heroku.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/IBM%20Cloud.svg"
      ]
    },
    {
      id: 4,
      name:"ProgrammingLanguages",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Java.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Python.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Java%20script.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/C%23.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/ruby.svg"
      ]
    },
    {
      id: 5,
      name: "Frameworks",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Django.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Ruby%20on%20Rails.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Angular.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/React.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Laravel.svg"
      ]
    },
    {
      id: 6,
      name:"Databases",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/MySQL.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/PostgreSQL.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/MongoDB.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Oracle.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Microsoft%20SQL%20Server.svg"
      ]
    },
    {
      id: 7,
      name:"DevelopmentMethodologies",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Agile.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Scrum.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/DevOps.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/waterfall.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/kanban.svg"
      ]
    },
    {
      id: 8,
      name:"MobileDevelopment",
      images: [
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Flutter.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/React%20Native-01.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Swift.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Xamarin.svg",
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Custom%20Software%20Development%20Icons/Kotlin.svg"
      ]
    }
  ];

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
        Our Technological Expertise is Reflected in Our Trendsetting Tech
        Stack        </h1>

        <p className=" text-base font-medium text-white lg:w-[90%] text-center mx-auto pt-[25px]">
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
