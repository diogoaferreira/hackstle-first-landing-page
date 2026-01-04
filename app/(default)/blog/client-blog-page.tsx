"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarClock, Tags } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogPost } from "@/lib/blog-posts";

interface ClientBlogPageProps {
  blogPosts: BlogPost[];
}

export function ClientBlogPage({ blogPosts }: ClientBlogPageProps) {
  const { t } = useLanguage();

  // Helper function to format date
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recent';
    
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return 'Recent';
      }
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      });
    } catch (error) {
      return 'Recent';
    }
  };

  return (
    <section
      className="relative pb-16 pt-32 md:pb-24 md:pt-40"
      data-aos="fade-up"
    >
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-linear-to-b from-[var(--color-brand-50)]/70 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center" data-aos="fade-up">
          <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-[var(--color-brand-700)] shadow-sm ring-1 ring-[var(--color-brand-100)]">
            <ArrowUpRight className="h-4 w-4" />
            {t.header.blog}
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            {t.blog.pageTitle}
          </h1>
          <p className="text-lg text-gray-700">
            {t.blog.pageSubtitle}
          </p>
        </div>

        <div
          className="mt-12 grid gap-6 md:grid-cols-2"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              data-aos="fade-up"
              data-aos-delay={200 + index * 75}
            >
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-brand-50)] px-3 py-1 font-medium text-[var(--color-brand-700)]">
                  <Tags className="h-4 w-4" />
                  {post.category || 'General'}
                </span>
                <div className="flex items-center gap-1">
                  <CalendarClock className="h-4 w-4 text-gray-400" />
                  {formatDate(post.date)}
                </div>
                <span aria-hidden="true">•</span>
                <span>{post.readingTime || '5 min read'}</span>
              </div>

              <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-brand-700)]">
                  {post.title || post.slug}
                </Link>
              </h2>
              <p className="mt-3 text-gray-700">{post.summary || 'No summary available'}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {post.tags && post.tags.length > 0 ? post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-700"
                  >
                    {tag}
                  </span>
                )) : null}
              </div>

              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-brand-700)]">
                <span>{t.blog.readPost}</span>
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}