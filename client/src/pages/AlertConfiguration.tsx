import { AlertTriangle, Bell, FileWarning, Gauge, LockKeyhole, Mail, Settings2, ShieldCheck, Smartphone, Webhook } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const alertStates = [
  { label: "Alert rules, thresholds, and ownership", value: "Unavailable", icon: Settings2 },
  { label: "Events, metrics, logs, and evaluation", value: "Not configured", icon: Gauge },
  { label: "Email, push, SMS, and webhook delivery", value: "Disabled", icon: Bell },
  { label: "Acknowledgement, escalation, and audit", value: "Not available", icon: ShieldCheck },
];

export default function AlertConfiguration() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Alert Configuration"
        description="Alerting services are not connected in this deployment. No rule, threshold, event, delivery channel, notification, escalation, acknowledgement, webhook, or audit record is being reported or changed."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Alert Configuration is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified alert registry, event source, threshold evaluator, delivery provider, ownership model, escalation policy, or audit contract was connected. Those controls were removed because the screen cannot establish that an alert exists or that a notification will be delivered.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Bell aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Alerting readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production alerting system requires typed rules, metric and event semantics, threshold windows, deduplication, suppression, ownership, severity, delivery-provider authentication, retry and backoff, escalation, acknowledgement, incident linkage, quiet hours, privacy filtering, audit, and clear firing, resolved, stale, failed, and undelivered states. None of those controls are available through this screen.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Gauge aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No rule claim</h3><p className="mt-1 text-sm text-muted-foreground">No threshold, schedule, event, metric, log, severity, owner, suppression, or firing state is created or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Mail aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No delivery claim</h3><p className="mt-1 text-sm text-muted-foreground">No email, push, SMS, webhook, chat notification, retry, escalation, acknowledgement, or external message is sent.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Webhook aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No webhook claim</h3><p className="mt-1 text-sm text-muted-foreground">No endpoint, secret, payload, signature, callback, incident, audit record, or operational action is configured or invoked.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/api-monitoring"><Button size="lg" className="bg-primary hover:bg-primary/90">View monitoring status</Button></Link><Link href="/notifications"><Button size="lg" variant="outline">View notification status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about alerting</Button></Link></div></div></Card>

        <section aria-labelledby="alert-configuration-state-heading"><h2 id="alert-configuration-state-heading" className="mb-4 text-xl font-semibold">Current alerting evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{alertStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, delivery-provider credentials, webhook secrets, confidential incident data, or sensitive personal information here. An unavailable alert page is not evidence of monitoring, detection, notification, escalation, or incident response.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Events, metrics, logs, providers, notifications, incidents, secrets, permissions, privacy, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Smartphone aria-hidden="true" /></div>
      </main>
    </div>
  );
}
