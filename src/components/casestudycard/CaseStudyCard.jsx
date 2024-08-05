import React from "react";
import Link from "next/link";
import Image from "next/image";
// import 'src/app/Pages/casestudies/realestate/page.css'

const CaseStudyCard = ({
  heading,
  para,
  cardimg,
  link,
  
  id,
  category,
}) => {
  const paraStyles = {
    WebkitLineClamp: 4,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    
   
   
  };
  const headStyles = {
    WebkitLineClamp: 2,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
    
    
    // fontWeight:"500",
  };
  return (
    <Link  href={`${link}${id}`}>
    <div className="relative casestudy" style={{height:"100%",width:"100%",borderRadius:"30px",padding:"1rem",margin:"0",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"0",alignItems:"flex-start",background: "#FFFFFF1A"
    }}>
      
        <Image
          loading="lazy"
          width={450}
          height={450}
          src={cardimg}
          alt=""
          style={{borderRadius:"24px"}}
          className=" w-full aspect-[3/2] rounded-lg object-cover"
        />
        <p className="font-semibold my-4 text-xl text-white" style={headStyles}>{heading}</p>
        <p className=" mb-4 font-thin text-base text-white" style={paraStyles}>{para}</p>
     
        <div className=" flex items-center justify-between mb-2">
          <span className="flex items-center gap-2">
            {/* <Image loading="lazy" width={450} height={450} className='w-[1.7em] h-[1.7em]' src={'/Images/blog/blogUser.png'} alt="No-img" />
             */}
            <span
              className={`h-3 w-3 rounded-full ${
                category === "3D"
                  ? "bg-[#FF5C00]"
                  : category === "Gaming"
                  ? "bg-[#26B403]"
                  : category === "AI"
                  ? "bg-[#FF001F]"
                  : "bg-[#00FFE0]"
              }`}
            ></span>
            <p className=" font-medium text-sm mt-[0.1rem] text-white">
              {category}
            </p>
          </span>
          {/* <p className="absolute left-[17rem] md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
            3min
          </p> */}
        </div>
        </div>
      
    
    </Link>
  );
};

export default CaseStudyCard;
