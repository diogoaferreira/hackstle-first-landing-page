"use client";

import Link from "next/link";
import { ArrowUpRight, CalendarClock, Newspaper } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import type { BlogPost } from "@/lib/blog-posts";

interface ClientBlogPreviewProps {
  posts: BlogPost[];
}

export function ClientBlogPreview({ posts }: ClientBlogPreviewProps) {
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
    <section className="relative pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-brand-700)] shadow-sm ring-1 ring-[var(--color-brand-100)]">
            <Newspaper className="h-4 w-4" />
            {t.header.blog}
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            {t.blog.title}
          </h2>
          <p className="text-lg text-gray-700">
            {t.blog.subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug} className="flex flex-col rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-700)]">
                {post.category || 'General'}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-brand-700)]">
                  {post.title || post.slug}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-700">
                {post.summary || 'No summary available'}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-sm text-gray-600">
                <CalendarClock className="h-4 w-4 text-gray-400" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="mt-auto pt-4 text-sm text-gray-600">
                {post.readingTime || '5 min read'}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
          >
            {t.blog.viewAllPosts}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}