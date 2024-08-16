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
      heading:"Hey Buddy - Your trusted Web3 Development Company",
      imgurl:"https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/8fc30aa5574925140b823a52039d28df.jpeg",
      text:"Hey Buddy is a renowned Web3 development company, known for its blockchain development expertise and for delivering secure, innovative, and interactive web 3.0 solutions within specified timelines.",
    },
    
     checklist : [
      {
        title: "Blockchain Consulting",
      },
      {
        title: "Smart Contract Development",
      },
      {
        title: "Security Audits and Testing",
      },
      {
        title: "Decentralized Application (DApp) Development",
      },
      {
        title: "Tokenomics and Cryptoeconomics Consulting ",
      },
      {
        title: "Consensus Mechanism Implementation",
      },
    ],

    gridSection1:{
      heading: "Choose Web3 Development For Unique and Powerful Features",

      para:
      "With innovative and powerful Web3 development solution we help you gain a competitive edge and global accessibility.",
      list :[
        {
          id: "1",
          heading: "Decentralization and Trust",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid1.png",
          para: "Experience the power of trustless rapid transactions and interactions with zero interference from intermediaries and ensure transparency in your business. ",
        },
        {
          id: "2",
          heading: "New High-paying Revenue Models",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid2.png",
          para: "Tap into lucrative revenue streams and opportunities. Explore tokenization, decentralized finance (DeFi), non-fungible tokens (NFTs), and much more.",
        },
        {
          id: "3",
          heading: "Safeguard Your Records",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid3.png",
          para: "Establish complete security with blockchain's cryptographic principles and ensure tamper-proof, auditable records and your peace of mind.",
        },
        {
          id: "4",
          heading: "Build Loyal Community",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid4.png",
          para: "Engage your community through decentralized applications (dApp), foster user participation and collaboration, and build a loyal user base.",
        },
        {
          id: "5",
          heading: "Cost Efficiency",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid5.png",
          para: "Cut down unnecessary costs that come with intermediaries, middlemen, and other vulnerable operational processes by leveraging Web 3.0 technologies.",
        },
        {
          id: "6",
          heading: "Experience Seamless Interoperability",
          imgurl:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid6.png",
          para: "Integrate seamlessly with any blockchain network and traditional systems and let the opportunities come from every direction.",
        },
      ],
      },

      section3:  {
        heading:"Our Web3 Development Services",
        para:"Our renowned blockchain expertise provides comprehensive Web 3.0 development services for innovative and powerful solutions.",
        list:[
          {
            title: "Blockchain Consulting Service",
            description:
              "Our blockchain experts consult you on the blockchain. From understanding blockchain basics to crafting a tailored strategy, your every question is answered.    ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/blockchain%20consulting%20service%20.jpg",
          },
          {
            title: "Smart Contract Development",
            description:
              "Full-proof security with efficient self-executing and gas-optimized code, our Smart Contract expertise automates operations with strict Standards compliance.  ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Smart%20Contract%20Development.jpg",
          },
          {
            title: "Security Audits and Testing",
            description:
              "We safeguard your blockchain solutions with our rigorous security audits and testing. We identify vulnerabilities, fortify defenses, and ensure system resiliency.    ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Security%20Audits%20and%20Testing.jpg",
          },
          {
            title: "Decentralized Application (DApp) Development",
            description:
              "We build decentralized and automated dApps interacting with blockchain networks. The best part, these solutions are meant just for your business.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Decentralized%20Application%20.jpg",
          },
          {
            title: "Tokenomics and Cryptoeconomics Consulting",
            description:
              "We craft robust tokenomics strategies and token models that drive value and foster community engagement for long-term success in dynamic crypto-economics.      ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Tokenomics%20and%20Cryptoeconomics.jpg",
          },
          {
            title: "Consensus Mechanism Implementation",
            description:
              "We spot the right consensus mechanism for your blockchain network with our implementation expertise be it Proof-of-Work or Proof-of-Stake.  ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Consensus%20Mechanism%20Implementation.jpg",
          },
          {
            title: "DeFi Development",
            description:
              "With our powerful Smart Contracts engineering your DeFi dApps, you get high-performing, and scalable tokenomics and cryptonomics.",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/DeFi%20Development.jpg",
          },
          {
            title: "Metaverse Development",
            description:
              "We develop immersive user experiences going across multiple metaverses and catering to a large user base. Plus, Blockchain protection to your virtual economy.  ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/Metaverse%20Development.jpg",
          },
          {
            title: "NFT Development",
            description:
              "Tap into the lucrative NFT market with our attractive, unique, and creative NFTs. Be assured of the latest Smart Contract Standards compliance such as ERC-721.  ",
            img: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/Web_3_development/NFT%20Development.jpg",
          },
        ],},
        
        section4:{
          heading:"More Powerful Web 3 Development Solutions",
          para:"Hey Buddy offers unique and complete Web3 development solutions capable of overcoming the most challenging obstacles of your business.",
          checklist: [
            {
              title: "Web 3 Games Solution",
            },
            {
              title: "Multi-chain Solutions",
            },
            {
              title: "Interoperability Solution",
            },
            {
              title: "Native Payment Solution",
            },
            
          ],
          sliderlist:[
            {
              id: "1",
              heading: "Multi-chain Solutions",
              imgurl: "",
              para: "Elevate your project – choose multi-chain solutions for a connected blockchain ecosystem. Command multi-chain operations for the highest possible scalability. ",
            },
            {
              id: "2",
              heading: "Native Payment Solutions",
              imgurl: "",
              para: "No intermediaries mean faster and more effective operations. Our native payment solutions easily integrate and offer your users a frictionless payment experience.",
            },
            {
              id: "3",
              heading: "Self-sovereign Identity Solution",
              imgurl: "",
              para: "Revolutionize how individuals manage their digital identity on your platform. Say goodbye to centralized control and welcome the era of privacy.",
            },
            {
              id: "4",
              heading: "Interoperability Solutions",
              imgurl: "",
              para: "Connect, collaborate, and conquer with our interoperability solutions. Break down blockchain silos and foster seamless communication.",
            },
            {
              id: "5",
              heading: "Web3 Games Development",
              imgurl: "",
              para: "Capitalise on the future of Games with Web3 game development. Leverage blockchain Integration for in-game assets' uniqueness and monetization.",
            },
            {
              id: "6",
              heading: "Cross-Chain Development",
              imgurl: "",
              para: "Our cross-chain development solutions let your project span multiple networks with ease. Our solutions help you transcend the limits of a singular blockchain.",
            },
          ],
        },

        section5:{
          heading:"Web3 development Roadmap For Revolutionary Outcome",
          para:"We follow a strategic and time-tested Web3 development process to catapult your project into the decentralized era.",
          list: [
            {
              id: 1,
              heading: "Strategic Consultation",
              para: "Our experts dive deep into your vision and carve out a roadmap, aligning Web 3.0 power to your business’s long and short-term goals and objectives."
            },
            {
              id: 2,
              heading: "Decentralized Architecture Design",
              para: "We architect a decentralized framework as per your project's needs. Our designs lay the foundation for scalable, secure, and cutting-edge Web3 development solutions."
            },
            {
              id: 3,
              heading: "Smart Contract Development",
              para: "Our team develops code for smart contracts, automating processes and ensuring a trustless ecosystem for your transactions and operations on the blockchain."
            },
            {
              id: 4,
              heading: "Interoperability Integration",
              para: "Further, our interoperability solutions connect your project with diverse blockchain networks seamlessly, for higher connectivity and collaboration."
            },
            {
              id: 5,
              heading: "Security Audits and Testing",
              para: "Our rigorous security audits and testing ensure resiliency in your project, protecting your platform and user data from threats of every form."
            },
            {
              id: 6,
              heading: "User-Centric DApp Development",
              para: "Consequently, your DApp starts to take its final shape with seamless and intuitive user interaction with blockchain, engaging them in a great digital experience."
            },
            {
              id: 7,
              heading: "Launch and Optimization",
              para: "Lastly, your project gets launched after continuous optimization and refinement ingrained in our process for a dynamic and competitive Web3 solution."
            }
          ],
        },

        gridSection2:{
          heading: "Why We Are the Right Web3 Development Partner For You",
          para:
          "Hey Buddy gives you multiple compelling reasons for being the right Web3 development firm for you.",
          list :[
            {
              id: "1",
              heading: "Blockchain Expertise",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid7.png",
              para: "We have a team of expert blockchain developers capable of working on every blockchain component on any platform including Ethereum, Stellar, EOS, Solana, and others.",
            },
            {
              id: "2",
              heading: "We Ensure Security",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid8.png",
              para: "We implement robust security measures and follow best practices to ensure the safety of your dApps, blockchain networks, secure smart contract development, and auditing.",
            },
            {
              id: "3",
              heading: "Project Management",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid9.png",
              para: "Our efficient project management skills achieve timely delivery of milestones every time. Moreover, our emphasis on collaboration ensures you get the perfect outcome.",
            },
            {
              id: "4",
              heading: "Innovation",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid10.png",
              para: "We stay updated on the latest blockchain developments to incorporate the most innovative solutions into your projects. Thus, we ensure you stand out from your competitors.",
            },
            {
              id: "5",
              heading: "Scalability",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "Our solutions grow with your business and serve ever-evolving customer demands. We strategize for blockchain network scalability challenges for efficient and scalable solutions.",
            },
            {
              id: "6",
              heading: "Proven Track Record",
              imgurl:
                "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/grid11.png",
              para: "With a proven track record, we've demonstrated success in delivering top-notch blockchain solutions with expertise spanning Ethereum, Stellar, EOS, Solana, and more.",
            },
          ],
          },

          section7:{
            heading:"Success Stories Make Us One of the Top Web3 Development Companies",
            // para:"",

            list: [
              {
                id: "1",
                heading:
                  "Complete Security for Financial Transaction on DeFi application",
                // imgurl: "",
                para: "We launched a decentralized lending platform for one of our clients in the financial space. This way they earned enormous trust of their customers for using the most secure technologies for their DeFi dApps. This led to higher adoption rate with increased transaction number.",
              },
              {
                id: "2",
                heading: "Interconnected Web 3.0 Games Ecosystems",
                // imgurl: "",
                para: "We developed a Web 3.0 cross-chain Games title. As evident the Games ecosystem integrated multiple blockchain networks this required seamless interoperability among the. This resulted tin users moving across blockchain platform freely and in exponential increase in in-game transactions, hence, greater revenue.",
              },
              {
                id: "3",
                heading: "For top-class Caregiving With Power Healthcre DApp",
                // imgurl: "",
                para: "For a healthcare tech firm, we offered feature-packed DApp development. It helped caregivers monitor patient medical history, streamline appointment schedules, securely communicate with patients, and seamlessly access to lab results. The improved data integrity and increased patients’ trust in their healthcare services.",
              },
            ],
          },

          section8:{
            heading:"Our Web3 development Stack For a Powerful Solution Development",
            para:"Here is the list of of top Web3 development tools, technologies and technique we use. These are some of the best web3 development platforms we use the meet you specific requirements.",
            btnlist:[
              {
                id:1,
                name:"Smart Contract Development",
              },
              {
                id:2,
                name:"Blockchain Platforms",
              },
              {
                id:3,
                name:"Decentralized Storage",
              },
              {
                id:4,
                name:"Web3 Frameworks",
              },
              {
                id:5,
                name:"Consensus Mechanisms",
              },
            ],
            imglist:[
              {
                id: 1,
                name:"Smart Contract Development",
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
                name:"Blockchain Platforms",
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
                name:"Decentralized Storage",
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
                name:"Web3 Frameworks",
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
                name:"Consensus Mechanisms",
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
            heading:"Testimonials of Us Being the Top Web3 Development Agency",
            para:"Our Web 3.0 development services have catered to business across industries and scale.",
            list:[
              {
                id: 1,
                content:
                  "We needed a team to develop a high performing decentralized application. Hey Buddy’s seamless collaboration methods and capability to deliver innovative solutions in time delivery made them our go-to team for anything Web3. No wonder they are among the top web3 development companies, offering exceptional services in the industry",
                // position: "Head of VP at Disney Hotstar",
                name: "John T. (California)",
              },
              {
                id: 2,
                name: "Emily J. (New York)",
                content:
                  "Hey, Emily here from New York. We partnered Hey Buddy for their expertise in blockchain and decentralized finance and our decision proved right. Their commitment to security and attention to detail made our project a success. We highly recommended Hey Buddy for anyone venturing into Web3 space! Hey Buddy is the right web3 development services company for you.",
                // position: "Head of VP at Disney Hotstar",
              },
              {
                id: 3,
                name: "Michael H. (Texas)",
                content:
                  "Hey Buddy's Web3 development services truly stood out. Their commitment to project management and efficiency ensured our blockchain project's success. They posses in-depth knowledge of different blockchain platforms and deliver custom solution specialized for your business. ",
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
                ques: "Who is leading Web3 development in USA?",
                ans: "Hey Buddy has been a trusted name and recognized as the best Web3 development company in the USA. With a proven track record and innovative solutions, they lead the charge in decentralized technologies."
              },
              {
                id: 2,
                ques: "What does a Web3 developer do?",
                ans: "A Web3 developer excels in implementing advanced Web3 technologies such as smart contract development and blockchain to create decentralized applications (DApps). These apps stand out for operating without a central authority, utilizing self-executing code for automated processes, recording transactions on a blockchain for tamper-proof records, user control and ownership over their data, and interoperability."
              },
              {
                id: 3,
                ques: "What is a Web3 company?",
                ans: "Referring to Hey Buddy, a top Web3 development company in the USA, it offers comprehensive services encompassing blockchain, smart contracts, and decentralized applications."
              },
              {
                id: 4,
                ques: "Is a Web3 developer in demand?",
                ans: "Yes! Given the rise of decentralized technologies, the demand for Web3 developers is soaring. Companies, especially those seeking the best Web3 development company in the USA, recognize the crucial role these developers play in creating the next generation of digital solutions."
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
