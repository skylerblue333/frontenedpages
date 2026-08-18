import { AlertTriangle, BarChart3, Brain, Code2, FileWarning, LockKeyhole, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const capabilityStates = [
  { label: "Models, providers, and versions", value: "Unavailable", icon: Brain },
  { label: "Chat and topic learning", value: "Not configured", icon: MessageCircle },
  { label: "Code generation, debugging, review, and optimization", value: "Disabled", icon: Code2 },
  { label: "Analytics, accuracy, forecasts, and quality scores", value: "Not measured", icon: BarChart3 },
];

export default function AIBrain() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Brain"
        description="AI Brain services are not connected in this deployment. No model output, module status, accuracy, forecast, code result, learning result, or quality score is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI Brain is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen displayed eight active AI modules with fabricated accuracy percentages, a LIVE AI badge, a claim of superiority over other assistants, and controls that called unverified model, code, learning, and analytics mutations. Those claims and actions were removed because the connected backend contracts and measurement evidence were not verified.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Sparkles aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">AI platform readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production AI control surface must identify each provider and model version, expose verified availability rather than marketing badges, validate inputs and outputs, isolate tools and files, protect secrets and personal data, apply safety and abuse controls, measure quality with a documented evaluation set, report failures and latency honestly, enforce rate and cost limits, and retain auditable evidence. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Brain aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No capability claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No feed ranking, moderation, fraud detection, recommendation, sentiment, trend, creator, or social-graph model is presented as active.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Code2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No code claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No generated, debugged, reviewed, optimized, compiled, secure, or production-ready code is produced by this screen.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No score claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No accuracy, quality score, sentiment, forecast, risk, performance, safety, or business metric is invented or displayed.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/hope-ai"><Button size="lg" className="bg-primary hover:bg-primary/90">View HopeAI status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about AI access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="brain-state-heading">
          <h2 id="brain-state-heading" className="mb-4 text-xl font-semibold">Current AI Brain evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {capabilityStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter passwords, access tokens, seed phrases, private keys, confidential source code, health details, or sensitive personal information here. An unavailable AI control surface is not a substitute for a validated AI service.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, tools, files, evaluation, safety, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
