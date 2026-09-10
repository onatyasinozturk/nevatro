import { site } from "@/data/site";

export const localBusinessJsonLd = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "TR", streetAddress: site.address },
  areaServed: site.serviceArea.map((a) => ({ "@type": "City", name: `${a}, ${site.city}` })),
  sameAs: Object.values(site.social),
});

export const serviceJsonLd = (name: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name, description, url,
  provider: { "@type": "LocalBusiness", name: site.name, url: site.url },
  areaServed: { "@type": "City", name: site.city },
});

export const faqJsonLd = (items: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
});

export const breadcrumbJsonLd = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: it.url })),
});
