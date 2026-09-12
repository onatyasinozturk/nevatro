import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { getAllPosts, getPost } from "@/lib/markdown";
import { site } from "@/data/site";

type Params = Promise<{ slug: string }>;
export function generateStaticParams() { return getAllPosts().map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = await getPost((await params).slug); if (!p) return {};
  return { title: p.title, description: p.excerpt, alternates: { canonical: `${site.url}/blog/${p.slug}` } };
}

export default async function Page({ params }: { params: Params }) {
  const p = await getPost((await params).slug); if (!p) notFound();
  return (
    <>
      <article className="container-x py-12 md:py-16">
        <Breadcrumbs items={[{ name: "Blog", href: "/blog" }, { name: p.title }]} />
        <div className="text-sm text-muted">{p.category ?? "Genel"} — {p.date}</div>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold max-w-[24ch]">{p.title}</h1>
        {p.excerpt && <p className="mt-4 text-lg text-body max-w-[60ch]">{p.excerpt}</p>}
        <div className="prose-x mt-10" dangerouslySetInnerHTML={{ __html: p.html }} />
      </article>
      <CtaBand />
    </>
  );
}
