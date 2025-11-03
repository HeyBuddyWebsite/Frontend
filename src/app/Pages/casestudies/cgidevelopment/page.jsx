import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../../styles/Font.css";

import "../../../../styles/button.css";
import "./page.css";
import CaseStudyCard from "@/components/casestudycard/CaseStudyCard";

const data = [
  {
    id: "1",
    heading: "Developing CGI Graphics for D2C Based Online Retail Company",
    para1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/cgidevelopment/cgidev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img.png",
  },
  {
    id: "2",
    heading: "Powering Storytelling with Ultra Realistic CGI Visuals ",
    para1:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aliquid repellendus similique nisi molestias nostrum sequi itaque mollitia minus quisquam animi, optio quaerat deleniti dignissimos officiis quis possimus non natus?",
    link: "/Pages/casestudies/cgidevelopment/cgidev/[id]",
    imgurl:
      "https://heybuddystorage.blob.core.windows.net/s3-migratedheybuddy/Img/card%20img.png",
  },
];

const page = () => {
  return (
    <div className="px-2 ">
      <div className="casestudyContainer">
        <div className="readOurcasestudy">
          <p className="text-[4vw] font-semibold">CGI Development</p>
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
          alt="No-img"
          src="/read-blog.svg"
        />
        <div className="casestudyWithCategories mt-16">
          <div className="allcasestudy">
            {data.map((sec, ind) => (
              <CaseStudyCard key={sec.id} {...sec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
