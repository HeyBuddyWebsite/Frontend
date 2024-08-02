// "use client";
import Section1 from "@/components/casestudiescomp/realstatecomp/gamedev/Section1";
import Temp from "@/components/casestudiescomp/realstatecomp/gamedev/Temp";
import Section11 from "@/components/casestudiescomp/realstatecomp/gamedev/Section11";
import Section2 from "@/components/casestudiescomp/realstatecomp/gamedev/Section2";
import Section3 from "@/components/casestudiescomp/realstatecomp/gamedev/Section3";
import Section4 from "@/components/casestudiescomp/realstatecomp/gamedev/Section4";
import Section5 from "@/components/casestudiescomp/realstatecomp/gamedev/Section5";
import Section6 from "@/components/casestudiescomp/realstatecomp/gamedev/Section6";
import Section7 from "@/components/casestudiescomp/realstatecomp/gamedev/Section7";
import Section8 from "@/components/casestudiescomp/realstatecomp/gamedev/Section8";
import Section9 from "@/components/casestudiescomp/realstatecomp/gamedev/Section9";

import React from "react";
export function generateStaticParams() {
  return [{ id: "16" },{ id: "31" },{ id: "32" },{ id: "33" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "16",
      
  
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/custom_software/16_1.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/custom_software/16_2.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/custom_software/16_3.jpg",
      heading: "Custom Marketplace Development\nFor a Luxury Watches Brand to Boost Sales Patterns",
      section3:{heading: "Custom Marketplace Development for a Luxury Watches Brand to Boost Sales Patterns",
      para:
        "A luxury watch brand in India sought to transition to a D2C marketplace, requiring expert software development. After fruitful discussions, they chose us as their development partner. We embarked on the project, addressing challenges with comprehensive solutions for a customized platform.\n\nOur goal was to ensure smooth operations and meet the client's objectives effectively.",
      },
      about:
        "Our client, one of the reputed luxury watch brands in India with an extensive customer base all across the globe, demanded a D2C marketplace. The client wanted to widen the scope of product selling from a multi-vendor marketplace to the company's own D2C platform and deal directly with end customers. Concerning the same, this project demanded a customer software development approach from the hands of an expert development company. So, this is where, the client contacted us to meet the specific requirements of a fully customized D2C marketplace with the best technical approach, followed by smooth operations. We and the client ran into a few rounds of productive discussions followed by the brand selected as their ideal software development partner. After numerous rounds of brainstorming sessions, we started working on the project featuring challenges, comprehensive solutions, and the desired objective in mind.",
      section5: {
        heading:
          "Custom Software Development Journey of Problem Identification, Coordination, and Feature-rich Marketplace Development",
        requirement:
          "The initial requirement of the luxury watches brand was to create a Direct to Customer(D2C) based eCommerce marketplace software. The client asked to create an interactive, user-friendly, fast operative, and feature-rich platform that assures quick buying of watches by customers all across the globe. The project required not just the creation of software but with custom software related to key product features, price-wise product showcase, product visuals, multi-page functionalities, and more.",
        execution:
          "Our software team development with specialization in creating D2C platforms understood all the requirements and started working on the project. At the initial execution level, our team gathered all the data points related to key features required, technical integrations, payment gateways, number of products to upload, load adaptability, multi-currency features, multi-lingual functionality, quality assurance, and other key factors.",
        delivery:
          "On this project, we used our cutting-edge technical tech stack, year of expertise, dynamic development approach, and real-time feedback process to create intuitive software. Depending on the client's requirements, we created several custom features and delivered the same well on time. ",
        
      },
      section6: {
        heading:
          "Turning Client's Vision into a Profitable Reality with Custom Luxury Watch Software",
        para: "We developed a highly interactive, fast-to-load, and multi-accessible custom platform for selling luxury watches. Our developers infused the next potential technology along with the usual tech stack to create a marketplace that is data-driven, visually appealing, and performance-oriented in nature.",
        list1:
          "The software features multiple pages showing luxury watches with a keen focus on attention to detail and describing all the features.",
        list2:
          "Seamless implementation of product videos on each page to bring clarity to the customers and speed up the product buying process.",
        list3:
          "Fully adaptable software accessibility across multiple devices to match extended customer base requirements.",
        grid: {
          cell1: "35% better customer retention rate.",
   
          cell2: "14% increase in product sales compared to Q4.",
     
          cell3: "55% better product delivery experience.",
         
          cell4: "46% reduction in product return rate.",
        },
      },
      section7: {
        heading: "Get Customer Software Development Services\nFor Your Enterprise at Low Cost",
   
      },
      section8: {
        heading:
          "We followed a strategic process and refined it over the years to achieve the expected set of results for the client.",
        requirement:
          "We first understand the requirement of the client for the D2C-based custom software.",
        ideation:
          "We did several brainstorming, meetings, assessments, analysis, and other activities before getting started.",
        designing:
          "In this stage, we start creating visually appealing software with an interactive dashboard, product, and information showcase.",
        // development: "",
        // testing:"",
        deployment:
          "After creating high-quality designs and adding the required set of functionalities, we deployed the project after performing rigorous testing.",
      },
      section9: {
        heading1: "Maintaining the Brand's Luxurious Appel",
        heading2: "Delivery Software in Just 6 Months",
        // heading3: "",
        para1:
          "The initial challenge was to create a custom software with the required features and appearance to match the luxury's brand style and elegance. In practice, it required an experienced development approach to work similarly to a leading brand and display the brand's appeal on each page.",
        para2:
          "A tight deadline was another obstacle that came to the front when developing software with a customized set of functionalities and multiple integrations. The client shared with us the specific launch timeline with multiple sets of work to be done on the software. Our team had to complete the designing, development, execution, testing, and deployment work in a matter of six months only. Thus, the team worked hard for extended hours and successfully developed the software.",
        // para3: "",
      },
      testimonal:
        "We are fully impressed with the software development practice of this company. They really helped us understand the intricacies of custom software required for our luxury watch brand. This team did a wonderful job of creating feature-rich software with utmost clarity, and timely delivery, and showcased a great deal of professionalism. So, happy to collaborate with this team.",
      section11: {
        para: "Do you want a feature-rich and result-driven software with customized features? If yes, then get in touch with us to experience results beyond imagination. Rely on our cutting-edge technology and dynamic development approach.",
      },
      link: "/pages/casestudies/customsoftware/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "31",
      
  
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Frame%201000006590.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Frame%201000006591.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Frame%201000006592.jpg",
      heading: "Inventory Management Revolution:\nFrom Stagnant Stocks to Streamlined Success",
      section3:{heading: "The Main Challenge: Inventory Distress? Hey Buddy Knows",
      para:
        "The process of proactive order management was hampered by the client's lack of real-time inventory visibility. The primary pain points included frequent stockouts, overstocking, and inefficient order management, which affected overall business performance. Hey Buddy bridged the gap with their dedication to customer success and data-driven solutions, suggesting an inventory management system to maximize ordering, forecast demand, and track stock in real-time.",
      },
      about:
        "An inventory-based firm faced significant challenges with a low-performing inventory management system, inaccurate stock levels, and inefficiency in order management. These issues led to frequent stockouts, negatively impacting customer relations and satisfaction. Hey Buddy stepped in to offer robust inventory management software solutions that transformed their operations.",
      section5: {
        heading:
          "Technical Solution: Bridging the Gap with Innovation",
        requirement:
          "Bringing real-time visibility and efficiency required a sophisticated inventory management system planned and developed meticulously to the minutest detail.",
        execution:
          "We implemented advanced AI algorithms and real-time data processing to provide accurate stock tracking and demand forecasting. We developed a comprehensive system featuring low-stock notifications, AI-driven demand forecasting, and automated order management.",
        delivery:
          "By employing cutting-edge AI and real-time tracking, the new system continuously monitored inventory levels and provided actionable insights to optimize stock management.",
        
      },
      section6: {
        heading:
          "Transforming Inventory Management: Results from Inventory",
        para: "The system offered facilitated continuous inventory monitoring in real-time and up-to-date stock information. Also, it offered automated alerts for low stock before they run out. Further, AI analyzed sales data, market trends, and other pertinent factors for accurate future demand predictions. All this streamlined the procurement process and introduced automation.\n\nThis led to:",
        // list1:
        //   "The software features multiple pages showing luxury watches with a keen focus on attention to detail and describing all the features.",
        // list2:
        //   "Seamless implementation of product videos on each page to bring clarity to the customers and speed up the product buying process.",
        // list3:
        //   "Fully adaptable software accessibility across multiple devices to match extended customer base requirements.",
        grid: {
          cell1: "30% decline in overstocking",
   
          cell2: "75% drop in stockouts",
     
          cell3: "15% increase in gaining orders",
         
          cell4: "40% improvement in order processing efficiency",
        },
      },
      section7: {
        heading: "Experience the power of machine intelligence\nwith AI-driven solutions ",
   
      },
      section8: {
        // heading:
        //   "We followed a strategic process and refined it over the years to achieve the expected set of results for the client.",
        requirement:
          "Examined the in-depth needs of the business and collected all necessary information on client requirements. ",
        ideation:
          "Brainstormed and developed innovative ideas through team sessions. Designing: Designed the interface to streamline inventory control.",
        // designing:
        //   "In this stage, we start creating visually appealing software with an interactive dashboard, product, and information showcase.",
        development: "Built a dependable and expandable software program. ",
        // testing:"",
        deployment:
          "Positioned the system for easy integration with current systems and trained staff members.",
      },
      section9: {
        heading1: "Integration of New Inventory System",
        heading2: "Refining AI demand forecasting",
        heading3: "Data security and compliance assurance",
        para1:
          "The biggest obstacle was the integration of the new inventory control system with the current legacy system because these older systems were frequently constructed using antiquated technologies and lacked contemporary APIs, smooth integration was challenging and time-consuming. ",
        para2:
          "It was crucial to create a precise demand forecasting algorithm which is powered by AI. However, it was difficult because the algorithm had to take a seasonal variation into account, process and evaluate massive amounts of data from various sources, and then adjust according to the changes in the market trends. ",
        para3: "Establishing the security of sensitive data compliance with stringent regulations and maintaining industry standards was a critical challenge as data breaches or non-compliance have a direct risk to the project.",
      },
      testimonal:
        "Thank you to Hey Buddy who worked so closely with us in giving effective solutions that have not only helped streamline our business model but also positively impacted our decision-making process. The transformation in our inventory management has been remarkable!",
      section11: {
        para: "Boost your business performance with Hey Buddy!",
      },
      link: "/pages/casestudies/customsoftware/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },

    {
      id: "32",
      
  
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/dl.beatsnoop.com-3000-rfW3IPSOwL.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/dl.beatsnoop.com-3000-x5pC7ZMslE.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/dl.beatsnoop.com-3000-a30QIyGTmc.jpg",
      heading: "Ushering Digital Innovation for\nan Excellent Learning Experience ",
      section3:{heading: "Struggle of Student Engagement in the Digital Era of Interactive Apps",
      para:
        "The primary challenge faced by the client was that their existing platform considerably lacked in engaging students by offering interactive sessions in the era of high screen time.\n\nAdditionally, it was also now adapted to scaling to meet global demands, resulting in a lesser accessibility and learning experience for students. The educational organization sought to overcome these challenges and revolutionize online education by developing a robust e-learning platform.\n\nIt was conceived to include features such as video lectures, discussion forums, gamification, and breakout rooms to enhance student engagement and learning experience globally.",
      },
      about:
        "The client wanted us to develop a robust e-learning platform that provides various digital options including interactive learning sessions. The platform needed to be equipped with features like video lectures, discussion forums, gamification, and breakout rooms to enhance the learning experience of the students.",
      section5: {
        heading:
          "Breaking away from Outdated Teaching Methodology",
        requirement:
          "The existing platform lacks interactive sessions, records low student engagement, and couldn’t scale to meet the global demands. Hence, the requirement was of a feature-rich, cross-platform, and interactive education app.",
        execution:
          "HeyBuddy team brought the expertise of creating engaging app solutions that incorporated features like gamified learning, offline content access, interactive content video lectures, interactive discussion forums, breakout rooms, and more. ",
        delivery:
          "The digital innovation in e-learning enhanced the learning experience by integrating all the required features so that students are much more involved in the learning process, get a great user experience, and motivation to keep learning. ",
        
      },
      section6: {
        heading:
          "Feature-rich, Interactive App For Higher Learning Outcomes",
        para: "Students found the app extremely helpful. The interactive teaching content enhanced their retention while any time and offline access led them to study at their own convenience. They could make digital notes, and ask quizzes to experts, while digital interactions and community engagement contributed to collaborative learning. \n\nLastly, gamification kept them coming back to the learning platform and spending more and more time learning.",
        // list1:
        //   "The software features multiple pages showing luxury watches with a keen focus on attention to detail and describing all the features.",
        // list2:
        //   "Seamless implementation of product videos on each page to bring clarity to the customers and speed up the product buying process.",
        // list3:
        //   "Fully adaptable software accessibility across multiple devices to match extended customer base requirements.",
        grid: {
          cell1: "35% increase in completion rates",
   
          cell2: "50% increase in student engagement rates",
     
          cell3: "40% growth in terms of active users ",
         
          cell4: "90% satisfaction among the learners",
        },
      },
      section7: {
        heading: "Infuse Innovation in Your App\nKeep your users coming back. ",
   
      },
      section8: {
        // heading:
        //   "We followed a strategic process and refined it over the years to achieve the expected set of results for the client.",
        requirement:
          "The team sat with the client and recorded their interest, needs, and expectations.",
        ideation:
          "We brainstormed and conceptualized innovative features that can enhance student engagement and learning experience.",
        designing:
          "Creating a user-friendly interface and interactive design tailored to educational content.",
        development: "Built and integrated features like video lectures, gamification, and discussion forum features into the platform.",
        // testing:"",
        deployment:
          "Positioned the system for easy integration with current systems and trained staff members.Launched the platform with comprehensive testing and providing ongoing support.",
      },
      section9: {
        heading1: "Making Education Entertaining",
        heading2: "Catering to Growing Academic Requirement",
        heading3: "Protecting Academic and Personal Data",
        para1:
          "Creating an innovative model that can interest young students to study and motivate them was a challenge. We conducted research, talked to experts, and found engaging ways of teaching through an app that worked.",
        para2:
          "Ensuring that the platform caters to a larger audience without compromising API's performance and backend integration was another challenge we overcame by optimizing server infrastructure and implementing load-balancing techniques.",
        para3: "To ensure complete security of student personal as well as academic data, we implemented robust encryption protocols and conducted regular security audits.",
      },
      testimonal:
        "HeyBuddy has given immense satisfaction and motivation to our users i.e. students by transforming their journey of learning digitally. It has enhanced the quality of digital education to meet the global standards by its innovative approach.",
      section11: {
        para: "Connect With Hey Buddy’s Exert App Development Team",
      },
      link: "/pages/casestudies/customsoftware/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },


    {
      id: "33",
      
  
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/dl.beatsnoop.com-3000-koq3lAWuK5.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/dl.beatsnoop.com-3000-JUxMFS7v04.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/dl.beatsnoop.com-3000-LYR9FtZfl8.jpg",
      heading: "Enhancing Student Performance by\nData-Driven Insights",
      section3:{heading: "Real-time Tracking to Streamline Teaching Methodologies",
      para:
        "The existing system could not track real-time student progress and identify students at risk. Thus, there was no such solution that could help our client to align curriculum, teaching strategies, and methodologies in a way that motivates students and improves their engagement.\n\nHey Buddy team, with their specialty in the educational domain, met the client to understand their problem. We suggested a comprehensive data analytics system to personalize learning and facilitate targeted support for struggling students.",
      },
      about:
        "The test scores of one of the prestigious educational institutions were declining. They needed a specialized learning solution. The system should be able to track student progress and identify at-risk students, ultimately improving student achievement, providing data-driven insights on student performance, and developing more efficient teaching strategies.",
      section5: {
        heading:
          "Data-Driven Insights for Personalized Learning",
        requirement:
          "The primary project requirement was a comprehensive data analytics system developed using machine learning algorithms and real-time data processing technologies.",
        execution:
          "We integrated an intuitive user interface into the system. Advanced algorithms were used to process and analyze student data, bringing back actionable insights for education providers.",
        delivery:
          "We were successful in developing the system that leveraged machine learning to analyze student performance data, identifying patterns and providing teachers with actionable insights.",
        
      },
      section6: {
        heading:
          "Transforming Student Performance: Data-Driven Results",
        para: "Hey Buddy’s innovative approach provided teachers with information on students interests, strengths, and weaknesses. This led to the development of a targeted approach, wherein, teachers could offer personalized lessons as per individual student needs results, increased student motivation, and ultimately significantly improved learning outcomes.\n\nThis led to:",
        // list1:
        //   "The software features multiple pages showing luxury watches with a keen focus on attention to detail and describing all the features.",
        // list2:
        //   "Seamless implementation of product videos on each page to bring clarity to the customers and speed up the product buying process.",
        // list3:
        //   "Fully adaptable software accessibility across multiple devices to match extended customer base requirements.",
        grid: {
          cell1: "15% increase in test scoress",
   
          cell2: "20% rise in student engagement",
     
          cell3: "25% improvement in student retention ",
         
          cell4: "30% increase in teacher satisfaction",
        },
      },
      section7: {
        heading: "Struggling with optimum resource utilization?\nPut powerful comprehensive data analytics to use. ",
   
      },
      section8: {
        // heading:
        //   "We followed a strategic process and refined it over the years to achieve the expected set of results for the client.",
        requirement:
          "Our team collaborated with teachers and coordinators to understand their requirements and challenges. ",
        ideation:
          "We brainstormed solutions to enhance personal learning experiences with data-driven approacg.",
        designing:
          "Our team worked meticulously to design a user-friendly interface tailored to educational content and data analytics. ",
        development: "Our efforts resulted in a robust and scalable solution for performance data, helping the client improve their approach.",
        // testing:"",
        deployment:
          "We provided comprehensive support and training to teachers for a smooth rollout, integration and administrators.",
      },
      section9: {
        heading1: "Data Integration",
        heading2: "User Adoption",
        heading3: "Data Security",
        para1:
          "We needed to make sure that a seamless data transfer occurs from existing systems to the new system. It was a challenges for which we developed custom APIs and integration methods.",
        para2:
          "It was yet another challenge to encourage students and teachers to adapt to the new system. This required ongoing training and we conducted extensive sessions for the same along with our continuous support.",
        para3: "To maintain strict surveillance for data security and content protection, it was crucial to Implement robust encryption protocols and regular security audits. Hey Buddy’s strong team of data expert left no stones unturned.",
      },
      testimonal:
        "Hey Buddy has really saved our institute. They helped us identify the real issues that have till now kept dodging us. This is the best innovative approach for tracking student performance data and has helped us explore new ways of enhancing learning content. Thank you Hey Buddy",
      section11: {
        para: "Make Decision that Disrupt",
      },
      link: "/pages/casestudies/customsoftware/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
  ];

  const Selected_data = data.filter((casestudy) => casestudy.id === id);

  const {
   img1,img2,img3,heading,about,
    section3,    
    section5,
    section9,
    section8,
    section6,
    testimonal,
    section11,
    section7,
  } = Selected_data[0];

  return (
    <div className=" mx-auto">
      <Section1 heading={heading} img1={img1} />

      <div className=" mx-auto ">
        <Section2 about={about} />
      </div>

      <div className=" mx-auto ">
        <Section3
          
          {...section3}
          img2={img2}
        />
      </div>

      {/* <div className="lg:w-[80%] mx-auto ">
        <Section4 />
      </div> */}

      <div className=" mx-auto ">
        <Section5 {...section5} img3={img3} />
      </div>
      <div className=" mx-auto ">
        <Section6 {...section6} />
      </div>

      <div className=" mx-auto ">
        <Section7 {...section7} />
      </div>

      <div className=" mx-auto">
        <Section8 {...section8} />
      </div>
      <div className=" mx-auto ">
        <Section9 {...section9} />
      </div>

      <div className=" pb-12 mx-auto ">
        <Temp testimonal={testimonal} />
      </div>
      <div className=" mx-auto ">
        <Section11 {...section11} />
      </div>
    </div>
  );
};

export default page;