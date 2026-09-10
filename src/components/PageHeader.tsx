import Breadcrumbs from "./Breadcrumbs";
export default function PageHeader({ kicker, title, lead, crumbs }: { kicker?: string; title: string; lead?: string; crumbs?: { name: string; href?: string }[] }) {
  return (
    <div className="bg-surface border-b border-line">
      <div className="container-x py-12 md:py-16">
        {crumbs && <Breadcrumbs items={crumbs} />}
        {kicker && <div className="kicker">{kicker}</div>}
        <h1 className="text-4xl md:text-5xl font-bold max-w-[22ch]">{title}</h1>
        {lead && <p className="mt-5 text-lg text-body max-w-[60ch]">{lead}</p>}
      </div>
    </div>
  );
}
