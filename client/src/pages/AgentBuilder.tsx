import { AlertTriangle, Bot, Code2, FileWarning, LockKeyhole, Play, Rocket, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const agentStates = [
  { label: "Agent identity, prompt, and configuration", value: "Unavailable", icon: Bot },
  { label: "Tools, permissions, and execution sandbox", value: "Not configured", icon: Wrench },
  { label: "Testing, logs, and output verification", value: "Not available", icon: Play },
  { label: "Deployment, secrets, and lifecycle controls", value: "Disabled", icon: Rocket },
];

export default function AgentBuilder() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Agent Builder"
        description="Agent-building services are not connected in this deployment. No agent, prompt, tool permission, execution, deployment, secret, output, or persistent configuration is being created or reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Agent Builder is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen presented editable agent identity and system-prompt fields, preselected web-search and code-execution tools, Test and Deploy actions, and no verified persistence, permission, sandbox, secret, audit, or execution contract. Those controls were removed because the screen cannot safely create or run an autonomous agent.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Bot aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Agent readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production agent builder requires authenticated ownership, prompt and configuration validation, explicit tool allowlists, least-privilege permissions, isolated execution, secret management, network and file controls, human approval boundaries, rate and cost limits, output verification, audit logs, versioning, rollback, and safe deployment. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No execution claim</h3><p className="mt-1 text-sm text-muted-foreground">No model, prompt, web search, code execution, file access, API call, tool result, autonomous action, or generated output is run.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No secret claim</h3><p className="mt-1 text-sm text-muted-foreground">No API key, token, password, private key, wallet credential, environment variable, or external account is accepted or stored.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Code2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No deployment claim</h3><p className="mt-1 text-sm text-muted-foreground">No agent version, endpoint, runtime, repository, deployment, schedule, webhook, or production status is created or presented.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/ai-tools-hub"><Button size="lg" className="bg-primary hover:bg-primary/90">View AI integration status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about agent access</Button></Link></div></div></Card>

        <section aria-labelledby="agent-state-heading"><h2 id="agent-state-heading" className="mb-4 text-xl font-semibold">Current agent evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{agentStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential prompts, proprietary code, or sensitive personal information here. An unavailable agent page is not evidence of an agent, tool execution, deployment, output, or persistence.</p></div></Card>
      </main>
    </div>
  );
}
