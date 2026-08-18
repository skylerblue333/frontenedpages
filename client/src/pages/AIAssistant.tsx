import { AlertTriangle, Bot, FileWarning, LockKeyhole, MessageCircle, Search, Settings2, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const assistantStates = [
  { label: "Model, provider, and version", value: "Unavailable", icon: Bot },
  { label: "Prompts, conversations, and outputs", value: "Not configured", icon: MessageCircle },
  { label: "Tools, files, and external actions", value: "Disabled", icon: Settings2 },
  { label: "Search, history, and personalization", value: "Not verified", icon: Search },
];

export default function AIAssistant() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="AI Assistant"
        description="AI assistant services are not connected in this deployment. No model, provider, prompt, response, conversation, tool call, file action, or personalization state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">AI Assistant is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen exposed a sign-in gate, New action, search, settings, and an empty assistant state, but no verified AI model or assistant contract was connected. This page cannot establish that a model, prompt, response, conversation, tool call, uploaded file, search result, or generated artifact exists or succeeded.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Sparkles aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Assistant readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production assistant functionality requires an authorized model gateway, explicit model and version metadata, prompt and output validation, tool permissions, file isolation, privacy and retention settings, rate and cost controls, content safety, citation or grounding behavior where applicable, audit evidence, and explicit success, failure, timeout, and retry states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No model claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No provider, model, version, context window, latency, availability, or capability claim is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MessageCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No output claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No prompt, response, citation, conversation, memory, personalization, or generated artifact is simulated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No tool claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No file upload, external API call, code execution, browser action, transaction, or side effect can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/hope-ai"><Button size="lg" className="bg-primary hover:bg-primary/90">View HopeAI status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about AI access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="assistant-state-heading">
          <h2 id="assistant-state-heading" className="mb-4 text-xl font-semibold">Current assistant evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {assistantStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter passwords, access tokens, seed phrases, private keys, health details, confidential business data, or sensitive personal information here. An unavailable assistant state is not a substitute for a validated AI service.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, history, tools, files, safety, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
