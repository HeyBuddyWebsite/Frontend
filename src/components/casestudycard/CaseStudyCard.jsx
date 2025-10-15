"use client";

import React from "react";
// import { useRouter } from 'next/router';
import Link from "next/link";
import Image from "next/image";
// import 'src/app/Pages/casestudies/realestate/page.css'
import { useState, useEffect } from "react";

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
  // const link = `Pages/casestudies/cases/[id]`;
  // const router = useRouter();

  // const handleCardClick = () => {
  //   router.push(`/Pages/cases/${_id}`);
  // };

  return (
    <div
      className="relative casestudy"
      // onClick={() => handleCardClick()}
    >
      {/* <Link href={link} as={`Pages/casestudies/cases/${_id}`}> */}
      <Link href={`/Pages/cases/${_id}`}>
        
          <Image
            loading="lazy"
            width={450}
            height={450}
            src={imgurl}
            alt=""
            className=" w-full rounded-lg"
          />
          <p className="font-extrabold my-4">{title}</p>
          <p className="md:text-[1em]  text-[1.8vw] mb-6 ">{description}</p>
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
                    : "bg-[#00FFE0]"
                }`}
              ></span>
              <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
                {category}
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
//     router.push(`/Pages/cases/${_id}`);
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
