import { AlertTriangle, Bot, Code2, FileWarning, LockKeyhole, Rocket, Search, ShieldCheck, Users, Wrench } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const marketplaceStates = [
  { label: "Agent catalog and typed capability records", value: "Unavailable", icon: Bot },
  { label: "Availability, ratings, usage, and category data", value: "Not verified", icon: Users },
  { label: "Chat, deployment, permissions, and runtime", value: "Disabled", icon: Rocket },
  { label: "Billing, subscriptions, secrets, and audit", value: "Not configured", icon: ShieldCheck },
];

export default function AgentMarketplace() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Agent Marketplace"
        description="AI-agent marketplace services are not connected in this deployment. No agent catalog, capability, price, usage count, rating, chat session, deployment, subscription, payment, or runtime is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Agent Marketplace is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous page queried an unverified agent catalog, supplied a fallback count, generated ratings from agent-name characters, exposed Chat and Deploy actions, and treated a local toggle as deployment state. Those claims and actions were removed because no verified catalog, capability, runtime, permission, billing, secret, or audit contract was established.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Bot aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Marketplace readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production agent marketplace requires verified publisher identity, agent version and capability metadata, security review, tool and data permissions, isolated runtime, model and cost disclosure, availability and compatibility checks, ratings provenance, subscription and payment controls, secret isolation, user consent, abuse prevention, and clear deployment, failure, rollback, and deletion states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Code2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No catalog claim</h3><p className="mt-1 text-sm text-muted-foreground">No agent name, provider, category, model, capability, rating, usage, availability, price, or production status is fabricated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Wrench aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No runtime claim</h3><p className="mt-1 text-sm text-muted-foreground">No chat session, tool call, web search, code execution, file access, agent deployment, endpoint, or external action is initiated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No commerce claim</h3><p className="mt-1 text-sm text-muted-foreground">No subscription, payment, usage charge, token, API key, wallet credential, secret, entitlement, or audit record is created.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/agent-builder"><Button size="lg" className="bg-primary hover:bg-primary/90">View agent builder status</Button></Link><Link href="/ai-tools-hub"><Button size="lg" variant="outline">View AI integration status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about agent access</Button></Link></div></div></Card>

        <section aria-labelledby="marketplace-state-heading"><h2 id="marketplace-state-heading" className="mb-4 text-xl font-semibold">Current marketplace evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{marketplaceStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential prompts, proprietary code, or sensitive personal information here. An unavailable marketplace is not evidence of an agent, rating, deployment, subscription, or successful AI action.</p></div></Card>
      </main>
    </div>
  );
}
