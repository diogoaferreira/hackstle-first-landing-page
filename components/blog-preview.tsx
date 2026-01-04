import Link from "next/link";
import { ArrowUpRight, CalendarClock, Newspaper } from "lucide-react";
import { getAllBlogPosts } from "@/lib/blog-posts";
import { ClientBlogPreview } from "./client-blog-preview";

export default async function BlogPreview() {
  const posts = await getAllBlogPosts();
  const latest = posts.slice(0, 3);

  return <ClientBlogPreview posts={latest} />;
}
