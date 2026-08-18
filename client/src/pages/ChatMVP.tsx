import { AlertTriangle, Bot, Briefcase, FileWarning, LockKeyhole, MessageCircle, Network, ShieldCheck, ShoppingBag, WalletCards } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const chatMvpStates = [
  { label: "Conversations, people, and presence", value: "Unavailable", icon: MessageCircle },
  { label: "NOVA assistant and action commands", value: "Disabled", icon: Bot },
  { label: "Tips, payments, listings, and matching", value: "Not configured", icon: WalletCards },
  { label: "History, notifications, and read states", value: "Not verified", icon: LockKeyhole },
];

export default function ChatMVP() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Chat MVP"
        description="Chat, marketplace, payment, and AI-action services are not connected in this deployment. No conversation, person, presence, match, tip, payment, listing, or AI action is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Chat MVP is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen contained mock conversation data, fabricated NOVA messages, online and unread indicators, designer matches with prices and delivery times, AI commands, tip and payment actions, service requests, listings, matching, earning options, calls, and optimistic success states. Those claims and mutations were removed because the underlying contracts, identity, payment, marketplace, and AI evidence were not verified.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><Network aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Actionable chat readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  A production chat-and-action system requires authenticated identities, conversation authorization, real-time delivery, presence evidence, abuse controls, message persistence, retention and deletion rules, marketplace validation, payment confirmation, idempotency, ledger reconciliation, AI tool permissions, human confirmation, fraud controls, audit logs, and clear success, failure, timeout, and retry states. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <MessageCircle aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No social claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No conversation, person, avatar, presence, online state, unread count, read receipt, call, message, or notification is fabricated.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <WalletCards aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No financial claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No tip, payment, balance, currency amount, recipient, listing, service price, delivery estimate, or transaction success is shown.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Bot aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No AI-action claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No assistant response, match, earning option, external action, marketplace recommendation, or payment instruction is generated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/chat-bot"><Button size="lg" className="bg-primary hover:bg-primary/90">View ChatBot status</Button></Link>
              <Link href="/marketplace"><Button size="lg" variant="outline">View marketplace status</Button></Link>
              <Link href="/wallet"><Button size="lg" variant="outline">View wallet status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about chat access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="chat-mvp-state-heading">
          <h2 id="chat-mvp-state-heading" className="mb-4 text-xl font-semibold">Current Chat MVP evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {chatMvpStates.map(({ label, value, icon: Icon }) => (
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
              Do not enter passwords, access tokens, seed phrases, private keys, payment details, health information, or sensitive personal data here. Never send a payment, tip, listing, or wallet transaction based on an unverified interface or AI message.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Chat, identity, marketplace, payments, wallets, AI tools, privacy, fraud controls, and observability remain separate integrations. This screen does not replace any of them.
            </p>
          </div>
        </Card>

        <div className="sr-only"><Briefcase aria-hidden="true" /><ShoppingBag aria-hidden="true" /></div>
      </main>
    </div>
  );
}
