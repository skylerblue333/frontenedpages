import { AlertTriangle, BarChart3, CalendarClock, FileClock, LockKeyhole, Megaphone, RefreshCw, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const schedulerStates = [
  { label: "Scheduled queue and draft records", value: "Unavailable", icon: CalendarClock },
  { label: "Provider connections and publishing", value: "Not configured", icon: Megaphone },
  { label: "Retries, cancellation, and delivery", value: "Not verified", icon: RefreshCw },
  { label: "Views, engagement, and best-time analytics", value: "Not reported", icon: BarChart3 },
];

export default function ContentScheduler() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Content Scheduler"
        description="Content scheduling and cross-platform publishing are not connected in this deployment. No queue item, provider, publish status, delivery result, retry, deletion, or analytics state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Content scheduling is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen used an in-memory demo queue containing scheduled and published posts, including an unsupported staking APY claim, market analysis claim, timestamps, views, engagement, platform providers, best-time advice, schedule, delete, and analytics controls. No verified scheduling or publishing service was connected, so the queue and mutations were removed.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><CalendarClock aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Scheduling readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production scheduling requires authenticated workspace ownership, content versioning, platform authorization, safe media handling, policy and moderation checks, timezone normalization, durable queues, idempotent provider calls, verified webhooks, retries, cancellation, deletion, rate limits, consent, delivery evidence, analytics provenance, audit records, and explicit failure states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <CalendarClock aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No queue claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No draft, post, media type, provider, schedule, timezone, queue position, or publish state is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Megaphone aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No provider claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No social account, token, channel, publication, delivery, retry, cancellation, or deletion result is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BarChart3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No performance claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No views, engagement, reach, best time, conversion, or platform-performance result is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/content-calendar"><Button size="lg" className="bg-primary hover:bg-primary/90">View calendar status</Button></Link>
              <Link href="/content-upload"><Button size="lg" variant="outline">View upload status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about scheduler access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="scheduler-state-heading">
          <h2 id="scheduler-state-heading" className="mb-4 text-xl font-semibold">Current scheduler evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {schedulerStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter access tokens, customer lists, private campaign data, unpublished media, or financial claims here. An unavailable scheduler state is not proof that content was scheduled, published, delivered, deleted, or measured.
            </p>
          </div>
        </Card>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Cross-platform provider credentials, posting permissions, queue durability, webhook verification, and delivery evidence must be implemented server-side before scheduling controls can be restored.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
