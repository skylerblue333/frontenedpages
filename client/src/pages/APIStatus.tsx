import { AlertTriangle, Activity, Clock3, HeartPulse, ShieldAlert } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const statusStates = [
  { label: "Endpoint probes", value: "Not configured", icon: HeartPulse },
  { label: "Availability history", value: "Unavailable", icon: Activity },
  { label: "Latency and error rate", value: "Unavailable", icon: Clock3 },
  { label: "Incident state", value: "Not reported", icon: ShieldAlert },
];

export default function APIStatus() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="API Status"
        description="Operational status is not connected in this deployment. No endpoint health, uptime, latency, incident, or recovery result is being reported."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6">
          <div className="flex items-start gap-3">
            <AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" />
            <div>
              <h2 className="font-semibold text-red-100">Live API status is unavailable</h2>
              <p className="mt-1 text-sm leading-6 text-red-100/80">
                This page is not connected to authenticated endpoint probes, an uptime store, a metrics pipeline, an incident-management system, or a deployment source of truth. A blank or rendered status here must not be interpreted as healthy, available, monitored, or incident-free.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8">
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Operational evidence boundary</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">
                A production status page needs an explicit service catalog, authenticated probes, dependency checks, regional coverage, freshness timestamps, error classification, latency percentiles, deployment markers, incident ownership, maintenance windows, alert routing, recovery verification, and a public communication policy. None of those measurements are available through this frontend-only screen.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <Card className="border border-primary/30 bg-background/80 p-4">
                <HeartPulse aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No health claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No endpoint or dependency is marked operational without a verified probe result.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <Clock3 aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No metric claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No uptime, latency, request volume, error rate, freshness, or recovery time is displayed.</p>
              </Card>
              <Card className="border border-primary/30 bg-background/80 p-4">
                <ShieldAlert aria-hidden="true" className="mb-3 h-7 w-7 text-primary" />
                <h3 className="font-semibold">No incident claim</h3>
                <p className="mt-1 text-sm text-muted-foreground">No incident, maintenance, outage, mitigation, or resolution state is inferred.</p>
              </Card>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/api-documentation"><Button size="lg" className="bg-primary hover:bg-primary/90">View API documentation</Button></Link>
              <Link href="/audit-logs"><Button size="lg" variant="outline">View audit status</Button></Link>
              <Link href="/contact-us-form"><Button size="lg" variant="ghost">Report an issue</Button></Link>
            </div>
          </div>
        </Card>

        <section aria-labelledby="status-state-heading">
          <h2 id="status-state-heading" className="mb-4 text-xl font-semibold">Current status evidence</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {statusStates.map(({ label, value, icon: Icon }) => (
              <Card key={label} className="border border-border/50 bg-card p-4">
                <p className="text-sm text-muted-foreground">{label}</p>
                <div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="border border-border/50 bg-card p-5">
          <p className="text-sm leading-6 text-muted-foreground">
            Until verified monitoring is connected, use independently trusted service communications for operational decisions. Do not use this screen to authorize transactions, assume availability, or conclude that an incident is absent.
          </p>
        </Card>
      </main>
    </div>
  );
}
