import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/Font.css";

import "../../../styles/button.css";
import "./page.css";
import CaseStudyCard from "@/components/casestudycard/CaseStudyCard";

const data = [
  {
    id: "5",
    heading:
      "Successful Implementation of AR Technology in D2C-Based Online Furniture Store",
    para1:
      "A furniture retailer sought to enhance digital sales by integrating AR technology into their website. They approached us for technical collaboration and customized solutions. After initial discussions, we tackled challenges and successfully...",
    category: "AR",
    link: "/casestudies/ar-development/[id]",
    aslink: "/casestudies/ar-development/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/casec2.png",
  },
  {
    id: "6",
    heading: "Revamped eCommerce Business: Increase Saled Reduced Returns",
    para1:
      "We developed an AR virtual try-on solution for a renowned apparel brand, enhancing the shopping experience and reducing return rates. This innovative platform integrates AR, VR, and AI technologies, allowing customers to try on clothing virtually before buying...",
    category: "AR",
    link: "/casestudies/ar-development/[id]",
    aslink: "/casestudies/ar-development/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/ARcase/casec1.png",
  },
];

const page = () => {
  return (
    <div className="px-2 ">
      <div className="casestudyContainer">
        <div className="readOurcasestudy">
          <h1 className="text-[4vw] font-semibold text-white text-center">AR Development</h1>
          <p className="text-[2vw] w-[65vw]">
            We infused the element of surprise in regular marketing campaigns to
            give our clients a clear edge.
          </p>
        </div>
        <Image
          loading="lazy"
          width={450}
          height={450}
          className="read-casestudy-svg"
          alt=""
          src="/read-blog.svg"
        />
        <div className="casestudyWithCategories mt-16">
          <div className="allcasestudy">
            {data.map((sec, ind) => (
              <CaseStudyCard
                key={sec.id}
                _id={sec.id}
                title={sec.heading}
                description={sec.para1}
                imgurl={sec.imgurl}
                category={sec.category}
                aslink={sec.aslink}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
