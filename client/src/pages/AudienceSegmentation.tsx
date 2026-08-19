import { AlertTriangle, Database, FileWarning, Fingerprint, Group, LockKeyhole, Mail, Search, ShieldCheck, UsersRound } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const audienceStates = [
  { label: "Profiles, events, consent, and identity resolution", value: "Unavailable", icon: Fingerprint },
  { label: "Segments, rules, cohorts, and membership counts", value: "Not configured", icon: Group },
  { label: "Targeting, activation, delivery, and suppression", value: "Disabled", icon: Mail },
  { label: "Privacy, retention, permissions, and audit", value: "Not available", icon: ShieldCheck },
];

export default function AudienceSegmentation() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Audience Segmentation"
        description="Audience services are not connected in this deployment. No profile, event, consent choice, segment, cohort, membership count, targeting decision, delivery, suppression, or privacy result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Audience Segmentation is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified profile source, event stream, identity resolution, consent model, segment evaluator, audience count, activation provider, suppression policy, or audit contract was connected. Those controls were removed because the screen cannot establish that a person belongs to an audience or may be targeted.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><UsersRound aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Audience readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production segmentation requires purpose limitation, consent, identity and event semantics, typed rules, cohort windows, membership freshness, suppression and exclusion controls, sensitive-attribute handling, access permissions, activation-provider authentication, delivery and unsubscribe state, retention and deletion, audit, and clear partial, stale, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No audience claim</h3><p className="mt-1 text-sm text-muted-foreground">No user, profile, event, cohort, segment, membership, count, interest, behavior, or demographic attribute is collected or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Group aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No rule claim</h3><p className="mt-1 text-sm text-muted-foreground">No filter, threshold, lookback window, inclusion, exclusion, score, audience size, or eligibility decision is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No activation claim</h3><p className="mt-1 text-sm text-muted-foreground">No campaign, email, push, message, ad audience, export, provider sync, unsubscribe, or suppression action is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View analytics status</Button></Link><Link href="/campaign-analytics"><Button size="lg" variant="outline">View campaign status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about audiences</Button></Link></div></div></Card>

        <section aria-labelledby="audience-state-heading"><h2 id="audience-state-heading" className="mb-4 text-xl font-semibold">Current audience evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{audienceStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential customer data, sensitive attributes, or proprietary campaign information here. An unavailable audience page is not evidence that a person belongs to a segment, may be targeted, or has consented.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Identity, events, consent, analytics, campaigns, messaging, privacy, permissions, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
