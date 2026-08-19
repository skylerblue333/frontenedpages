import { AlertTriangle, FileWarning, Grid2X2, Layers3, LockKeyhole, Search, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const gridStates = [
  { label: "Card source, entity schema, and ownership", value: "Unavailable", icon: Layers3 },
  { label: "Filters, sorting, pagination, and search", value: "Not configured", icon: Search },
  { label: "Card actions, navigation, and mutations", value: "Disabled", icon: Grid2X2 },
  { label: "Permissions, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CardGridView() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={Grid2X2} title="Card Grid View" subtitle="Card-grid services are not connected in this deployment. No card, entity, image, owner, filter, count, action, navigation, or audit result is being reported or created." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Card grid is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen was a generic placeholder with an Activate button and no verified card source, entity schema, image policy, ownership model, filter contract, pagination semantics, permission boundary, navigation target, mutation workflow, or audit trail. The control was removed because this page cannot establish that a card, record, or action exists.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Grid2X2 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Card-grid readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production card grid requires an authoritative data source, typed entity contract, ownership and permissions, image and content provenance, loading and empty states, safe filtering and sorting, pagination or virtualization, accessible semantics, action authorization, privacy, retention, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Layers3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No card claim</h3><p className="mt-1 text-sm text-muted-foreground">No entity, title, image, owner, status, amount, count, source, timestamp, or card record is displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Search aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No query claim</h3><p className="mt-1 text-sm text-muted-foreground">No search, filter, sort, ranking, pagination, total, result, empty conclusion, or recommendation is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No action claim</h3><p className="mt-1 text-sm text-muted-foreground">No card action, navigation, edit, delete, share, purchase, mutation, notification, or audit event is executed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/universal-search"><Button size="lg" className="bg-primary hover:bg-primary/90">View search status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about card data</Button></Link></div></div></Card>

        <section aria-labelledby="card-grid-state-heading"><h2 id="card-grid-state-heading" className="mb-4 text-xl font-semibold">Current card-grid evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{gridStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential records, private images, or sensitive personal information here. An unavailable card grid is not evidence that a record, image, search result, count, action, or permission exists.</p></div></Card>
      </main>
    </div>
  );
}
