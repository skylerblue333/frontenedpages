import { AlertTriangle, FileWarning, History, LockKeyhole, Search, Settings2, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const historyStates = [
  { label: "Conversation storage and retrieval", value: "Unavailable", icon: History },
  { label: "Search, export, and deletion", value: "Not configured", icon: Search },
  { label: "Retention, privacy, and access controls", value: "Not verified", icon: LockKeyhole },
  { label: "Synchronization and audit evidence", value: "Disabled", icon: Settings2 },
];

export default function ChatHistory() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Chat History"
        description="Chat-history services are not connected in this deployment. No conversation, message, search result, export, deletion, retention, or synchronization state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Chat History is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen presented a sign-in gate, New action, search, settings, loading state, and an empty history list, but no verified conversation-storage contract was connected. Those controls were removed because the screen cannot establish that chats are stored, retrievable, searchable, synchronized, private, exportable, or deletable.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><History aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">History readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production conversation history requires authenticated ownership checks, tenant isolation, encryption, retention and deletion policies, search boundaries, export controls, pagination, concurrency handling, audit logs, backup and restoration rules, access revocation, and honest empty, loading, error, and retry states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <History aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No record claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No conversation, message, timestamp, title, user association, count, synchronization state, or history record is fabricated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Search aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No search claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No search, filter, export, pagination, retrieval, deletion, or bulk action can be performed here.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No privacy claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No chat is accepted, stored, encrypted, shared, backed up, restored, or guaranteed private by this page.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/chat-bot"><Button size="lg" className="bg-primary hover:bg-primary/90">View ChatBot status</Button></Link>
              <Link href="/hope-ai"><Button size="lg" variant="outline">View HopeAI status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about history access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="history-state-heading">
          <h2 id="history-state-heading" className="mb-4 text-xl font-semibold">Current history evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {historyStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter passwords, access tokens, seed phrases, private keys, health details, confidential business data, or sensitive personal information here. An unavailable history state is not evidence that data was stored or deleted.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Model access, conversation storage, retention, export, deletion, privacy, backups, billing, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
