import { Activity, AlertTriangle, Bell, Database, FileWarning, LockKeyhole, Search, ShieldCheck, Users } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const activityStates = [
  { label: "Activity events, actors, and timestamps", value: "Unavailable", icon: Activity },
  { label: "Project, social, wallet, and commerce events", value: "Not configured", icon: Database },
  { label: "Visibility, filters, and notification delivery", value: "Disabled", icon: Bell },
  { label: "Retention, audit, and access controls", value: "Not available", icon: ShieldCheck },
];

export default function ActivityFeed() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Activity Feed"
        description="Activity-feed services are not connected in this deployment. No activity event, actor, timestamp, project update, social action, wallet event, commerce event, filter, notification, or audit record is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Activity Feed is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified event source, actor identity, timestamp semantics, visibility policy, notification provider, retention policy, or audit contract was connected. Those controls were removed because the screen cannot establish that an activity event exists or is current.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Activity aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Activity-feed readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production activity feed requires typed event schemas, authoritative producers, actor and subject authorization, ordering and clock semantics, deduplication, pagination, freshness, visibility and consent rules, sensitive-data filtering, retention, deletion, notification boundaries, audit, and clear loading, stale, partial, failed, and retry states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No event claim</h3><p className="mt-1 text-sm text-muted-foreground">No project, social, wallet, order, payment, AI, moderation, login, or account event is displayed or generated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Users aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No identity claim</h3><p className="mt-1 text-sm text-muted-foreground">No actor, recipient, follower, creator, customer, account, profile, or personal activity record is read or inferred.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No notification claim</h3><p className="mt-1 text-sm text-muted-foreground">No feed update, push, email, SMS, webhook, mention, alert, acknowledgement, or external message is sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/notifications"><Button size="lg" className="bg-primary hover:bg-primary/90">View notification status</Button></Link><Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about activity feeds</Button></Link></div></div></Card>

        <section aria-labelledby="activity-state-heading"><h2 id="activity-state-heading" className="mb-4 text-xl font-semibold">Current activity evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{activityStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential event records, proprietary project data, or sensitive personal information here. An unavailable activity page is not evidence of a current event, actor, timestamp, notification, audit trail, or system state.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, identity, projects, social, wallets, commerce, notifications, audit, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
