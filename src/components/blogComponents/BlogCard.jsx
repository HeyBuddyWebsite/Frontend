import React from "react";
import Link from "next/link";
import Image from "next/image";
// import 'src/app/blog/page.css'

const BlogCard = ({ category, id, name, img, imgAlt, title, summary, priority }) => {
  return (
    <div className="relative blog group">
      <Link href={`/blog/${name}`}>
        <div className="overflow-hidden rounded-lg mb-4">
          <Image
            src={img}
            width={600}
            height={400}
            priority={priority}
            loading={priority ? undefined : "lazy"}
            alt={imgAlt || title || "card image"}
            className="w-full aspect-[3/2] object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <p className="font-extrabold text-lg lg:text-xl mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">{title}</p>
        <p className="text-gray-400 text-sm line-clamp-3 mb-10">{summary}</p>
        <div className="absolute bottom-0">
          <div className=" flex items-center justify-between my-2">
            <span className="flex items-center gap-2">
              {/* <Image loading="lazy" width={450} height={450} className='w-[1.7em] h-[1.7em]' src={'/Images/blog/blogUser.png'} alt="No-img" />
             */}
              <span
                className={`h-4 w-4 rounded-full ${category === "Games"
                  ? "bg-[#10B981]"
                  : category === "Development"
                    ? "bg-[#3B82F6]"
                    : category === "AI"
                      ? "bg-[#8B5CF6]"
                      : category === "CGI"
                        ? "bg-[#F59E0B]"
                        : category === "AR"
                          ? "bg-[#EF4444]"
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
