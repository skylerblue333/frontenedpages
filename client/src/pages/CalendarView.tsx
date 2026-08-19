import { AlertTriangle, CalendarDays, Clock3, FileWarning, LockKeyhole, MapPin, Users, RefreshCw } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const viewStates = [
  { label: "Events, owners, and participant permissions", value: "Unavailable", icon: CalendarDays },
  { label: "Time zones, recurrence, and conflicts", value: "Not configured", icon: Clock3 },
  { label: "Locations, meeting links, and attendance", value: "Not reported", icon: MapPin },
  { label: "Invitations, reminders, and external sync", value: "Disabled", icon: RefreshCw },
];

export default function CalendarView() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader icon={CalendarDays} title="Calendar View" subtitle="Calendar-view services are not connected in this deployment. No event, date, time zone, participant, location, reminder, or availability result is being displayed." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Calendar view is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen displayed a generic CalendarView placeholder with an Activate button, but no verified event store, calendar identity, time-zone policy, recurrence engine, conflict source, participant permission, location provider, reminder scheduler, or external synchronization contract was connected. The control was removed because this page cannot establish that an event exists or that an action would affect a real calendar.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><CalendarDays aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Calendar-view readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production calendar view requires authenticated ownership, event and participant schemas, time-zone and locale semantics, recurrence and exception handling, availability and conflict rules, location and meeting-link providers, invitation state, reminder delivery, privacy minimization, external sync, retention, and audit evidence. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><CalendarDays aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No event claim</h3><p className="mt-1 text-sm text-muted-foreground">No title, date, time, recurrence, owner, participant, availability, event status, or reminder is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Users aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No attendance claim</h3><p className="mt-1 text-sm text-muted-foreground">No invitee, RSVP, conflict, attendance, meeting link, notification, or participant status is collected or sent.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><LockKeyhole aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No sync claim</h3><p className="mt-1 text-sm text-muted-foreground">No provider, webhook, export, external calendar, cross-device synchronization, or audit result is configured.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/calendar"><Button size="lg" className="bg-primary hover:bg-primary/90">View calendar status</Button></Link><Link href="/notifications"><Button size="lg" variant="outline">View notification status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about calendar access</Button></Link></div></div></Card>

        <section aria-labelledby="calendar-view-state-heading"><h2 id="calendar-view-state-heading" className="mb-4 text-xl font-semibold">Current calendar-view evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{viewStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, provider credentials, meeting links, private event details, or sensitive personal information here. An unavailable calendar view is not evidence that an event was scheduled, invited, reminded, synced, attended, or completed.</p></div></Card>
      </main>
    </div>
  );
}
