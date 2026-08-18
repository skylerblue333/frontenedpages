import { AlertTriangle, CalendarClock, FileWarning, GitBranch, LockKeyhole, Map, ShieldCheck, Target, TrendingUp, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const roadmapStates = [
  { label: "Initiatives, owners, milestones, and delivery status", value: "Unavailable", icon: Map },
  { label: "Priority, demand, market, and resource signals", value: "Not measured", icon: Target },
  { label: "Quarter timelines, progress, and completion", value: "Not configured", icon: CalendarClock },
  { label: "Automatic reprioritization and optimization", value: "Disabled", icon: GitBranch },
];

export default function AdaptiveRoadmap() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Adaptive Roadmap"
        description="Roadmap intelligence is not connected in this deployment. No initiative, milestone, priority, completion percentage, market signal, resource forecast, roadmap owner, or automatic reprioritization is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Adaptive Roadmap is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen rendered a hard-coded initiative inventory with Q2 progress, priority and confidence scores, market and resource signals, quarter totals, completion history, “on track” status, and automatic optimization events. Those claims were removed because no planning source, project system, owner, telemetry, forecasting model, or approval workflow was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Map aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Roadmap readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production roadmap system requires a source of truth, authenticated workspace and owner permissions, typed initiative and milestone records, dependency and status semantics, evidence-based prioritization, forecast definitions, change history, review and approval, notification boundaries, auditability, and clear stale, conflicting, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Target aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No planning claim</h3><p className="mt-1 text-sm text-muted-foreground">No initiative, owner, quarter, priority, impact, effort, milestone, dependency, confidence, or completion percentage is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><TrendingUp aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No signal claim</h3><p className="mt-1 text-sm text-muted-foreground">No user-demand, market-timing, competitive-pressure, resource-availability, trend, forecast, or strategic-alignment signal is calculated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Wrench aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No mutation claim</h3><p className="mt-1 text-sm text-muted-foreground">No reprioritization, timeline change, recommendation, optimization, assignment, approval, or project-system update is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/analytics"><Button size="lg" className="bg-primary hover:bg-primary/90">View analytics status</Button></Link><Link href="/ai-governance"><Button size="lg" variant="outline">View AI governance status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about roadmap access</Button></Link></div></div></Card>

        <section aria-labelledby="roadmap-state-heading"><h2 id="roadmap-state-heading" className="mb-4 text-xl font-semibold">Current roadmap evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{roadmapStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential project plans, proprietary code, or sensitive personal information here. An unavailable roadmap page is not evidence of project progress, delivery commitment, forecast, or automatic decision-making.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Projects, initiatives, analytics, models, owners, approvals, notifications, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
