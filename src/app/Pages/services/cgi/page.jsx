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
      heading:"Hyper-realistic Visuals with Leading 3D CGI Company - Hey Buddy",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/636e60aaec9c3203abcd2b03ebcda23f.jpeg",
      text:"Partner with Hey Buddy for assured, high-quality CGI delivered on time. Our strong CGI team has deployed top-class technical proficiency for creative and innovative CGI effects perfect for your project.",
    },
    
     checklist :[
      {
        id:1,
        title: "3D Modeling",
      },
      {
        id:2,
        title: "3D Animation",
      },
      {
        id:3,
        title: "Virtual Effects (VFX)",
      },
      {
        id:4,
        title: "Product Visualization",
      },],

    gridSection1:{
      // heading: "",
      // para:"",
    //  list :   [],
      },

      section3:  {
        heading:"Hey Buddy - One Destination for All CGI services",
        para:"Hey Buddy is your go-to 3D CGI agency for services of all sorts. Our technical proficiency gets you innovative CGI solutions just for you while infusing eye-catching creativity. We deliver specialized CGI assets just for your project with complete future-proofing.",
        list:[
          {
            title: "3D Modeling",
            description:
              "We create 3D digital representations of objects, environments, or characters. You can use them in various applications, from product design to virtual worlds.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/3d%20modeling.jpg",
          },
          {
            title: "Animation",
            description:
              "We bring 3D models to life. We create dynamic and engaging visual sequences for films, advertising, and Games. ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Animation.jpg",
          },
          {
            title: "Visual Effects (VFX)    ",
            description:
              "We integrate computer-generated elements with live-action footage. This gives you fantastic visuals to captivate your audience.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/visual%20effects.jpg",
          },
          {
            title: "Virtual Prototyping    ",
            description:
              "We create digital prototypes of products or structures, allowing you to test, modify, and visualize them before physical production.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/visual%20prototype.jpg",
          },
          {
            title: "Architectural Visualization",
            description:
              "We render realistic 3D visuals of architectural designs to help you showcase properties, interiors, or urban planning projects.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Architectural%20Visualization.jpg",
          },
          {
            title: "Product Visualization    ",
            description:
              "Showcase products with our high-quality 3D renderings, be it marketing campaigns or e-commerce product pages. ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Product%20Visualization.jpg",
          },
          {
            title: "Augmented Reality (AR) Development    ",
            description:
              "We add a layer to reality. By integrating CGI elements into real-world environments, we help you offer immersive AR experiences.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Augmented%20Reality%20(AR)%20Development.jpg",
          },
          {
            title: "Virtual Reality (VR) Development    ",
            description:
              "We create a new reality with fully immersive virtual reality environments. Use it for Games, training simulations, and virtual tours.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Virtual%20Reality%20(VR)%20Development.jpg",
          },
          {
            title: "Interactive Experiences ",
            description:
              "We develop CGI-driven interactive applications, such as touchscreen exhibits, interactive websites, or digital installations.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Interactive%20Experiences.jpg",
          },
          {
            title: "Simulation and Training    ",
            description:
              "We design realistic simulations for high-quality productive training, especially for businesses in aviation, healthcare, and the military.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Simulation%20and%20training.jpg",
          },
          {
            title: "Character Design and Animation    ",
            description:
              "We create unique 3D characters, from realistic to stylized, as per your project requirement - animations, games, or storytelling.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Character%20Design%20and%20Animation.jpg",
          },
          {
            title: "Environmental Visualization    ",
            description:
              "We simulate landscapes, cityscapes, or environmental changes for urban planning or educational purposes.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/CGI%20Development%20/Environmental%20Visualization.jpg",
          },
        ],},
        
        section4:{
          heading:"Bring Rewarding Business Benefits - Choose CGI technologies and solutions",
          para:"With flexible and adaptable CGI solutions, you get the best results for your business while saving your resources.",
          // checklist:[],
          // sliderlist:[],
        },

        section5:{
          heading:"Our Refined 3D CGI Development Process",
          para:"At Hey Buddy, we have streamlined our CGI development process to deliver high-quality results that match your expectations and project needs. We operate with full transparency and ensure seamless collaboration and communication with your team.",
          list:[
            {
              id: 1,
              heading: "Requirement Gathering",
              para: "We start by thoroughly understanding your project requirements and your vision. Our team collaborates with yours to start on the right foot."
            },
            {
              id: 2,
              heading: "Ideation and Conceptualization",
              para: "We brainstorm to identify the possible solutions for your project objectives and do a deep dive to check for their viability to zero in on the best one."
            },
            {
              id: 3,
              heading: "Feasibility Assessment",
              para: "On the chosen idea, our CGI technical experts further conduct thorough feasibility assessments to evaluate it from different aspects."
            },
            {
              id: 4,
              heading: "Development and Coding",
              para: "Then the best idea that gets the nod from every stakeholder is sent to expert CGI developers that utilize state-of-the-art technology to materialize it."
            },
            {
              id: 5,
              heading: "Iterative Prototyping",
              para: "Our CGI development team comes up with iterative prototypes. We assess it to see if it matches the requirements shared by you."
            },
            {
              id: 6,
              heading: "Comprehensive Testing",
              para: "Then the outcome undergoes rigorous testing protocols to ensure that your CGI experience possesses the required functionality and features."
            },
            {
              id: 7,
              heading: "Client Approval and Deployment",
              para: "Then, we send the outcome for your approval and make it deployment-ready. Our streamlined process ensures timely delivery."
            },
            {
              id: 8,
              heading: "Performance Analysis",
              para: "We ran analyses whenever possible to assess the performance of the CGI and find ways to improve our process."
            },
            {
              id: 9,
              heading: "Post-launch Support and Optimization",
              para: "We keep on offering you post-launch support, updates, and optimization services for the assured success of your CGI experiences."
            },
            {
              id: 10,
              heading: "Client Feedback Loop",
              para: "We time and again draw on your valuable feedback and maintain an open line of communication for long-term partnerships."
            }
          ],
        },

        gridSection2:{
          heading: "Why Choose Hey Buddy as Your CGI Development Partner?",
          para:
          "Hey Buddy is a leading CGI development company for many reasons. We understand we do it your way, we deliver quality, and we deliver on time.        ",

          list : [
            {
              id: "1",
              heading: "Delivering Realism",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "With keen attention to detail, we achieve accurate representation and life-like rendering.",
            },
            {
              id: "2",
              heading: "Timely Delivery",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "We strictly adhere to and respect the given timelines and deliver as per the specified schedule.      ",
            },
            {
              id: "3",
              heading: "Communication and Collaboration",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "We ensure to understand your vision in its entirety, share regular updates, and are open to your feedback and revisions.",
            },
            {
              id: "4",
              heading: "Technical Proficiency",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "We have a team of CGI experts ready to turn your vision into reality with the latest CGI tools and techniques.",
            },
            {
              id: "5",
              heading: "Creativity and Innovation",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "We tirelessly work towards infusing your CGI projects with innovative elements and creativity to make them stand out.      ",
            },
            {
              id: "6",
              heading: "Portfolio and Reputation",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
              para: "We have a vast portfolio of experience working with clients in different industries and scales, earning our name in the market.",
            },
            {
              id: "7",
              heading: "Cost-Effectiveness",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
              para: "Utilizing techniques like economy of scale, future-proofing, and more, we make sure you get the best outcome for every penny.      ",
            },
            {
              id: "8",
              heading: "Flexibility and Adaptability",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
              para: "With our agile operation, we quickly adapt to changes in scope or requirements during the project lifecycle.",
            },
            {
              id: "9",
              heading: "Legal and Ethical Compliance      ",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid12.png",
              para: "We strictly adhere to legal and ethical standards, especially regarding intellectual property rights and confidentiality.      ",
            },
          ],
          },

          section7:{
            heading: "Success Story with Hey Buddy CGI Services",
            para:
            "Hey Buddy has offered CGI solutions to companies across the board. From flourishing startups to established businesses, we have contributed our bit to the ease of business for everyone.",

            list:[
              {
                id: "1",
                heading:
                  "Immersive and Realistic Visualization for Expedited Approval          ",
                // imgurl: "",
                para: "One of Hey Buddy's clients, a leading architecture firm, wanted to elevate their project presentations. We developed realistic 3D architectural visualizations aligned with their business needs. The outcomes impressed clients and helped them expedite project approvals. Our refined practices for seamless collaboration helped in bridging gaps and fulfilling clients’ expectations to transform concepts into realities.          ",
              },
              {
                id: "2",
                heading: "Interactive Product Launch for Technology Start-up          ",
                // imgurl: "",
                para: "A tech startup based in the United States partnered with Hey Buddy for their product launch. Our CGI development services brought their product to life. We created interactive and engaging visuals and made sure that the final CGI representation perfectly aligned with the brand's vision.  The launch was successful and it captivated audiences, making the launch memorable and resonating for a long time to come and enhancing the product's market presence.",
              },
              {
                id: "3",
                heading:
                  "Better Learning Outcome with CGI Animation for Educational Content          ",
                // imgurl: "",
                para: "An educational content provider collaborated with Hey Buddy to enhance their digital learning materials. Our CGI development team crafted dynamic CGI animations that significantly improved engagement in the education content, breaking the monotony.  Our client-centric approach flawlessly integrated the client’s feedback and ensured that the outcome perfectly matched the original plan and achieved educational objectives. The results were very pleasing. Apart from high engagement, we significantly improved the learning outcome, higher retention, users’ confidence, and great overall positive learning experiences.",
              },
          
            ],
          },

          section8:{
            heading:"Our Tech Stack as Your Trusted 3D CGI Partner",
            para:"Hey Buddy Team works with an advanced tech stack, resulting in a Hyper-realistic 3D CGI development that captivates your audience.",
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
            heading:"What Clients Say About Hey Buddy as CGI Development Partner",
            // para:"",
            list:[
              {
                id: 1,
                content:
                  "Hey Buddy's CGI development services delivered exactly what we wanted. The attention to detail made the CGI assets look unbelievably real as if they were really there in the real world. Moreover, the seamless collaboration with which they worked throughout the project was really commendable. They understood our requirements so well that they easily delivered visuals that truly brought our product to life. Their expertise is unmatched and their commitment is commendable. Highly recommended.         ",
                // position: "Head of VP at Disney Hotstar",
                name: "John A.",
              },
              {
                id: 2,
                name: "Emily T.",
                content:
                  "Working with Hey Buddy was a game-changer. The CGI content brought amazing uniqueness to our marketing campaigns. The advertisement showcased our large-sized product placed in busy public locations with renowned ancient architecture. The CGI content they created was visually stunning. It was as if our product was actually there. Moreover, it perfectly aligned with our brand image. Their team's creativity and professionalism are applaudable; we recommend Hey Buddy.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: "Michael R.",
                content:
                  "Hey Buddy transformed our architectural visualization projects. Their CGI development team took a serious interest in our project and understood it thoroughly. Once they captured the essence of our designs, they perfectly developed 3D CGI content with an added level of realism. This was really impressive for us as well as our prospective clients. Their attention to architectural details and commitment to delivering on time make them the right CGI design agency to partner with.        ",
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
                ques: "What is a CGI company?",
                ans: "A CGI company specializes in creating visuals using computer graphics and offers services such as 3D modeling, animation, visual effects, and virtual reality. These services are used by businesses across industries, including entertainment, advertising, and simulation."
              },
              {
                id: 2,
                ques: "How do CGI production companies contribute to the film and entertainment industry?",
                ans: "CGI production companies play a pivotal role in film and entertainment. They produce high-quality visual effects, animations, and computer-generated sequences. This way, they bring imaginative and realistic visuals to the screen to captivate the viewers and deliver an enchanting cinematic experience."
              },
              {
                id: 3,
                ques: "What services are offered by CGI agencies?",
                ans: "CGI agencies specialize in providing computer-generated imagery solutions. This included 3D visualization, animation, and virtual experiences."
              },
              {
                id: 4,
                ques: "How does a 3D CGI Company differ from traditional creative agencies?",
                ans: "Unlike traditional creative agencies, CGI agencies focus on the technical aspects of visual content creation, thereby delivering realistic and impactful visuals for every business requirement, be it marketing or training."
              },
              {
                id: 5,
                ques: "How does CGI technology work?",
                ans: "CGI technology involves the use of computer software and algorithms to create realistic and appealing images to captivate viewers. This also includes animations, i.e., infusing life into 3D models with movements. Recent advancements in CGI technology include real-time rendering, improved physics simulations, and the integration of artificial intelligence. This enhances the efficiency and quality of CGI production and makes them highly useful for various applications, from movies to virtual experiences."
              },
              {
                id: 6,
                ques: "What is CGI packaging? And what benefits does it offer to product presentation?",
                ans: "CGI packaging involves creating ultra-realistic and visually mesmerising 3D digital product representations of an actual product. This involved using computer-generated imagery, which allows companies to showcase products in various scenarios and designs for impactful marketing, flexible prototyping, and captivating visualization for packaging solutions."
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
