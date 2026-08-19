import { AlertTriangle, Bot, Clock3, FileWarning, LockKeyhole, Mail, MessageSquareReply, Search, ShieldCheck, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const responderStates = [
  { label: "Triggers, conversations, recipients, and consent", value: "Unavailable", icon: MessageSquareReply },
  { label: "Templates, AI models, tone, and safety controls", value: "Not configured", icon: Bot },
  { label: "Schedules, queues, delivery, and retries", value: "Disabled", icon: Clock3 },
  { label: "Opt-out, permissions, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function AutoResponder() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Auto Responder"
        description="Automated-response services are not connected in this deployment. No trigger, conversation, recipient, template, AI reply, schedule, delivery, opt-out, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Auto Responder is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified conversation source, trigger evaluator, recipient permission, template registry, AI provider, scheduling queue, delivery provider, opt-out flow, or audit contract was connected. Those controls were removed because the screen cannot establish that an automated reply would be safe, authorized, or delivered.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Workflow aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Automated-response readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production auto-response requires typed triggers, authenticated actors, consent and purpose limitation, recipient and channel validation, template and model versioning, prompt safety, rate limits, deduplication, scheduling, queue and retry state, delivery receipts, opt-out enforcement, sensitive-data filtering, audit, and clear draft, queued, sent, failed, suppressed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><MessageSquareReply aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No reply claim</h3><p className="mt-1 text-sm text-muted-foreground">No conversation, trigger, recipient, message, template, response, delivery receipt, or conversation state is read or created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No AI claim</h3><p className="mt-1 text-sm text-muted-foreground">No model, prompt, generated text, tone, classification, tool call, safety decision, or autonomous response is invoked.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Mail aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No delivery claim</h3><p className="mt-1 text-sm text-muted-foreground">No email, push, SMS, chat, webhook, schedule, queue, retry, unsubscribe, or external notification is sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/notifications"><Button size="lg" className="bg-primary hover:bg-primary/90">View notification status</Button></Link><Link href="/ai-tools-hub"><Button size="lg" variant="outline">View AI status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about auto replies</Button></Link></div></div></Card>

        <section aria-labelledby="autoresponder-state-heading"><h2 id="autoresponder-state-heading" className="mb-4 text-xl font-semibold">Current response evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{responderStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential conversations, private prompts, or sensitive personal information here. An unavailable auto-responder page is not evidence that a message was generated, safe, authorized, delivered, or opted in.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Identity, conversations, AI, messaging, providers, consent, privacy, billing, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
