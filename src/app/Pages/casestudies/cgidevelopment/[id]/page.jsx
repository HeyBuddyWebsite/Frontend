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
  return [{ id: "7" }, { id: "8" },{id:"18"},{id:"19"}];
}
const page = ({ params }) => {
  const { id } = params;

  const data = [
    {
      id: "7",
      
     
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/maxresdefault%201.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/1603217826584.jpg",
      img3:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/1_GmEfbTUd-ENvUDiXu1FwOQ.jpg",
      heading: "Developing CGI Graphics for D2C Based\nOnline Retail Company",
      section3:{heading: "Developing CGI Graphics for D2C Based Online Retail Company",
      para:
        "A leading online furniture D2C brand sought CGI experts to enhance customer engagement. They selected us as their CGI service partner to create lifelike visuals for their product lines. Our initial focus included identifying pain areas, coordinating efforts, and innovatively crafting CGI elements.\n\nThe journey began with a strategic approach towards visual elegance and enhanced brand interaction.",
      },
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
         
          cell1: "30% increase in web traffic after adding CGI-based imagery.",
       
          cell2: "45% increase in product sales in just 2 months.",
         
          cell3: "30% reduction in website bounce rate.",
         
          cell4: "Substantial increase in new customer base.",
        },
      },
      section7: {
        heading: "Do away with adamant cart abandonment\nhelp customers make faster decisions, favouring your brand.",
      
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
      link: "/pages/casestudies/cgidevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "8",
    
      
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/image%208.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/image%2010.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/image%201.jpg",
      heading: "Powering Storytelling with\nUltra Realistic CGI Visuals",
      section3:{heading: "Powering Storytelling with Ultra Realistic CGI Visuals",
      para:
        "A prominent media brand sought our CGI expertise to enhance their visual storytelling, aiming for an immersive audience experience. Leveraging our skills, we created a cutting-edge CGI pipeline that seamlessly integrated live-action footage with stunning 3D environments and characters, elevating the audience's engagement.\n\nThe result was a visually impressive production that redefined the limits of visual storytelling, leaving a lasting impact on viewers.",
      },
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
         
          cell1: "40% reduction in post-production timelines.",
        
          cell2: "30% increase in audience engagement metrics",
       
          cell3: "25% boost in global box office revenue",
         
          cell4: "Numerous awards and accolades for outstanding visual effects",
        },
      },
      section7: {
        heading: "Add Life to\nYour Storytelling.",
        
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
      link: "/pages/casestudies/cgidevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },

    {
      id: "18",
      
      
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Parsana1.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Parsana2.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/Parsana3.jpg",
      heading: "3D CGI Innovation Developed\nParsana's Marketing Triumph Story",
      section3:{heading: "3D CGI Innovation Developed Parsana's Marketing Triumph Story",
      para:
        "Parsana faced challenges in attracting customers to their unconventional product line due to limited consumer awareness and a non-conventional product range. They needed a creative solution to capitalize on a local marathon event and build instant brand recognition.\nOur 3D CGI-led social media content encouraged them to explore this innovative technology to power their brand. We collaborated to create 3D CGI marketing videos for display during a health and fitness awareness event.\nAdmittedly, they were skeptical about the CGI technology and its capability to fuel brand awareness in the initial phase. So, to start, they thought to just have a single video. However, once they saw the outcome delivered by our team they ended up demanding an additional video doubling their budget for the project and creating more touchpoints with the event attendees.\nMoreover, when it came to performance, the videos did not disappoint our client and they witnessed a significant uptick in their sales, social media engagements and, most importantly, their brand recognition. ",
      },
      about:
        "Moreover, when it came to performance, the videos did not disappoint our client and they witnessed a significant uptick in their sales, social media engagements and, most importantly, their brand recognition.",
      section3:{
        heading:"Bridging the Awareness Gap with Compelling CGI Visuals"
      },
        section5: {
        heading: "Bringing Parsana's Vision to Life",
        requirement:
          "The project demanded high-end 3D modeling and animation capabilities to create realistic therapy plate visualizations. We utilized a powerful hardware setup with GPU-accelerated rendering to meet the tight deadline and quality expectations.",
        execution:
          "Our team employed a multi-software pipeline, integrating Blender, Maya, and Cinema 4D for optimal results. We implemented custom scripts and plugins to streamline the workflow, enabling rapid iterations and real-time client feedback.",
        delivery:
          "The final videos boasted photorealistic textures and physics-based animations, enhancing product authenticity. We incorporated dynamic camera movements and particle simulations to create an immersive visual experience that captivated the audience.",
        
      },
      section6: {
        heading: "Transforming Brand Perception Through Visual Storytelling",
        para: "We developed two impressive 3D CGI marketing videos tailored for the marathon event in Gujarat. These videos helped our clients in moment marketing and capitalize on the marathon's popularity. Plus, the area-based campaign boasted of a personalized approach as the viewers could see 3D CGI objects playing around in their real-world neighborhood. This increased customer connection. Lastly, it generated social media buzz and brand awareness due to the high shareability quotient of the content.",
        // list1:
        //   "",
        // list2:
        //   "",
        // list3:
        //   "",
        grid: {
       
          cell1: "350,000 views on social media",
       
          cell2: "30% increase in brand recall ",
       
          cell3: "15-20% growth in sales",
         
          cell4: "40% improvement in brand perception ",
        },
      },
      section7: {
        heading: "Make Your Brand Unforgettable\nwith Custom 3D CGI Marketing Solutions",
      
      },
      section8: {
        //heading: "",
        requirement:
          "Understood Parsana's goals and event specifics",
        ideation:
          "Conceptualized video content aligned with brand and marathon theme",
        designing:
          "Captured footage in Gift City for a personalized touch",
        development:
          "Created assets and animated scenes using Blender, Maya, and C4D",
        deployment:
          "Finalized videos with high-quality renders and VFX",
      },
      section9: {
        heading1: "Time Crunch",
        heading2: "Location Selection",
        heading3: "Accurate Health Information",
        para1:
          "The project initiated just one week before the event so, we had very limited time to collaborate, create, and get it approved with the client. Our efficient workflow and dedicated team are the reason we delivered the two videos on time.",
        para2:
          "In the same time crunch scenario, we needed to quickly find a popular, relatable location for our 3D objects overlay in the Gift City of Gujarat to balance familiarity and visual appeal. We sent a team for the shoot while our 3D modelers started working on the models.",
        para3:
          "We needed to ensure genuine conceptualization for a D2C health brand so that we could deliver accurate information. Through thorough research and collaboration with Parsana for accurate content we overcame this challenge.",
      },
      testimonal:
        "Hey Buddy's 3D CGI videos exceeded our expectations. Their innovative approach not only captured the attention at our event but also significantly boosted our brand awareness and sales. We're thrilled with the results and the impact on our business.",
      section11: {
        para: "Time to Transform Your Brand's Visual Story",
      },
      link: "/pages/casestudies/cgidevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    },
    {
      id: "19",
   
     
      img1: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/1.1.jpg",
      img2: "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/1.3.jpg",
      img3:
          "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/casestudy/1.4.png",
      heading: "Powering Performance Marketing for\nThe Teaser Company's Story",
      section3:{heading: "Powering Performance Marketing for The Teaser Company's Story",
      para:
        "Our client, The Teaser Company, needed a fresh, engaging approach to present their multiple services, including SEO and performance marketing.\nIn this pursuit, Hey Buddy’s Instagram content featuring 3D CGI videos caught their attention, prompting them to explore this innovative technology for their brand. \nThey contacted our team and we proposed creating a CGI video advertisement that would creatively showcase their services in a trendy, attention-grabbing manner. \nWe got a green flag, and our team started working. The outcome was a cool handbag hovering in a beach setting in the real world. The bag keeps turning over to display a different marketing service written over it. \nThe CGI visuals were so realistically overlaid and integrated, giving the impression that the handbag is really there in the real world with its shadow casting and affecting the visuals on the real-world objects present in the video.\nThe client was really impressed with the outcome and it performed phenomenally well on their marketing channels.  ",
      },
      about:
        "The Teaser Company, a dynamic performance marketing firm, sought an innovative way to showcase its services. They have always been known for standing out in the crowded performance marketing industry.  In the same spirit, they needed innovative, unique, and engaging content that could match their brand image and showcase their offerings. Our CGI team delivered CGI content that exceeded their expectations.",
      section3:{
        heading:"Marketing Brand Gets Ultra-boost with Attention-grabbing CGI Technology Solution"
      },
        section5: {
        heading: "Bringing The Teaser Company's Vision to Life: ",
        requirement:
          "The project required advanced 3D modeling and animation capabilities to create a visually stunning beach setting and represent abstract marketing concepts. We utilized high-performance hardware with GPU-accelerated rendering to meet quality expectations and deadlines.",
        execution:
          "Our team employed a multi-software pipeline, integrating Blender, Maya, and Cinema 4D for optimal results. We developed custom scripts and plugins to streamline the workflow, enabling quick iterations and real-time client feedback.",
        delivery:
          "The final video boasted photorealistic textures and physics-based animations, bringing the beach concept to life. We incorporated dynamic camera movements and particle simulations to create an immersive visual experience that effectively represented The Teaser Company's services.",
        
      },
      section6: {
        heading: "Fueling Brand Perception Through Coastal Creativity",
        para: "The impressive 3D CGI marketing video set on a vibrant, virtual beach, symbolized The Teaser Company's cool and dynamic approach. The video creatively showcased multiple services, including SEO and performance marketing, using beach-themed metaphors and animations. This unique approach allowed The Teaser Company to:",
        // list1:
        //   "",
        // list2:
        //   "",
        // list3:
        //   "",
        grid: {
        
          cell1: "50% increase in social media engagement",
    
          cell2: "40% service recall rate, up from 25% ",
         
          cell3: "20% increase in inbound inquiries",
          
          cell4: "25% boost in industry peer recognition",
        },
      },
      section7: {
        heading: "Blow Your Customer Away\nwith 3D CGI Marketing",
        
      },
      section8: {
        //heading: "",
        requirement:
          "Understood The Teaser Company's services and brand personality",
        ideation:
          "Conceptualized the beach theme to represent their \"cool\" factor",
        designing:
          "Developed a visual narrative to showcase multiple services",
        development:
          "Created beach assets and service representations using CGI",
        deployment:
          "Finalized the video with high-quality renders and VFX",
      },
      section9: {
        heading1: "Abstracting Services",
        heading2: "Balancing Creativity and Clarity",
        heading3: "Brand Alignment",
        para1:
          "Representing intangible marketing services visually was challenging, we used creative beach metaphors and animations to illustrate each service.",
        para2:
          "To ensure the creative concept didn't overshadow the service messaging, we carefully integrated service explanations within the beach narrative",
        para3:
          "Maintaining The Teaser Company's professional image while showcasing its \"cool\" factor We struck a balance between playful beach elements and professional service representations",
      },
      testimonal:
        "Hey Buddy's 3D CGI videos presented our services in a way we wanted and our brand needed. The beach concept perfectly captured our brand's essence while effectively communicating our offerings. We never knew that CGI visuals have so much potential we are surely coming back for more collaborations",
      section11: {
        para: "Make Waves in Your Industry",
      },
      link: "/pages/casestudies/cgidevelopment/[id]",
      imgurl:
        "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Images/img1.webp",
    }
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