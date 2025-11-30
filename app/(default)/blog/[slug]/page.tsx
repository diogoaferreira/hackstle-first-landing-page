import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarClock, Tags } from "lucide-react";

import { blogPosts, getBlogPost } from "@/lib/blog-posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Post not found | Hackstle Blog",
    };
  }

  return {
    title: `${post.title} | Hackstle Blog`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article
      className="relative pb-16 pt-32 md:pb-24 md:pt-40"
      data-aos="fade-up"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-linear-to-b from-[var(--color-brand-50)]/70 to-transparent" />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div
          className="mb-10 flex items-center justify-between text-sm text-gray-600"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          <Link href="/blog" className="inline-flex items-center gap-2 font-semibold text-[var(--color-brand-700)]">
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-50)] px-3 py-1 font-semibold text-[var(--color-brand-700)]">
              <Tags className="h-4 w-4" />
              {post.category}
            </div>
            <div className="flex items-center gap-1">
              <CalendarClock className="h-4 w-4 text-gray-400" />
              {post.date}
            </div>
            <span aria-hidden="true">•</span>
            <span>{post.readingTime}</span>
          </div>
        </div>

        <h1
          className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {post.title}
        </h1>
        <p className="mb-10 text-lg text-gray-700" data-aos="fade-up" data-aos-delay="130">
          {post.summary}
        </p>

        <div className="space-y-6">
          {post.sections.map((section, index) => (
            <section
              key={section.heading}
              className="rounded-2xl bg-white/90 p-6 shadow-sm shadow-black/[0.03]"
              data-aos="fade-up"
              data-aos-delay={150 + index * 75}
            >
              <h2 className="mb-3 text-xl font-semibold text-gray-900">{section.heading}</h2>
              <p className="text-gray-700">{section.body}</p>
            </section>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-2" data-aos="fade-up" data-aos-delay="150">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
