import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
export const metadata: Metadata = { title: "KVKK Aydınlatma Metni", robots: { index: false } };
export default function Page() {
  return (<><PageHeader title="KVKK Aydınlatma Metni" crumbs={[{ name: "KVKK" }]} /><section className="container-x py-14 prose-x"><p>[Aydınlatma metni buraya. Mali müşavir / avukatınızdan alın.]</p></section></>);
}
