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
      heading:"Trusted Virtual Reality Development Company In India & USA",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/a5a0e947a01622c735016d9ce3f93e55.png",
      text:"Your search for a globally recognized expert VR development company ends here. We have proven work experience with clients in India, the US, and around the globe. And it is our remarkable results and in-time delivery that places us among the top Virtual Reality companies.",
    },
    
     checklist : [
      {
        title: "VR Application Development",
      },
      {
        title: "VR Game Development",
      },
      {
        title: "Metaverse VR Development",
      },
      {
        title: "360° Video Production for VR",
      },
    ],

    gridSection1:{
      heading: "Benefits of our Custom Virtual Reality Development Services ",

      para:"",
      list : [
        {
          id: "1",
          heading: "Capitalize on Expertise",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
          para: "Leverage our extensive experience in VR development. Get the best solution for your specific business and industry needs as our VR experts use cutting-edge technology.",
        },
        {
          id: "2",
          heading: "Achieve Quality in Time ",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
          para: "Count on Hey Buddy’s streamlined VR development process for prompt project completion. Get high-quality VR solutions delivered in your timelines with precision.",
        },
        {
          id: "3",
          heading: "Take Control",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
          para: "Experience transparent and effective communication with Hey Buddy and command full control. Our dedicated SPOC keeps you informed throughout the development process.",
        },
        {
          id: "4",
          heading: "Be the Trendsetter",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
          para: "Surpass industry standards with high-quality Virtual Reality software solutions. Our expert team delivers consistently with industry-leading expertise and a streamlined process.",
        },
        {
          id: "5",
          heading: "Outsmart Competition",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
          para: "Capitalize on the power of innovation with Hey Buddy's creative VR solutions. Set your brand apart with a memorable and engaging user experience and high visual quality.",
        },
        {
          id: "6",
          heading: "Lead Your Domain",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "We offer VR development services with an in-depth understanding of your industry. Get bespoke VR experiences aligned perfectly with your unique requirements.",
        },
        {
          id: "7",
          heading: "Stay Agile",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Overcome challenges seamlessly with Hey Buddy's agile methodology. We rapidly adjust strategies to meet evolving project requirements and ensure success.",
        },
        {
          id: "8",
          heading: "Your Investment Yields",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Optimize your returns with Hey Buddy's cost-effective VR development services. We offer competitive pricing structures and zero compromise on quality.",
        },
        {
          id: "9",
          heading: "Stay Confident",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Sail easy with our strong commitment to post-service support and maintenance. We ensure your VR experience remains functional and up-to-date for sustained success.",
        },
      ],
      },

      section3:  {
        heading:"360 Degree Virtual Reality Services With One Click",
        para:"Redefine possibilities with Hey Buddy’s comprehensive Virtual Reality development services. Immerse your audience in unparalleled digital experiences that elevate your brand and stay at the forefront of technological innovation.",
        list:[
          {
            title: "Immersive VR Application Development",
            description:
              "We craft captivating virtual reality applications across diverse platforms. Be assured of a seamless and immersive user experience that aligns with your specific requirements.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Immersive%20VR%20application%20dev.jpg",
          },
          {
            title: "Engaging VR Game Development",
            description:
              "We have a dedicated team of game-crazy expert developers. They deliver complete virtual reality games with innovation, creativity, and cross-platform compatibility.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Engaging%20vr%20game.jpg",
          },
          {
            title: "Metaverse VR Development Services",
            description:
              "Discover the metaverse like never before with Hey Buddy's expert touch. Get tailored solutions for Roblox adventures to redefine social connections in Sansar.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Metaverse%20vr%20development.jpg",
          },
          {
            title: "360° Video Production for VR Experiences",
            description:
              "We let you immerse your audience in captivating 360-degree videos. Our expertise in capturing and producing high-quality VR environments creates a new reality.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/360%C2%B0%20Video%20Production.jpg",
          },
          {
            title: "Custom VR Simulation Development",
            description:
              "We develop realistic VR simulations, with real-world physics and maneuverability. Get custom training, education, and other industry applications for effective outcomes.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Custom%20VR%20Simulation.jpg",
          },
          {
            title: "VR Content Creation Expertise",
            description:
              "Want to enrich your VR applications? Our team is ready to deliver. Impress your audience with our visually stunning 3D models, animations, and multimedia content.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/VR%20Content%20Creation.jpg",
          },
          {
            title: "Strategic VR Consulting",
            description:
              "Leverage our industry expertise for insightful advice and data-driven strategy on VR technology. We guide you through every step for a seamless integration.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Strategic%20VR%20Consulting.jpg",
          },
          {
            title: "Seamless VR Hardware Integration",
            description:
              "Be assured of optimal performance for every VR headset, controller, and hardware component. We offer a unified and immersive experience with our virtual reality software.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Seamless%20VR%20Hardware.jpg",
          },
          {
            title: "Dedicated VR Maintenance and Support",
            description:
              "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Dedicated%20VR%20Maintenance.jpg",
          },
          // {
          //   title: "Dedicated VR Maintenance and Support",
          //   description:
          //     "Count on Hey Buddy for continuous support, updates, and maintenance. We are known for ensuring the longevity and optimal performance of your VR applications.",
          //   img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds3.png",
          // },
          {
            title: "Cross-Platform VR Development",
            description:
              "We ensure your broad accessibility with services across VR platforms and devices. Get maximized reach and impact of your VR applications with a consistent user experience.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Cross-Platform%20VR.jpg",
          },
          // {
          //   title: "Intuitive VR UI/UX Design",
          //   description:
          //     "We design user interfaces and experiences tailored to virtual reality applications. Here, we prioritize usability and user engagement for a high success rate.      ",
          //   img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/gds5.png",
          // },
          {
            title: "Rigorous VR App Testing",
            description:
              "Get complete quality assurance with high functionality, performance, and user satisfaction of your VR applications. Avail of our VR app testing services. ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Vr_Development/Rigorous%20VR%20App%20Testing.jpg",
          },
        ],},
        
        section4:{
          heading:"Hey Buddy: Power VR Experiences Across Platforms",
          para:"We have a large team dedicated to VR development. This helps us possess talents for diverse platforms powered by powerful development frameworks.",
          checklist: [
            {
              title: "Android VR Development Services",
            },
            {
              title: "iOS VR Development Service",
            },
            {
              title: "Unreal Engine 5 VR Development",
            },
            {
              title: "Unity VR Development Services",
            },
          ],
          sliderlist: [
            {
              id: "1",
              heading: "Android VR Development Services",
              imgurl: "",
              para: "We offer comprehensive Android VR development services so you easily reach a wider audience, right from day one.",
            },
            {
              id: "2",
              heading: "iOS VR Development Service",
              imgurl: "",
              para: "Our expert iOS development service helps you reach a high-quality audience of iOS users around the globe.",
            },
            {
              id: "3",
              heading: "Unreal Engine 5 VR Development",
              imgurl: "",
              para: "Get hyper-realistic VR experiences with our development services utilizing Unreal Engine 5.",
            },
            {
              id: "4",
              heading: "Unity VR Development Services",
              imgurl: "",
              para: "With our Unity VR development, we create visually interactive VR experiences for your specific audience.",
            },
            
          ],
        },

        section5:{
          heading:"Our Refined VR Development Process",
          para:"Our VR development process has evolved with every project in favor of client-centricity, and user experience. We not only realize your vision but ensure your complete satisfaction with transparency, collaboration, and the timely delivery of your VR projects.",
          list:[
            {
              id: 1,
              heading: "Discovery and Consultation",
              para: "We start with a complete grasp of your business objectives and your vision. Our team collaborates closely with yours to ensure a collaborative approach from day one."
            },
            {
              id: 2,
              heading: "Ideation and Conceptualization",
              para: "We ideat and brainstorm to choose the best solution for your brand and objectives. Here, we ensure that our proposed solutions perfectly align with your vision."
            },
            {
              id: 3,
              heading: "Technical Feasibility Assessment",
              para: "That’s not it, on the chosen idea, our VR technical experts conduct a thorough feasibility assessment. They evaluate compatibility and viability from different aspects."
            },
            {
              id: 4,
              heading: "Development and Coding",
              para: "The approved idea is taken over by our expert VR developers. Who leverage every state-of-the-art VR technology so that the outcome matches your vision."
            },
            {
              id: 5,
              heading: "Iterative Prototyping",
              para: "Our development team comes up with iterative prototypes and solicits your feedback on the same. Based on that, we modify the VR experience to exceed your expectations."
            },
            {
              id: 6,
              heading: "Comprehensive Testing",
              para: "Our rigorous testing protocol ensures that your VR experience possesses the functionality and features that captivate and engage your audience."
            },
            {
              id: 7,
              heading: "Client Approval and Deployment",
              para: "We send the outcome for your approval and make it deployment-ready. Here, our streamlined process ensures that we adhere to the stipulated timeline."
            },
            {
              id: 8,
              heading: "Analytics and Performance Monitoring",
              para: "Deployment is not enough, tracking is crucial. That’s why we integrate analytics tools. With this, we monitor the performance of your VR experience for data-driven insights."
            },
            {
              id: 9,
              heading: "Post-launch support and Optimization",
              para: "On the same line, we keep on offering you post-launch support, updates, and optimization services for the assured success of your VR experiences."
            },
            {
              id: 10,
              heading: "Client Collaboration and Feedback Loop",
              para: "Lastly, we collaborate with you to draw your valuable feedback and sustain an open line of communication for long-term partnerships."
            }
          ],
        },

        gridSection2:{
          // heading: "",
          // para:"",
          list :[
            {
              id: "1",
              heading: "Android VR Development Services",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "We offer comprehensive Android VR development services so you easily reach a wider audience, right from day one.",
            },
            {
              id: "2",
              heading: "iOS VR Development Service",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "Our expert iOS development service helps you reach a high-quality audience of iOS users around the globe.",
            },
            {
              id: "3",
              heading: "Unreal Engine 5 VR Development",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "Get hyper-realistic VR experiences with our development services utilizing Unreal Engine 5.",
            },
            {
              id: "4",
              heading: "Unity VR Development Services",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "With our Unity VR development, we create visually interactive VR experiences for your specific audience.",
            }],
          },

          section7:{
            heading: "Success Stories with Hey Buddy Custom Virtual Reality Development",
            para:
            "Hey Buddy is renowned for consistently delivering superior-quality VR solutions well within the stipulated time. Here are some of the many success stories where our custom VR development services worked wonders for the clients.",

            list:[
              {
                id: "1",
                heading: "Innovative Virtual Real Estate Tours with Complete Customisation",
                // imgurl: "",
                para: "Hey Buddy developed a cutting-edge virtual real estate tour application that exceeded client expectations. The immersive VR experience helped our client offer high-quality, completely customizable property tours. This not only enhanced their ability to market and sell properties remotely but also enhanced their name in the Real Estate market.",
              },
              {
                id: "2",
                heading: "Sophisticated VR Employee Training Solution in Manufacturing",
                // imgurl: "",
                para: "Staying true to its reputation, Hey Buddy successfully developed a VR training program for a manufacturing client. Our expert VR development team delivered high-quality immersive training solutions while ensuring timely delivery. The result helped the client in multiple ways including efficient onboarding, better employee engagement and learning outcomes, and high productivity.",
              },
              {
                id: "3",
                heading: "Virtual Reality in Healthcare: Medical Training ",
                // imgurl: "",
                para: "We developed an intricate training solution for a medical institution. It offered a digital environment with a realistic and interactive training experience. Additionally, we supplied them with post-launch support and maintenance services for seamless ongoing functionality. As always, we met the client's expectations by demonstrating our in-depth understanding of the medical industry, for a reliable, industry-specific VR training solution.",
              },
            ],
          },

          section8:{
            // heading:"",
            // para:"",
            // btnlist:[],
            // imglist:[],         
          },

          section9:{
            heading:"What Clients Say about our Virtual Reality Development Software Services",
            // para:"",
            list:[
              {
                id: 1,
                content:
                  "Hey Buddy wonderfully turned our vision into reality! Their expertise in delivering immersive experiences is unbelievable and they surpassed our expectations. The attention to detail, clear communication, and commitment to quality truly set them apart as the top VR development agency. We're content with the results and look forward to future collaborations with them.",
                // position: "Head of VP at Disney Hotstar",
                name: "Owen Foster",
              },
              {
                id: 2,
                name: "Riley Jordan",
                content:
                  "Working with Hey Buddy was a great experience. They delivered high-quality VR solutions, with a strong commitment to timely delivery. They maintained a clear line of communication and kept us aware and informed at every stage of the development. This helped us infuse necessary changes to align the development process with our project goals. ",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: "Alex Taylor",
                content:
                  "Choosing Hey Buddy for our VR project was the right decision. Their collaborative approach made the entire development journey transparent and easy. We felt involved and valued, and the end result reflected a true partnership. Highly recommend their VR expertise.",
                // position: "Head of VP at Disney Hotstar",
              },
              
            ]
          },

          section10:{
            heading:"FAQs",
            // para:"",
            list:[
              {
                id: 1,
                ques: "What expertise does Hey Buddy offer in VR development for Oculus?",
                ans: "Hey Buddy specializes in Oculus VR development. We develop immersive experiences tailored for Oculus devices. We maximize the potential of virtual reality on Oculus platforms, creating applications that redefine user interactions and elevate immersive experiences."
              },
              {
                id: 2,
                ques: "Does Hey Buddy provide VR development services for iOS and Android?",
                ans: "Yes, we offer complete VR development services for both iOS and Android platforms, for maximum reach and ensuring seamless and captivating experiences across mobile devices."
              },
              {
                id: 3,
                ques: "Can Hey Buddy assist in VR development for Metaverse?",
                ans: "Hey Buddy excels in Metaverse VR development for all prominent platforms including Roblox, Decentraland, Sansaar, and more. We align our solution with the right creative and social aspects to meet the standard at Metaverse."
              },
              {
                id: 4,
                ques: "Is there a VR development group at Hey Buddy for collaborative projects?",
                ans: "Yes, Hey Buddy has a dedicated VR development group to foster collaboration and enable expertise-sharing for innovative and impactful VR projects."
              },
              {
                id: 5,
                ques: "How does Hey Buddy approach VR development in Unity?",
                ans: "Unity is a cornerstone in Hey Buddy's VR development. We utilize its robust framework for creating immersive experiences across various platforms. Moreover, Hey Buddy’s proficient team in Unity for VR development delivers tailored solutions that harness the power of Unity's versatile development environment."
              },
              {
                id: 6,
                ques: "Does Hey Buddy support VR development in Unreal Engine 5?",
                ans: "Yes, We offer our adept VR development service using the powerful Unreal Engine 5. Its advanced features help us achieve high-fidelity and feature-packed virtual experiences."
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
           {data.section8.btnlist &&  <Pagenation handlecontactusModal={handlecontactusModal} {...data.section8} />}
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
