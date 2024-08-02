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
  return [{ id: "23" },{id:"24"},{id:"27"},{id:"28"}];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "23",
      
  
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/AI-in-der-Automobilindustrie.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/5f4d7635552bf-Picture1.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/SmartProduction_RGB-scaled.jpg",
      heading: "Computer Vision to Drive\nQuality in Automotive Manufacturing ",
      section3:{heading: "Intelligent Watch over Automotive Quality For Complete Assurance",
      para:
        "As a leading manufacturer in automotive, our client maintained a super high-volume product line. However, this brought some big challenges in maintaining quality standards.\n\nMoreover, till now, they have been relying on manual inspection processes. But this had issues of its own. Not only was it time-consuming, struggling to keep pace with increasing production demands, but also prone to human error again affecting the quality of the products.\n\nThey needed a mechanized solution that could automate their quality control processes while bringing consistency and reliability to the process and the product.",
      },
      about:
        "Our client, a leading automotive manufacturer, was struggling with quality issues. We collaborated to implement an AI-powered computer vision system with the capability to perform automated quality control. The aim was to achieve high product quality, and more efficiency while reducing time, costs, and other resource utilization associated with manual inspection processes.",
      section5: {
        heading:
          "Automotive Quality Excellence With Smart Computer Vision",
        requirement:
          "We needed to develop an AI-enabled computer vision system that could accurately detect defects in real-time. This needed the integration of computer vision algorithms and deep learning models specialized for the automotive domain.",
        execution:
          "Our team implemented state-of-the-art computer vision techniques, such as object detection, segmentation, and anomaly detection along with data augmentation and synthetic data generation. We optimized models for real-time inference using edge computing and parallel processing.",
        delivery:
          "All of this resulted in high accuracy in defect detection and real-time quality control with low latency. Our solution not only integrated well without disrupting production but could scale with increasing demands and future growth.",
        
      },
      section6: {
        heading:
          "Driving Automotive Excellence with AI-Powered Quality Control",
        para: "Our efforts paid off in the form of significantly improved product quality. The quality-controlling process led to consistent, reliable, and scalable defect detection. We were successful in virtually vanishing the manual errors and the costs associated with it and with rework and warranty claims. Result: high customer satisfaction and brand reputation.",
        // list1:
        //   "The software features multiple pages showing luxury watches with a keen focus on attention to detail and describing all the features.",
        // list2:
        //   "Seamless implementation of product videos on each page to bring clarity to the customers and speed up the product buying process.",
        // list3:
        //   "Fully adaptable software accessibility across multiple devices to match extended customer base requirements.",
        grid: {
          cell1: "92% reduction in defects missed during quality inspection",
   
          cell2: "38% decrease in rework and warranty claim costs",
     
          cell3: "27% increase in production line throughput",
         
          cell4: "19% higher customer satisfaction ratings for vehicle quality",
        },
      },
      section7: {
        heading: "Power Your Product Quality with\nAI Vision Solutions",
   
      },
      section8: {
        // heading:
        //   "We followed a strategic process and refined it over the years to achieve the expected set of results for the client.",
        requirement:
          "We collaborated with the client's quality assurance teams to understand their specific needs and inspection criteria.",
        ideation:
          "Then, we explored various computer vision techniques to develop the right solution to meet those needs and criteria.",
        designing:
          "In the designing phase, we charted out the AI architecture and planned its seamless integration on the production lines.",
        development: "During development, we worked on custom deep learning models and computer vision algorithms.",
        // testing:"",
        deployment:
          "Lastly, the AI vision system was deployed into existing production lines with little to no disruptions.",
      },
      section9: {
        heading1: "Data Acquisition and Labeling",
        heading2: "System Integration and Scalability",
        heading3: "Real-time Performance",
        para1:
          "The first challenge was to obtain a diverse and representative dataset of automotive defects so that the AI models could be trained. For this, we make use of techniques like data augmentation and synthetic data generation to expand the training dataset.",
        para2:
          "The second challenge was to integrate the computer vision system into the existing production lines while ensuring scalability but without disruption. For this, our team took a modular approach and resorted to cloud computing resources to succeed on both fronts.",
        para3: "Another challenge was to achieve the capability of real-time defect detection without compromising on accuracy. We optimized the computer vision system for low latency inference and utilized edge computing capabilities to overcome this challenge.",
      },
      testimonal:
        "We never thought it was possible but the Hey Buddy team was confident about it. Their innovative approach to automated defect detection has significantly improved our product quality. There has been a drastic reduction in rework and warranty claims, which saved us a lot of money. And the obvious benefit of increased efficiency and consistency of the AI vision system.",
      section11: {
        para: "Make your quality assurance processes smart with Computer Vision",
      },
      link: "/pages/casestudies/computerVision/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },

    {
        id: "24",
        
    
        img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/image%20109.jpg",
        img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Group%201261152723.jpg",
        img3:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/MSNDEDHT2NCZNEU525UBW2YALQ.jpg",
        heading: "Redefining Online Shopping with\nAR and Computer Vision Power Combo",
        section3:{heading: "Transforming Online Shopping with Augmented Reality",
        para:
          "Online shopping has always lacked immersion. The interaction with the product and the brand has always been limited. Result: uncertainties, lack of brand trust, and higher return rates.\n\nOur client sought a solution to bridge this gap. They wanted their online shopper to virtually try on products or visualize furniture in their homes.\n\nThe obvious choice was the Augmented Reality solution. The client wanted to use it for a more engaging and informative shopping journey. However, they were also skeptical of the stability and convincing power of AR. Towards this end, Hey Buddy suggests a solution of AR and computer vision.",
        },
        about:
          "A leading e-commerce retailer went through a transformational experience with Hey Buddy. We provided an online shopping solution that combined computer vision and augmented reality (AR) technological capabilities to result in a uniquely captivating shopping experience. The immersive and interactive way to visualize products helped customers make faster purchase decisions, leading to higher sales. ",
        section5: {
          heading:
            "Sophisticated AR Solutions for Immersive Online Shopping",
          requirement:
            "We needed to develop a mobile application that could use this combo and deliver an ultra-realistic virtual try-on and product visualization.",
          execution:
            "Our team implemented the latest computer vision algorithms to accurately detect and track objects, surfaces, and users.",
          delivery:
            "We delivered an AR shopping app that overlaid virtual products for the customers to try on wearables through a live camera feed. Also, they could place furniture and other home decor products in their homes using spatial mapping.",
          
        },
        section6: {
          heading:
            "A Never-before Online Shopping Experience for Never-ending engagement",
          para: "Our efforts worked out in the form of a convincing AR+computer vision experience. and satisfaction with virtual try-on and product placement capabilities. The conversion rate soared high while the daunting returns were reduced. All because of better product understanding.\nThis helps our client strengthen their brand perception and gain customer loyalty ",
          // list1:
          //   "The software features multiple pages showing luxury watches with a keen focus on attention to detail and describing all the features.",
          // list2:
          //   "Seamless implementation of product videos on each page to bring clarity to the customers and speed up the product buying process.",
          // list3:
          //   "Fully adaptable software accessibility across multiple devices to match extended customer base requirements.",
          grid: {
            cell1: "65% increase in online product engagement",
     
            cell2: "32% boost in customer confidence",
       
            cell3: "27% higher conversion rates ",
           
            cell4: "19% reduction in product returns",
          },
        },
        section7: {
          heading: "Give Shoppers a Solid Reason to Buy",
     
        },
        section8: {
          // heading:
          //   "We followed a strategic process and refined it over the years to achieve the expected set of results for the client.",
          requirement:
            "We conducted extensive constructive client meetings and gathered insights on the pain points of online shoppers.",
          ideation:
            "There were multiple AR techniques to choose from, we spotted the best one to create an immersive shopping experience.",
          designing:
            "A user-friendly and intuitive mobile app interface was non-negotiable and seamlessly integrated AR capabilities for users’ smooth sailing.",
          development: "Then we implemented powerful computer vision algorithms and other smart techniques for convincing product visualisation.",
          // testing:"",
          deployment:
            "Lastly, we achieved seamless performance across devices and environments with rigorous tests and improvements.",
        },
        section9: {
          heading1: "Accurate Object and Surface Detection",
          heading2: "Seamless Integration with E-Commerce Platform",
          heading3: "Performance Optimization for Wide Reach",
          para1:
            "Ensuring precision in identifying real-world objects including human bodies was definitely a challenge. Our team implemented advanced computer vision algorithms and machine learning techniques to overcome this challenge.",
          para2:
            "The next challenge was to integrate the sophisticated solution into our client’s existing e-commerce platform and product catalog as smoothly as possible. We ensure this smooth integration with APIs and data pipelines and real-time product data synchronization.",
          para3: "It was imperative to have a solution optimized for an extensive range of devices. Our team implemented techniques such as multi-threading and efficient resource management for optimal rendering and user experience.",
        },
        testimonal:
          "We worked with Hey Buddy to integrate augmented reality into our online shopping platform. We were impressed by their collaborative approach apart from the obvious technical expertise. The solution is truly immersive and convincing, helping our shoppers make faster decisions. This has contributed not only to our sales but to our brand image as well.",
        section11: {
          para: "Impress Your Customer with Helpful Innovations",
        },
        link: "/pages/casestudies/computerVision/[id]",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
      },
      {
        id: "27",
        
    
        img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Group%201261152724.jpg",
        img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Group%201261152725.jpg",
        img3:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Group%201261152726.jpg",
        heading: "Computer Vision-enabled\nIntelligent Energy Efficiency for Smart Homes",
        section3:{heading: "Balancing Energy Savings with Computer Vision",
        para:
          "The current home energy management systems lacked contextual awareness, and, hence, were inefficient in resource utilization. That is why, our client was looking for an intelligent solution to monitor and adapt to the home's occupancy patterns as well as other environmental contexts.\n\nWe collaborated in multiple discussions as well as carried out our own research to understand the situation thoroughly. The process zeroed in on a solution utilizing Computer vision technologies.  This would provide an automated way to conserve energy while maintaining comfort for the homeowners.",
        },
        about:
          "In late 2023, we collaborated with a leading smart home technology provider. The project was to develop an innovative energy management system powered by computer vision. It aimed to optimize energy usage in residential settings by reducing consumption, lowering utility costs, and minimizing environmental impact.",
        section5: {
          heading:
            "Vision-Powered Energy Optimization for Smart Homes",
          requirement:
            "We needed to develop a computer vision system capable of smart monitoring. It required implementing advanced algorithms with efficient on-device processing and seamless integration with the smart home system.",
          execution:
            "Our AI experts team achieved blanket monitoring through advanced computer vision algorithms including object detection, people counting, and environmental conditions.",
          delivery:
            "As a result, the computer vision-enabled energy management system could use cameras to gather real-time data and intelligently control lighting, heating, ventilation, and air conditioning (HVAC) systems as per the occupancy and environmental conditions.",
          
        },
        section6: {
          heading:
            "Sustainable Living Through Intelligent Energy Management",
          para: "Post-deployment of the solution we saw a significant reduction in energy consumption and costs. Our computer vision solution smoothly integrated with the existing smart home system and brought comfort and convenience through personalized energy management. More importantly, it minimizes carbon footprint and environmental impact by reducing energy waste.",
          // list1:
          //   "The software features multiple pages showing luxury watches with a keen focus on attention to detail and describing all the features.",
          // list2:
          //   "Seamless implementation of product videos on each page to bring clarity to the customers and speed up the product buying process.",
          // list3:
          //   "Fully adaptable software accessibility across multiple devices to match extended customer base requirements.",
          grid: {
            cell1: "28% reduction in energy consumption",
     
            cell2: "$312 average annual savings on utility bills ",
       
            cell3: "37% increase in user satisfaction with personalized energy management",
           
            cell4: "92% seamless integration rate with existing smart home ecosystems",
          },
        },
        section7: {
          heading: "Sustainable living is not an option anymore.\nChoose smart solutions for customers, costs, and conservation",
     
        },
        section8: {
          // heading:
          //   "We followed a strategic process and refined it over the years to achieve the expected set of results for the client.",
          requirement:
            "We conducted extensive research to understand the client's requirements and consulted energy experts to understand the intricacies of residential energy consumption patterns.",
          ideation:
            "After that, we explored various computer vision techniques and smart home integration strategies. This helps us develop an optimal energy management solution with all-encompassing capabilities.",
          designing:
            "In the designing phase, we make sure to prioritize data privacy while ensuring seamless integration. Hence, the solution was supposed to be feature-packed, user-friendly built over a secure system architecture.",
          development: "Then came the development phase, wherein, we Implemented advanced computer vision algorithms. Our solution could detect occupants, and monitor environmental conditions, and was infused with intelligent control systems.",
          // testing:"",
          deployment:
            "With rigorous testing and optimization, we deployed the system with high performance across various home configurations and environments.",
        },
        section9: {
          heading1: "Privacy and Security",
          heading2: "System Integration and Interoperability",
          heading3: "Energy Optimization Algorithms",
          para1:
            "The primary challenge was to ensure data privacy and security as we utilized camera-based monitoring systems in residential settings. Our team strictly adhered to robust data encryption and on-device processing techniques.",
          para2:
            "To overcome the challenge of integrating the energy management system with various smart home devices from different manufacturers, we developed open APIs and adhered to industry standards. This resulted in seamless interoperability and future scalability.",
          para3: "Yet another challenge was developing intelligent algorithms that could effectively balance energy savings with user comfort. We deployed machine learning techniques and occupant feedback to continuously refine and optimize the solution. ",
        },
        testimonal:
          "Hey Buddy developed our vision-powered energy management solution for our smart home offerings. The solution was really amazing and we could not believe the capabilities it displayed, helping us provide homeowners with an intelligent and automated way to conserve energy while maintaining comfort.",
        section11: {
          para: "Get Smart Computer Vision solutions with Hey Buddy's AI Team.",
        },
        link: "/pages/casestudies/computerVision/[id]",
        imgurl:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
      },

      {
        id: "28",
        
    
        img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/image%20110.jpg",
        img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/image%20111.jpg",
        img3:
            "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/monitoring-cctv-security-camera%201.jpg",
        heading: "Safeguarding Communities with\nIntelligent Surveillance",
        section3:{heading: "Overcoming Shortcomings of Traditional Human Security and Surveillance",
        para:
          "Till now the existing surveillance systems have often rely on human monitoring. Not to mentioned, it is not only inefficient and prone to errors but also limited in terms of scalability.\n\nOur client wanted a smart solution that can not only have an deterrent effect like CCTV camera but also detect potential threats or understand suspicious activities in real-time just like humans do.\n\nGive this requirement, the powerful capabilities of intelligent computer vision technologies was the only and the best solution to offer impregnable security against crimes of all kinds.",
        },
        about:
          "A renowned security solutions provider wanted to take their security solution up a notch by capitalizing on the revolutionary intelligent technologies like AI.\n\nVisionary surveillance is one of the best way to achieve foolproof security and that is our client though explore option in this direction. They asked to consult with our AI expert team and after few rounds of discussion, we reach on a decision to develop an advanced computer vision-powered surveillance system.",
        section5: {
          heading:
            "Smartly Differentiating Regular Activities from Suspicious Ones",
          requirement:
            "The project needed advanced computer vision that could with activity recognition across diverse scenarios. Additionally, it should have scalable video processing infrastructure, and robust data privacy controls.",
          execution:
            "Our AI team implemented deep learning models tailored for security and they utilized distributed computing and edge processing for efficient real-time video processing and stringent data protection measures.",
          delivery:
            "Our team successfully achieved accurate real-time threat monitoring that could significantly contribute to proactive security and rapid response. This will considerably intensify public safety compared to traditional surveillance.",
          
        },
        section6: {
          heading:
            "A Diligent Security that Never Fails",
          para: "With diligent efforts, we achieved real-time threat detection and rapid response. The system possessed situational awareness and could take proactive security measures across multiple locations. Moreover, it could seamlessly scaled compared to traditional human-monitored surveillance systems.",
          // list1:
          //   "The software features multiple pages showing luxury watches with a keen focus on attention to detail and describing all the features.",
          // list2:
          //   "Seamless implementation of product videos on each page to bring clarity to the customers and speed up the product buying process.",
          // list3:
          //   "Fully adaptable software accessibility across multiple devices to match extended customer base requirements.",
          grid: {
            cell1: "65% faster response time to security incidents ",
     
            cell2: "37% improvement in scalability and coverage",
       
            cell3: "72% increase in situational awareness ",
           
            cell4: "28% lower risk and liability costs due to timely alerts ",
          },
        },
        section7: {
          heading: "Get Solutions\nThat Act as You Eyes.",
     
        },
        section8: {
          // heading:
          //   "We followed a strategic process and refined it over the years to achieve the expected set of results for the client.",
          requirement:
            "We started with collaborating with security experts to understand critical security challenges and ways to overcome these through strategic surveillance.",
          ideation:
            "Using expert recommendations and combining it with our own research, we explored various computer vision techniques and AI models suitable for overcome the challenges and achieve the designated targets.",
          designing:
            "Once we had the perfect solution in hand, we designed a scalable and secure system architecture. It had the functionalities like real-time video processing and alert management.",
          development: "Based on the approved designed from the client, we implemented custom deep learning models and computer vision algorithms for the best security and surveillance applications.",
          // testing:"",
          deployment:
            "The app was seamlessly integrated the AI-powered surveillance system with the existing security infrastructure and provided comprehensive training and support.",
        },
        section9: {
          heading1: "Real-time Performance and Scalability",
          heading2: "Handling Diverse Environments and Scenarios",
          heading3: "Privacy and Ethics Considerations",
          para1:
            "We needed to have a system with real-time threat detection across multiple camera feeds and locations. Our team conducted research and implemented distributed computing and edge processing capabilities for fast and efficient video analysis and alert management.",
          para2:
            "We needed to develop robust algorithms that can accurately detect detection even in changing environmental conditions such as lighting, weather, etc. Here, we used techniques like data augmentation and transfer learning to train our AI models.",
          para3: "The most important challenge was to address privacy concerns and ethical implications of AI-powered surveillance systems. We implemented strict data protection measures, anonymization techniques, and adhered to industry best practices and guidelines.",
        },
        testimonal:
          "We collaborated with Hey Buddy for an AI-powered surveillance solution. They developed a system with the ability to detect and alert automatically in real-time. Our our response times and situational awareness have improved and we've witnessed a notable reduction in crime rates.",
        section11: {
          para: "Get AI-powered Solutions for Any Business Required.",
        },
        link: "/pages/casestudies/computerVision/[id]",
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