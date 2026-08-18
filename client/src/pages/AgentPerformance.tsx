import { Activity, AlertTriangle, Bot, FileWarning, Gauge, LockKeyhole, Search, ShieldCheck, Timer, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const performanceStates = [
  { label: "Agent runs, task outcomes, and success rates", value: "Unavailable", icon: Activity },
  { label: "Latency, throughput, uptime, and cost", value: "Not measured", icon: Timer },
  { label: "Model quality, evaluations, and regressions", value: "Not configured", icon: Gauge },
  { label: "Logs, traces, alerts, and ownership", value: "Not available", icon: ShieldCheck },
];

export default function AgentPerformance() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Agent Performance"
        description="Agent-observability services are not connected in this deployment. No agent run, task result, success rate, latency, uptime, cost, model score, log, trace, alert, or performance trend is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Agent performance is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified agent run, metric, evaluation, trace, or observability contract was connected. Those controls were removed because the screen cannot establish that agent activity or performance data exists.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Activity aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Agent observability readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production agent observability requires typed run and task identifiers, event-time semantics, structured logs, traces, cost and token accounting, latency definitions, uptime windows, evaluation datasets, quality baselines, regression alerts, privacy filtering, retention, access controls, incident ownership, and clear unavailable, partial, stale, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No run claim</h3><p className="mt-1 text-sm text-muted-foreground">No agent, model, task, tool call, output, success, failure, completion, or execution history is displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Gauge aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No metric claim</h3><p className="mt-1 text-sm text-muted-foreground">No accuracy, quality, latency, throughput, uptime, token count, spend, efficiency, ranking, or trend is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Wrench aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No action claim</h3><p className="mt-1 text-sm text-muted-foreground">No evaluation, tuning, restart, deployment, alert acknowledgement, configuration change, or remediation is initiated.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/agent-coordination-hub"><Button size="lg" className="bg-primary hover:bg-primary/90">View orchestration status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about observability</Button></Link></div></div></Card>

        <section aria-labelledby="agent-performance-state-heading"><h2 id="agent-performance-state-heading" className="mb-4 text-xl font-semibold">Current performance evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{performanceStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential prompts, proprietary code, or sensitive personal information here. An unavailable performance page is not evidence of agent activity, quality, uptime, or production readiness.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Agents, models, runs, metrics, logs, traces, alerts, billing, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
