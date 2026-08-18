import { AlertTriangle, BarChart3, Brain, FileWarning, LockKeyhole, MessageCircle, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const coreStates = [
  { label: "Model, provider, and version", value: "Unavailable", icon: Brain },
  { label: "Chat, generation, and market analysis", value: "Disabled", icon: MessageCircle },
  { label: "Token usage, quotas, and billing", value: "Not verified", icon: Zap },
  { label: "History, outputs, and retention", value: "Not configured", icon: BarChart3 },
];

export default function AICore() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Core"
        description="AI Core services are not connected in this deployment. No model response, generated content, market analysis, token usage, recent generation, quota, or subscription state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI Core is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen called unverified chat, content-generation, market-analysis, and usage procedures. It also displayed an OpenAI attribution, token balances and limits, recent generations, and an AI Pro upgrade claim without verified service, entitlement, billing, or history evidence. Those actions and claims were removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Sparkles aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">AI Core readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production AI core requires a verified provider and model registry, authenticated model gateway, input and output validation, content and market-data provenance, safe tool boundaries, privacy and retention settings, rate and cost controls, accurate quota and entitlement data, usage metering, audit logs, and explicit success, failure, timeout, and retry states. None of those controls are available through this page.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MessageCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No response claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No chat reply, generated content, market analysis, strategy, recommendation, or financial decision support is produced here.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No usage claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No tokens used, tokens remaining, monthly limit, quota percentage, latency, cost, or recent-generation history is invented.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No billing claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No plan, entitlement, unlimited access, priority processing, upgrade, charge, or subscription status is represented.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/ai-brain"><Button size="lg" className="bg-primary hover:bg-primary/90">View AI Brain status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about AI access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="core-state-heading">
          <h2 id="core-state-heading" className="mb-4 text-xl font-semibold">Current AI Core evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {coreStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter passwords, access tokens, seed phrases, private keys, confidential business information, health details, or sensitive personal information here. AI output and market analysis must not be treated as verified financial, legal, medical, security, or production advice.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, market data, usage metering, billing, history, privacy, safety, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
