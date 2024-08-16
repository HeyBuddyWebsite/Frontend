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
      heading:"Get Top-notch Renders with Our Leading 3D Modelling Services",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/3dmodellingservice/banner.jpeg",
      text:"Hey Buddy, India’s leading 3D modelling services provider offers high-quality 3D models specific to your project needs at the right time, and at a reasonable cost.",
    },
    
     checklist :[
      {
        id:1,
        title: "3D Assets",
      },
      {
        id:2,
        title: "3D Characters",
      },
      {
        id:3,
        title: "3D Environments",
      },
      {
        id:4,
        title: "MetaHuman Creations",
      },
      {
        id:5,
        title: "3D Hard Surface ",
      },
      {
        id:6,
        title: "3D Animation",
      },
    ],

    gridSection1:{
      heading: "Get 3D Models Your Project Needs and Your Desire",
      para:
        "With our large team of experienced 3D modellers, we have a skillset to suit every business. Whether you need Toon (Cel-Shaded) or hyper-realistic 3D models, High-poly or low-poly count we can develop anything and everything exactly the way you want for your project.",
     list : [
        {
          id: "1",
          heading: "High Quality, Faster Turnaround",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
          para: "With an experienced team that has worked on various projects, you get high-quality renders at affordable prices and in less time. ",
        },
        {
          id: "2",
          heading: "Mitigate Risk with Experience",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
          para: "Let the experienced team share your responsibilities and tackle challenges on your behalf so that you work with complete peace of mind ",
        },
        {
          id: "3",
          heading: "Technological Advancements",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
          para: "Expand your capability with the most advanced tools and technologies in the industry. Get customised 3D model development for your projects that set standards.",
        },
        {
          id: "4",
          heading: "Access to Specialized Talent",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
          para: "On-board the best talents in the industry for 3D modelling services by expanding your search to the global level.",
        },
        {
          id: "5",
          heading: "Focus on Core Competencies",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
          para: "When experts are taking care of your 3D modelling requirement, your in-house team concentrates on core and critical tasks.",
        },
        {
          id: "6",
          heading: "Ease of Scalability",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Scale up or down as per your business requirements with ease. Say goodbye to the hiring and training challenges of additional staff.",
        },
      ],
      },

      section3:  {
        heading:"Hey Buddy: One-stop Destination for all 3D Modelling services",
        para:"No tiring search for different vendors for different services, Hey Buddy’s comprehensive 3D modelling services get all you need. From AR/VR and CGI to product visualisation and animation, we offer complete 3D development services for every business and every project. Just partner and procure.",
        list:[
          {
            title: "3D Character Development",
            description:
              "Our experienced, skilled and creative 3D artists and modellers produce visually impressive 3D characters just for your project, brand and storytelling      ",
            img:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20character%20development.jpg"
            ,
          },
          {
            title: "3D Asset Development",
            description:
              "We develop meticulously detailed, accurate, and high-quality 3D assets that perfectly fulfil your project's visual and functional needs.  ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20assets%20development.jpg",
          },
          {
            title: "3D Environment Development",
            description:
              "We create deeply immersive environments that captivate your audience with ultra-realistic visuals and perfectly fit your project needs.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20envoirnment%20development.jpg",
          },
          {
            title: "3D Hard Surface Modelling",
            description:
              "We create detailed 3D models of objects or structures following your specific guidelines and ensure timely delivery for uninterrupted project operations.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20hardsurface%20dev.jpg"
          },
          {
            title: "3D Animation Services",
            description:
              "Our client-centric approach ensures our 3D animations and meticulous rigging convey your vision accurately while captivating the audience with high-quality visuals.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20animation%20dev.jpg"
          },
          {
            title: "3D MetaHuman Creation Services",
            description:
              "Get photorealistic digital humans with easy customisation, We create Metahumans for virtual productions, games, or all other applications. ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20development/3d%20metahuman%20service.jpg",
          },
        ],},
        
        section4:{
          heading:"Customized 3D Model Development for Every Project and Every Business",
          para:"Hey Buddy, offering tailored solutions for your projects. Our versatile 3D development team perfectly adapts outcomes to your domains and brings your vision to life with precision and creativity.",
          checklist:[
            {
              id:1,
              title: "Immersive Experiences",
            },
            {
              id:2,
              title: "Animation",
            },
            {
              id:3,
              title: "CGI",
            },
            {
              id:4,
              title: "Product Visualization",
            },
            {
              id:5,
              title: "Product Animation",
            },
            {
              id:6,
              title: "Games",
            },
          ],
          sliderlist:[
            {
              id: "1",
              heading: "AR/VR Experiences",
              imgurl: "",
              para: "Our expert 3D modelers enrich the visual appeal of your AR/VR projects, creating deeply immersive environments and characters for a truly interactive journey.",
            },
            {
              id: "2",
              heading: "Animation",
              imgurl: "",
              para: "Whether for promotional videos, educational content, or entertainment, our skilled 3D artists craft visually impressive animations, breathing life into your narratives.",
            },
            {
              id: "3",
              heading: "Computer-generated imagery (CGI)",
              imgurl: "",
              para: "Our CGI-specialist 3D modellers bring stunning visuals for your films, advertisements, and various digital media to add gravity to your storytelling and brand communication.",
            },
            {
              id: "4",
              heading: "Product Visualisation",
              imgurl: "",
              para: "Our 3D development team delivers lifelike visualisations for you to showcase products with ultra-realistic visuals and gain an edge in your marketing efforts for unbeatable success.",
            },
            {
              id: "5",
              heading: "Product Animation",
              imgurl: "",
              para: "Our team synergizes with yours to produce compelling product animations and dynamic product demonstrations that impactfully showcase your product’s functionality and features.",
            },
            {
              id: "6",
              heading: "Games",
              imgurl: "",
              para: "Our game-crazy 3D modellers develop characters, environments, assets and other customised 3D models for Unity, Unreal or your specific game engine.",
            },
          ]
        },

        section5:{
          heading:"Our Streamlined 3D Development Process",
          para:"Project after project, we have refined our 3D development process to deliver creativity and innovation to your project. We understand the importance of a transparent and collaborative workflow, which is reflected in our process.",
          list:[
            {
              id:1,
              heading:"Consultation",
              para:"We initiate with a thorough consultation, grasping the intricacies of your project, goals, and expectations. This clear communication ensures that our plans and processes align with your vision, and lays a strong foundation for a successful collaboration."
            },
            {
              id:2,
              heading:"Conceptualization and Planning",
              para:"Our skilled team transforms ideas into a consolidated plan, outlining your project scope, timelines, and key milestones. This sets the roadmap for the project while ensuring transparency and clarity in the development process."
            },
            {
              id:3,
              heading:"Design and Development",
              para:"We utilize advanced tools and technologies in our design and development process. Here, we aim to get you high-quality assets that not only meet your project's visual and functional requirements but also exceed your expectations."
            },
            {
              id:4,
              heading:"Client Feedback and Revisions",
              para:"Staying true to our collaborative approach toward 3D development, we welcome your feedback and suggestions in this step. Accordingly, we make necessary revisions so that your input shapes the final product, guaranteeing satisfaction."
            },
            {
              id:5,
              heading:"Quality Assurance",
              para:"Before we finally deliver, the resulting 3D models undergo rigorous quality checks to ensure that our 3D models meet your project standards. We deliver polished, error-free 3D assets that meet your project's visual and functional needs."
            },
            {
              id:6,
              heading:"Timely Delivery",
              para:"With our unwavering commitment, we deliver your 3D assets with high regard to timelines. We ensure this by utilizing our reliable development process and high professionalism, the two most essential ingredients for your project's success."
            },
          ],
        },

        gridSection2:{
          heading: "Why Choose Hey Buddy",
          para:
          "Partner with Hey Buddy if you want quality work from experts. We deliver the best outcome while completely adhering to timelines and ensuring that you get the best ROI every time.",
          list : [
            {
              id: "1",
              heading: "Quality by Expert",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "Our dedicated and experienced team of 3D modellers has 200+ members with a variety of experience delivering the industry-leading quality for your projects.",
            },
            {
              id: "2",
              heading: "Timely Deliveries",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "At Hey Buddy, we strictly adhere to your project timelines with our streamlined 3D development process that churns out high-quality results in a shorter time.",
            },
            {
              id: "3",
              heading: "Communication Clarity",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "We understand the criticality of clear communication and keeping you informed. We use the latest project management tool for data-driven and agile decision-making by you.",
            },
            {
              id: "4",
              heading: "Flexible and Cost-Effective Models",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "Choose from a variety of outsourcing models that best suit your project needs. Get the best quality 3D development services at the most reasonable prices.",
            },
            {
              id: "5",
              heading: "Adherence to Specifications",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "We do not just follow your specifications, we integrate them into the process. So that the outcomes automatically align with your specific project needs.",
            },
        
            {
              id: "6",
              heading: "Portfolio",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "We have a strong portfolio packed with diverse and successful 3D projects that helped our clients fare well in there industry and achieve their business goals.",
            },
          ],
          },

          section7:{
            heading:"Success Stories with Hey Buddy 3D Modelling Services",
            para:"",
            list:[
              {
                id: "1",
                heading:
                  "Real-Estate: Property Visualization for Better Customer Engagement",
                // imgurl: "",
                para: "Our client, a real-estate firm, required realistic 3D models for their new residential project. We used Autodesk 3ds Max and VRay to deliver highly detailed interior and exterior renders to aid them in presentations and marketing materials.This enhanced the customer’s engagement and understanding of our client's real-estate project, leading to faster sales and a more effective and streamlined sales process.",
              },
              {
                id: "2",
                heading: "E-Commerce: Showcase Products in the Best Light",
                // imgurl: "",
                para: "An online furniture retailer wanted high-quality 3D models for their product listings. We used Blender to produce photorealistic 3D models of their furniture collection to enhance the online shopping experience of their customers and reduce the need for physical prototypes.As a result, our client attained increased customer satisfaction, reduced returns, and improved online sales through visually appealing and accurate representations of products.",
              },
              {
                id: "3",
                heading:
                  "Games: High-quality Character Modeling for Unforgettable Games experience",
                // imgurl: "",
                para: "One of our clients, a game development studio, needed diverse 3D character models for their upcoming Games title. We employed ZBrush and Maya for character design and animation, delivering unique and visually appealing assets that enhanced the game's overall aesthetic. Thus, we proudly contributed to the game's success by providing captivating characters, that garnered positive reviews and commercial success.",
              },
          
            ],
          },

          section8:{
            heading:"Hey Buddy Advanced Tech-stack for High-Quality 3D Model Development",
            para:"",
            btnlist:[
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
            ],
            imglist:[

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
          },

          section9:{
            heading:"How Clients Rate Our 3D Modeling Services",
            para:"Feature testimonials from satisfied clients who have utilised your game development services. Include their feedback on your professionalism, creativity, and the quality of your work.",
            list:[
              {
                id: 1,
                content:
                  "Here is my opinion based on my experience, I have really enjoyed working with the game development team. The team is amicable, creative and understanding.",
                // position: "Head of VP at Disney Hotstar",
                name: "Zan Syed",
              },
              {
                id: 2,
                name: "Sarah",
                content:
                  "Thank you very much! An amazing job done by buddies what I like to call the team that exceeds all expectations. I am glad that I trusted you guys with the work.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: "Ankit",
                content:
                  "I loved working with Hey Buddy and the way my VR project was handled, I consider this company as one of the best metaverse and game company in India.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 4,
                name: "Riyahi",
                content:
                  "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 5,
                name: "Jeremy",
                content:
                  "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 6,
                name: "Bhaskar",
                content:
                  "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
                // position: "Head of VP at Disney Hotstar",
              },
            ]
          },

          section10:{
            heading:"FAQs",
            para:"",
            list:[
              {
                id:1,
                ques:"What types of projects can benefit from Hey Buddy's 3D modelling services?",
                ans:"Hey Buddy's 3D modelling services contribute to a wide range of projects, including AR/VR, animations, CGI, product visualizations, product animations, and game development using Unity and Unreal Engine."
              },
              {
                id:2,
                ques:"How does Hey Buddy ensure the security and confidentiality of client projects?",
                ans:"We prioritize client confidentiality and security through robust measures, including signed NDAs, restricted access to project data, and secure file transfer protocols."
              },
              {
                id:3,
                ques:"What is the typical turnaround time for 3D modelling projects at Hey Buddy?",
                ans:"Turnaround times vary based on project complexity and scope. However, we strive for efficient timelines, ensuring timely deliveries without compromising quality."
              },
              {
                id:4,
                ques:"What is Unity 3D development, and how can it benefit my Games or interactive project?",
                ans:"Unity 3D development involves creating interactive experiences, primarily in Games. It offers a versatile platform for developing immersive games and applications across multiple platforms."
              },
              {
                id:5,
                ques:"Can clients provide input during the 3D modelling process, and how is feedback handled?",
                ans:"Yes, client input is encouraged. We have a collaborative approach, with dedicated points for client feedback. Revisions are made based on client suggestions to ensure the final product aligns with their vision."
              },
              {
                id:6,
                ques:"What sets Hey Buddy apart from other 3D modelling service providers?",
                ans:"Hey Buddy stands out due to its comprehensive suite of services covering various industries, a transparent and collaborative workflow, a client-centric approach, and a commitment to delivering high-quality, visually impressive 3D assets."
              },
              {
                id:7,
                ques:"Does Hey Buddy provide Unity 3D development services, and what types of projects can be developed using Unity?",
                ans:"Yes, Hey Buddy offers Unity 3D development services. Projects developed using Unity include games, simulations, virtual tours, training applications, and various interactive experiences across diverse industries."
              },
              {
                id:8,
                ques:"What is hard surface modelling, and how does it differ from other 3D modelling techniques?",
                ans:"Hard surface modelling focuses on creating detailed 3D models of inanimate objects or structures, differing from organic modelling that emphasizes natural forms like characters or creatures."
              },
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
