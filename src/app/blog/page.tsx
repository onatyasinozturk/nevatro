import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { getAllPosts } from "@/lib/markdown";

export const metadata: Metadata = { title: "Blog", description: "Web, e-ticaret, pazaryeri, network ve güvenlik sistemleri üzerine rehberler." };

export default function Page() {
  const posts = getAllPosts();
  return (
    <>
      <PageHeader kicker="Blog" title="Rehberler ve notlar" lead="Sahada karşılaştığımız soruların cevapları. Yeni yazı eklemek için content/blog klasörüne bir .md dosyası koymanız yeterli." crumbs={[{ name: "Blog" }]} />
      <section className="container-x py-14">
        {posts.length === 0 && <p className="text-muted">Henüz yazı yok.</p>}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 90}>
              <Link href={`/blog/${p.slug}`} className="card p-6 block h-full hover:border-primary transition-colors">
                <div className="text-xs text-muted">{p.category ?? "Genel"} — {p.date}</div>
                <h2 className="mt-2 text-lg font-bold">{p.title}</h2>
                <p className="mt-2 text-sm text-body">{p.excerpt}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
