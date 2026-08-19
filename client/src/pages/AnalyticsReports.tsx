import { AlertTriangle, BarChart3, Database, Download, FileWarning, LockKeyhole, Mail, PieChart, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const reportStates = [
  { label: "Data sources, ownership, and metric definitions", value: "Unavailable", icon: Database },
  { label: "Reports, charts, filters, and comparisons", value: "Not configured", icon: BarChart3 },
  { label: "Exports, schedules, recipients, and delivery", value: "Disabled", icon: Download },
  { label: "Access controls, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function AnalyticsReports() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Analytics Reports"
        description="Reporting services are not connected in this deployment. No dataset, metric, chart, report, comparison, export, schedule, recipient, delivery, or analytics result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Analytics Reports are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified data source, metric definition, report model, access policy, export service, schedule, delivery provider, or audit contract was connected. Those controls were removed because the screen cannot establish that an analytics result is accurate, current, complete, or authorized.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><PieChart aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Reporting readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production reporting requires authoritative sources, versioned metric definitions, timezone and freshness semantics, aggregation rules, permission-aware dimensions, privacy controls, reproducible filters, export validation, scheduled delivery, recipient authorization, retention, observability, and clear partial, stale, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No data claim</h3><p className="mt-1 text-sm text-muted-foreground">No users, revenue, engagement, content, wallet, commerce, education, AI, or operational dataset is queried or summarized.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No metric claim</h3><p className="mt-1 text-sm text-muted-foreground">No count, rate, trend, comparison, forecast, ranking, percentage, conversion, or performance conclusion is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Mail aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No delivery claim</h3><p className="mt-1 text-sm text-muted-foreground">No export, download, scheduled report, email, webhook, notification, recipient, or external share is created or sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View analytics status</Button></Link><Link href="/data-export"><Button size="lg" variant="outline">View export status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about reporting</Button></Link></div></div></Card>

        <section aria-labelledby="analytics-reports-state-heading"><h2 id="analytics-reports-state-heading" className="mb-4 text-xl font-semibold">Current reporting evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{reportStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential datasets, proprietary business information, or sensitive personal information here. An unavailable reporting page is not evidence that a metric is accurate, a report is complete, or an export was delivered.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Data sources, definitions, permissions, privacy, exports, schedules, delivery, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><LockKeyhole aria-hidden="true" /></div>
      </main>
    </div>
  );
}
