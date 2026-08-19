import { AlertTriangle, BarChart3, Database, FileWarning, Fingerprint, LockKeyhole, Megaphone, PieChart, Search, ShieldCheck, Target } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const campaignStates = [
  { label: "Campaigns, channels, audiences, consent, and events", value: "Unavailable", icon: Megaphone },
  { label: "Spend, impressions, clicks, conversions, and revenue", value: "Not measured", icon: BarChart3 },
  { label: "Attribution, cohorts, lift, and optimization", value: "Not configured", icon: Target },
  { label: "Privacy, exports, permissions, and audit", value: "Disabled", icon: ShieldCheck },
];

export default function CampaignAnalytics() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Campaign Analytics"
        description="Campaign-analytics services are not connected in this deployment. No campaign, channel, audience, consent, impression, click, spend, conversion, revenue, attribution, cohort, lift, optimization, export, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Campaign Analytics is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified campaign registry, event stream, spend source, audience and consent model, identity resolution, conversion definition, revenue ledger, attribution model, export service, or audit contract was connected. Those controls were removed because the screen cannot establish that a campaign result is current, causal, complete, or safe to act on.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Campaign-analytics readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production campaign analytics requires authoritative campaign and channel metadata, consented event collection, identity and session semantics, spend and impression reconciliation, conversion and revenue definitions, attribution windows, deduplication, cohort and lift methodology, privacy-preserving aggregation, export permissions, retention, and clear incomplete, stale, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Megaphone aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No campaign claim</h3><p className="mt-1 text-sm text-muted-foreground">No campaign, channel, audience, ad, content, referral, consent, impression, click, spend, or delivery event is collected or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><PieChart aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No outcome claim</h3><p className="mt-1 text-sm text-muted-foreground">No conversion, customer, revenue, return, attribution, cohort, lift, ranking, optimization, or causal conclusion is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No audience claim</h3><p className="mt-1 text-sm text-muted-foreground">No profile, identity graph, consent choice, segment, target, export, provider sync, notification, or suppression action is read or changed.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/attribution-modeling"><Button size="lg" className="bg-primary hover:bg-primary/90">View attribution status</Button></Link><Link href="/audience-segmentation"><Button size="lg" variant="outline">View audience status</Button></Link><Link href="/analytics"><Button size="lg" variant="outline">View analytics status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about campaign analytics</Button></Link></div></div></Card>

        <section aria-labelledby="campaign-state-heading"><h2 id="campaign-state-heading" className="mb-4 text-xl font-semibold">Current campaign evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{campaignStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential customer or campaign data, sensitive attributes, or proprietary revenue information here. An unavailable campaign-analytics page is not evidence that a campaign ran, reached anyone, generated a conversion, or produced revenue.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Campaigns, events, identity, audiences, attribution, revenue, privacy, providers, exports, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Database aria-hidden="true" /><Fingerprint aria-hidden="true" /><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
