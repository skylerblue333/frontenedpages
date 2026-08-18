import { AlertTriangle, Bot, FileText, LockKeyhole, ShieldAlert, Sparkles, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const capabilityStates = [
  { label: "Agent catalog and capability metadata", value: "Not configured", icon: Bot },
  { label: "Model routing and execution", value: "Unavailable", icon: Workflow },
  { label: "Usage, pricing, and entitlements", value: "Unavailable", icon: FileText },
  { label: "Payment and automation", value: "Disabled", icon: LockKeyhole },
];

export default function AIAgentMarket() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Agent Market"
        description="AI agent marketplace services are not enabled in this deployment. No agent catalog, capability, price, usage count, rating, execution, subscription, or payment result is being reported."
      />

      <div className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Agent marketplace actions are unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page does not connect to a verified agent registry, model provider, tool-permission layer, usage ledger, payment provider, subscription service, job queue, or result store. It cannot sell, unlock, execute, automate, rate, or guarantee an AI agent result. No capability, cost, revenue, or performance claim should be inferred from this screen.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <div className="mb-3 flex items-center gap-2 text-primary">
                <Sparkles aria-hidden="true" className="h-5 w-5" />
                <span className="text-xs font-mono uppercase tracking-wider">Capability status</span>
              </div>
              <h2 className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold text-transparent">AI marketplace readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production AI marketplace requires verified agent metadata, model and tool contracts, prompt and data boundaries, user consent, capability and cost disclosures, sandboxing, rate limits, abuse controls, result provenance, usage and entitlement accounting, payment and refund handling, and auditability. Those integrations are not connected here.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Bot aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Agent boundary</h3>
                  <p className="text-sm text-muted-foreground">No agent, model, tool, prompt, output format, capability, rating, user count, or performance record is configured.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <Workflow aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Execution boundary</h3>
                  <p className="text-sm text-muted-foreground">No preview, job, queue, automation, tool invocation, file generation, external action, result, or completion state is available.</p>
                </div>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <div className="space-y-3">
                  <ShieldAlert aria-hidden="true" className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-bold">Commerce boundary</h3>
                  <p className="text-sm text-muted-foreground">No price, credit, subscription, payment, refund, entitlement, revenue, or security certification is displayed.</p>
                </div>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/hope-ai">
                <Button size="lg" className="bg-primary hover:bg-primary/90">View AI status</Button>
              </Link>
              <Link href="/ai-control-center">
                <Button size="lg" variant="outline">View AI control status</Button>
              </Link>
              <Link href="/documentation">
                <Button size="lg" variant="ghost">View documentation</Button>
              </Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="agent-market-state-heading">
          <h2 id="agent-market-state-heading" className="mb-4 text-xl font-semibold">Current marketplace state</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilityStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">{label}</p>
                  <div className="flex items-center gap-2">
                    <Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" />
                    <p className="text-lg font-semibold">{value}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldAlert aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter secrets, private data, payment details, or external-service credentials into this deployment. Do not treat this page as evidence that an AI agent exists, was executed, produced a result, earned revenue, or provides a security guarantee.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
