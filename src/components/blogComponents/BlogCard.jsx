import React from "react";
import Link from "next/link";
import Image from "next/image";
// import 'src/app/Pages/Blog/page.css'

const BlogCard = ({ category, id, name, img, title, summary }) => {
  return (
    <div className="relative blog">
      <Link href={`/Pages/Blog/${name}`}>
        <Image
          loading="lazy"
          src={img}
          width={200}
          height={200}
          alt="card image"
          className=" w-full  rounded-lg"
        />
        <p className="font-extrabold my-4">{title}</p>
        <p className="md:text-[1em]  text-[1.8vw] mb-6">{summary}</p> 
        <div className="absolute bottom-0">
        <div className=" flex items-center justify-between my-2">
          <span className="flex items-center gap-2">
            {/* <Image loading="lazy" width={450} height={450} className='w-[1.7em] h-[1.7em]' src={'/Images/blog/blogUser.png'} alt="No-img" />
             */}
            <span
              className={`h-4 w-4 rounded-full ${
                category === "Games"
                  ? "bg-[#FF5C00]"
                  : category === "Development"
                  ? "bg-[#26B403]"
                  : category === "AI"
                  ? "bg-[#FF001F]"
                  : "bg-[#00FFE0]"
              }`}
            ></span>
            <p className="md:text-[.7em] sm:text-[1.3vw] text-[2.2vw] lg:text-[.9vw]">
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
