import { Activity, AlertTriangle, BarChart3, Database, FileWarning, LockKeyhole, Search, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const trackingStates = [
  { label: "Events, actors, sessions, and timestamps", value: "Unavailable", icon: Activity },
  { label: "Collection, consent, retention, and deletion", value: "Not configured", icon: ShieldCheck },
  { label: "Funnels, cohorts, metrics, and attribution", value: "Not measured", icon: BarChart3 },
  { label: "Pipelines, logs, monitoring, and audit", value: "Disabled", icon: Database },
];

export default function ActivityTracking() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Activity Tracking"
        description="Activity-tracking services are not connected in this deployment. No event, actor, session, timestamp, consent record, funnel, cohort, metric, attribution, pipeline, log, monitoring result, or audit record is being collected or reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Activity Tracking is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified event collector, identity model, consent boundary, storage policy, analytics pipeline, or observability contract was connected. Those controls were removed because the screen cannot establish that activity data exists or is being tracked.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Activity aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Activity-tracking readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production activity tracking requires explicit purpose and consent, typed event schemas, server-side identity controls, minimization, timestamp and ordering semantics, deduplication, retention and deletion, regional handling, access controls, aggregation definitions, attribution, privacy filtering, pipeline monitoring, audit, and clear stale, partial, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No collection claim</h3><p className="mt-1 text-sm text-muted-foreground">No click, view, scroll, session, login, transaction, wallet, social, commerce, or behavioral event is collected or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No analytics claim</h3><p className="mt-1 text-sm text-muted-foreground">No funnel, cohort, retention, conversion, attribution, active-user, engagement, or performance metric is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No privacy claim</h3><p className="mt-1 text-sm text-muted-foreground">No consent, profile, audience, personal data, retention, deletion, export, or privacy preference is read or changed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View analytics status</Button></Link><Link href="/activity-feed"><Button size="lg" variant="outline">View activity-feed status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about tracking</Button></Link></div></div></Card>

        <section aria-labelledby="activity-tracking-state-heading"><h2 id="activity-tracking-state-heading" className="mb-4 text-xl font-semibold">Current tracking evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{trackingStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential event records, proprietary analytics, or sensitive personal information here. An unavailable tracking page is not evidence that activity is collected, a metric is accurate, or a privacy control exists.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, identity, consent, analytics, warehouses, privacy, monitoring, audit, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
