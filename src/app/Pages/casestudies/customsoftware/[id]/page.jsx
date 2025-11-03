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
  return [{ id: "16" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "16",
      heading1: "Custom Marketplace Development",
      heading2: "For a Luxury Watches Brand to Boost Sales Patterns",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/custom_software/16_1.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/custom_software/16_2.jpg",
      para1:
        "A luxury watch brand in India sought to transition to a D2C marketplace, requiring expert software development. After fruitful discussions, they chose us as their development partner. We embarked on the project, addressing challenges with comprehensive solutions for a customized platform.",
      para2:
        "Our goal was to ensure smooth operations and meet the client's objectives effectively.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
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
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/custom_software/16_3.jpg",
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
          cell11: "35%",
          cell1: "better customer retention rate.",
          cell21: "14%",
          cell2: "increase in product sales compared to Q4.",
          cell31: "55%",
          cell3: "better product delivery experience.",
          cell41: "46%",
          cell4: "reduction in product return rate.",
        },
      },
      section7: {
        heading1: "Get Customer Software Development Services ",
        heading2: "For Your Enterprise at Low Cost",
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
      link: "/Pages/casestudies/customsoftware/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
  ];

  const Selected_data = data.filter((casestudy) => casestudy.id === id);

  const {
    heading1,
    heading2,
    url1,
    url3,
    para1,
    para2,
    about,
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
      <Section1 heading1={heading1} heading2={heading2} url1={url1} />

      <div className=" mx-auto ">
        <Section2 about={about} />
      </div>

      <div className=" mx-auto ">
        <Section3
          heading1={heading1}
          heading2={heading2}
          para1={para1}
          para2={para2}
          url3={url3}
        />
      </div>

      {/* <div className="lg:w-[80%] mx-auto ">
        <Section4 />
      </div> */}

      <div className=" mx-auto ">
        <Section5 {...section5} />
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
