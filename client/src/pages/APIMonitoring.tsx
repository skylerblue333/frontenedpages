import { AlertTriangle, Activity, BellRing, Clock3, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const monitoringStates = [
  { label: "Monitored services", value: "Not configured", icon: Activity },
  { label: "Metrics and traces", value: "Unavailable", icon: Clock3 },
  { label: "Alert delivery", value: "Unavailable", icon: BellRing },
  { label: "Incident and remediation state", value: "Not reported", icon: ShieldAlert },
];

export default function APIMonitoring() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Monitoring"
        description="API monitoring is not connected in this deployment. No probe, metric, trace, alert, incident, or remediation result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">API monitoring is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to authenticated probes, an API gateway, metrics or tracing storage, alert delivery, incident ownership, or remediation automation. It cannot determine whether an endpoint is healthy, degraded, down, monitored, or incident-free, and it does not claim that an alert was sent or an issue was resolved.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Monitoring readiness</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                Production API monitoring requires a service catalog, authenticated synthetic checks, dependency and regional coverage, request and trace correlation, freshness timestamps, latency percentiles, error and saturation signals, deployment markers, threshold ownership, notification routing, escalation, maintenance windows, incident lifecycle, recovery verification, and privacy-safe retention. Those evidence sources are not available here.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Activity aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No probe claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No endpoint, dependency, region, status code, or availability result is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Clock3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No metric claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No latency, volume, error rate, trace, freshness, saturation, or uptime metric is asserted.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <BellRing aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No alert claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No threshold, notification, incident, escalation, mitigation, or recovery event is simulated.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/api-status"><Button size="lg" className="bg-primary hover:bg-primary/90">View API status</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Report an issue</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="monitoring-state-heading">
          <h2 id="monitoring-state-heading" className="mb-4 text-xl font-semibold">Current monitoring evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {monitoringStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Do not use this page to authorize production changes or conclude that an endpoint is safe or available. Operational decisions require independently verified monitoring, alerting, and incident evidence.
          </p>
        </Card>
      </main>
    </div>
  );
}
