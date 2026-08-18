import { AlertTriangle, BarChart3, Database, FileDown, FileWarning, Heart, LockKeyhole, ShieldCheck, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const analyticsStates = [
  { label: "Daily and monthly active users", value: "Unavailable", icon: Users },
  { label: "Revenue, MRR, payments, and transactions", value: "Not measured", icon: TrendingUp },
  { label: "Page views, posts, engagement, and growth", value: "Not configured", icon: BarChart3 },
  { label: "Top-content ranking and creator attribution", value: "Disabled", icon: Heart },
];

export default function Analytics() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Analytics Dashboard"
        description="Analytics services are not connected in this deployment. No active-user count, revenue, payment, page-view, content-performance, engagement, ranking, or growth result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Analytics Dashboard is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen rendered fabricated DAU, MAU, MRR, page views, daily revenue, transaction and post trends, “Top Content This Week,” creator attribution, view counts, likes, and percentage changes. Those claims and navigation affordances were removed because no verified event pipeline, billing source, identity contract, content source, aggregation definition, or privacy boundary was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Analytics readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production analytics requires event and metric contracts, source provenance, period and time-zone semantics, identity and consent controls, deduplication, revenue reconciliation, content attribution, cohort definitions, stale-data handling, role-based access, retention, redaction, and clear partial, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No KPI claim</h3><p className="mt-1 text-sm text-muted-foreground">No DAU, MAU, MRR, revenue, payment, transaction, page-view, conversion, post, engagement, or growth value is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No attribution claim</h3><p className="mt-1 text-sm text-muted-foreground">No content ranking, creator identity, audience, view, like, share, comment, cohort, or behavioral record is read or inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><FileDown aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No reporting claim</h3><p className="mt-1 text-sm text-muted-foreground">No chart refresh, export, scheduled report, share, alert, dashboard link, or external analytics action is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/advanced-analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View advanced analytics status</Button></Link><Link href="/api-status"><Button size="lg" variant="outline">View API status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about analytics access</Button></Link></div></div></Card>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential financial records, proprietary business data, or sensitive personal information here. An unavailable analytics page is not evidence of users, revenue, growth, engagement, attribution, or reporting compliance.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, warehouses, billing, identity, content, reports, permissions, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
