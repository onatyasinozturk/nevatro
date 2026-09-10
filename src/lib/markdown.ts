import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface PostMeta { slug: string; title: string; date: string; excerpt: string; category?: string; cover?: string }
export interface Post extends PostMeta { html: string }

const BLOG_DIR = path.join(process.cwd(), "content", "blog");
const BOLGE_DIR = path.join(process.cwd(), "content", "bolgeler");

export async function mdToHtml(md: string) {
  const out = await remark().use(html, { sanitize: false }).process(md);
  return String(out);
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data } = matter(fs.readFileSync(path.join(BLOG_DIR, f), "utf8"));
      return { slug: f.replace(/\.md$/, ""), title: data.title ?? f, date: data.date ?? "", excerpt: data.excerpt ?? "", category: data.category, cover: data.cover };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string): Promise<Post | null> {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { slug, title: data.title ?? slug, date: data.date ?? "", excerpt: data.excerpt ?? "", category: data.category, cover: data.cover, html: await mdToHtml(content) };
}

/** content/bolgeler/<il>/<ilce>.md varsa o ilçeye özel metni döner (frontmatter: title, excerpt) */
export async function getLocationContent(il: string, ilce: string) {
  const file = path.join(BOLGE_DIR, il, `${ilce}.md`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return { title: data.title as string | undefined, excerpt: data.excerpt as string | undefined, html: await mdToHtml(content) };
}
