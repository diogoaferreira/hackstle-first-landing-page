import fs from "node:fs/promises";
import path from "node:path";

export type BlogSection = {
  heading: string;
  body: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  sections: BlogSection[];
};

const BLOG_DIRECTORY = path.join(process.cwd(), "content", "blog");

const parseFrontmatter = (
  raw: string,
): { data: Record<string, string | string[]>; content: string } => {
  // Handle different line endings and be more flexible with the regex
  const normalizedRaw = raw.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const match = normalizedRaw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);

  if (!match) {
    return { data: {}, content: normalizedRaw.trim() };
  }

  const [, frontmatter, content] = match;
  const data: Record<string, string | string[]> = {};
  let currentArrayKey: string | null = null;

  frontmatter.split(/\r?\n/).forEach((line) => {
    const arrayItem = line.match(/^\s*-\s*(.*)$/);

    if (arrayItem && currentArrayKey) {
      const values = (data[currentArrayKey] as string[]) ?? [];
      data[currentArrayKey] = [...values, arrayItem[1]];
      return;
    }

    if (!line.trim()) return;

    const [key, ...valueParts] = line.split(":");
    const cleanedKey = key.trim();
    const value = valueParts.join(":").trim();

    if (!cleanedKey) return;

    if (value === "") {
      data[cleanedKey] = [];
      currentArrayKey = cleanedKey;
      return;
    }

    if (value.startsWith("[") && value.endsWith("]")) {
      data[cleanedKey] = value
        .slice(1, -1)
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      currentArrayKey = null;
      return;
    }

    data[cleanedKey] = value;
    currentArrayKey = null;
  });

  return { data, content: content.trim() };
};

const parseSections = (markdown: string): BlogSection[] => {
  const lines = markdown.split(/\r?\n/);
  const sections: BlogSection[] = [];
  let currentHeading = "Overview";
  let buffer: string[] = [];

  const pushSection = () => {
    const body = buffer.join(" ").replace(/\s+/g, " ").trim();
    if (!body) return;
    sections.push({ heading: currentHeading, body });
  };

  lines.forEach((line) => {
    const headingMatch = line.match(/^##\s+(.*)/);

    if (headingMatch) {
      pushSection();
      currentHeading = headingMatch[1].trim();
      buffer = [];
      return;
    }

    buffer.push(line.trim());
  });

  pushSection();
  return sections;
};

export const getBlogSlugs = async (): Promise<string[]> => {
  try {
    const files = await fs.readdir(BLOG_DIRECTORY);
    return files
      .filter((file) => file.endsWith(".md"))
      .map((file) => file.replace(/\.md$/, ""));
  } catch (error) {
    console.error("Failed to read blog directory", error);
    return [];
  }
};

export const getBlogPost = async (slug: string): Promise<BlogPost | null> => {
  const filePath = path.join(BLOG_DIRECTORY, `${slug}.md`);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { data, content } = parseFrontmatter(raw);
    const sections = parseSections(content);

    return {
      slug,
      title: (data.title as string) ?? slug,
      summary: (data.summary as string) ?? "",
      date: (data.date as string) ?? "",
      readingTime: (data.readingTime as string) ?? "",
      category: (data.category as string) ?? "General",
      tags: Array.isArray(data.tags)
        ? (data.tags as string[])
        : typeof data.tags === "string" && data.tags
          ? data.tags.split(",").map((tag) => tag.trim())
          : [],
      sections,
    };
  } catch (error) {
    console.error(`Failed to load blog post: ${slug}`, error);
    return null;
  }
};

export const getAllBlogPosts = async (): Promise<BlogPost[]> => {
  const slugs = await getBlogSlugs();
  const posts = await Promise.all(slugs.map((slug) => getBlogPost(slug)));

  return posts
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => (new Date(b.date).getTime() || 0) - (new Date(a.date).getTime() || 0));
};
