import { AlertTriangle, BarChart3, Bug, FileWarning, GitBranch, LockKeyhole, ShieldCheck, TestTube } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/PageHeader";

const qualityStates = [
  { label: "Build, typecheck, lint, tests, and coverage", value: "Not verified", icon: TestTube },
  { label: "Open bugs, regressions, and technical debt", value: "Not measured", icon: Bug },
  { label: "Security, dependency, and secret scanning", value: "Not available", icon: ShieldCheck },
  { label: "Performance, bundle, and runtime evidence", value: "Not measured", icon: BarChart3 },
];

export default function CodeQuality() {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader backHref="/developer" icon={BarChart3} title="Code Quality Dashboard" subtitle="Automated quality evidence is not connected in this deployment. No coverage, bug count, security grade, performance score, dependency result, audit status, or production-readiness claim is being reported." />

      <main className="mx-auto max-w-6xl space-y-8 px-4 py-8">
        <Card className="border border-red-400/30 bg-red-950/20 p-6"><div className="flex items-start gap-3"><AlertTriangle aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-red-300" /><div><h2 className="font-semibold text-red-100">Quality evidence is unavailable</h2><p className="mt-1 text-sm leading-6 text-red-100/80">The previous dashboard exposed fabricated Test Coverage 78%, Open Bugs 3, Security Score A+, Performance 98/100, code-health percentages, and recent pass/warn audits. No verified CI run, source revision, test report, coverage artifact, scanner, dependency database, performance trace, environment, timestamp, or evidence retention contract backed those values. The metrics and Run Audit actions were removed because this page cannot establish that the application has passed any quality or security gate.</p></div></div></Card>

        <Card className="border border-primary/20 bg-gradient-to-br from-primary/10 to-secondary/10 p-8"><div className="space-y-6"><div className="flex items-start gap-4"><div className="rounded-xl bg-primary/15 p-3"><BarChart3 aria-hidden="true" className="h-8 w-8 text-primary" /></div><div><h2 className="text-3xl font-bold">Validation evidence readiness</h2><p className="mt-2 max-w-3xl text-sm leading-6 text-muted-foreground">A production quality dashboard requires immutable source and build identities, reproducible CI jobs, test and coverage artifacts, type and lint reports, defect and debt sources, dependency and secret scanning, security review, performance traces, accessibility evidence, timestamp and environment metadata, thresholds, ownership, retention, and auditability. None of those controls are available through this route.</p></div></div><div className="grid gap-4 md:grid-cols-3"><Card className="border border-primary/30 bg-background/80 p-4"><TestTube aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No pass claim</h3><p className="mt-1 text-sm text-muted-foreground">No build, typecheck, lint, test, coverage, accessibility, or release gate is asserted as passed.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><ShieldCheck aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No security claim</h3><p className="mt-1 text-sm text-muted-foreground">No security grade, vulnerability count, dependency result, secret scan, compliance state, or certification is reported.</p></Card><Card className="border border-primary/30 bg-background/80 p-4"><GitBranch aria-hidden="true" className="mb-3 h-7 w-7 text-primary" /><h3 className="font-semibold">No revision claim</h3><p className="mt-1 text-sm text-muted-foreground">No branch, commit, build, environment, timestamp, audit, performance trace, or source revision is linked to evidence.</p></Card></div><div className="flex flex-wrap gap-4 pt-2"><Link href="/developer"><Button size="lg" className="bg-primary hover:bg-primary/90">View developer status</Button></Link><Link href="/security-dashboard"><Button size="lg" variant="outline">View security status</Button></Link><Link href="/contact-us-form"><Button size="lg" variant="ghost">Ask about evidence access</Button></Link></div></div></Card>

        <section aria-labelledby="quality-state-heading"><h2 id="quality-state-heading" className="mb-4 text-xl font-semibold">Current quality evidence</h2><div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">{qualityStates.map(({ label, value, icon: Icon }) => <Card key={label} className="border border-border/50 bg-card p-4"><p className="text-sm text-muted-foreground">{label}</p><div className="mt-2 flex items-center gap-2"><Icon aria-hidden="true" className="h-4 w-4 text-muted-foreground" /><p className="font-semibold">{value}</p></div></Card>)}</div></section>

        <Card className="border border-border/50 bg-card p-5"><div className="flex items-start gap-3"><FileWarning aria-hidden="true" className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" /><p className="text-sm leading-6 text-muted-foreground">Do not enter passwords, API keys, access tokens, seed phrases, private keys, proprietary source code, credentials, or confidential build information here. An unavailable quality page is not evidence that the project passed tests, scans, performance checks, accessibility review, or production gates.</p></div></Card>
      </main>
    </div>
  );
}
