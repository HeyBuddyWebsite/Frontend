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
      heading:"Captivates attention that stops time with 3D Billboard Development",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/a6d483f1a99ccb2ee987f98402f0deb3.png",
      text:"Get brand visibility that surpasses any other marketing methodology. Captivate audiences and communicate with the deep messaging power of three dimensional billboards. The future of advertising has arrived and you need to make a move right now.",
    },
    
    //  checklist :[],

    gridSection1:{
      heading: "Why your next campaign should be 3D Out of Home Advertising?",
      para:
        "If you want to lead the market, stand out from competitors and be the top choice of your competitor, you need to be the first mover. 3D outdoor advertising is making a huge buzz with every single ad run on it. Make sure, you don’t get left out.",
     list :   [
      {
        id: "1",
        heading: "Hyper-Engagement",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
        para: "3D corner billboards capture viewer attention like no other advertising. Thus, your message stands out in high-traffic areas and busy intersections.",
      },
      {
        id: "2",
        heading: "Long-lasting Memorability",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
        para: "By capturing maximum senses, 3D illusion billboards leave a lasting impression on your audiences.",
      },
      {
        id: "3",
        heading: "Wide Impact",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
        para: "The uniqueness and novelty of Anamorphic 3D billboards develop an emotional connection with your customers.",
      },
      {
        id: "4",
        heading: "Innovation",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
        para: "These amazing 3D billboards break the mold, showcasing your brand at the forefront of innovation and unique capabilities.",
      },
      {
        id: "5",
        heading: "Clear Communication",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
        para: "The dynamic and eye-catching three-dimensional visuals not only catch eyeballs but also communicate your brand message loud and clear.",
      },
      {
        id: "6",
        heading: "Higher Conversions",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
        para: "The powerful 3D billboard qualities lead to developer connection on a deeper cognitive level with the audience. Result: higher conversions.",
      },
    ],
      },

      section3:  {
        heading:"Hey Buddy - leading 3D Billboard Company for Next-Gen Services",
        para:"We offer a comprehensive suite of 3D development services to help you grab the opportunity. Engage with your audience like never before and none another. Present your modernized avatar and get an unmatchable competitive edge with our your 3d led billboard today.",
        list:[
          {
            title: "3D Design and Rendering",
            description:
              "We create visually captivating designs on 3D OOH billboards to powerfully convey your intended message.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3d_billboard/3D%20Design%20and%20Rendering.jpg",
          },
          {
            title: "Concept Development",
            description:
              "We nudge you in the right direction by conceptualizing and developing ideas for your billboard campaigns.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3d_billboard/concept%20dev.jpg",
          },
          {
            title: "Customization",
            description:
              "We mold your 3D billboard designs to meet your business and branding needs and achieve your goals.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3d_billboard/customization.jpg",
          },
          {
            title: "Visualization Services",
            description:
              "We help you assess the impact of your 3D billboard in a particular environment with our visualization services.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3d_billboard/visulaization.jpg",
          },
          {
            title: "Animation and Motion Graphics",
            description:
              "We bring dynamism with live elements to your 3d animated billboards and amplify the impact exponentially.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3d_billboard/Motion%20Graphics.jpg",
          },
          {
            title: "Maintenance and Updates",
            description:
              "For a sustained impact on your 3D billboard advertising, we offer sustained support for maintenance and updates.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3d_billboard/Maintenance%20and%20Updates.jpg",
          },
          {
            title: "Anamorphic Billboard Consultation",
            description:
              "We consult you on the best practices and strategies for powerful 3D billboard advertisements.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3d_billboard/Anamorphic%20Billboard%20consultaion.jpg",
          },
          {
            title: "Compliance and Regulations",
            description:
              "We ensure your 3d commercial billboard complies with local regulations and the latest industry standards.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3d_billboard/Compliance%20and%20Regulations.jpg",
          },
        ],},
        
        section4:{
          heading:"Hey Buddy top 3D billboard company in India, the USA, and UAE ",
          para:"3D billboards are the future of DOOH advertising, hands down!! They are dynamic, immersive, head-turning, and LARGER THAN LIFE. They display three-dimensional elements to the naked eye. No need for 3D glasses or any other aid. This is what makes them stand out and appear as if the 3D content is really a part of the viewer's actual reality, happening right there in real-time. Result: Your advertisement makes a huge impact, bigger than any other marketing campaign, grabbing attention and engaging users.",
          checklist:[
            {
              title: "Eye-catchers - Grab attention in high-traffic areas.",
            },
            {
              title:
                "Memorable Visuals - Power brand recall with striking 3D advertisements.",
            },
            {
              title:
                "Assert Market Leadership - Break free from outdated marketing methods with innovation.",
            },
          ],
          // sliderlist:[],
        },

        section5:{
          heading:"3D Billboard Development Process For Creative Vision Realization",
          para:"Our 3D billboard development process is streamlined to realize your vision with all its creative glory intact.",
          list:[
            {
              id: 1,
              heading: "Conceptualization",
              para: "Our team coordinates with yours and the 3d led screen billboard providers to, brainstorm innovative ideas and align outcomes with your brand message."
            },
            {
              id: 2,
              heading: "Design Expertise",
              para: "We utilize advanced design tools, bringing your concepts to life and carefully curating visuals to create mesmerizing anamorphic effects."
            },
            {
              id: 3,
              heading: "Precision Rendering",
              para: "We employ advanced rendering techniques to capture every detail of your anamorphic 3D design that is crafted with precision by our team."
            },
            {
              id: 4,
              heading: "Real-world Simulation",
              para: "We assess the impact of your upcoming billboard through simulated environments and ensure it brings out the best viewer experience."
            },
            {
              id: 5,
              heading: "Transparency and Collaboration",
              para: "We share drafts and collaborate with you throughout the process, ensuring that the final anamorphic content perfectly aligns with your marketing objectives."
            },
            {
              id: 6,
              heading: "Meticulous Execution",
              para: "We implement the approved outcome with ultimate precision and deliver a flawless anamorphic 3D billboard that is hard to ignore."
            }
          ],
        },

        gridSection2:{
          heading: "Hey Buddy top 3D billboard company in India, the USA, and UAE ",
          para:"Hey Buddy puts your business objective at the forefront and makes sure that your next OOH 3D Billboard campaign attains its full potential.",

          list : [
            {
              id: "1",
              heading: "Creative Vision Realisation",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "With our vast experience and expert team we have developed precision realizing your vision and turning it into a visually stunning anamorphic 3D advertisement.",
            },
            {
              id: "2",
              heading: "Impactful Branding",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "Having worked with brands across industries, we achieve brand representation with a lasting impact and a clear, resonating message that stands out.",
            },
            {
              id: "3",
              heading: "Precision in Execution",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "We assure flawless execution from concept to installation, with utmost precision and attention to detail. Just the way you wanted it.",
            },
            {
              id: "4",
              heading: "Expert Guidance",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "We have a 3D curved screen expert who provides deep insight that leads to a sophisticated outcome needed to catch and hold attention.",
            },
            {
              id: "5",
              heading: "Measurable Impact",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "We help you sharpen your campaign and measure success with tangible results. We craft 3D billboard advertisements for your high brand visibility and engagement.",
            },
            {
              id: "6",
              heading: "Transparent Communication",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
              para: "Right from the start, we keep you informed every step of the way. Our transparent communication keeps you in the loop for a collaborative and smooth process.",
            },
          ],
          },

          section7:{
            heading:"Success Stories with Hey Buddy 3D Billboards Development Service",
            // para:"",
            list:[
              {
                id: "1",
                heading: "Reaching More Eyes 3d Advertising Billboard",
                // imgurl: "",
                para: "One of our clients wanted to enhance their improve their brand awareness. Hey Buddy helped them build a presence and boost brand visibility in a bustling urban area. We designed 3D corner billboards strategically placed at street intersections that maximized exposure and reached more passersby. This resulted in Increased engagement with a noticeable uptick in brand recognition and customer inquiries.",
              },
              {
                id: "2",
                heading: "Striking Visuals, Lasting Impressions",
                // imgurl: "",
                para: "For our client with a presence in the FMCG sector, we developed 3D billboards to make their brand significantly more memorable and be a top-of-the-mind recall when the users are in the aisle. Our team crafted 3D illusion billboards, leveraging the optical tricks of anamorphic advertising for visually stunning and long-lasting effects. The unique visual appeal left an indelible mark on viewers, giving our client significantly high memorability and recall.",
              },
              {
                id: "3",
                heading: "Revamping Brand Image with Innovating Impressions",
                // imgurl: "",
                para: "One of our clients in the BFSI space wants to improve its image as a technologically advanced brand. We developed an amazing 3d cgi billboard to project the brand’s efforts toward technology integration. The innovative approach not only garnered attention but positioned our client as a trendsetter in their industry for utilizing 3D billboards to reach out to their customer.",
              },      
             
            ],
          },

          section8:{
            heading:"Hey Buddy 3D Billboard Development Tech Stack",
            para:"It takes skills and experience to develop traffic-pausing 3D visuals. Here is our tech stack for the same.",
            btnlist:[
              {
                id:1,
                name:"3D Modeling and Animation",
              },
              {
                id:2,
                name:"Graphics Rendering Engines",
              },
              {
                id:3,
                name:"Programming Languages",
              },
              {
                id:4,
                name:"Interactive Development",
              },
              {
                id:5,
                name:"Shader Programming",
              },              
            ],
            imglist:[

  
              {
                id: 1,
                name:"3D Modeling and Animation",
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
                name:"Graphics Rendering Engines",
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
                name:"Programming Languages",
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
                name:"Interactive Development",
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
                name:"Shader Programming",
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
            heading:"What Clients Say About Our Services",
            para:"With DOOH 3D Anamorphic Billboard development service, we are aiming to bring the next evolutionary phase of out-of-home advertising. With multiple 3D billboard projects, we have made significant progress towards this end. See what our clients say:",
            list:[
              {
                id: 1,
                content:
                  "Hey Buddy is a partner that you seek. They took understood our vision with clarity and turned it into a jaw-dropping reality! This is exactly what we were looking for in a partner.  The anamorphic 3D billboard captured our brand essence and left a profound impact on our audience.",
                // position: "Head of VP at Disney Hotstar",
                name: "Jessica M.",
              },
              {
                id: 2,
                name: "Alex R.",
                content:
                  "We had never worked with a partner so collaborative. On top of it they, really know what they do. Working with Hey Buddy was not only a smooth experience but also an inspiring one full of learning how to achieve goals. Their expert guidance and transparent communication made the entire process easy, and productive and provided us with the best 3d billboards.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: "Emily S.",
                content:
                  "Hey Buddy's commitment to deliver with a client-centric approach is highly appreciated. Moreover, when it comes to 3D billboard development they really outshine others with a deep understanding of the technology and technique required to achieve super-realistic realistic 3d billboards. Choosing Hey Buddy was one of the best decisions for our marketing strategy.",
                // position: "Head of VP at Disney Hotstar",
              },
              // {
              //   id: 4,
              //   name: "Riyahi",
              //   content:
              //     "OMG where to start, I have no idea! people are amazing here, very focused and client-oriented. Kudos to the team for delivering the game project on time.",
              //   // position: "Head of VP at Disney Hotstar",
              // },
              // {
              //   id: 5,
              //   name: "Jeremy",
              //   content:
              //     "Best game development company in India, though I am from the United States but never felt that I had hired this company, it was like this is my in-house team.",
              //   // position: "Head of VP at Disney Hotstar",
              // },
              // {
              //   id: 6,
              //   name: "Bhaskar",
              //   content:
              //     "If anyone has a futuristic idea in mind and not finding the way to turn the idea into reality, I would recommend to reach out to Hey buddy, they are the best technology partner.",
              //   // position: "Head of VP at Disney Hotstar",
              // },
            ]
          },

          section10:{
            heading:"FAQs",
            para:"",
            list:[
              {
                id: 1,
                ques: "What makes a 3D billboard different from traditional advertising?",
                ans: "3D billboards go beyond static visuals. They create a three-dimensional visual experience and users do not need any additional visual aid to see them. This makes the visuals appear as if they are happening in reality merging seamlessly with the environment around them. Thus, the way these billboards engage audiences, people, and businesses is going crazy with dynamic content that leaves a lasting impression."
              },
              {
                id: 2,
                ques: "What advantages do 3D ad billboards offer over traditional ads?",
                ans: "3D ad billboards provide a phenomenally engaging and impactful way to convey your brand message. Unlike traditional ads, they showcase content that merges with users' reality and communicates on deeper cognitive levels."
              },
              {
                id: 3,
                ques: "Why 3D ad billboards?",
                ans: "3D ad billboards provide a unique, and impactful way to convey your brand message. The depth and realism of 3D graphics capture passersby's attention, making them stop and get captivated by the visuals. 3D billboard ads enhance brand recall and create a memorable brand interaction for the audience."
              },
              {
                id: 4,
                ques: "Why should I choose a professional 3D billboard development company?",
                ans: "Professional 3D billboard development companies utilize the latest tools and techniques to create anamorphic videos meant to be displayed on curved anamorphic screens. A billboard development company, like Hey Buddy, makes sure that your vision is impeccably translated into a captivating and effective 3D billboard."
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
