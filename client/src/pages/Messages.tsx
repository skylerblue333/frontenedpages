import { AlertTriangle, Bell, FileText, LockKeyhole, MessageCircle, Phone, Shield, UserPlus, Video } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const messageStates = [
  { label: "Conversations and message ledger", value: "Unavailable", icon: MessageCircle },
  { label: "Delivery, read, and unread state", value: "Not verified", icon: Bell },
  { label: "Encryption and session security", value: "Not established", icon: Shield },
  { label: "Send, delete, media, and calls", value: "Disabled", icon: Phone },
];

export default function Messages() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Messages"
        description="Direct messaging is not connected in this deployment. No conversation, participant, message, unread count, encryption state, delivery result, or call capability is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Messaging is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen claimed private conversations, participants, presence, unread counts, end-to-end encryption, message timestamps, send, delete, local edit, snap deletion, voice and video calls, search, blocking, media upload, GIFs, and voice messages. The registered DM backend is a generic feature router, so those records, guarantees, and mutations were not verified and have been removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><MessageCircle aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Messaging readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production messaging requires authenticated participants, conversation ownership, message ordering and immutability, delivery and read semantics, notification preferences, encryption architecture with key lifecycle and recovery, abuse and block controls, attachment scanning and storage, call-provider integration, rate limits, retention and deletion rules, audit-safe metadata, and explicit failure states. None of those controls are available through this screen.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <UserPlus aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No participant claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No user, conversation, avatar, presence, ownership, unread count, participant identity, or contact list is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No encryption claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No end-to-end encryption, key exchange, private message, secure session, or confidentiality guarantee is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <FileText aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No action claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No message, edit, deletion, attachment, snap timer, block, call, search, or delivery action can be initiated here.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/notifications-hub"><Button size="lg" className="bg-primary hover:bg-primary/90">View notification status</Button></Link>
              <Link href="/settings"><Button size="lg" variant="outline">View privacy status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about messaging access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="message-state-heading">
          <h2 id="message-state-heading" className="mb-4 text-xl font-semibold">Current messaging evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {messageStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <Shield aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter sensitive personal information, authentication codes, wallet credentials, seed phrases, or private keys here. An unavailable messaging state is not proof that a message was sent, deleted, encrypted, delivered, or kept private.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <Video aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Voice and video calling are not connected. This screen does not request microphone, camera, contact, or media permissions.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
