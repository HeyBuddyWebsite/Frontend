import "./page.css";
import BlogListClient from "./BlogListClient";
import { getAllBlogs, getAllCategories } from "@/services/blogApi";

export const revalidate = 600;

export default async function BlogPage() {
  const [{ blogs, pagination }, categories] = await Promise.all([
    getAllBlogs(1, 9, ""),
    getAllCategories(),
  ]);
  return (
    <BlogListClient
      initialBlogs={Array.isArray(blogs) ? blogs : []}
      initialPagination={pagination}
      initialCategories={Array.isArray(categories) ? categories : []}
    />
  );
}
