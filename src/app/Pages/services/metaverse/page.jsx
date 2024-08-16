"use client";
import "../../../../styles/Font.css";
import React, { useEffect, useState, useRef } from "react";
import Gridsection from "@/components/Gridsection";
import Faqsection from "@/components/servicescomp/3dmodelingcomp/Section10";
import Pagenation from "@/components/servicescomp/3dmodelingcomp/Section8";
import Mixsection from "@/components/servicescomp/3dmodelingcomp/Section4";
import Timelinecomp from "@/components/servicescomp/3dmodelingcomp/Section5";
import Motionslide from "@/components/servicescomp/3dmodelingcomp/Section3";
import { AiFillCheckCircle } from "react-icons/ai";
import { useAnimation } from "framer-motion";
import Herosection from "@/components/servicescomp/3dmodelingcomp/Section1";
import Bottomclient from "@/components/servicescomp/3dmodelingcomp/Section9";
import Section7 from "@/components/servicescomp/3dmodelingcomp/Section7";
import ContactModal from "@/components/ContactModal/ContactModal";

const page = () => {
  const [contactusModal, setcontactusModal] = useState(false);

  const handlecontactusModal = () => {
    setcontactusModal(true);
  };
  const handleClose = (e) => {
    if (e.target.id === "sidebar") setcontactusModal(false);
  };
  const handleModalClose = () => {
    setcontactusModal(false);
  };

  const controls = useAnimation();
  const ref = useRef();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the container is in the viewport
    const container = document.getElementById("fade-in-container");
    if (container) {
      const rect = container.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
      if (isInViewport) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const textAnimation = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const textAnimation1 = {
    hidden: { opacity: 0, y: "0%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 5.5, ease: "easeOut" },
    },
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

  

  const data={
    section1:{
      heading:"Hey Buddy: Best Metaverse Development Company in UAE, US, & India",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/8395c882402345f5068d6ffe744b3aeb.png",
      text:"Hey Buddy is a leading name in the domain of the metaverse. We have a large team of experienced developers ready to collaborate and deliver innovative metaverse solutions to mesmerize your audience. With our globally renowned Metaverse development services, get scalable and custom solutions that merge with your existing system to add lucrative new revenue streams.",
    },
    
     checklist :[
      {
        title: "Metaverse/NFT Marketplace",
      },
      {
        title: "Metaverse Games",
      },
      {
        title: "Digital Twin",
      },
      {
        title: "Metaverse Avatar",
      },
    ],

    gridSection1:{
      heading: "Why your next project should be in the Metaverse?",

      para:
      "Entering into the metaverse will bring your business unprecedented possibilities.",
      list :[
        {
          id: "1",
          heading: "Reach Audience Worldwide",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
          para: "Have a borderless presence. Engage a huge audience around the world.       ",
        },
        {
          id: "2",
          heading: "Build Strong Brand Connections",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
          para: "Get higher engagement with immersive and interactive experiences.      ",
        },
        {
          id: "3",
          heading: "Innovative Marketing Opportunities",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
          para: "Add a unique flavor to your brand promotion with Metaverse ",
        },
        {
          id: "4",
          heading: "Facilitates Seamless Collaboration",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
          para: "Ensure better collaboration amongst your teams in virtual environments      ",
        },
        {
          id: "5",
          heading: "New Revenue Streams",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
          para: "Offer novel virtual offerings that attract users and build new markets.",
        },
        {
          id: "6",
          heading: "Make Targeted Decision",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Gather detailed data on user interactions and draw deep insights.      ",
        },
        {
          id: "7",
          heading: "Achieve High Productivity",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Offer immersive hands-on training experience for better outcomes      ",
        },
        {
          id: "8",
          heading: "Save to Invest      ",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Save costs in travel, physical infrastructure, event hosting, and more.      ",
        },
        {
          id: "9",
          heading: "Limitless Innovation      ",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Utilise Metaverse possibilities for a competitive edge and market leadership.      ",
        },
        {
          id: "10",
          heading: "Extended Brand Presence",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Go beyond existing platforms with a futuristic Metaverse touchpoint.      ",
        },
        {
          id: "11",
          heading: "Build Your Community",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Create a sense of belonging and loyalty among your audience.      ",
        },
        {
          id: "12",
          heading: "Future-Proof your Business      ",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Stay relevant in a rapidly evolving digital landscape.     ",
        },
      ],
      },

      section3:  {
        heading:"Possibilities for You With Our Metaverse Development Services",
        // para:"",
        list:[
          {
            title: "Metaverse Consultation & Analytics",
            description:
              "Understand the possibilities specific to your business. Define goals, plan a meticulous strategy, and track performance with our expert consultation and analytics services.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Consultation%20%26%20Analytics.jpg",
          },
          {
            title: "Metaverse Integration & Optimisation",
            description:
              "We integrate and optimize metaverse into your existing systems with seamless interoperability and data synchronization, ensuring a cohesive digital user experience.       ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Integration%20%26%20Optimisation.jpg",
          },
          {
            title: "Metaverse Training & Simulation",
            description:
              "We offer Metaverse training programs and simulations for industries across the spectrum. With realistic training scenarios for your trained get empowered skills and decisions.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Training.jpg",
          },
          {
            title: "Custom Metaverse Development    ",
            description:
              "For your specific business requirement, we offer custom metaverse development. You successfully meet your business goals with the required unique functionalities or features.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Custom%20Metaverse.jpg",
          },
          {
            title: "Metaverse 3D Environment Development    ",
            description:
              "We develop 3D environments for your every need. Whether you want a digital replica of the real world or a digital-only infrastructure in Metaverse, our team delivers both.       ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%203D%20Environment%20.jpg",
          },
          {
            title: "Metaverse Digital Twin Development    ",
            description:
              "We replicate real-world complex entities and their functionalities in the digital environment. Thus, you get a better understanding, of monitoring, collaboration, and optimization.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Digital%20Twin.jpg",
          },
          {
            title: "Metaverse Avatar Development   ",
            description:
              "For engaging user experiences, we develop 3D avatars with human-like personalized appearances, expressions, and movements on par with real people.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Avatar.jpg",
          },
          {
            title: " Art and Games Metaverse Development    ",
            description:
              "We design and develop immersive games and entertainment experiences with interactive storylines to attract a huge community of art and adventure enthusiasts to your metaverse.       ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Art%20and%20Games%20Metaverse.jpg",
          },
          {
            title: "Metaverse Events     ",
            description:
              "We help you build business communities. Organize social gatherings like concerts and shows or host virtual business events like conferences and seminars.  ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Metaverse%20Events%20.jpg",
          },
          {
            title: "Metaverse Marketplace Development   ",
            description:
              "Attract the global audience with your captivating marketplace marketplace. We build immersive marketplaces for you with complete security and seamless transactions.     ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.jpg",
          },
          {
            title: "NFT Metaverse Development    ",
            description:
              "We develop NFT Metaverse or integrate NFTs in your existing Metaverse. We help you tokenize and capitalize on digital assets and other collectibles for roof-shattering returns.     ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/NFT%20Metaverse.jpg",
          },
          {
            title: "Customised Rental Metaverse Development    ",
            description:
              "Test your Metaverse strategy without spending a fortune. Get custom Metaverse spaces on rent. Organize meetings, NFT exhibitions, product launches, showrooms, and much more.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Metaverse_develpoment/Customised%20Rental%20Metavers.jpg",
          },
        ],},
        
        section4:{
          heading:"Highlights of Metaverses Built by Hey Buddy",
          para:"At Hey Buddy, we ensure that your Metaverse has the most powerful futuristic features.",
          checklist:[
            {
              title: "Full-stack Programming",
            },
            {
              title: "Smart Contracts",
            },
            {
              title: "Payments Wallet",
            },
            {
              title: "Decentralized Networks",
            },
          ],
          sliderlist:[
            {
              id: "1",
              heading: "Interoperable Standards",
              imgurl: "",
              para: "We ensure the interoperability of your metaverse by following the industry standards comprising elements.",
            },
            {
              id: "2",
              heading: "Smart Contract",
              imgurl: "",
              para: "We infuse smart contracts for transparent and permissionless transactions introducing automation and efficiency.",
            },
            {
              id: "3",
              heading: "Decentralized Network",
              imgurl: "",
              para: "We facilitate decentralized data transmission for your Metaverse project on a high-bandwidth, decentralized network.",
            },
            {
              id: "4",
              heading: "Full-stack Programming",
              imgurl: "",
              para: "We use open programming language standards to offer front-end and back-end development.",
            },
            {
              id: "5",
              heading: "Payment Wallets",
              imgurl: "",
              para: "We integrate feature-rick crypto wallets and gateways for a globally convenient payment system for your user.",
            },
            {
              id: "6",
              heading: "Continuous Support Upgrade",
              imgurl: "",
              para: "We provide maintenance and upgrade services to ensure that your network, nodes, and smart contracts never face downtime.",
            },
          ],
        },

        section5:{
          heading:"Hey Buddy: Metaverse Development Process",
          para:"Our years of commitment to deliver perfection have resulted in a streamlined and evolved Metaverse Development Process.",
          list:[
            {
              id: 1,
              heading: "Ideation Phase",
              para: "Our experts collaborate closely with your team to understand your vision, goals, and audience. Then through power-packed brainstorming sessions, we craft a comprehensive blueprint to meet your expectations."
            },
            {
              id: 2,
              heading: "Design & Prototyping",
              para: "Our experienced designers create immersive environments and interactive elements, bringing your concept to life. With rapid prototyping, we ensure your Metaverse project meets your standards."
            },
            {
              id: 3,
              heading: "Development & Implementation",
              para: "Our seasoned developers utilize cutting-edge technologies and build a robust foundation for your Metaverse project. By deploying agile methodologies, we infuse flexibility and adaptability throughout the development process."
            },
            {
              id: 4,
              heading: "Testing & Refinement",
              para: "We execute rigorous testing to ensure a glitch-free Metaverse experience for your audience. We invite your feedback and fine-tune every aspect to refine the experience for high-class performance and impressive user engagement."
            },
            {
              id: 5,
              heading: "Launch & Beyond",
              para: "Lastly, we guide you through a successful launch and we continue to support you in the post-launch phase. Hence, not only do we ensure seamless integration and scalability but also time-bound troubleshooting."
            },
            {
              id: 6,
              heading: "Timely Delivery",
              para: "With our unwavering commitment, we deliver your 3D assets with high regard to timelines. We ensure this by utilizing our reliable development process and high professionalism, the two most essential ingredients for your project's success."
            }
          ],
        },

        gridSection2:{
          heading: "Get Started Today: Our Metaverse Project Onboarding Process",
          para:"",
          list :[
            {
              id: "1",
              heading: "Contact Us",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "Fill out the NDA-protected contact form. Book a calendar and schedule a meeting.",
            },
            {
              id: "2",
              heading: "Consult",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "Get a dedicated session with our Metaverse expert to get clarity on any Metaverse aspect.",
            },
            {
              id: "3",
              heading: "Get a Cost Estimate",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "Our experts will then share a project proposal with a stipulated budget and timeline.",
            },
            // {
            //   id: "4",
            //   heading: "Project Onboarded",
            //   imgurl:
            //     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
            //   para: "Hey Buddy experts take over your project",
            // },
            // {
            //   id: "5",
            //   heading: "Commitment to Quality",
            //   imgurl:
            //     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
            //   para: "Quality is non-negotiable at Hey Buddy. Our rigorous and perfected-over-year development process ensures that every aspect of your game meets the highest standards. Be it graphics, gameplay, performance or experience, we prioritise excellence and your satisfaction.",
            // },
            // {
            //   id: "6",
            //   heading: "Transparent Communication",
            //   imgurl:
            //     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
            //   para: "By working with clients across industries and scales, we understood the gravity of transparent communication. Be assured to experience transparent communication, timely updates, and a responsive team to keep you informed and involved.",
            // },
          ],
          },

          section7:{
            heading: "Global Success Stories with Hey Buddy Metaverse Development Solutions",
            para:
            "We have served a range of feature-rich, creative, and engaging metaverse solutions for our clients across industries and countries.",

            list:[
              {
                id: "1",
                heading:
                  "Innovative Metaverse Solution to Train Healthcare Staff in the US",
                // imgurl: "",
                para: "A major healthcare organization in the US sought Hey Buddy's metaverse services to enhance medical training for its staff. We developed a Metaverse platform that simulated medical procedures and emergency scenarios. The immersive experience allowed healthcare professionals to practice in a risk-free virtual environment, improving their skills and decision-making. The healthcare organization reported a significant improvement in staff readiness and performance. We met the client's expectations for innovative training but also contributed to a more prepared and efficient healthcare workforce.",
              },
              {
                id: "2",
                heading: "Engaging Expo in Metaverse for users in UAE",
                // imgurl: "",
                para: "A technology consortium in the UAE wanted to host an expo in Metaverse to showcase the latest tech innovations and foster collaboration within the region. We developed a Metaverse expo platform with interactive booths, live demonstrations, and networking features. The virtual expo received widespread participation from tech enthusiasts, startups, and established companies across the UAE.  It facilitated seamless engagement among visitors, participants, and our client, building connections for long-term growth and collaboration within the UAE's technology sector.",
              },
              {
                id: "3",
                heading:
                  "Scalable Indian E-commerce Metaverse Platform with Seamless Integration",
                // imgurl: "",
                para: "A leading e-commerce company in India wanted to explore metaverse integration to enhance its online shopping experience. We extended our expertise to develop a shopping platform in the Metaverse that allowed users to explore products virtually, try on virtual clothing on their avatar, and engage in social shopping experiences.  The platform seamlessly integrated with the existing e-commerce infrastructure and witnessed increased user engagement and boosted online sales. Yet again we served innovative, creative, and scalable metaverse experiences that made our client eclipse the market.",
              },          
            ],
          },

          section8:{
            heading:"Metaverse Tech Stack - Platforms, Technology and Tools",
            para:"Hey Buddy‘s always learning teams possess expertise on the state-of-the-art technology and tools required for futuristic Metaverse development",
            btnlist:[
              {
                id:1,
                name:"Experience Development",
              },
              {
                id:2,
                name:"Platforms",
              },
              {
                id:3,
                name:"Designing",
              },
              {
                id:4,
                name:"3D Modeling",
              },
              {
                id:5,
                name:"Analytics",
              },
            ],
            imglist:[
              {
                id: 1,
                name:"Experience Development",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/blender.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Autodesk%20Maya.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/3ds%20max.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Z%20brush.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Cinema%204D.svg"
                ]
              },
              {
                id: 2,
                name:"Platforms",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Houdini.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Substance%20Painter.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Mudbox.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/SketchUp.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Rhinoceros%203D.svg"
                ]
              },
              {
                id: 3,
                name:"Designing",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Unity3D.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Unreal%20Engine.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Photoshop.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Marvelous%20Designer.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/3D%20coat.svg"
                ]
              },
              {
                id: 4,
                name:"3D Modeling",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Marmoset%20Toolbag.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/KeyShot.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/SolidWorks.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Modo.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Daz%203D.svg"
                ]
              },
              {
                id: 5,
                name:"Analytics",
                images: [
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Marmoset%20Toolbag.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/KeyShot.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/SolidWorks.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Modo.svg",
                  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Daz%203D.svg"
                ]
              }
            ],         
          },

          section9:{
            heading:"How Clients See Us as Metaverse Development Company",
            // para:"",
            list:[
              {
                id: 1,
                content:
                  "Hey Buddy surpassed our expectations with their phenomenal metaverse development services company. Working with them felt like a true partnership. They not only understood our vision but brilliantly translated it into an immersive metaverse experience. We earnestly recommend Hey Buddy for their understanding of the requirement and timely delivery of the exact solution.",
                // position: "Head of VP at Disney Hotstar",
                name: "Mark T.",
              },
              {
                id: 2,
                name: "Susan A",
                content:
                  "Choosing Hey Buddy as our metaverse development services company proved to be the right decision for our business. Their team’s expertise in metaverse and dedication to deliver great solutions were apparent from the start. They showcase a high collaborative spirit that matches our working culture. This made the entire process greatly efficient but enjoyable. We really appreciate and recommend Hey Buddy for their innovative and creative solutions and client-centric and reliable approach for metaverse development.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: " Michael R",
                content:
                  "Hey Buddy is the metaverse development agency we partnered for our recently concluded metaverse project. And all thanks to our partners, as it is because of their expertise and commitment that secured the timely completion of our project while ensuring great quality. Their agility and responsiveness are what we were looking for in our partner and with Hey Budd’s dynamic nature, we got exactly that.",
                // position: "Head of VP at Disney Hotstar",
              },
              // {
              //   id: 4,
              //   name: "Emily C",
              //   content:
              //     "Hey Buddy is the metaverse development agency that understands the pulse of American Metaverse businesses. Their commitment to delivering advanced solutions while fostering a collaborative environment truly sets them apart from other Metaverse agencies. Working with Hey Buddy was a great experience blended with professionalism and creativity..",
              //   // position: "Head of VP at Disney Hotstar",
              // },
             
            ]
          },

          section10:{
            heading:"FAQs",
            // para:"",
            list:[
              {
                id: 1,
                ques: "What criteria should I consider when choosing the top metaverse development companies for my project?",
                ans: "To identify the best metaverse development companies, consider the following factors: Their expertise in immersive technologies, portfolio showcasing successful projects, client reviews, and their proficiency in integrating advanced solutions. Evaluating these aspects will help you find a top-notch metaverse development company that aligns with your project goals."
              },
              {
                id: 2,
                ques: "What distinguishes the top 10 metaverse development solutions from others in the market?",
                ans: "The top 10 metaverse development solutions are characterized by their versatility, scalability, and seamless integration capabilities. These solutions empower businesses to create immersive experiences effortlessly, offering a comprehensive toolkit for diverse metaverse applications, from virtual events to interactive training programs."
              },
              {
                id: 3,
                ques: "Which metaverse development software is considered the best for creating interactive and engaging virtual experiences?",
                ans: "Choosing the best metaverse development software depends on your specific needs. Unity, a top-rated platform, is widely recognized for its versatility, user-friendly interface, and extensive library of assets. It stands out as one of the best choices for crafting immersive metaverse applications."
              },
              {
                id: 4,
                ques: "What defines a top metaverse development studio, and how do I choose the best one for my project?",
                ans: "A top metaverse development studio excels in creativity, technical expertise, and successful project deliveries. When selecting a studio, assess their portfolio, client testimonials, and the diversity of their projects. Studios like [TopStudio] stand out for their innovative approach and proven track record in metaverse development."
              },
              {
                id: 5,
                ques: "Why is Unity considered a top choice for metaverse development, and what advantages does it offer?",
                ans: "Unity is a top choice for metaverse development due to its robust features, cross-platform compatibility, and extensive community support. It ranks among the best platforms for creating immersive experiences, making it an ideal choice for developers and businesses venturing into the metaverse landscape."
              },
              {
                id: 6,
                ques: "How does blockchain technology contribute to metaverse development, and which companies are at the forefront of integrating it?",
                ans: "Blockchain plays a pivotal role in securing transactions and enhancing virtual economies within the metaverse. Companies like Hey Buddy are at the forefront of metaverse development, leveraging blockchain for secure and transparent virtual transactions, providing a seamless user experience."
              }
            ]
          }
        
  }

  

  // ----------------------------------------------------------------

  return (
    <div className="w-[100%]  mx-auto relative">
      {/* contact us modal */}
      <ContactModal
        handleClose={handleClose}
        contactusModal={contactusModal}
        handleModalClose={handleModalClose}
      />
      <div>
        {/* --------------------Section-1 ------------------------------------------ */}
        <div className="relative isolate   pt-20   ">
          <Herosection handlecontactusModal={handlecontactusModal} {...data.section1} />

          {data?.checklist &&<div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={textAnimation1}
            className=" py-4 lg:py-6 px-2 lg:px-0 w-[90%] lg:w-[80%]   mx-auto mb-[80px] lg:mb-[150px]"
            style={{borderRadius:"24px",background: "linear-gradient(180deg, #3F8AE2 0%, #2362AB 100%)",border: "1px solid #FFFFFF",boxShadow: "0px 8px 10px -6px #0000001A",
              
            }}
          >
            <div className=" lg:mx-auto lg:text-center w-full justify-center py-2 lg:py-2">
              <ol className="  grid grid-cols-2 md:grid-cols-3 mx-auto lg:w-[80%] gap-x-2  lg:gap-x-4 gap-y-4 lg:gap-y-8 ">
              {data?.checklist?.map((section, index) => (
                  <div key={index} className="  flex items-center justify-start gap-2 text-[#FFFFFF]  " >
                    <san className="flex items-center justify-center w-8 h-8  rounded-full shrink-0 ">
                      {/* &#10004; */}
                      <AiFillCheckCircle className="w-8 h-8 text-[#6FCF97]" />
                    </san>
                    <span>
                      <h3 className="text-[14px] lg:text-[16px] font-bold">
                        {section.title}
                      </h3>
                    </span>
                  </div>
                ))}
              </ol>
            </div>
          </div>}

          {/* -------------------------grid-reuse------------------------------------- */}

          <div >
            <Gridsection {...data.gridSection1} />
          </div>

          {/* ------------------------Section-3-------------------------------------- */}
          <div>
            <Motionslide {...data.section3} />
          </div>

          {/* ----------------------------Section-4---------------------------------- */}
          <div >
            <Mixsection {...data.section4} />
          </div>

          {/* ------------------------Section-5------------------------------------- */}
          <div >
            <Timelinecomp {...data.section5} />
          </div>

          {/* ----------------------------grid-reuse---------------------------------- */}
          <div >
            <Gridsection {...data.gridSection2} />
          </div>

          {/* ----------------------------Section7---------------------------------- */}
          <div>
            {/* <Gridsection listData={List3} textData={Text3} /> */}
            <Section7 {...data.section7} />
          </div>

          {/* ------------------------section-8-------------------------------------- */}
          <div>
            <Pagenation handlecontactusModal={handlecontactusModal} {...data.section8} />
          </div>

          {/* -----------------------Section-9--------------------------------------- */}
          <div>
            <Bottomclient {...data.section9} />
          </div>

          {/* -----------------------------Section-10----------------------------------- */}
          <div>
            <Faqsection {...data.section10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
