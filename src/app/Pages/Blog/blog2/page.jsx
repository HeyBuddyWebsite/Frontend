import React from "react";

// import "../../../../styles/Font.css";
import "./page.css";
import BlogContent2 from "@/components/Blog/BlogContent2";
import { Blogs } from "@/components/Blogs";
// import { useRouter } from "next/router";

// export function generateStaticParams() {
//   return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
// }

function page() {
  // const { query } = useRouter();
  //   const { id } = params;
  const SelectedBlog = Blogs.filter((blog) => blog.name === "blog2");
  const { blogType } = SelectedBlog[0];
  return (
    <section
      className={` mx-auto px-5 lg:px-0 bg-no-repeat bg-fixed bg-top ${
        blogType === "Games"
          ? "bg-[url('/Images/EllipseGame.svg')]"
          : blogType === "Development"
          ? "bg-[url('/Images/EllipseDev.svg')]"
          : blogType === "3D"
          ? "bg-[url('/Images/Ellipse3D.svg')]"
          : "bg-[url('/Images/EllipseDesign.svg')]"
      }`}
    >
      <BlogContent2 SelectedBlog={SelectedBlog[0]} />

      {/* related blogs */}
      <section className="lg:w-[90%] xl:w-[80%] mx-auto px-5 lg:px-0">
        <h1 className="text-lg font-bold text-white">Related blogs</h1>
        {/* section of the related blogs and this will be added later */}
        <div>related blogs to be added later</div>
      </section>
    </section>
  );
}

export default page;
