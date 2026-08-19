import { AlertTriangle, Cog, FileWarning, GitBranch, KeyRound, LockKeyhole, PlayCircle, Search, ShieldCheck, Workflow, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const automationStates = [
  { label: "Triggers, conditions, owners, and rule versions", value: "Unavailable", icon: GitBranch },
  { label: "Actions, integrations, credentials, and permissions", value: "Not configured", icon: KeyRound },
  { label: "Runs, queues, retries, and side effects", value: "Disabled", icon: PlayCircle },
  { label: "Logs, approvals, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function AutomationRules() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Automation Rules"
        description="Automation services are not connected in this deployment. No rule, trigger, condition, action, integration, credential, run, queue, retry, notification, or external side effect is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Automation Rules are unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified rule registry, event source, action catalog, integration credential, approval policy, execution queue, retry state, notification provider, or audit contract was connected. Those controls were removed because the screen cannot establish that a workflow exists or that an external side effect will be safe and authorized.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Workflow aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Automation readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production automation requires typed events, versioned rules, deterministic conditions, authenticated ownership, least-privilege credentials, action allowlists, idempotency, approvals, rate limits, queue and retry state, timeout handling, side-effect receipts, secret protection, privacy filtering, audit, and clear draft, queued, running, completed, failed, suppressed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><GitBranch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No rule claim</h3><p className="mt-1 text-sm text-muted-foreground">No trigger, condition, schedule, owner, version, filter, workflow, or activation status is created or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Zap aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No action claim</h3><p className="mt-1 text-sm text-muted-foreground">No payment, message, data mutation, API request, AI task, notification, file operation, or external action is initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><KeyRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No credential claim</h3><p className="mt-1 text-sm text-muted-foreground">No secret, token, provider connection, permission, approval, execution log, receipt, or audit record is stored or used.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/automation-workflows"><Button size="lg" className="bg-primary hover:bg-primary/90">View workflow status</Button></Link><Link href="/api-integrations"><Button size="lg" variant="outline">View integration status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about automation</Button></Link></div></div></Card>

        <section aria-labelledby="automation-state-heading"><h2 id="automation-state-heading" className="mb-4 text-xl font-semibold">Current automation evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{automationStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, provider secrets, confidential workflows, or sensitive personal information here. An unavailable automation page is not evidence that a rule ran, a mutation occurred, a notification was delivered, or an external system changed.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, rules, providers, secrets, permissions, queues, notifications, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Cog aria-hidden="true" /><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
