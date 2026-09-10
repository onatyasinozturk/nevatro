import Link from "next/link";
export default function NotFound() {
  return (<section className="container-x py-24 text-center"><div className="kicker">404</div><h1 className="text-4xl font-bold">Sayfa bulunamadı</h1><p className="mt-4 text-body">Aradığınız sayfa taşınmış ya da hiç var olmamış olabilir.</p><Link href="/" className="btn btn-accent mt-8">Ana sayfaya dön</Link></section>);
}
