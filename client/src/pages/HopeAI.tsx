import { AlertTriangle, Bot, Brain, EyeOff, FileWarning, LockKeyhole, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const aiStates = [
  { label: "Chat model and response generation", value: "Unavailable", icon: MessageCircle },
  { label: "Conversation history and persistence", value: "Not configured", icon: LockKeyhole },
  { label: "Emotion, intent, and risk inference", value: "Disabled", icon: Brain },
  { label: "Voice, coding, research, agents, and other modes", value: "Not verified", icon: Sparkles },
];

export default function HopeAI() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="HopeAI"
        description="The HopeAI service is not connected in this deployment. No model response, emotional state, risk score, chat history, personalization, or AI action is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">HopeAI is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen called chat, history, message-save, clear-history, and gray-area mutations on a generic feature router. It also claimed to read typing signals, infer emotional state, expose risk scores and 22 analyzers, provide inner thoughts, support many specialized AI modes, and preserve conversations. Those backend contracts were not verified, so the interactive chat and unsupported AI claims were removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Bot aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">AI readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production AI requires an authorized model gateway, explicit model and version metadata, input and output validation, safe prompt and tool boundaries, rate and cost controls, privacy and retention settings, abuse and safety handling, grounded citations where applicable, secure history storage, observability, content labeling, human escalation, and transparent limitations. Emotional or mental-health inference requires additional consent, safeguards, evaluation, and non-diagnostic wording. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MessageCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No response claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No model, answer, tone, follow-up, voice, coding, research, coaching, or agent result is generated or displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <EyeOff aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No inference claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No typing analysis, emotion, intent, vulnerability, manipulation, trauma, addiction, deception, or risk score is calculated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No privacy claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No conversation is accepted, stored, shared, encrypted, deleted, or guaranteed private by this screen.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/hope-ai-advanced"><Button size="lg" className="bg-primary hover:bg-primary/90">View advanced AI status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about AI access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="ai-state-heading">
          <h2 id="ai-state-heading" className="mb-4 text-xl font-semibold">Current HopeAI evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {aiStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter passwords, access tokens, seed phrases, private keys, health details, crisis disclosures, or other sensitive personal information here. This unavailable state is not a substitute for a safe AI or mental-health support service.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, history, tool use, safety, privacy, billing, observability, and specialized AI modes remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
