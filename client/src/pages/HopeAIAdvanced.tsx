import { AlertTriangle, Brain, Code2, FileWarning, Gauge, LockKeyhole, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const advancedStates = [
  { label: "Model, provider, and version", value: "Unavailable", icon: Brain },
  { label: "Chat, code, reasoning, creative, and learning modes", value: "Disabled", icon: MessageCircle },
  { label: "Token usage, thinking time, and confidence", value: "Not measured", icon: Gauge },
  { label: "Conversation storage, download, and settings", value: "Not configured", icon: LockKeyhole },
];

export default function HopeAIAdvanced() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="HopeAI Advanced"
        description="Advanced HopeAI services are not connected in this deployment. No response, code, reasoning trace, confidence, token usage, conversation, download, or model-setting state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">HopeAI Advanced is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen simulated assistant responses after a delay, generated placeholder code, claimed production readiness, invented thinking time, token usage, and confidence, offered unsupported code/reasoning/creative/learning capabilities, and described the assistant as better than other systems. Those claims, settings, and conversation actions were removed because no verified model gateway or response contract was connected.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Sparkles aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Advanced AI readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Advanced AI requires an authenticated model gateway, explicit provider and version metadata, validated prompts and outputs, safe handling of reasoning and sensitive content, tool and file isolation, privacy and retention controls, real token and cost metering, evaluation evidence, content safety, and clear success, failure, timeout, and retry states. A confidence number or internal reasoning display must not be invented. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MessageCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No response claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No chat, code, reasoning, creative, tutoring, data-analysis, or problem-solving response is generated or simulated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Gauge aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No telemetry claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No token count, thinking time, confidence, latency, quality, accuracy, capability, or model-performance metric is invented.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No safety claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No privacy, encryption, memory, history, download, security, accuracy, or production-readiness guarantee is represented.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/hope-ai"><Button size="lg" className="bg-primary hover:bg-primary/90">View HopeAI status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about advanced AI access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="advanced-state-heading">
          <h2 id="advanced-state-heading" className="mb-4 text-xl font-semibold">Current advanced-AI evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {advancedStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter passwords, access tokens, seed phrases, private keys, proprietary code, health details, confidential business data, or sensitive personal information here. AI-generated code and advice require independent review and must not be treated as secure, accurate, tested, or production-ready without evidence.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, conversation storage, files, tools, privacy, safety, billing, evaluation, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>

        <div className="sr-only"><Code2 aria-hidden="true" /></div>
      </main>
    </div>
  );
}
