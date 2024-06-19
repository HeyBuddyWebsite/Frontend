import React from "react";
import Link from "next/link";
import Image from "next/image";
// import 'src/app/Pages/casestudies/realestate/page.css'

const CaseStudyCard = ({
  heading,
  para1,
  imgurl,
  link,
  aslink,
  id,
  category,
}) => {
  return (
    <div className="relative casestudy">
      <Link href={link} as={`${aslink}${id}`}>
        <Image
          loading="lazy"
          width={450}
          height={450}
          src={imgurl}
          alt=""
          className=" w-full rounded-lg"
        />
        <p className="font-extrabold my-4">{heading}</p>
        <p className="md:text-[1em]  text-[1.8vw] mb-6 ">{para1}</p>
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
