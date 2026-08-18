import { AlertTriangle, Bell, FileWarning, Gauge, LockKeyhole, Mail, ShieldCheck, Siren, Webhook } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const managementStates = [
  { label: "Active alerts, incidents, and event state", value: "Unavailable", icon: Siren },
  { label: "Acknowledgements, ownership, and escalation", value: "Not configured", icon: ShieldCheck },
  { label: "Notification delivery and provider status", value: "Disabled", icon: Bell },
  { label: "Metrics, logs, rules, and audit history", value: "Not available", icon: Gauge },
];

export default function AlertManagement() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Alert Management"
        description="Alert-management services are not connected in this deployment. No alert, incident, event, acknowledgement, owner, escalation, notification, delivery, metric, log, rule, or audit state is being reported or changed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Alert Management is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified alert source, incident state, acknowledgement workflow, ownership model, escalation policy, delivery provider, or audit contract was connected. Those controls were removed because the screen cannot establish that an alert or notification exists.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Siren aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Alert-management readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production alert-management system requires authoritative event ingestion, typed incidents, state transitions, severity, deduplication, ownership, acknowledgement, escalation, notification-provider authentication, retries, suppression, incident linkage, operator permissions, privacy filtering, audit, and clear firing, resolved, stale, failed, and undelivered states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Siren aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No incident claim</h3><p className="mt-1 text-sm text-muted-foreground">No alert, incident, event, severity, owner, acknowledgement, escalation, resolution, or operational impact is displayed or changed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Mail aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No notification claim</h3><p className="mt-1 text-sm text-muted-foreground">No email, push, SMS, webhook, chat message, retry, escalation, acknowledgement, or external notification is sent.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Webhook aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No control claim</h3><p className="mt-1 text-sm text-muted-foreground">No rule, threshold, suppression, provider, secret, permission, incident update, audit record, or remediation is configured or invoked.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/alert-configuration"><Button size="lg" className="bg-primary hover:bg-primary/90">View alert configuration status</Button></Link><Link href="/api-monitoring"><Button size="lg" variant="outline">View monitoring status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about alert management</Button></Link></div></div></Card>

        <section aria-labelledby="alert-management-state-heading"><h2 id="alert-management-state-heading" className="mb-4 text-xl font-semibold">Current alert-management evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{managementStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, delivery-provider credentials, webhook secrets, confidential incident data, or sensitive personal information here. An unavailable alert-management page is not evidence of monitoring, incident response, notification, escalation, or operational safety.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, metrics, logs, rules, providers, notifications, incidents, secrets, permissions, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
      </main>
    </div>
  );
}
