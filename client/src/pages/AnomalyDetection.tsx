import { AlertTriangle, BellRing, BrainCircuit, Database, FileWarning, LockKeyhole, Search, ShieldCheck, Siren } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const anomalyStates = [
  { label: "Telemetry sources, features, and baselines", value: "Unavailable", icon: Database },
  { label: "Detection models, thresholds, and confidence", value: "Not configured", icon: BrainCircuit },
  { label: "Findings, severity, ownership, and evidence", value: "Not measured", icon: Siren },
  { label: "Alerts, privacy, feedback, and audit", value: "Disabled", icon: ShieldCheck },
];

export default function AnomalyDetection() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Anomaly Detection"
        description="Anomaly-detection services are not connected in this deployment. No telemetry, baseline, model, threshold, confidence score, finding, severity, alert, or risk conclusion is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Anomaly Detection is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified telemetry source, feature schema, baseline method, detection model, threshold evaluator, feedback workflow, alert provider, or audit boundary was connected. Those controls were removed because the screen cannot establish that an anomaly exists or that a risk signal is meaningful.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BrainCircuit aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Detection readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production anomaly detection requires authoritative telemetry, typed features, baseline and seasonality definitions, model versioning, threshold calibration, confidence semantics, false-positive review, severity and ownership, alert routing, drift monitoring, privacy minimization, feedback, audit, and clear stale, partial, failed, and retry states. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><Database aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No telemetry claim</h3><p className="mt-1 text-sm text-muted-foreground">No financial, wallet, account, security, platform, social, AI, or operational telemetry is collected, scored, or displayed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Siren aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No finding claim</h3><p className="mt-1 text-sm text-muted-foreground">No anomaly, confidence, risk score, severity, root cause, incident, recommendation, or remediation is generated.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><BellRing aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No alert claim</h3><p className="mt-1 text-sm text-muted-foreground">No alert, notification, escalation, acknowledgement, webhook, operator message, or external action is sent.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/api-monitoring"><Button size="lg" className="bg-primary hover:bg-primary/90">View monitoring status</Button></Link><Link href="/alert-management"><Button size="lg" variant="outline">View alert status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about detection</Button></Link></div></div></Card>

        <section aria-labelledby="anomaly-state-heading"><h2 id="anomaly-state-heading" className="mb-4 text-xl font-semibold">Current detection evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{anomalyStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, confidential telemetry, proprietary models, or sensitive personal information here. An unavailable detection page is not evidence that a system is normal, anomalous, secure, or at risk.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Telemetry, models, alerts, security, privacy, incidents, audit, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /></div>
      </main>
    </div>
  );
}
