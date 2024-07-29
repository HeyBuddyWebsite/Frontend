"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/Font.css";

import "../../../styles/button.css";
import "./page.css";
import CaseStudyCard from "@/components/casestudycard/CaseStudyCard";

const data = [
  {
    id: "1",
    category: "3D",
    heading:
      "Hyper-realistic Animated Video showcasing innovative 3D CT Scanner ",
    para1:
      "Our client, a leading CT scanner manufacturer in the UAE, wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest CT scan machine developed for airport security. Hey Buddy's...",
    link: "/Pages/casestudies/3ddevelopment/[id]",
    aslink: "/Pages/casestudies/3ddevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img.png",
  },
  {
    id: "2",
    category: "3D",
    heading: "AAA-Quality 3D Characters for a Korean Film Studio ",
    para1:
      "Our client, a well-known Korean film studio, known for its animated and drama films, required dynamic characters with AAA quality. They wanted them as per the decided theme of their upcoming short film...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/3ddevelopment/[id]",
    aslink: "/Pages/casestudies/3ddevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(4).png",
  },

  {
    id: "3",
    category: "3D",
    heading: "Hollywood Styled Semi-Realistic 3D Gaming Characters",
    para1:
      "Our client, a popular gaming publisher with multiple AAA and indie games needed a creative game development partner to design characters. They needed Hollywood-styled characters with meticulous detail for 4K...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/3ddevelopment/[id]",
    aslink: "/Pages/casestudies/3ddevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(2).png",
  },
  {
    id: "4",
    category: "3D",
    heading: "AAA 3D Characters for a Gaming Project",
    para1:
      "Our client, a gaming powerhouse, sought a dependable partner with the requisite expertise for their next 3D game development project. The potential partner should possess a sizeable team with skills matching...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/3ddevelopment/[id]",
    aslink: "/Pages/casestudies/3ddevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(3).png",
  },
  {
    id: "5",
    category: "AR",
    heading:
      "Successful Implementation of AR Technology in D2C-Based Online Furniture",
    para1:
      "A furniture retailer sought to enhance digital sales by integrating AR technology into their website. They approached us for technical collaboration and customized solutions. After initial discussions, we tackled challenges and successfully...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/ardevelopment/[id]",
    aslink: "/Pages/casestudies/ardevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/casec2.png",
  },
  {
    id: "6",
    category: "AR",
    heading: "Revamped eCommerce Business Increase Saled Reduced Returns",
    para1:
      "We developed an AR virtual try-on solution for a renowned apparel brand, enhancing the shopping experience and reducing return rates. This innovative platform integrates AR, VR, and AI technologies, allowing customers to try on clothing virtually before buying...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/ardevelopment/[id]",
    aslink: "/Pages/casestudies/ardevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/casec1.png",
  },
  {
    id: "7",
    category: "CGI",
    heading: "Developing CGI Graphics for D2C Based Online Retail Company",
    para1:
      "A leading online furniture D2C brand sought CGI experts to enhance customer engagement. They selected us as their CGI service partner to create lifelike visuals for their product lines. Our initial focus included identifying pain areas, coordinating efforts...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/cgidevelopment/[id]",
    aslink: "/Pages/casestudies/cgidevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/casec4.png",
  },
  {
    id: "8",
    category: "CGI",
    heading: "Powering Storytelling with Ultra Realistic CGI Visuals",
    para1:
      "A prominent media brand sought our CGI expertise to enhance their visual storytelling, aiming for an immersive audience experience. Leveraging our skills, we created a cutting-edge CGI pipeline that seamlessly integrated live-action footage...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/cgidevelopment/[id]",
    aslink: "/Pages/casestudies/cgidevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/casec3.png",
  },
  {
    id: "9",
    category: "AI",
    heading: "Dining with Servi: AI-Powered Restaurant Experiences",
    para1:
      "Hey Buddy meticulously trained and deployed voice-activated AI-assistant for improved dining experience. This case study showcases our prowess to deliver state of the art AI solutions to solve even the most complex issues...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/AIcasestudy/[id]",
    aslink: "/Pages/casestudies/AIcasestudy/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/AIcase/23.jpg",
  },
  {
    id: "10",
    category: "VR",
    heading: "Virtual Reality Tours Save Time and Impress Buyers",
    para1:
      "Our client in real estate aims to realize dream homes through an enhanced app with VR tech, enabling remote tours. Hey Buddy upgraded the app for stability, hyper-realism, and interactivity, revolutionizing property exploration. This innovation saves...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/vrdevelopment/[id]",
    aslink: "/Pages/casestudies/vrdevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case6/1s.jpg",
  },
  {
    id: "11",
    category: "VR",
    heading: "Architecture Reimagined: Accelerated Processes with Immersive VR",
    para1:
      "An innovative VR solution with architectural visualization capabilities was developed for a large architectural firm, enhancing design communication and decision-making. This immersive platform offers a high-quality VR experience...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/vrdevelopment/[id]",
    aslink: "/Pages/casestudies/vrdevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case13/1s.jpg",
  },
  {
    id: "12",
    category: "AI",
    heading: "AI For Human Matchmaking: Data-driven Relationship",
    para1:
      "Our client, a visionary startup, aimed to alter the paradigm of social networking space. They had a vision of an intelligent AI-infused matchmaking app that fosters genuine connections based on shared interests, values...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/AIcasestudy/[id]",
    aslink: "/Pages/casestudies/AIcasestudy/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI/12_2s.png",
  },
  {
    id: "13",
    category: "Gaming",
    heading: "Captivating Gaming App Interface For Hyper Engagement",
    para1:
      "Hey Buddy partnered with a leading gaming hub known for their captivating games, seeking high-quality graphics. The client's global presence and high standards necessitated exceptional outcomes. Hey Buddy not only met but sur...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/gamedevelopment/[id]",
    aslink: "/Pages/casestudies/gamedevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/13_3s.png",
  },
  {
    id: "14",
    category: "Gaming",
    heading: "AI-Infused Smart and Adaptive Gaming with Unreal’s Magic",
    para1:
      "Hey Buddy partnered with a leading game development company for an AI-powered one-on-one duel game. The goal was to create visually stunning gameplay with advanced mechanics. Hey Buddy delivered top-notch AI integration...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/gamedevelopment/[id]",
    aslink: "/Pages/casestudies/gamedevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/14_1s.png",
  },
  {
    id: "15",
    category: "Gaming",
    heading: "Hey Buddy’s Epic Collaboration with a Gaming Studio",
    para1:
      "A renowned game development studio joined forces with us for a collaborative effort on an ambitious cross-platform action-adventure game. Our comprehensive game development services, coupled with their expertise, resulted in a visually stunning...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/gamedevelopment/[id]",
    aslink: "/Pages/casestudies/gamedevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/15_1s.png",
  },
  {
    id: "16",
    category: "Custom Software",
    heading: "For a Luxury Watches Brand to Boost Sales Patterns",
    para1:
      "A luxury watch brand in India sought to transition to a D2C marketplace, requiring expert software development. After fruitful discussions, they chose us as their development partner. We embarked on the project, addressing challenges with...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/customsoftware/[id]",
    aslink: "/Pages/casestudies/customsoftware/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/custom_software/16_1s.png",
  },
  {
    id: "17",
    category: "AR",
    heading: "Bringing Personalised Online Shopping with AR Virtual Try-On ",
    para1:
      "An e-commerce store wanted to revolutionize shopping for their customers. They resorted for a transformative AR solution and provided users with an impressive shopping experience Hey Buddy delivered mobile-friendly...",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/customsoftware/[id]",
    aslink: "/Pages/casestudies/ardevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/Mask%20group.png",
  },
  {
    id: "18",
    category: "CGI",
    heading: "3D CGI Innovation Developed Parsana's Marketing Triumph Story ",
    para1:
      "Parsana, a pioneering Health & Fitness brand since 1988, specializes in therapy plates for holistic well-being. Their marketing efforts needed a boost to power consumer awareness of their unique product line....",
    para2:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para3:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    para4:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/cgidevelopment/[id]",
    aslink: "/Pages/casestudies/cgidevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Parsana1.jpg",
  },
];

const Page = () => {
  const [category, setCategory] = useState("");

  const toggleCategory = (categ) => {
    setCategory(categ);
  };
  return (
    <div className="px-2 ">
      <div className="casestudyContainer">
        <div className="readOurcasestudy">
          <p className="text-[4vw] font-semibold">Case Studies</p>
          <p className="text-[2vw] w-[65vw]">
            See how our innovation, creativity, and the right expertise rendered
            the best results for our clients.
          </p>
        </div>
        <Image
          loading="lazy"
          width={450}
          height={450}
          className="read-casestudy-svg"
          alt="No-img"
          src="/read-blog.svg"
        />
        <div className="casestudyWithCategories">
          <div className="casestudyCategories ">
            <p className="text-white font-bold text-normal md:text-[2vw]  ">
              Case Studies
            </p>
            <div className=" flex justify-between -gap-y-2 w-[80%] flex-start flex-wrap   items-center text-white md:text-[1em] font-semibold">
              <button
                onClick={() => toggleCategory("")}
                className={category === "" ? "tab active-tab" : "tab"}
              >
                All
              </button>

              {/* <button
              onClick={() => toggleCategory("Design")}
              className={category === "Design" ? "tab active-tab" : "tab"}
            >
              Design
            </button> */}
              <button
                onClick={() => toggleCategory("AR")}
                className={category === "AR" ? "tab active-tab" : "tab"}
              >
                AR
              </button>
              <button
                onClick={() => toggleCategory("3D")}
                className={category === "3D" ? "tab active-tab" : "tab"}
              >
                3D
              </button>
              <button
                onClick={() => toggleCategory("CGI")}
                className={category === "CGI" ? "tab active-tab" : "tab"}
              >
                CGI
              </button>
              <button
                onClick={() => toggleCategory("AI")}
                className={category === "AI" ? "tab active-tab" : "tab"}
              >
                AI
              </button>
              <button
                onClick={() => toggleCategory("VR")}
                className={category === "VR" ? "tab active-tab" : "tab"}
              >
                VR
              </button>
              <button
                onClick={() => toggleCategory("Gaming")}
                className={category === "Gaming" ? "tab active-tab" : "tab"}
              >
                Gaming
              </button>
              <button
                onClick={() => toggleCategory("Custom Software")}
                className={
                  category === "Custom Software" ? "tab active-tab" : "tab"
                }
              >
                Custom Software
              </button>
            </div>
          </div>

          <div className="allcasestudy  mx-auto">
            {category === "3D"
              ? data
                  .filter((study) => study.category === "3D")
                  .map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  ))
              : category === "AR"
              ? data
                  .filter((study) => study.category === "AR")
                  .map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  ))
              : category === "CGI"
              ? data
                  .filter((study) => study.category === "CGI")
                  .map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  ))
              : category === "AI"
              ? data
                  .filter((study) => study.category === "AI")
                  .map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  ))
              : category === "VR"
              ? data
                  .filter((study) => study.category === "VR")
                  .map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  ))
              : category === "Gaming"
              ? data
                  .filter((study) => study.category === "Gaming")
                  .map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  ))
              : category === "Custom Software"
              ? data
                  .filter((study) => study.category === "Custom Software")
                  .map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  ))
              : category === ""
              ? data.map((study, index) => (
                  <CaseStudyCard key={index} {...study} />
                ))
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
