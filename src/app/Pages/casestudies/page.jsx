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
    para:
      "Our client, a leading CT scanner manufacturer in the UAE, wanted a hyper-realistic explanatory video to showcase the innovative functionality of their latest CT scan machine developed for airport security. Hey Buddy's...",
    link: "/pages/casestudies/",
  
    cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img.png",
  },
  {
    id: "2",
    category: "3D",
    heading: "AAA-Quality 3D Characters for a Korean Film Studio ",
    para:
      "Our client, a well-known Korean film studio, known for its animated and drama films, required dynamic characters with AAA quality. They wanted them as per the decided theme of their upcoming short film...",
  
    link: "/pages/casestudies/",
   
    cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(4).png",
  },
  {
    id: "9",
    category: "AI",
    heading: "Dining with Servi: AI-Powered Restaurant Experiences",
    para:
      "Hey Buddy meticulously trained and deployed voice-activated AI-assistant for improved dining experience. This case study showcases our prowess to deliver state of the art AI solutions to solve even the most complex issues...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/AIcase/23.jpg",
  },
  
  {
    id: "4",
    category: "3D",
    heading: "AAA 3D Characters for a Gaming Project",
    para:
      "Our client, a gaming powerhouse, sought a dependable partner with the requisite expertise for their next 3D game development project. The potential partner should possess a sizeable team with skills matching...",
    
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(3).png",
  },
  {
    id: "5",
    category: "AR",
    heading:
      "Successful Implementation of AR Technology in D2C-Based Online Furniture",
    para:
      "A furniture retailer sought to enhance digital sales by integrating AR technology into their website. They approached us for technical collaboration and customized solutions. After initial discussions, we tackled challenges and successfully...",
   
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/casec2.png",
  },
  {
    id: "6",
    category: "AR",
    heading: "Revamped eCommerce Business Increase Saled Reduced Returns",
    para:
      "We developed an AR virtual try-on solution for a renowned apparel brand, enhancing the shopping experience and reducing return rates. This innovative platform integrates AR, VR, and AI technologies, allowing customers to try on clothing virtually before buying...",
    
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/casec1.png",
  },
  {
    id: "7",
    category: "CGI",
    heading: "Developing CGI Graphics for D2C Based Online Retail Company",
    para:
      "A leading online furniture D2C brand sought CGI experts to enhance customer engagement. They selected us as their CGI service partner to create lifelike visuals for their product lines. Our initial focus included identifying pain areas, coordinating efforts...",
    
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/casec4.png",
  },
  {
    id: "8",
    category: "CGI",
    heading: "Powering Storytelling with Ultra Realistic CGI Visuals",
    para:
      "A prominent media brand sought our CGI expertise to enhance their visual storytelling, aiming for an immersive audience experience. Leveraging our skills, we created a cutting-edge CGI pipeline that seamlessly integrated live-action footage...",
    
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/casec3.png",
  },
 
  {
    id: "10",
    category: "VR",
    heading: "Virtual Reality Tours Save Time and Impress Buyers",
    para:
      "Our client in real estate aims to realize dream homes through an enhanced app with VR tech, enabling remote tours. Hey Buddy upgraded the app for stability, hyper-realism, and interactivity, revolutionizing property exploration. This innovation saves...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case6/1s.jpg",
  },
  {
    id: "11",
    category: "VR",
    heading: "Architecture Reimagined: Accelerated Processes with Immersive VR",
    para:
      "An innovative VR solution with architectural visualization capabilities was developed for a large architectural firm, enhancing design communication and decision-making. This immersive platform offers a high-quality VR experience...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/case13/1s.jpg",
  },
  {
    id: "12",
    category: "AI",
    heading: "AI For Human Matchmaking: Data-driven Relationship",
    para:
      "Our client, a visionary startup, aimed to alter the paradigm of social networking space. They had a vision of an intelligent AI-infused matchmaking app that fosters genuine connections based on shared interests, values...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI/12_2s.png",
  },
  {
    id: "13",
    category: "Gaming",
    heading: "Captivating Gaming App Interface For Hyper Engagement",
    para:
      "Hey Buddy partnered with a leading gaming hub known for their captivating games, seeking high-quality graphics. The client's global presence and high standards necessitated exceptional outcomes. Hey Buddy not only met but sur...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/13_3s.png",
  },
  {
    id: "14",
    category: "Gaming",
    heading: "AI-Infused Smart and Adaptive Gaming with Unreal’s Magic",
    para:
      "Hey Buddy partnered with a leading game development company for an AI-powered one-on-one duel game. The goal was to create visually stunning gameplay with advanced mechanics. Hey Buddy delivered top-notch AI integration...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/14_1s.png",
  },
  {
    id: "15",
    category: "Gaming",
    heading: "Hey Buddy’s Epic Collaboration with a Gaming Studio",
    para:
      "A renowned game development studio joined forces with us for a collaborative effort on an ambitious cross-platform action-adventure game. Our comprehensive game development services, coupled with their expertise, resulted in a visually stunning...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/game/15_1s.png",
  },
  {
    id: "16",
    category: "Custom Software",
    heading: "For a Luxury Watches Brand to Boost Sales Patterns",
    para:
      "A luxury watch brand in India sought to transition to a D2C marketplace, requiring expert software development. After fruitful discussions, they chose us as their development partner. We embarked on the project, addressing challenges with...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/custom_software/16_1s.png",
  },
  {
    id: "17",
    category: "AR",
    heading: "Bringing Personalised Online Shopping with AR Virtual Try-On ",
    para:
      "An e-commerce store wanted to revolutionize shopping for their customers. They resorted for a transformative AR solution and provided users with an impressive shopping experience Hey Buddy delivered mobile-friendly...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/Mask%20group.png",
  },
  {
    id: "3",
    category: "3D",
    heading: "Hollywood Styled Semi-Realistic 3D Gaming Characters",
    para:
      "Our client, a popular gaming publisher with multiple AAA and indie games needed a creative game development partner to design characters. They needed Hollywood-styled characters with meticulous detail for 4K...",
    
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img%20(2).png",
  },
  {
    id: "18",
    category: "CGI",
    heading: "3D CGI Innovation Developed Parsana's Marketing Triumph Story ",
    para:
      "Parsana, a pioneering Health & Fitness brand since 1988, specializes in therapy plates for holistic well-being. Their marketing efforts needed a boost to power consumer awareness of their unique product line....",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Parsana1.jpg",
  },
  {
    id: "19",
    category: "CGI",
    heading: "Powering Performance Marketing for The Teaser Company's Story",
    para:
      "The Teaser Company, a dynamic performance marketing firm, sought an innovative way to showcase its services. They have always been known for standing out in the crowded performance marketing industry...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/1.1.jpg",
  },
  {
    id: "20",
    category: "AI",
    heading: "Highly Personalized Shopping Experience with AI Recommendation",
    para:
      "An eCommerce website based in San Francisco, working globally, providing personalized shopping experience. They are committed to enhancing customer satisfaction through innovative solutions...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI/original-b796c91e9b6ac1a24675a37893616723.jpg",
  },
  {
    id: "21",
    category: "AI",
    heading: "AI-Powered Property Valuation: Transforming Real Estate Decisions",
    para:
      "A prestigious real estate firm operating across multiple states. They were facing multiple serious issues related to traditional property valuation methods causing unpredictability and subjectivity...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI/Image.jpg",
  },

  {
    id: "22",
    category: "AI",
    heading: "AI-Driven Innovation for a Clear Competitive Edge in Consumer Electronics",
    para:
      "A leading consumer electronics brand in India wanted to gain a competitive edge by infusing artificial intelligence (AI) into their processes. Hey Buddy connected with them and proposed a detail...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/programming-background-with-person-working-with-codes-computer.jpg",
  },
  {
    id: "23",
    category: "Computer Vision",
    heading: "Computer Vision to Drive Quality in Automotive Manufacturing",
    para:
      "Our client, a leading automotive manufacturer, was struggling with quality issues. We collaborated to implement an AI-powered computer vision system with the capability to perform automated...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI-in-der-Automobilindustrie.jpg",
  },

  {
    id: "24",
    category: "Computer Vision",
    heading: "Redefining Online Shopping with\nAR and Computer Vision Power Combo",
    para:
      "A leading e-commerce retailer went through a transformational experience with Hey Buddy. We provided an online shopping solution that combined computer vision and augmented reality (AR) technological...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/image%20109.jpg",
  },

  {
    id: "25",
    category: "AI",
    heading: "AI-Powered LMS for Improved Student Outcomes",
    para:
      "Our client, a renowned American education provider, wanted to improve the learning outcome. The best way to do that is by offering more engaging and personalised learning on their existing Learn...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/city-committed-education-collage-concept.jpg",
  },

  {
    id: "26",
    category: "AI",
    heading: "AI-Powered Role-Playing Game The Next Level of Immersion",
    para:
      "Hey Buddy partnered with a renowned game development studio to integrate cutting-edge AI technology into their latest role-playing game (RPG). The goal was to create a more immersive and adaptive...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/high-angle-hands-holding-controller.jpg",
  },

  {
    id: "27",
    category: "Computer Vision",
    heading: "Computer Vision-enabled Intelligent Energy Efficiency for Smart Homes",
    para:
      "In late 2023, we collaborated with a leading smart home technology provider. The project was to develop an innovative energy management system powered by computer vision. It aimed to optimize...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/digital-tablet-screen-with-smart-home-controller-wooden-table.jpg",
  },

  {
    id: "28",
    category: "Computer Vision",
    heading: "Safeguarding Communities with Intelligent Surveillance",
    para:
      "A renowned security solutions provider wanted to take their security solution up a notch by capitalizing on the revolutionary intelligent technologies like AI.\n\nVisionary surveillance is one of...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/mobile-control-and-video-surveillance-1040x555%201.jpg",
  },

  

  {
    id: "29",
    category: "Gaming",
    heading: "Elevating RPGs with Emotionally Responsive NPCs",
    para:
      "We collaborated with our client to enrich their role-playing games (RPGs) by developing special NPCs (non-playable characters) to deepen immersion and narrative engagement.\n\nThese NPC  were special...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/[fetchpik.com]-high-mCWR93BJgF.jpg",
  },

  {
    id: "30",
    category: "Gaming",
    heading: "Stealth Gaming Goes Smart with Hey Buddy’s Adaptive AI",
    para:
      "Our partner game development company wanted to utilize AI for their stealth gaming genre. They wanted to adaptive solution that allowed the game elements to respond to player behavior in real-time...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/[fetchpik.com]-high-AjGNmwUEYJ.jpg",
  },

  {
    id: "31",
    category: "Custom Software",
    heading: "Inventory Management Revolution:From Stagnant Stocks to Streamlined Success",
    para:
      "An inventory-based firm faced significant challenges with a low-performing inventory management system, inaccurate stock levels, and inefficiency in order management. These issues led to frequent...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Group%201261152731.jpg",
  },
  

  {
    id: "32",
    category: "Custom Software",
    heading: "Ushering Digital Innovation for an Excellent Learning Experience",
    para:
      "The client wanted us to develop a robust e-learning platform that provides various digital options including interactive learning sessions. The platform needed to be equipped with features like...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/dl.beatsnoop.com-3000-rfW3IPSOwL.jpg",
  },

  {
    id: "33",
    category: "Custom Software",
    heading: "Enhancing Student Performance by Data-Driven Insights",
    para:
      "The test scores of one of the prestigious educational institutions were declining. They needed a specialized learning solution. The system should be able to track student progress and identify at-risk...",
      link: "/pages/casestudies/",
      cardimg:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/dl.beatsnoop.com-3000-koq3lAWuK5.jpg",
  },
];

const Page = () => {
  const [category, setCategory] = useState("");

  const toggleCategory = (categ) => {
    setCategory(categ);
  };
  return (
    // <div className=" bg-[url('https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Ellipse1.png')] bg-no-repeat lg:bg-cover bg-[center_top_0rem]">
    <div className="blogsContainer  "  >
      <div className="readOurBlog">
        <p className="text-3xl lg:text-[4vw] font-semibold">Case Studies</p>
        <p className="text-md w-[90%] lg:text-[2vw] lg:w-[65vw]">
        See how our innovation, creativity, and the right expertise rendered
        the best results for our clients.
        </p>
      </div>
      <Image
        loading="lazy"
        width={10}
        height={450}
        className="read-blog-svg mb-[100px] lg:mb-[150px] w-[100%] lg:w-[80%] mx-auto"
        style={{padding:"0"}}
        alt="No-img"
        src="/read-blog.svg"
      />

      <div className="blogsWithCategories gap-[50px] lg:gap-[100px] w-[90%] lg:w-[80%] mx-auto" style={{padding:"0",margin:"0"}}>
        <div className="blogCategories gap-[25px] lg:gap-[50px]" style={{padding:"0",margin:"0"}}>
          <p className="text-white font-bold text-xl lg:text-[2vw]  ">
          Case Studies
          </p>
          
          <div className=" flex gap-4 md:gap-6  w-[100%]  flex-start flex-wrap   items-center text-white md:text-[1em] font-semibold">
          
            <button
              onClick={() => toggleCategory("")}
              className={category === "" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              All
             
              <span className="line"></span>
              
            </button>
            
          
            <button
              onClick={() => toggleCategory("AR")}
              className={category === "AR" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              AR
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("3D")}
              className={category === "3D" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              3D
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("CGI")}
              className={category === "CGI" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              CGI
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("AI")}
              className={category === "AI" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              AI
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("VR")}
              className={category === "VR" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              VR
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("Gaming")}
              className={category === "Gaming" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              Gaming
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("Custom Software")}
              className={category === "Custom Software" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              Custom Software
              <span className="line"></span>
            </button>
            <button
              onClick={() => toggleCategory("Computer Vision")}
              className={category === "Computer Vision" ? "btnShape btnShapeClicked"  : "btnShape"}
            >
              Computer Vision
              <span className="line"></span>
            </button>
          </div>
        </div>

        <div className="allBlogs  mx-auto">
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
              : category === "Computer Vision"
              ? data
                  .filter((study) => study.category === "Computer Vision")
                  .map((study, index) => (
                    <CaseStudyCard key={index} {...study} />
                  )):category === ""
              ? data.map((study, index) => (
                  <CaseStudyCard key={index} {...study} />
                ))
              : null}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Page;
