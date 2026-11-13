import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../styles/Font.css";

import "../../../styles/button.css";
import "./page.css";
import CaseStudyCard from "@/components/casestudycard/CaseStudyCard";

const data = [
  {
    id: "7",
    heading: "Developing CGI Graphics for D2C Based Online Retail Company",
    para1:
      "A leading online furniture D2C brand sought CGI experts to enhance customer engagement. They selected us as their CGI service partner to create lifelike visuals for their product lines. Our initial focus included identifying pain areas, coordinating efforts...",
    category: "CGI",
    link: "/casestudies/cgidevelopment/[id]",
    aslink: "/casestudies/cgidevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/casec4.png",
  },
  {
    id: "8",
    heading: "Powering Storytelling with Ultra Realistic CGI Visuals ",
    para1:
      "A prominent media brand sought our CGI expertise to enhance their visual storytelling, aiming for an immersive audience experience. Leveraging our skills, we created a cutting-edge CGI pipeline that seamlessly integrated live-action footage...",
    category: "CGI",
    link: "/casestudies/cgidevelopment/[id]",
    aslink: "/casestudies/cgidevelopment/",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/CGI/casec3.png",
  },
];

const page = () => {
  return (
    <div className="px-2 ">
      <div className="casestudyContainer">
        <div className="readOurcasestudy">
          <h1 className="text-[4vw] font-semibold text-white text-center">CGI Development</h1>
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
