import React from "react";
import Link from "next/link";
import Image from "next/image";
// import 'src/app/Pages/Blog/page.css'

const BlogCard = ({ category, id, name, img, title, summary }) => {
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
    <div className="relative blog" style={{width:"100%",borderRadius:"30px",padding:"1rem",margin:"0",display:"flex",flexDirection:"column",justifyContent:"space-between",gap:"0",alignItems:"flex-start",background: "#FFFFFF1A"}}>
     <Link href={`/pages/Blog/${name}`}>
        <Image
          loading="lazy"
          src={img}
          width={200}
          height={200}
          alt="card image"
          style={{borderRadius:"24px"}}
          className=" w-full aspect-[3/2] rounded-lg object-fit"
        />
        <p className="font-semibold my-4 text-xl" style={headStyles}>{title}</p>
        <p className=" mb-6 font-thin text-base" style={paraStyles}>{summary}</p> 
        <div className="">
        <div className=" flex items-center justify-between my-2">
          <span className="flex items-center gap-2">
            {/* <Image loading="lazy" width={450} height={450} className='w-[1.7em] h-[1.7em]' src={'/Images/blog/blogUser.png'} alt="No-img" />
             */}
            <span
              className={`h-3 w-3 rounded-full ${
                category === "Games"
                  ? "bg-[#FF5C00]"
                  : category === "Development"
                  ? "bg-[#26B403]"
                  : category === "AI"
                  ? "bg-[#FF001F]"
                  : "bg-[#00FFE0]"
              }`}
            ></span>
            <p className=" font-medium text-sm mt-[0.1rem]">
              {category}
            </p>
          </span>
          {/* <p className="absolute left-[17rem] md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
            3min
          </p> */}
        </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
