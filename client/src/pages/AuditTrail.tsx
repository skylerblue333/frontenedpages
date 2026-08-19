import { AlertTriangle, Archive, ClipboardCheck, Database, FileWarning, Fingerprint, LockKeyhole, Search, ShieldCheck, TimerReset } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const auditStates = [
  { label: "Events, actors, timestamps, and provenance", value: "Unavailable", icon: Fingerprint },
  { label: "Immutability, ordering, integrity, and retention", value: "Not configured", icon: Archive },
  { label: "Search, filters, exports, and reviewer access", value: "Disabled", icon: ClipboardCheck },
  { label: "Compliance evidence, alerts, and audit health", value: "Not available", icon: ShieldCheck },
];

export default function AuditTrail() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Audit Trail"
        description="Audit-trail services are not connected in this deployment. No event, actor, timestamp, provenance, integrity proof, retention state, search result, export, compliance evidence, or audit-health result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Audit Trail is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified event producer, actor identity, timestamp authority, tamper-evident store, retention policy, reviewer permission, export service, compliance mapping, or audit-health contract was connected. Those controls were removed because the screen cannot establish that an event was recorded, immutable, complete, or suitable as evidence.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><ClipboardCheck aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Audit readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production audit trails require authoritative event schemas, actor and subject identity, trusted timestamps, ordering, tamper evidence, integrity verification, append-only storage, retention and deletion rules, least-privilege reviewer access, sensitive-data filtering, export controls, compliance mapping, monitoring, and clear partial, stale, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No event claim</h3><p className="mt-1 text-sm text-muted-foreground">No login, permission, wallet, payment, content, AI, moderation, education, or administrative event is displayed or created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No evidence claim</h3><p className="mt-1 text-sm text-muted-foreground">No actor, timestamp, reason, before-and-after state, integrity proof, retention state, compliance control, or reviewer conclusion is available.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Archive aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No export claim</h3><p className="mt-1 text-sm text-muted-foreground">No search, filter, export, download, report, notification, incident, or external disclosure is generated or sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/audit-logs"><Button size="lg" className="bg-primary hover:bg-primary/90">View audit-log status</Button></Link><Link href="/compliance-center"><Button size="lg" variant="outline">View compliance status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about audit trails</Button></Link></div></div></Card>

        <section aria-labelledby="audit-state-heading"><h2 id="audit-state-heading" className="mb-4 text-xl font-semibold">Current audit evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{auditStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential incident details, regulated records, or sensitive personal information here. An unavailable audit page is not evidence that an event was recorded, immutable, complete, compliant, or exportable.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, identity, storage, compliance, privacy, permissions, exports, incidents, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /><TimerReset aria-hidden="true" /></div>
      </main>
    </div>
  );
}
