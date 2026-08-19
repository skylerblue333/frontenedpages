import { AlertTriangle, CalendarClock, FileWarning, ImagePlus, LockKeyhole, Megaphone, Search, ShieldCheck, Target, WalletCards, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const builderStates = [
  { label: "Campaigns, owners, objectives, budgets, and currencies", value: "Unavailable", icon: Megaphone },
  { label: "Audiences, consent, channels, creatives, and approvals", value: "Not configured", icon: Target },
  { label: "Schedules, delivery, spend, limits, and provider state", value: "Disabled", icon: CalendarClock },
  { label: "Analytics, privacy, permissions, and audit", value: "Not available", icon: ShieldCheck },
];

export default function CampaignBuilder() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Campaign Builder"
        description="Campaign-building services are not connected in this deployment. No campaign, objective, budget, audience, consent, creative, approval, schedule, delivery, spend, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Campaign Builder is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified campaign registry, owner identity, objective and budget schema, currency rules, audience and consent provider, creative asset store, approval workflow, scheduler, delivery provider, spend limit, privacy boundary, or audit contract was connected. Those controls were removed because the screen cannot establish that a campaign is authorized, funded, approved, delivered, or safe.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Megaphone aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Campaign-creation readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production campaign creation requires authenticated ownership, objective and budget semantics, currency and spend limits, consented audience selection, channel and creative rights, content moderation, approval and scheduling state, provider credentials, delivery receipts, frequency and suppression rules, privacy, retention, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Target aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No campaign claim</h3><p className="mt-1 text-sm text-muted-foreground">No campaign, objective, audience, budget, currency, channel, creative, approval, schedule, or status is displayed or created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No spend claim</h3><p className="mt-1 text-sm text-muted-foreground">No payment method, spend limit, impression, click, charge, ad-provider request, subscription, payout, or budget mutation is initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ImagePlus aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No creative claim</h3><p className="mt-1 text-sm text-muted-foreground">No image, video, audio, copy, license, approval, moderation decision, delivery, notification, or external publication is generated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/campaign-analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View campaign analytics</Button></Link><Link href="/audience-segmentation"><Button size="lg" variant="outline">View audience status</Button></Link><Link href="/content-vault"><Button size="lg" variant="outline">View content status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about campaigns</Button></Link></div></div></Card>

        <section aria-labelledby="campaign-builder-state-heading"><h2 id="campaign-builder-state-heading" className="mb-4 text-xl font-semibold">Current campaign evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{builderStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, payment credentials, confidential campaign data, sensitive attributes, or proprietary creative work here. An unavailable campaign-builder page is not evidence that a campaign was created, approved, funded, delivered, measured, or profitable.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Campaigns, audiences, content, providers, payments, analytics, privacy, permissions, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /><Workflow aria-hidden="true" /></div>
      </main>
    </div>
  );
}
