"use client";

import React, { useEffect } from "react";
// import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
// import 'src/app/casestudies/realestate/page.css'

const CaseStudyCard = ({
  title,
  description,
  imgurl,
  category,
  data,
  aslink,
  // data,
  _id,
}) => {
  if (!_id || !title || !imgurl) {
    return null;
  }

  // Construct the correct route based on aslink and id
  // aslink format: "/casestudies/3ddevelopment/"
  // Final route: "/casestudies/3ddevelopment/1"
  let route;
  
  // Category to route mapping
  const categoryRoutes = {
    "3D": "/casestudies/3ddevelopment",
    "AR": "/casestudies/ardevelopment",
    "CGI": "/casestudies/cgidevelopment",
    "AI": "/casestudies/AIcasestudy",
    "VR": "/casestudies/vrdevelopment",
    "Gaming": "/casestudies/game-development",
    "Custom Software": "/casestudies/customsoftware",
  };
  
  // First try to use aslink if it exists and is not empty
  if (aslink && aslink.trim() !== "") {
    // Remove trailing slash if present, then add id
    const cleanAslink = aslink.replace(/\/$/, '');
    route = `${cleanAslink}/${_id}`;
  } 
  // Fallback: use category to determine route
  else if (category && categoryRoutes[category]) {
    route = `${categoryRoutes[category]}/${_id}`;
  } 
  // Last resort fallback
  else {
    route = `/cases/${_id}`;
  }

  // Debug: log route construction (remove after testing)
  useEffect(() => {
    console.log("CaseStudyCard Debug:", {
      _id,
      category,
      aslink,
      route,
      title: title?.substring(0, 30) + "..."
    });
  }, [_id, category, aslink, route, title]);

  return (
    <div className="relative casestudy">
      <Link href={route}>
        <Image
          loading="lazy"
          width={450}
          height={450}
          src={imgurl}
          alt={title || "Case study"}
          className=" w-full rounded-lg"
        />
        <p className="font-extrabold my-4">{title}</p>
        <p className="md:text-[1em]  text-[1.8vw] mb-6 ">{description || ""}</p>
        <div className=" absolute bottom-0 flex items-center justify-between my-2 ">
          <span className="flex items-center gap-2 ">
            {/* <Image loading="lazy" width={450} height={450} className='w-[1.7em] h-[1.7em]' src={'/Images/blog/blogUser.png'} alt="No-img" />
             */}
            <span
              className={`h-4 w-4 rounded-full ${
                category === "AR"
                  ? "bg-[#FF5C00]"
                  : category === "CGI"
                  ? "bg-[#26B403]"
                  : category === "3D"
                  ? "bg-[#FF001F]"
                  : category === "AI"
                  ? "bg-[#00FFE0]"
                  : category === "VR"
                  ? "bg-[#00FFE0]"
                  : category === "Gaming"
                  ? "bg-[#00FFE0]"
                  : category === "Custom Software"
                  ? "bg-[#00FFE0]"
                  : "bg-[#00FFE0]"
              }`}
            ></span>
            <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
              {category || ""}
            </p>
          </span>
          {/* <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
            3min
          </p> */}
        </div>
      </Link>
    </div>
  );
};

export default CaseStudyCard;

// components/casestudycard/CaseStudyCard.jsx

// import React from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";

// const CaseStudyCard = ({ title, description, imgurl, category, _id }) => {
//   const router = useRouter();

//   const handleCardClick = () => {
//     router.push(`/cases/${_id}`);
//   };

//   return (
//     <div
//       className="relative casestudy"
//       onClick={handleCardClick}
//       style={{ cursor: "pointer" }}
//     >
//       <Image
//         loading="lazy"
//         width={450}
//         height={450}
//         src={imgurl}
//         alt={title}
//         className="w-full rounded-lg"
//       />
//       <p className="font-extrabold my-4">{title}</p>
//       <p className="md:text-[1em] text-[1.8vw] mb-6">{description}</p>
//       <div className="absolute bottom-0 flex items-center justify-between my-2">
//         <span className="flex items-center gap-2">
//           <span
//             className={`h-4 w-4 rounded-full ${
//               category === "AR"
//                 ? "bg-[#FF5C00]"
//                 : category === "CGI"
//                 ? "bg-[#26B403]"
//                 : category === "3D"
//                 ? "bg-[#FF001F]"
//                 : "bg-[#00FFE0]"
//             }`}
//           ></span>
//           <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
//             {category}
//           </p>
//         </span>
//       </div>
//     </div>
//   );
// };

// export default CaseStudyCard;
