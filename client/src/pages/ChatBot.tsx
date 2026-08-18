import { AlertTriangle, Bot, FileWarning, LockKeyhole, MessageCircle, Search, Settings2, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const chatStates = [
  { label: "Chat model, provider, and version", value: "Unavailable", icon: Bot },
  { label: "Messages, conversations, and history", value: "Not configured", icon: MessageCircle },
  { label: "Search, settings, and personalization", value: "Disabled", icon: Search },
  { label: "Privacy, retention, and deletion controls", value: "Not verified", icon: LockKeyhole },
];

export default function ChatBot() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="ChatBot"
        description="Chatbot services are not connected in this deployment. No model response, message, conversation, history, search, personalization, or privacy state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">ChatBot is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen exposed a sign-in gate, New action, search, settings, loading state, and empty-item prompt, but no verified chatbot or message contract was connected. Those controls were removed because they could imply conversations, history, persistence, or successful AI access that cannot be proven.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><MessageCircle aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Chat readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production chatbot requires an authorized model gateway, explicit model and version metadata, input and output validation, content safety, privacy and retention settings, secure history storage, search boundaries, rate and cost controls, abuse handling, observability, and clear success, failure, timeout, and retry states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No model claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No provider, model, version, response, latency, capability, or availability claim is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Search aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No history claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No message, conversation, search result, memory, personalization, or retention behavior is simulated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No privacy claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No content is accepted, stored, shared, deleted, encrypted, or guaranteed private by this screen.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/hope-ai"><Button size="lg" className="bg-primary hover:bg-primary/90">View HopeAI status</Button></Link>
              <Link href="/ai-control-center"><Button size="lg" variant="outline">View AI controls</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about chat access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="chat-state-heading">
          <h2 id="chat-state-heading" className="mb-4 text-xl font-semibold">Current chatbot evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {chatStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter passwords, access tokens, seed phrases, private keys, health details, confidential business data, or sensitive personal information here. An unavailable chat state is not a substitute for a validated AI or support service.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <Settings2 aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, messages, history, search, privacy, safety, billing, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
