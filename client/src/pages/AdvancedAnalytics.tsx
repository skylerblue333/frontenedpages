import { AlertTriangle, BarChart3, Database, FileDown, FileWarning, LockKeyhole, PieChart, RefreshCw, ShieldCheck, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const analyticsStates = [
  { label: "Revenue, transaction, and billing data", value: "Unavailable", icon: TrendingUp },
  { label: "Users, engagement, conversion, and retention", value: "Not measured", icon: BarChart3 },
  { label: "Platform distribution and business dimensions", value: "Not configured", icon: PieChart },
  { label: "Exports, schedules, sharing, and permissions", value: "Disabled", icon: FileDown },
];

export default function AdvancedAnalytics() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Advanced Analytics"
        description="Analytics services are not connected in this deployment. No revenue, user, transaction, engagement, conversion, platform distribution, forecast, export, schedule, or shared report is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Advanced Analytics is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen rendered hard-coded revenue, users, transactions, engagement, platform distribution, conversion-funnel counts, percentage changes, “real-time insights,” and export, scheduling, and sharing controls. Those claims and actions were removed because no verified analytics source, metric definitions, authorization, report job, or export service was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Analytics readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production analytics requires defined event and metric contracts, source provenance, time-zone and period semantics, identity and privacy controls, deduplication, revenue and transaction reconciliation, cohort definitions, stale-data handling, role-based access, export redaction, scheduled jobs, retention, and clear partial, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No metric claim</h3><p className="mt-1 text-sm text-muted-foreground">No revenue, user, transaction, engagement, conversion, retention, funnel, distribution, growth, or forecast value is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No privacy claim</h3><p className="mt-1 text-sm text-muted-foreground">No personal profile, behavioral event, billing record, cohort, audience, or sensitive business data is read or inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><RefreshCw aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No report claim</h3><p className="mt-1 text-sm text-muted-foreground">No CSV, PDF, dashboard share, scheduled report, alert, data refresh, or external analytics action is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View analytics status</Button></Link><Link href="/api-status"><Button size="lg" variant="outline">View API status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about analytics access</Button></Link></div></div></Card>

        <section aria-labelledby="advanced-analytics-state-heading"><h2 id="advanced-analytics-state-heading" className="mb-4 text-xl font-semibold">Current analytics evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{analyticsStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential financial records, proprietary business data, or sensitive personal information here. An unavailable analytics page is not evidence of revenue, growth, users, conversion, performance, or reporting compliance.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, warehouses, billing, identity, reports, exports, permissions, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
