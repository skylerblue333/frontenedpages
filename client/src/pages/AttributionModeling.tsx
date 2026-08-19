import { AlertTriangle, BarChart3, Database, FileWarning, Fingerprint, GitBranch, LockKeyhole, PieChart, ShieldCheck, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const attributionStates = [
  { label: "Touchpoints, identities, consent, and journeys", value: "Unavailable", icon: Fingerprint },
  { label: "Models, windows, weights, and conversion rules", value: "Not configured", icon: GitBranch },
  { label: "Revenue, cohorts, channels, and campaign results", value: "Not measured", icon: BarChart3 },
  { label: "Privacy, exports, permissions, and audit", value: "Disabled", icon: ShieldCheck },
];

export default function AttributionModeling() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Attribution Modeling"
        description="Attribution services are not connected in this deployment. No touchpoint, identity, consent, journey, model, conversion, revenue, channel, campaign, cohort, or attribution result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Attribution Modeling is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified event stream, identity resolution, consent boundary, attribution model, conversion definition, revenue source, campaign taxonomy, export service, or audit contract was connected. Those controls were removed because the screen cannot establish that a channel or campaign influenced an outcome.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Target aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Attribution readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production attribution requires consented event collection, identity and session semantics, touchpoint taxonomy, lookback windows, model versioning, deduplication, conversion and revenue definitions, channel exclusions, privacy-preserving aggregation, reproducible calculations, permission-aware exports, retention, and clear incomplete, stale, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No touchpoint claim</h3><p className="mt-1 text-sm text-muted-foreground">No campaign, referral, ad, content, social, search, email, marketplace, or product event is collected or linked to a person.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><PieChart aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No outcome claim</h3><p className="mt-1 text-sm text-muted-foreground">No conversion, revenue, customer, cohort, channel contribution, return, lift, or causal conclusion is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No privacy claim</h3><p className="mt-1 text-sm text-muted-foreground">No identity graph, consent choice, audience, personal profile, exported report, or retention decision is read or changed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View analytics status</Button></Link><Link href="/campaign-analytics"><Button size="lg" variant="outline">View campaign status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about attribution</Button></Link></div></div></Card>

        <section aria-labelledby="attribution-state-heading"><h2 id="attribution-state-heading" className="mb-4 text-xl font-semibold">Current attribution evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{attributionStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential campaign data, customer information, or proprietary revenue data here. An unavailable attribution page is not evidence that a channel, campaign, referral, conversion, or revenue result exists.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, identity, consent, analytics, campaigns, revenue, privacy, exports, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><LockKeyhole aria-hidden="true" /></div>
      </main>
    </div>
  );
}
