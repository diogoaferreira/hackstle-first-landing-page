import Link from "next/link";
import { ArrowUpRight, Newspaper } from "lucide-react";

import { blogPosts } from "@/lib/blog-posts";

export default function BlogPreview() {
  return (
    <section className="relative pb-16 pt-12 md:pb-20 md:pt-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-brand-700)] shadow-sm ring-1 ring-[var(--color-brand-100)]">
            <Newspaper className="h-4 w-4" />
            Blog
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Fresh intelligence from the Hackstle team
          </h2>
          <p className="text-lg text-gray-700">
            Brief, actionable posts on darkweb monitoring, CVE correlation, credential leaks, and third-party incidents.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {blogPosts.slice(0, 3).map((post) => (
            <article key={post.slug} className="flex flex-col rounded-2xl border border-gray-200 bg-white/90 p-5 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--color-brand-700)]">
                {post.category}
              </div>
              <h3 className="mt-3 text-xl font-semibold text-gray-900">
                <Link href={`/blog/${post.slug}`} className="hover:text-[var(--color-brand-700)]">
                  {post.title}
                </Link>
              </h3>
              <p className="mt-2 text-sm text-gray-700">{post.summary}</p>
              <div className="mt-auto pt-4 text-sm text-gray-600">{post.readingTime}</div>
            </article>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 font-semibold text-[var(--color-brand-700)] hover:text-[var(--color-brand-800)]"
          >
            View all posts
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
