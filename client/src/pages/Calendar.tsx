import { AlertTriangle, CalendarDays, Clock3, FileWarning, Globe2, LockKeyhole, Mail, Search, ShieldCheck, UsersRound, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const calendarStates = [
  { label: "Events, owners, participants, permissions, and time zones", value: "Unavailable", icon: CalendarDays },
  { label: "Recurrence, conflicts, availability, and reminders", value: "Not configured", icon: Clock3 },
  { label: "Invitations, notifications, external sync, and updates", value: "Disabled", icon: Mail },
  { label: "Privacy, retention, access, and audit", value: "Not available", icon: ShieldCheck },
];

export default function Calendar() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Calendar"
        description="Calendar services are not connected in this deployment. No event, owner, participant, date, time zone, recurrence, availability, invitation, reminder, notification, external sync, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Calendar is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified event store, calendar identity, timezone policy, recurrence engine, conflict and availability source, participant permission, invitation provider, reminder scheduler, external calendar sync, privacy boundary, or audit contract was connected. Those controls were removed because the screen cannot establish that an event exists, is current, or will be delivered to the right participants.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><CalendarDays aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Scheduling readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production calendar tooling requires authenticated ownership, time-zone and locale semantics, recurrence and exception handling, conflict and availability rules, participant permissions, invitation and response state, reminder scheduling, notification delivery, external sync, privacy minimization, retention, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><CalendarDays aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No event claim</h3><p className="mt-1 text-sm text-muted-foreground">No event, title, date, time, time zone, recurrence, location, owner, participant, availability, or reminder is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><UsersRound aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No attendance claim</h3><p className="mt-1 text-sm text-muted-foreground">No invitee, RSVP, attendance, conflict, response, meeting link, notification, or participant status is collected or sent.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Globe2 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No sync claim</h3><p className="mt-1 text-sm text-muted-foreground">No Google, Apple, Outlook, provider, webhook, external calendar, export, or cross-device synchronization is configured.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/notifications"><Button size="lg" className="bg-primary hover:bg-primary/90">View notification status</Button></Link><Link href="/automation-rules"><Button size="lg" variant="outline">View automation status</Button></Link><Link href="/privacy"><Button size="lg" variant="outline">View privacy status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about calendar access</Button></Link></div></div></Card>

        <section aria-labelledby="calendar-state-heading"><h2 id="calendar-state-heading" className="mb-4 text-xl font-semibold">Current calendar evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{calendarStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, provider credentials, private event details, meeting links, or sensitive personal information here. An unavailable calendar page is not evidence that an event was scheduled, reserved, invited, reminded, synced, or attended.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Identity, calendars, participants, providers, notifications, automation, privacy, permissions, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /><Workflow aria-hidden="true" /></div>
      </main>
    </div>
  );
}
