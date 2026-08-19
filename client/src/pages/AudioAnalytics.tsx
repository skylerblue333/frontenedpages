import { AlertTriangle, BarChart3, Database, FileAudio, FileWarning, Headphones, LockKeyhole, Mail, PlayCircle, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const audioStates = [
  { label: "Audio catalog, playback, and listener identity", value: "Unavailable", icon: FileAudio },
  { label: "Plays, completion, retention, and engagement", value: "Not measured", icon: BarChart3 },
  { label: "Revenue, subscriptions, royalties, and payouts", value: "Not configured", icon: Database },
  { label: "Privacy, exports, notifications, and audit", value: "Disabled", icon: ShieldCheck },
];

export default function AudioAnalytics() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Audio Analytics"
        description="Audio-analytics services are not connected in this deployment. No audio asset, playback event, listener, completion rate, engagement metric, revenue, royalty, subscription, payout, export, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Audio Analytics is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified audio catalog, playback telemetry, listener identity, analytics definitions, revenue source, royalty ledger, subscription provider, export service, or audit contract was connected. Those controls were removed because the screen cannot establish that an audio event or performance result exists.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Headphones aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Audio-analytics readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production audio analytics requires authoritative catalog and playback events, consent and identity semantics, bot and duplicate-play filtering, timezone and freshness rules, metric definitions, privacy-preserving aggregation, royalty and revenue reconciliation, export permissions, retention, and clear partial, stale, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><PlayCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No playback claim</h3><p className="mt-1 text-sm text-muted-foreground">No track, episode, stream, listener, play, completion, skip, session, device, or geographic event is collected or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No metric claim</h3><p className="mt-1 text-sm text-muted-foreground">No audience, retention, engagement, ranking, trend, conversion, revenue, royalty, payout, or performance conclusion is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Mail aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No delivery claim</h3><p className="mt-1 text-sm text-muted-foreground">No report, export, email, notification, playlist, subscription, creator statement, or external share is generated or sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/media-gallery"><Button size="lg" className="bg-primary hover:bg-primary/90">View media status</Button></Link><Link href="/analytics"><Button size="lg" variant="outline">View analytics status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about audio analytics</Button></Link></div></div></Card>

        <section aria-labelledby="audio-state-heading"><h2 id="audio-state-heading" className="mb-4 text-xl font-semibold">Current audio evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{audioStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential audio, listener data, royalty statements, or sensitive personal information here. An unavailable audio page is not evidence that a track was played, a listener exists, a metric is accurate, or a payout is owed.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Media, playback, identity, analytics, subscriptions, royalties, privacy, exports, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><LockKeyhole aria-hidden="true" /></div>
      </main>
    </div>
  );
}
