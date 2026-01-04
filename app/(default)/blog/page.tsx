import { getAllBlogPosts } from "@/lib/blog-posts";
import { ClientBlogPage } from "./client-blog-page";

export const metadata = {
  title: "Hackstle Blog | Darkweb intelligence insights",
  description:
    "Latest posts on darkweb monitoring, CVE correlation, and third-party incident response from the Hackstle team.",
};

export const revalidate = 300;

export default async function BlogPage() {
  const blogPosts = await getAllBlogPosts();

  return <ClientBlogPage blogPosts={blogPosts} />;
}
