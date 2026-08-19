import { AlertTriangle, Database, FileSearch, FileWarning, Filter, LockKeyhole, Search, ShieldCheck, SlidersHorizontal } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const searchStates = [
  { label: "Indexed sources and searchable entities", value: "Unavailable", icon: Database },
  { label: "Filters, ranking, relevance, and pagination", value: "Not configured", icon: SlidersHorizontal },
  { label: "Permissions, private fields, and retention", value: "Disabled", icon: ShieldCheck },
  { label: "Query history, analytics, and audit", value: "Not available", icon: FileSearch },
];

export default function AdvancedSearch() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Advanced Search"
        description="Advanced search services are not connected in this deployment. No query, result, index, filter, ranking, relevance score, private record, search history, or audit event is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Advanced Search is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified index, searchable entity contract, permission filter, ranking policy, pagination model, query service, or audit boundary was connected. Those controls were removed because the screen cannot establish that a query was executed or that a result is complete.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Search aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Search readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production search experience requires authoritative indexes, typed entity schemas, permission-aware filtering, safe query parsing, ranking and relevance definitions, pagination and freshness semantics, rate limits, sensitive-field exclusion, retention, observability, and clear partial, stale, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No index claim</h3><p className="mt-1 text-sm text-muted-foreground">No content, user, course, wallet, transaction, marketplace, social, or administrative index is queried or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Filter aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No result claim</h3><p className="mt-1 text-sm text-muted-foreground">No filter, ranking, relevance score, count, suggestion, pagination total, or “no results” conclusion is generated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No privacy claim</h3><p className="mt-1 text-sm text-muted-foreground">No private field, search history, query analytics, profile, or permission decision is read or stored.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/global-search"><Button size="lg" className="bg-primary hover:bg-primary/90">View search status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about search access</Button></Link></div></div></Card>

        <section aria-labelledby="advanced-search-state-heading"><h2 id="advanced-search-state-heading" className="mb-4 text-xl font-semibold">Current search evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{searchStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential queries, proprietary content, or sensitive personal information here. An unavailable search page is not evidence that a result exists, is current, is complete, or is authorized for you to view.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Indexes, permissions, content, profiles, wallets, commerce, analytics, privacy, rate limits, and audit remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><LockKeyhole aria-hidden="true" /></div>
      </main>
    </div>
  );
}
