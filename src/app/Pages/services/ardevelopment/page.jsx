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
      heading:"Your Trusted Experts for Augmented Reality Services",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/e8d0c0b5eb64f41a96e83cab24970036.png",
      text:"Hey Buddy is the leading Augmented Reality or AR development company in India and the US. Our dedicated team of AR experts consistently delivers innovative and creative projects within specified timelines.",
    },
    
     checklist :[
      {
        id:1,
        title: "AR application Development",
      },
      {
        id:2,
        title: "AR Design and Prototypes",
      },
      {
        id:3,
        title: "AR Games",
      },
      {
        id:4,
        title: "AR Marketing and Advertising",
      },
    ],

    gridSection1:{
      heading: "AI Software Development:  Decade rare Opportunity - Seize it Now Or Regret Forever",
      para:
        "From rapid automation to deep data-driven insights, AI is propelling companies into the future and you can be one of them. Tap into the unmatched potential of this intelligent technology, boost efficiency like never before, and stay way ahead of the competition. Your journey to business transformation starts here! Are you ready to lead?",
     list :  [
      {
        id: "1",
        heading: "Expertise in Cutting-Edge AR Technologies",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
        para: "Benefit from our seasoned team of AR experts. Their expertise in the latest AR technologies brings your desired high-quality results.",
      },
      {
        id: "2",
        heading: "Proven Track Record with Diverse AR Projects",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
        para: "We have delivered AR projects of varying scales for a variety of clients. This included projects for budding startups to Fortune listers.",
      },
      {
        id: "3",
        heading: "Innovation and Creativity at the Core",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
        para: "With Hey Buddy, expect nothing less than innovation and creativity for your AR project. Our team goes up and beyond to infuse uniqueness into your project.",
      },
      {
        id: "4",
        heading: "Tailored Solutions Aligned with Your Goals",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
        para: "We understand that your business is unique, and so are your project and its requirements. And that is precisely why our customized AR solutions are here.",
      },
      {
        id: "5",
        heading: "Seamless Integration with Existing Systems",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
        para: "Want to include AR functionality but hesitant? Experience a smooth transition with our AR applications. We offer seamless integration with full compatibility and interoperability.",
      },
      {
        id: "6",
        heading: "Scalability and Future-Proofing",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
        para: "Get scalable AR software solutions and future-proof your investments. Our AR applications adapt to your growing business needs for longevity and relevance.",
      },
    ],
      },

      section3:  {
        heading:"If it's AR, It's Hey Buddy: Our Comprehensive Augmented Reality Development Service",
        para:" We offer a complete suite of Artificial Intelligence development services to make the most out of this opportunity for you.",
        list:[
          {
            title: "AR App Development",
            description:
              "Achieve high engagement with immersive Augmented Reality applications. We create AR apps with seamless user experience and cross-platform compatibility for wider reach.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Ar%20App%20dev.jpg"
          },
          {
            title: "AR Software Development",
            description:
              "Get an optimized and efficient solution that perfectly plugs the gap. We create customized AR development solutions for your very specific business needs.",
            img:                     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/ar%20software%20dev.jpg"
        
          },
          {
            title: "AR Consulting",
            description:
              "Gain data-driven insights and strategic guidance for AR business integration. Make informed decisions with our AR consulting services and achieve major business objectives.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Ar%20consulting.jpg"
          },
          {
            title: "AR Design and Prototyping",
            description:
              "We design AR interfaces and create interactive prototypes to help you refine and make is as per your expectations and requirements. All this, even before the development begins.",
            img:                     "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/ar%20design%20and%20prototyping.jpg"
        
          },
          {
            title: "Marker-Based and Markerless AR",
            description:
              "Whether marker-based or markerless AR solutions, you choose, we deliver. Get versatile AR experiences that function perfectly in every environment and condition.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/markerbased%20&%20markerless%20ar.jpg"
          },
          {
            title: "AR Content Development",
            description:
              "Enhance your user engagement with interactive AR content. We offer 3D modeling, animations, and overlays to make your AR experience compelling and memorable.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/AR%20content%20dev.jpg"
          },
          {
            title: "AR for Marketing and Advertising",
            description:
              "Be a brand to remember. Standout with our interactive AR solutions for marketing, advertising, and brand promotions. Boost your brand visibility and brand recall.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Ar%20marketing.jpg"
          },
          {
            title: "AR for Training and Education",
            description:
              "Enhance learning outcomes with hands-on experiences. Our AR software solutions for training and education make complex concepts simple with experiential learning.      ",
            img:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/AR%20training%20&%20education.jpg"
          },
          {
            title: "AR Integration with IoT",
            description:
              "We make your AR experience seamlessly integrate with the real-world environment. Our AR-IoT integration services enhance connectivity and the overall user experience.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/AR%20integration%20with%20IOT.jpg"
          },
          {
            title: "AR for Games",
            description:
              "Add a layer of immersion and make your gamers enter the fantasy world. We design and develop augmented reality games for more enjoyable Games than ever.      ",
            img:  "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Ar%20for%20gaming.jpg"
          },
          {
            title: "Cross-Platform AR Development",
            description:
              "Cater to a wider audience with our cross-platform AR application. We ensure seamless compatibility across devices and prominent platforms including iOS, Android, and others.      ",
            img:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/Cross-Platform%20AR.jpg"
          },
          {
            title: "AR Maintenance and Support",
            description:
              "Ensure the relevance and improvement of your AR applications. With Hey Buddy, get ceaseless support, maintenance, and updates for an evolving AR application.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/AR%20development/AR%20Maintenance%20.jpg",
          },
        ],},
        
        section4:{
          heading:"Our AI development Services For Every Industries",
          para:"We have delivered customized solutions for our client to suit their business as well as the industries they are in.",
          checklist:[
            {
              title: "Expertise in AR Technology",
            },
            {
              title: "Proven Track Record",
            },
            {
              title: "Innovation and Creativity",
            },
            {
              title: "Tailored Solution",
            },
          ],
          sliderlist:[
            {
              id: "1",
              heading: "Expertise in Cutting-Edge AR Technologies",
              imgurl: "",
              para: "Benefit from our seasoned team of AR experts. Their expertise in the latest AR technologies brings your desired high-quality results.",
            },
            {
              id: "2",
              heading: "Proven Track Record with Diverse AR Projects          ",
              imgurl: "",
              para: "We have delivered AR projects of varying scales for a variety of clients. This included projects for budding startups to Fortune listers.           ",
            },
            {
              id: "3",
              heading: "Innovation and Creativity at the Core          ",
              imgurl: "",
              para: "With Hey Buddy, expect nothing less than innovation and creativity for your AR project. Our team goes up and beyond to infuse uniqueness into your project.",
            },
            {
              id: "4",
              heading: "Tailored Solutions Aligned with Your Goals ",
              imgurl: "",
              para: "We understand that your business is unique, and so are your project and its requirements. And that is precisely why our customized AR solutions are here.",
            },
            {
              id: "5",
              heading: "Seamless Integration with Existing Systems",
              imgurl: "",
              para: "Want to include AR functionality but hesitant? Experience a smooth transition with our AR applications. We offer seamless integration with full compatibility and interoperability.",
            },
            {
              id: "6",
              heading: "Scalability and Future-Proofing",
              imgurl: "",
              para: "Get scalable AR software solutions and future-proof your investments. Our AR applications adapt to your growing business needs for longevity and relevance.          ",
            },
            
          ]
        },

        section5:{
          heading:"Our Proven AR Development Process at Hey Buddy",
          para:"At Hey Buddy, we improved our AR development process with every project. Now, it has evolved into a meticulous, client-centric AR development process designed to realize your vision. We offer transparency, collaboration, and the timely delivery of your AR projects. Here's an overview of our step-by-step process:",
          list:[
            {
              id: 1,
              heading: "Discovery and Consultation:",
              para: "We begin by attaining a complete understanding of your business objectives and vision for the AR project. Here, our team collaborates closely with yours."
            },
            {
              id: 2,
              heading: "Ideation and Conceptualization:",
              para: "Then, we brainstorm ideas to align the development with your brand and objectives. This phase ensures that our proposed solutions resonate with your vision."
            },
            {
              id: 3,
              heading: "Technical Feasibility Assessment:",
              para: "On the final idea, our technical experts conduct a thorough feasibility assessment. They evaluate the compatibility of proposed AR functionalities with your existing systems."
            },
            {
              id: 4,
              heading: "Development and Coding",
              para: "Once the idea passes feasibility assessment, our seasoned developers leverage AR technologies such as ARKit and ARCore to bring your vision to life."
            },
            {
              id: 5,
              heading: "Iterative Prototyping",
              para: "We provide you with iterative prototypes to solicit your invaluable feedback. This helps us refine the AR application and ensure it meets and exceeds your expectations."
            },
            {
              id: 6,
              heading: "Comprehensive Testing",
              para: "With rigorous testing, we achieve the desired functionality with security and performance. This also ensures that your AR application is a seamless and robust final product."
            },
            {
              id: 7,
              heading: "Client Approval and Deployment",
              para: "Once the prototype meets your satisfaction, we seek your approval before deploying. Our streamlined process ensures your AR solution is launched within specified timelines."
            },
            {
              id: 8,
              heading: "Analytics and Performance Monitoring",
              para: "We integrate analytics tools to monitor the performance of your AR application. Insights gained lead to data-driven decisions that make an industry-wide impact."
            },
            {
              id: 9,
              heading: "Post-launch support and Optimization",
              para: "Our support doesn't end with deployment. Hey Buddy offers post-launch support, updates, and optimization services for your unhindered success."
            },
            {
              id: 10,
              heading: "Client Collaboration and Feedback Loop",
              para: "And our collaboration doesn’t end with project completion. We value your feedback and maintain an open line of communication, fostering long-term partnerships."
            }
          ],
        },

        gridSection2:{
          // heading: "",
          // para:"",
          list : [
            {
              id: "1",
              heading: "Enhanced Brand Engagement",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
            },
            {
              id: "2",
              heading: "Enhanced Brand Engagement",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
            },
            {
              id: "3",
              heading: "Enhanced Brand Engagement",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
            },
            {
              id: "4",
              heading: "Enhanced Brand Engagement",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
            },
            {
              id: "5",
              heading: "Enhanced Brand Engagement",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
            },
            {
              id: "6",
              heading: "Enhanced Brand Engagement",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
              para: "Games offers a unique platform to connect with your audience on a deeper level. Your brand establishes a memorable presence in the mind of the gamer, fostering stronger connections and long-term loyalty.",
            },
          ],
          },

          section7:{
            heading:"Success Stories with Hey Buddy AR Software Solutions",
            para:"Hey Buddy maintains leadership amongst AR development companies. All credit to its team of high-skilled AR professionals, streamlined development process, and client-centric approach. We have delivered various disruptive AR development solutions that helped our clients reach new success levels.",
            list:[
              {
                id: "1",
                heading: "Immersive Retail Experience with AR Tryon for Fashion Enthusiasts",
               
                para: "Our client, a fashion retailers, aimed to enhance the shopping experience of their online shoppers. They knew the power of immersive AR experience. Hence, they wanted to offer their customers AR-based virtual try-on experiences for their clothing collection. So before making a purchase, users get a better idea of the product and make faster purchases. AR tryons are also known to reduce returns by up to 40% and increase customer satisfaction. Hey Buddy designed a custom AR application for the fashion retailer. The application allowed users to visualize how different clothing would look on them in real-time. The AR fitting room enhanced user engagement and increased conversion rates by 20%.",
              },
              {
                id: "2",
                heading: "Interactive Educational Tools for Faster and Better Learning          ",
                
                para: "Our client, an educational learning solution provider wanted to revolutionize its educational materials by incorporating augmented reality. They wanted to improve the learning experience and achieve better outcomes. Along with that, they sought interactive and engaging tools to make complex subjects more accessible to students. Hey Buddy developed AR-based educational modules that brought textbooks to life. And the results were astonishing. With interactive learning, students could explore 3D models of complex concepts. This led to a 25% increase in engagement and a better understanding of the same. As well, students could conduct virtual experiments, and explore the concepts from different perspectives for a complete understanding",
              },
              {
                id: "3",
                heading: "AR-Enabled Gamified Marketing Campaign for Cosmetics Products ",
               
                para: "Nothing can beat gamified software solutions when it comes to marketing. One of our clients wanted to use this potential of AR experiences and run a memorable marketing campaign to promote their latest cosmetic product launch. They collaborated with multiple AR development companies but could not get the desired outcome. Hey Buddy devised an amazing gamified AR-driven marketing campaign. Users can scan product images in print advertisements and instantly access interactive games where they can apply and try different cosmetic products, try different looks, including some inspired by popular fantasies. As expected, the campaign generated huge buzz with a phenomenal 40% increase in traffic and unmatched positive social media engagement.",
              },
            ],
          },

          section8:{
            // heading:"Technology Stack of the Most Advanced AI solutions company",
            // para:"",
            // btnlist:[
            //   {
            //     id:1,
            //     name:"3D Modeling and Animation",
            //   },
             
            // ],
            // imglist:[

            //   {
            //     id:1,
            //     name:"3D Modeling and Animation",
                
            //     images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/blender.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Autodesk%20Maya.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/3ds%20max.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Z%20brush.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/3D%20Development%20Icons/Cinema%204D.svg"]
            //   },
             
            // ],         
          },

          section9:{
            heading:"Here’s What Our Clients Have to Say about our AR Development Services",
            para:"",
            list:[
              {
                id: 1,
                content:
                  "Hey Buddy transformed our vision into a reality! Their Augmented Reality services exceeded our expectations. Their innovative solutions went a long way to set our project apart in the market. We highly recommend Hey Buddy for their commitment to deliver.",
                // position: "Head of VP at Disney Hotstar",
                name: "John D.",
              },
              {
                id: 2,
                name: "Jane S",
                content:
                  "Working with Hey Buddy was real smooth! We needed AR functionalities that seamlessly integrate into our ongoing business endeavor, and they delivered flawlessly. They ensured a smooth transition with improved overall functionality. Hey Buddy are really the experts we needed and now, they are our go-to AR development company.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: "Michael K. ",
                content:
                  "The thing we really liked about Hey Buddy is that they truly understood our business requirements, which was unique in itself. Their AR development services provided the tailored solutions we wanted so that they perfectly aligned with our goals. We are really glad with the results. After all, their collaborative approach and attention to detail really work and them a reliable partner for customized AR solutions.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 4,
                name: "Sarah T. ",
                content:
                  "Our users are thrilled with the amazing immersive experience offered by our AR application and so are we. All thanks to Hey Buddy. The user-centric design approach ensured an intuitive and engaging experience that really resonated with the audience. They successfully met our project requirements and exceeded our expectations with their efficient project handling. Exceptional work and highly recommended!",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 5,
                name: "Elise W.",
                content:
                  "Hey Buddy's commitment to deadlines is commendable! They delivered our AR project on time and offered unwavering post-launch support. Basically, they were there whenever we needed them. And still, their team continues to address our needs promptly, showcasing their dedication to client success. Hey, Buddy is a reliable partner for timely and ongoing AR development support.",
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
                id: 1,
                ques: "What are Augmented Reality development services?",
                ans: "AR development services create AR experiences that offer immersion. To explain, these experiences overlay digital 3D information or objects onto the real world. All you need is a smartphone."
              },
              {
                id: 2,
                ques: "What kind of Augmented Reality services do you offer?",
                ans: "We offer a wide range of AR development services for various industries. This includes concept ideation, design, software development, integration, testing, and deployment. Our Augmented reality applications offer a stable and enriched AR experience across various platforms."
              },
              {
                id: 3,
                ques: "Can you help in the entire AR development lifecycle?",
                ans: "HeyBuddy is one of the few AR development companies that provide end-to-end Augmented Reality services. Starting from initial consultation and concept creation to design, development, testing, deployment, and ongoing support for AR applications."
              },
              {
                id: 4,
                ques: "What are the typical costs associated with AR development?",
                ans: "Costs can vary based on project complexity, features, platforms, and the scope of work. We offer tailored pricing after understanding your project requirements during the initial consultation phase."
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
