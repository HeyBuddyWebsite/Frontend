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
  return [{ id: "7" }, { id: "8" }];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "7",
      heading1: "Developing CGI Graphics for D2C Based",
      heading2: "Online Retail Company",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/maxresdefault%201.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/1603217826584.jpg",
      para1:
        "A leading online furniture D2C brand sought CGI experts to enhance customer engagement. They selected us as their CGI service partner to create lifelike visuals for their product lines. Our initial focus included identifying pain areas, coordinating efforts, and innovatively crafting CGI elements.",
      para2:
        "The journey began with a strategic approach towards visual elegance and enhanced brand interaction.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "Our client, one of the leading online furniture-selling D2C brands deals in offering a wide range of residential & commercial furnishings digitally. They were facing difficulty in gathering the attention of target customers. For higher attraction, the client was looking for an experienced and creatively infused team of CGI experts to create real-life-like graphical visuals for the brand. The ultimate aim of the client was to create CGI elements related to their wide range of product lines and witness the level of interaction. After having a brief round of discussions, an online furniture brand choose us as their reliable CGI service partner, we started working on their brand and understanding the requirements to bring visual elegance to the brand. Initial Journey Started with Pain Area Identification, Coordination, and Creation of Innovative CGI Visual Elements",
      section5: {
        heading: "Bringing Captivating Experience for Online Shoppers",
        requirement:
          "First and foremost, our team of specialized CGI experts browse through the clients ' online furniture platforms. The team understood the client's objective to add visually appealing creativeness to the website which resulted in gathering more attention that led to increased sales patterns. This project required the tasks of converting still and dull-looking furnishings images into interactive and user-friendly CGI-driven backgrounds, exotic color schemes, and adding 3D elements.",
        execution:
          "Our CGI development company understands the requirement and has started working on creating lifestyle imagery for furniture items. The team even worked on the product configurators part that allows customers to look for each furniture item from different angles in a single view. Moreover, we even add perfect-looking internal and external background imagery with the presence of the offered product.",
        delivery:
          "Throughout the project, we relied on advanced CGI tools and techniques for remodeling product images and adding more visual appeal. Using CGI techniques, we created vibrant, detailed, clearly highlighted, and 3D images that appear real to the eyes of customers. Most importantly, we performed CGI-related work on the client's online furniture website directly for customers within the stipulated time frame.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/1_GmEfbTUd-ENvUDiXu1FwOQ.jpg",
      },
      section6: {
        heading: "Interactive Product Visualisation for Higher Sales",
        para: "The client collaborated with us with unique requirements to bring CGI effect on the product images and overall showcase of items. Their website traffic increased by around one-third which positively affected other KPIs across the board.",
        list1:
          "As users could make better and faster decisions, the sale got a quick boost in a shorter period.",
        list2:
          "Cart abandonment went significantly down, thus, we helped them tackle one of their dreaded pain points. ",
        list3: "They are on the way to their market expansion efforts.",
        grid: {
          cell11: "30%",
          cell1: "increase in web traffic after adding CGI-based imagery.",
          cell21: "45%",
          cell2: "increase in product sales in just 2 months.",
          cell31: "30%",
          cell3: "reduction in website bounce rate.",
          cell41: "Substantial",
          cell4: "increase in new customer base.",
        },
      },
      section7: {
        heading1: "Do away with adamant cart abandonment",
        heading2: "help customers make faster decisions, favouring your brand.",
      },
      section8: {
        heading:
          "We followed a meticulous process refined over the years to achieve the exact goals our client wanted.",
        requirement:
          "We first understand the requirement of the client for the D2C-based retail platform.",
        ideation:
          "We did several brainstorming, meetings, assessments, analysis, and other activities before getting started.",
        designing:
          "In this stage, we start crafting eye-appealing CGI imagery of furniture, accessories, and backgrounds.",
        // development: "",
        deployment:
          "After creating high-quality computer-generated imagery for all the products, we successfully deployed the project.",
      },
      section9: {
        heading1: "CGI effects on thousands of products",
        heading2: " Maintaining an optimum level of quality",
        heading3: "Keeping the direct-to-customer business approach in mind",
        para1:
          "It was challenging to transform all the still-looking furnishings images into CGI effected visuals. First, it looked like taking a whole lot of time to enhance the visual appeal of the website.",
        para2:
          "It was important to keep the quality of visuals on a high scale to meet business objectives. The client wanted the image element should connect with each customer's furnishing requirement.",
        para3:
          "Another major challenge of the project is keeping the D2C business approach in mind. We had to work with the mindset that customers dropping on the client's website must stay and finalize a product.",
      },
      testimonal:
        "It felt great to see such amazing results on our online furniture website. They did an amazing job in terms of remodeling how our product looks and bringing more attention to customers. We are experiencing a great deal of response from our customers and even sales have increased",
      section11: {
        para: "Do you want the innovation and creative appeal of CGI imagery immersed into your brand? Connect with us and bring the desired attraction to your platform.",
      },
      link: "/Pages/casestudies/cgidevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "8",
      heading1: "Powering Storytelling with",
      heading2: "Ultra Realistic CGI Visuals",
      url1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/image%208.jpg",
      url3: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/image%2010.jpg",
      para1:
        "A prominent media brand sought our CGI expertise to enhance their visual storytelling, aiming for an immersive audience experience. Leveraging our skills, we created a cutting-edge CGI pipeline that seamlessly integrated live-action footage with stunning 3D environments and characters, elevating the audience's engagement.",
      para2:
        "The result was a visually impressive production that redefined the limits of visual storytelling, leaving a lasting impact on viewers.",
      para3:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      para4:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
      about:
        "A leading media and entertainment brand, renowned for producing popular video content, approached us for a CGI solution. They wanted to power their visual storytelling and give their audience a great experience. Staying true to our expertise, we developed a CGI pipeline that could blend live-action footage with photorealistic 3D environments, characters, and visual effects. The outcome impressed the audience and pushed the boundaries of visual storytelling and audience engagement.",
      section5: {
        heading: "Pushing the Limits of Visual Artistry",
        requirement:
          "To produce ultrarealistic visuals that blend with live-action content and transports audiences into fantastical worlds. The CGI quality was the top priority to match the brand image of our client.",
        execution:
          "Our expertise in CGI technologies, a team of talented artists and technicians, and our unique collaborative approach resulted in a high-quality CGI visual seamless blending with the client’s content.",
        delivery:
          "We delivered a comprehensive CGI pipeline that leveraged advanced 3D modeling, rendering, and compositing techniques to create breathtakingly realistic visual experiences.",
        urlimg:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/image%201.jpg",
      },
      section6: {
        heading: "Unleashing Visual Wizardry on the Silver Screen",
        para: "Our CGI solution helped our client realize their creative visions with ultra-realism. The audience received it with full admiration. The visuals immersed them in a captivating world that blurred the lines between reality and imagination.",
        list1:
          "Photorealistic 3D environments and character animations create a cohesive and believable visual experience.",
        list2:
          "Advanced real-time rendering for dynamic lighting, and realistic physics, delivered complex visuals with enhanced immersion levels.",
        list3:
          "Streamlined workflows and optimized pipelines that accelerated the CGI production process, faster turnaround times, and cost-effective visual storytelling.",
        grid: {
          cell11: "40%",
          cell1: "reduction in post-production timelines.",
          cell21: "30%",
          cell2: "increase in audience engagement metrics",
          cell31: "25%",
          cell3: "boost in global box office revenue",
          cell41: "Numerous",
          cell4: "awards and accolades for outstanding visual effects",
        },
      },
      section7: {
        heading1: "Add Life to",
        heading2: "Your Storytelling.",
      },
      section8: {
        //heading: "",
        requirement:
          "We conducted extensive consultations with the client's creative team to understand their vision.",
        ideation:
          "We conceptualize the CGI pipeline in collaboration with the client, defining key components.",
        designing:
          "We created detailed 3D models, environments, character rigs, and visual effect simulations.",
        development:
          "Our team leveraged the latest CGI software and rendering engines for a robust and efficient CGI pipeline.",
        deployment:
          "We integrated the CGI pipeline into the client's existing production workflows for a smooth transition",
      },
      section9: {
        heading1: "Achieving Seamless Visual Integration",
        heading2: "Mastering Nuanced Animations",
        heading3: "Optimizing Collaborative CGI Workflows",
        para1:
          "To create photorealistic visuals that easily blend with live-action footage, required advanced rendering techniques and sophisticated compositing workflows",
        para2:
          "Developing realistic character animations that could resonate emotionally with audiences was a challenge that we overcame by refining our animation techniques and using advanced software tools.",
        para3:
          "Optimising the CGI pipeline for better collaboration among creative teams, ensuring smooth coordination and iteration. We ensured that it was seamless and clear.",
      },
      testimonal:
        "Hey Buddy's CGI solution improved the entertainment quotient of our videos. Their expertise in CGI, combined with their collaborative approach, allowed us to deliver a great experience to our audience with unparalleled realism and immersion. I can’t appreciate them enough for their seamless integration of CGI pipeline into our production workflows. We look forward to many more successful collaborations.",
      section11: {
        para: "Want to deliver a visual experience the stays with the audience?",
      },
      link: "/Pages/casestudies/cgidevelopment/[id]",
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
