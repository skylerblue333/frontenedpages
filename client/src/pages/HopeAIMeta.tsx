import { AlertTriangle, Brain, Code2, Database, FileWarning, Globe, Image as ImageIcon, LockKeyhole, MessageCircle, Mic, Play, ShieldCheck, Sparkles, Video } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const metaStates = [
  { label: "Model, provider, and capability routing", value: "Unavailable", icon: Brain },
  { label: "Chat, code, image, video, document, and web operations", value: "Disabled", icon: Sparkles },
  { label: "Execution, data, voice, vision, and file processing", value: "Not configured", icon: Play },
  { label: "Conversations, telemetry, and retention", value: "Not verified", icon: LockKeyhole },
];

export default function HopeAIMeta() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="HopeAI Meta"
        description="Meta-AI services are not connected in this deployment. No multimodal response, search result, execution, file analysis, conversation, confidence, token usage, or capability state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">HopeAI Meta is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen simulated responses for chat, code, image, video, documents, web search, reasoning, execution, data, creative, voice, and vision. It also fabricated search results, supported runtimes, language counts, confidence, token usage, thinking time, and conversation records. Those claims and actions were removed because no verified multimodal model gateway, file boundary, search source, execution sandbox, or persistence contract was connected.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Sparkles aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Multimodal AI readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production multimodal system requires authenticated provider routing, explicit model and version metadata, safe file uploads, malware and content scanning, input and output validation, citation-backed search, isolated code execution, permissioned tools, voice and vision consent, privacy and retention controls, real usage and cost metering, evaluation evidence, and clear success, failure, timeout, and retry states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MessageCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No response claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No chat, code, image, video, document, search, reasoning, creative, or tutoring result is generated or simulated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No data claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No dataset, document, image, video, voice recording, search result, file, chart, execution output, or conversation is accepted or stored.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No capability claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No OCR, face recognition, emotion detection, language coverage, runtime, sandbox, accuracy, confidence, or model-performance claim is represented.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/hope-ai"><Button size="lg" className="bg-primary hover:bg-primary/90">View HopeAI status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about Meta AI access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="meta-state-heading">
          <h2 id="meta-state-heading" className="mb-4 text-xl font-semibold">Current Meta-AI evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {metaStates.map(({ label, value, icon: Icon }) => (
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
              Do not upload or enter passwords, access tokens, seed phrases, private keys, confidential files, health details, voice recordings, face images, or other sensitive personal information here. AI, search, execution, and analysis outputs require independent verification.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, files, search, execution, voice, vision, privacy, history, billing, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>

        <div className="sr-only"><Code2 aria-hidden="true" /><Globe aria-hidden="true" /><ImageIcon aria-hidden="true" /><Video aria-hidden="true" /><Mic aria-hidden="true" /></div>
      </main>
    </div>
  );
}
