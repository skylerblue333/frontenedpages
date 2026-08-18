import { AlertTriangle, CalendarDays, FileClock, LockKeyhole, Megaphone, Settings2, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const calendarStates = [
  { label: "Calendar records and scheduled content", value: "Unavailable", icon: CalendarDays },
  { label: "Publishing, audience, and channel state", value: "Not configured", icon: Megaphone },
  { label: "Timing, timezone, and delivery evidence", value: "Not verified", icon: FileClock },
  { label: "Create, edit, publish, and delete actions", value: "Disabled", icon: Settings2 },
];

export default function ContentCalendar() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Content Calendar"
        description="Content scheduling and publishing are not connected in this deployment. No calendar item, draft, audience, channel, publish time, delivery result, or analytics state is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Content calendar is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                The previous screen exposed a sign-in gate, a New action, search, settings, and an empty calendar state, but no verified scheduling or publishing contract was connected. This page cannot establish that a draft, audience, channel, schedule, timezone, publication, delivery, edit, or deletion exists or succeeded.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3"><CalendarDays aria-hidden="true" className="h-8 w-8 text-primary" /></div>
              <div>
                <h2 className="text-3xl font-bold">Publishing readiness</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                  Production scheduling requires authenticated workspace ownership, draft and version semantics, channel authorization, content validation and moderation, timezone normalization, queue durability, idempotent publishing, provider webhooks, retries, cancellation and rescheduling, audience and consent controls, delivery evidence, analytics provenance, audit logs, and explicit failure states. None of those controls are available here.
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <CalendarDays aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No calendar claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No draft, post, campaign, date, timezone, recurrence, owner, or schedule record is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Megaphone aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No publishing claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No audience, channel, provider, publication, delivery, retry, cancellation, or rescheduling outcome is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No analytics claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No reach, impressions, engagement, conversions, campaign performance, or audience result is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/content-upload"><Button size="lg" className="bg-primary hover:bg-primary/90">View upload status</Button></Link>
              <Link href="/content-flagging"><Button size="lg" variant="outline">View moderation status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about calendar access</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="calendar-state-heading">
          <h2 id="calendar-state-heading" className="mb-4 text-xl font-semibold">Current calendar evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {calendarStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <div className="flex items-start gap-3">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <p className="text-sm leading-6 text-muted-foreground">
              Do not enter private campaign data, customer lists, credentials, access tokens, or unpublished content here. An unavailable calendar state is not proof that content was scheduled, published, delivered, or deleted.
            </p>
          </div>
        </Card>
      </main>
    </div>
  );
}
