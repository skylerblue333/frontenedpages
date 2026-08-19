import { AlertTriangle, Bug, ClipboardList, FileWarning, Gauge, LockKeyhole, Paperclip, Search, ShieldCheck, UserRound, Workflow } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const bugStates = [
  { label: "Reports, reporters, environments, and reproduction data", value: "Unavailable", icon: ClipboardList },
  { label: "Severity, ownership, triage, SLA, and workflow", value: "Not configured", icon: Gauge },
  { label: "Attachments, logs, security review, and notifications", value: "Disabled", icon: Paperclip },
  { label: "Resolution, releases, privacy, and audit", value: "Not available", icon: ShieldCheck },
];

export default function BugReporting() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader
        title="Bug Reporting"
        description="Bug-reporting services are not connected in this deployment. No report, reporter, environment, reproduction detail, severity, owner, SLA, attachment, notification, fix, release, or audit result is being reported or created."
      />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Bug Reporting is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous screen exposed an authenticated shell with New, Search, Settings, loading, and empty-item behavior, but no verified issue tracker, reporter identity, environment capture, reproduction schema, triage workflow, severity policy, owner assignment, SLA, attachment storage, security intake, release linkage, notification provider, or audit contract was connected. Those controls were removed because the screen cannot establish that a report was submitted, assigned, investigated, fixed, or released.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><Bug aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Incident-reporting readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">Production bug reporting requires authenticated intake, reproducible steps, browser and device context, version and environment capture, severity and security classification, ownership and SLA semantics, attachment validation, secrets and personal-data filtering, triage and escalation, release linkage, notifications, resolution evidence, retention, and audit. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><ClipboardList aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No report claim</h3><p className="mt-1 text-sm text-muted-foreground">No ticket, title, description, reporter, environment, reproduction, severity, status, owner, or due date is displayed or created.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Paperclip aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No evidence claim</h3><p className="mt-1 text-sm text-muted-foreground">No screenshot, log, trace, file, device detail, token, secret, notification, escalation, or security disclosure is uploaded or sent.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><Workflow aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No resolution claim</h3><p className="mt-1 text-sm text-muted-foreground">No triage, assignment, investigation, fix, deployment, release, regression test, closure, or customer update is recorded.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/support"><Button size="lg" className="bg-primary hover:bg-primary/90">View support status</Button></Link><Link href="/system-status"><Button size="lg" variant="outline">View system status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about bug reports</Button></Link></div></div></Card>

        <section aria-labelledby="bug-state-heading"><h2 id="bug-state-heading" className="mb-4 text-xl font-semibold">Current reporting evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{bugStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, access tokens, seed phrases, private keys, credentials, sensitive logs, confidential source code, or personal information here. An unavailable bug-reporting page is not evidence that a report was submitted, secure, triaged, fixed, released, or resolved.</p></div></Card>
        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><LockKeyhole aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Support, incident response, security intake, releases, notifications, privacy, permissions, and observability remain separate integrations. This screen does not replace any of them.</p></div></Card>
        <div className="sr-only"><Search aria-hidden="true" /><UserRound aria-hidden="true" /></div>
      </main>
    </div>
  );
}
