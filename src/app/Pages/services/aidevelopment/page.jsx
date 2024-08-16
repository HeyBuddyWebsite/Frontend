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
      heading:"AI Development Company: Tap the Power of Intelligence",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/ai2banner.jpg",
      text:"The times we are in are historic. AI has arrived in its full glory and is transforming businesses for skyrocketing growth. Wise business acumen lies in making a move right now. Otherwise, losing the opportunity will prove very costly!!. Partner with Hey Buddy, India’s leading AI and Machine learning development company. We have the right expertise that your business needs to tap into the AI potential.",
    },
    
     checklist :[
      {
        id:1,
        title: "Machine Learning",
      },
      {
        id:2,
        title: "Speech Recognition",
      },
      {
        id:3,
        title: "Deep Learning",
      },
      {
        id:4,
        title: "Computer Vision",
      },
      {
        id:5,
        title: "Predictive Analysis",
      },
      {
        id:6,
        title: "Neural Networks",
      },
    ],

    gridSection1:{
      heading: "AI Software Development:  Decade rare Opportunity - Seize it Now Or Regret Forever",
      para:
        "From rapid automation to deep data-driven insights, AI is propelling companies into the future and you can be one of them. Tap into the unmatched potential of this intelligent technology, boost efficiency like never before, and stay way ahead of the competition. Your journey to business transformation starts here! Are you ready to lead?",
     list :  [
      {
        id: "1",
        heading: "99%",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
        para: "of Fortune 500 companies use AI for hiring without human oversight",
      },
      {
        id: "2",
        heading: "92.1%",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
        para: "of businesses witnessed measurable results from AI",
      },
      {
        id: "3",
        heading: "75%",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
        para: "of top executives believe AI for business growth",
      },
      {
        id: "4",
        heading: "63%",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
        para: "of organizations will adopt AI globally within the next 3 years",
      },
      {
        id: "5",
        heading: "44%",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
        para: "of business leaders achieved increased productivity through AI",
      },
      {
        id: "6",
        heading: "21%",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
        para: "net increase to the U.S. GDP by 2030 with AI",
      },
    ],
      },

      section3:  {
        heading:"AI Development Services: Make the Most out of the AI-boom with Experts",
        para:" We offer a complete suite of Artificial Intelligence development services to make the most out of this opportunity for you.",
        list:[
          {
            title: "Custom AI Solutions",
            description:
              "We develop tailored AI applications crafted to align with your unique business goals and specific challenges. We have a team of AI experts that does it all for you with their skills, knowledge, and experience.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/custom_Ai.jpg",
          },
          {
            title: "Machine Learning Expertise",
            description:
              "We help you capitalize on the power of machine learning for predictive analytics, pattern recognition, and data-driven insights. Thereby, we not only drive informed decision-making for you but also deliver intelligence solutions.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/ml_expert.jpg",
          },
          {
            title: "Natural Language Processing (NLP)",
            description:
              "With our NLP solutions, we create intelligent chatbots and perform sentiment analysis and language understanding. Thereby, enriching customer interactions with your business and streamlining your business operations.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/scrl3.jpg",
          },
          {
            title: "Computer Vision Applications",
            description:
              "We give sight to your machines adding to their intelligence and capabilities with computer vision solutions. You can use it for image and video analysis, object recognition, and advanced visual data interpretation.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/computer_vision.jpg",
          },
          {
            title: "Data Analytics and Insights",
            description:
              "We power your decisions with AI solutions that extract deep yet meaningful insights from your data and surface unveil actionable intelligence for your strategic business planning for market leadership.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/scrl5.jpg"
          },
          {
            title: "Automation and Optimization",
            description:
              "We facilitate AI-driven automation to improve your business efficiency and reduce operational costs. This leads to workflow optimization and high overall productivity, resulting in timely quality delivery.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/aiservice/automation.jpg",
          },
        ],},
        
        section4:{
          heading:"Our AI development Services For Every Industries",
          para:"We have delivered customized solutions for our client to suit their business as well as the industries they are in.",
          // checklist:[],
          sliderlist:[
            {
              id: "1",
              heading: "Technology and Electronics",
              imgurl: "",
              para: "AI transforms the tech and electronics industry by enabling smarter devices, predictive maintenance, and enhanced user experiences with functions like voice-activated assistants,",
            },
            {
              id: "2",
              heading: "Finance and Banking",
              imgurl: "",
              para: "AI revolutionizes operations through fraud detection, risk management, and personalized customer experiences and empowers the financial sector to make data-driven decisions.",
            },
            {
              id: "3",
              heading: "Healthcare",
              imgurl: "",
              para: "AI brings advancements in diagnostics, treatment personalization, and patient care, AI applications improve accuracy, speed up processes, and contribute to more effective healthcare delivery.",
            },
            {
              id: "4",
              heading: "Automotive",
              imgurl: "",
              para: "AI-driven self-driving cars, enhanced safety features, and optimized manufacturing processes are reshaping the future of transportation, making it safer, more efficient, and more intelligent.",
            },
            {
              id: "5",
              heading: "Energy",
              imgurl: "",
              para: "AI-powered smart grids, predictive maintenance, and data analytics contribute to sustainable practices and operational excellence in the energy industry.",
            },
            {
              id: "6",
              heading: "Retail",
              imgurl: "",
              para: "Retail experiences a paradigm shift with AI-driven personalized recommendations, inventory management, and customer engagement, bringing seamless shopping experiences both online and in-store.",
            },
            {
              id: "7",
              heading: "Manufacturing",
              imgurl: "",
              para: "Retail experiences a paradigm shift with AI-driven personalized recommendations, inventory management, and customer engagement, bringing seamless shopping experiences both online and in-store.",
            },
            {
              id: "8",
              heading: "Telecommunications",
              imgurl: "",
              para: "From predictive maintenance of network infrastructure to personalized customer interactions through virtual assistants, AI optimizes communication services.",
            },
          ]
        },

        section5:{
          heading:"Our AI Development Process: Precision in Progress",
          // para:"",
          list:[
            {
              id:1,
              heading:"Discovery and Planning",
              para:" We begin by delving into your objectives, challenges, and opportunities to meticulously plan a clear roadmap to success."
            },
            {
              id:2,
              heading:"Data Exploration and Preparation",
             para:"Our experts use AI to sift through vast datasets and ensure that every bit of information is meticulously processed and prepared for analysis."
            },
            {
              id:3,
              heading:"Algorithm Design and Development",
              para:"Our expert team designs and develops custom algorithms, tailored to extract relevant insights and drive powerful performance."
            },
            {
              id:4,
              heading:"Model Training and Optimization",
              para:"Through rigorous training, we fine-tune the AI model to bring precision and efficiency and align it impeccably with your goals."
            },
            {
              id:5,
              heading:"Testing and Quality Assurance",
              para:"We subject your AI solutions to meticulous quality assurance, securing flawless functionality and reliability in diverse real-world scenarios."
            },
            {
              id:6,
              heading:"Deployment and Integration",
              para:" We integrate AI into your systems faultlessly, ensuring a smooth transition that significantly adds value to your operations."
            },
            {
              id:7,
              heading:"Monitoring and Continuous Improvement",
              para:"With continuous monitoring and improvement, your AI solutions evolve, adapt, and maintain peak performance every time"
            },
            {
              id:8,
              heading:"Feedback Loops and Iteration",
              para:" We establish feedback loops and iterative processes, allowing your AI solutions to continuously learn, evolve, and perform better than before every time."
            },
          ],
        },

        gridSection2:{
          heading: "Leading AI Development Company For More than One Reason",
          para:
          "Hey buddy has a proven track record of delivering high-quality AI-based software solutions. With our skilled and experienced team, we are known to help our clients disrupt markets and help them achieve goals that earlier appeared distant or even impossible. What can we say, that’s the power of AI.",
          list : [
            {
              id: "1",
              heading: "Proven Track Record",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "Benefit from our established history of success. Our track record speaks volumes, showcasing consistent excellence in delivering results.",
            },
            {
              id: "2",
              heading: "Technical Expertise",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "Capitalise on our team's unparalleled technical prowess. Our dedicated group of AI experts is ready to tackle the most intricate challenges.",
            },
            {
              id: "3",
              heading: "Customized Solutions",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "Experience tailored excellence. Our solutions are crafted with precision to meet your unique needs, ensuring optimal performance and efficiency.",
            },
            {
              id: "4",
              heading: "Data Security and Privacy",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "Your data's sanctuary is our priority. Rest assured, our robust security measures guarantee the utmost confidentiality and privacy.",
            },
            {
              id: "5",
              heading: "Scalability and Flexibility",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "Prepare for growth without limitations. Our solutions are designed to scale seamlessly, adapting to your evolving business needs.",
            },
        
            {
              id: "6",
              heading: "Integration Capabilities:",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "Achieve harmony in your tech ecosystem. Our integration capabilities ensure smooth collaboration with your existing systems.",
            },
            {
              id: "7",
              heading: "Continuous Support and Maintenance:",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "Beyond implementation, we stand by your side. Count on our unwavering support and proactive maintenance to keep your operations running seamlessly.",
            },
            {
              id: "8",
              heading: "Collaborative Approach:",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "Your goals are our mission. We embrace a collaborative approach, working hand-in-hand to achieve milestones and exceed expectations.",
            },
            {
              id: "9",
              heading: "Innovation and Future Readiness:",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "Stay ahead in the digital landscape. Our commitment to innovation ensures that your solutions are not just current but future-ready",
            },
          ],
          },

          section7:{
            heading:"Success Stories Showcasing With Our Artificial Intelligence Development Services ",
            para:"Our AI software development expertise has powered clients' endeavors across industries and contributed to their success stories, capitalizing on the brilliance of AI.",

            list:[
              {
                id: "1",
                heading: "NLP-infused Chatbot to transform Customer Engagement",
                // imgurl: "",
                para: "We helped our client revolutionize their customer engagement with advanced Natural Language Processing (NLP) algorithms. We created a chatbot that could promptly answer customer queries with personalized interactions matching their preferences. Customer satisfaction soared high with reduced response time and a boost in overall engagement.",
              },
              {
                id: "2",
                heading: "Optimizing Operations with RPA For Higher Productivity",
                // imgurl: "",
                para: "We deployed Robotic Process Automation (RPA) for a logistics partner. This capability automated repetitive tasks and data entry processes, streamlining their workflow, while significantly reducing errors and processing time. The outcome was a leaner and more productive operation. ",
              },
              {
                id: "3",
                heading: "Customer ML-Model for Accurate Market Trend Predictions",
                // imgurl: "",
                para: "A finance firm partnered with Hey Buddy to leverage Machine Learning in data analysis. Our team developed a custom machine learning model that analyzed market trends and provided real-time insights. This facilitated data-driven informed decision-making and our client experienced a notable improvement in their investment strategies. Thus, the profitability soared higher than ever.",
              },
            ],
          },

          section8:{
            heading:"Technology Stack of the Most Advanced AI solutions company",
            // para:"",
            btnlist:[
              {
                id:1,
                name:"Frontend",
              },
              {
                id:2,
                name:"Backend",
              },
              {
                id:3,
                name:"Database",
              },
              {
                id:4,
                name:"Infrastructure",
              },
            ],
            imglist:[

              {
                id:1,
                name:"Frontend",
                
                images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Kotlin.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Xamarin.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Swift.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/React%20Native.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Cordova.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Flutter.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Objective%20C.svg"]
              },
              {
                id:2,
                name:"Backend",
                images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Node.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Golang.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Kibana.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Java%20Spring.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Django.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/PHP%20Laravel.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/ASP.%20Net.svg"]
              },
              {
                id:3,
                name:"Database",
                images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Redis.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/MongoDB.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Elastic%20Search.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/GraphQL.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/MS%20SQL.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/MySQL.svg"]
              },
              {
                id:4,
                name:"Infrastructure",
                images:["https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Docker.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/AWS.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Nginx.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Azure.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Apache.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/Kubernetes.svg","https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ai_service_logo/GCP.svg",]
              },
            ]          
          },

          section9:{
            heading:"What Clients Say About Our AI Development Services",
            para:"",
            list:[
              {
                id: 1,
                content:
                  "We partnered with Hey Buddy for RPA solutions and it was certainly a turning point in our endeavor. The automation streamlined our operations, minimized errors, and enhanced our overall efficiency. The seamless integration they executed saved us time and resources. Exceptional service!",
                // position: "Head of VP at Disney Hotstar",
                name: "Sandra M",
              },
              {
                id: 2,
                name: "David K",
                content:
                  "We sought Hey Buddy's assistance to enhance our customer engagement. They delivered an NLP-powered chatbot that responded intelligently to our customers’ queries and facilitated interactions tailored to the individuals. We really recommended Hey Buddy’s artificial intelligence development services! ",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: "Alex P",
                content:
                  "Hey Buddy's machine learning capabilities helped us gain immensely invaluable insights that really made the difference. The empowered strategic decision-making backed by deep market trends analysis gave us a competitive edge. Our well-founded decisions positively impacted our bottom line. Availing of Hey Buddy AI software development capability was a strategic move that paid off!",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 4,
                name: "Emily L",
                content:
                  "Hey Buddy's deep learning solutions proved revolutionary for our tech-driven projects. Their expertly implemented complex neural networks considerably enhance the capability of our applications. Their impressive collaboration efforts and prowess in AI makes them a trustworthy partner for any company aiming to capitalize on AI technological excellence.",
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
                ques:" What sets apart an AI development company from other software firms?",
                ans:" An AI development company like Hey Buddy specializes in creating advanced business solutions using artificial intelligence technologies. Unlike general software firms, they focus specifically on utilizing the power of AI to deliver innovative and intelligent applications."
              },
              {
                id:2,
                ques:"How can I find reliable AI development services for my project?",
                ans:"To find reliable AI development services, conduct thorough research, look for the project they delivered, and their clientele, review different platforms, and review their portfolio. Fix a meeting, and ask them about the AI software development process and how they collaborate with their clients for projects to guarantee the success of your project."
              },
              {
                id:3,
                ques:'Are there specialized AI development companies in India that focus on machine learning?',
                ans:"Yes, there are several AI or machine learning development companies in India specializing in the domain. Machine learning is basically a sub-set of AI and these companies utilize their AI expertise to achieve exactly that. Hey Buddy’s artificial intelligence development services lay a specific focus on machine learning to develop ML solutions that perfectly match your requirements."                       
              },
              {
                id:4,
                ques:"What benefits does an AI solutions company bring to businesses seeking technological advancements?",
                        
                ans:"An AI solutions company brings various benefits, including customized AI solutions. They help businesses capitalize on this amazing technology to augment their efficiency, power decision-making processes, and stay way ahead of the competition in the cut-throat market."         
                        
                        
                        
              },
              {
                id: 5,
                ques: "Can you recommend an experienced AI app development company for creating cutting-edge solutions?",
                ans: "Certainly! If you're looking for an experienced AI app development company, Hey Buddy. We specialize in developing sophisticated and robust applications, and our team of expert AI ML developers delivers innovative and high-performance solutions. So if you are looking for an AI ML company, Hey Buddy is the name you should trust."
              },
              {
                id: 6,
                ques: "What is the difference between AI, ML and DL?",
                ans: "Artificial Intelligence: Machines doing smart things. Machine Learning: Machines learning from experience. Deep Learning: Machines learning from deep, layered neural network"
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
