import { AlertTriangle, Bot, FileWarning, GitBranch, LockKeyhole, Network, Play, Rocket, ShieldCheck, Users, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const coordinationStates = [
  { label: "Agent registry and team membership", value: "Unavailable", icon: Users },
  { label: "Workflow triggers and task delegation", value: "Not configured", icon: GitBranch },
  { label: "Execution, tools, and autonomous actions", value: "Disabled", icon: Wrench },
  { label: "Sprint metrics, logs, and audit history", value: "Not available", icon: ShieldCheck },
];

export default function AgentCoordinationHub() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Agent Coordination Hub"
        description="Agent orchestration services are not connected in this deployment. No agent team, workflow, task, sprint, tool action, market operation, wallet action, log, or metric is being reported or executed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Agent orchestration is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous page rendered named agent teams, completed-task totals, active workflows, crypto and security actions, sprint metrics, delegation controls, an autonomous coding sprint mutation, and unverified sprint history. Those claims and actions were removed because no verified orchestration registry, tool permission, execution sandbox, audit log, or task contract was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Network aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Orchestration readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production agent-coordination system requires authenticated tenancy, typed agent and team registries, explicit task contracts, least-privilege tool scopes, human approval boundaries, isolated execution, idempotency, concurrency controls, rate and cost budgets, sensitive-data handling, verified outputs, durable logs, failure recovery, rollback, and auditability. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No fleet claim</h3><p className="mt-1 text-sm text-muted-foreground">No agent, team, status, task count, current task, workflow, sprint, model, or capability is presented as active.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No action claim</h3><p className="mt-1 text-sm text-muted-foreground">No delegation, code generation, commit, market analysis, trade, staking, wallet change, moderation, alert, or autonomous run is initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Rocket aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No history claim</h3><p className="mt-1 text-sm text-muted-foreground">No sprint metric, generated-line count, task log, timestamp, completion status, or audit record is fabricated or read.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/ai-engineer"><Button size="lg" className="bg-primary hover:bg-primary/90">View engineering status</Button></Link><Link href="/ai-tools-hub"><Button size="lg" variant="outline">View AI integration status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about orchestration access</Button></Link></div></div></Card>

        <section aria-labelledby="coordination-state-heading"><h2 id="coordination-state-heading" className="mb-4 text-xl font-semibold">Current orchestration evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{coordinationStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential tasks, proprietary code, wallet details, or sensitive personal information here. An unavailable orchestration page is not evidence of agent activity, execution, deployment, or completed work.</p></div></Card>
      </main>
    </div>
  );
}
